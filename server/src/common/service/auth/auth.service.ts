import { LoginBody } from '@/admin/system/auth/dto/LoginBody';
import { redisUtils } from '@/common/utils/redisUtils';
import { Config } from '@/config';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bowser from 'bowser';
import { HmacSHA256 } from 'crypto-js';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import * as libqqwry from 'lib-qqwry';
import { SysLogininfor, SysRole, SysUser } from '@prismaClient';
import * as jwt from 'jsonwebtoken';
import { Constants } from '@/common/constant/Constants';
import { Request } from 'express';
import { nowDateTime } from '@/common/utils';
import { ValidationException } from '@/common/exception/ValidationException';
import { capitalize } from 'lodash';
import * as assert from 'assert';
import { randomUUID } from 'crypto';
const qqwry = libqqwry(); //ip解析
qqwry.speed(); //启用内存急速模式;
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  /**@desc 登录 */
  async login(loginBody: LoginBody, req: Request) {
    const { username, password, uuid } = loginBody;

    let loginInfo: SysLogininfor;
    //用户登录日志
    {
      loginInfo = {
        infoId: undefined,
        userName: username,
        ipaddr: req.ip,
        loginLocation: '未知',
        browser: '未知',
        os: '未知',
        status: '0',
        msg: '',
        loginTime: nowDateTime(),
      };
      try {
        if (req.ip?.includes('127.0.0.1') || req.ip == '::1') {
          loginInfo.ipaddr = '127.0.0.1';
          loginInfo.loginLocation = '内网IP';
        } else {
          const d = qqwry.searchIP(req.ip);
          loginInfo.loginLocation = d.Country;
        }
      } catch (e) {}
      const agent = req.headers['user-agent'];
      try {
        const d = bowser.parse(agent);
        loginInfo.os = d.os.name + ' ' + d.os.versionName;
        loginInfo.browser =
          d.browser.name + ' ' + d.browser?.version?.split('.')?.[0] || '';
      } catch (e) {}
    }
    //登录验证码是否开启
    {
      //是否开启验证码
      const enable = await redisUtils.get(
        Constants.SYS_CONFIG_KEY + 'sys.account.captchaEnabled',
      );
      const captchaEnabled: boolean = enable == '' ? true : enable === 'true';
      if (captchaEnabled) {
        let code = loginBody.code;
        if (!uuid || !code) {
          throw new ValidationException('参数不正确！');
        }
        code = code.toLowerCase();
        const isPass = await this.validaCaptcha(uuid, code);
        if (!isPass) {
          loginInfo.msg = '验证码错误！';
          await this.prisma.sysLogininfor.create({
            data: loginInfo,
          });
          throw new BadRequestException('验证码错误！');
        }
      }
    }
    //ip是否被封禁
    {
      const ips = (
        await redisUtils.get(Constants.SYS_CONFIG_KEY + 'sys.login.blackIPList')
      ).split(',');
      if (ips.length) {
        const isBlack = ips.some((v) => v === req.ip);
        if (isBlack) {
          loginInfo.msg = 'ip:' + loginInfo.ipaddr + '被封禁';
          await this.prisma.sysLogininfor.create({
            data: loginInfo,
          });
        }
        assert(!isBlack, '你的ip已经被封禁！');
      }
    }
    //验证用户密码是否正确
    {
      const user = await this.prisma.sysUser.findFirst({
        where: {
          userName: username,
        },
        select: {
          userId: true,
          password: true,
          status: true,
          dept: {
            select: {
              deptName: true,
            },
          },
        },
      });
      if (!user) {
        loginInfo.msg = '用户不存在';
        await this.prisma.sysLogininfor.create({
          data: loginInfo,
        });
        throw new BadRequestException('用户不存在');
      }
      if (user.password !== this.encrypt(password)) {
        loginInfo.msg = '密码不正确';
        await this.prisma.sysLogininfor.create({
          data: loginInfo,
        });
        throw new BadRequestException('密码不正确');
      }
      if (user.status !== '1') {
        loginInfo.msg = '账号被封禁';
        await this.prisma.sysLogininfor.create({
          data: loginInfo,
        });
        throw new BadRequestException('账号被封禁');
      }
      loginInfo.status = '1';
      loginInfo.msg = '登录成功';
      await this.prisma.sysLogininfor.create({
        data: loginInfo,
      });
      const cacheInfo = {
        tokenId: randomUUID(),
        userId: user.userId,
        deptName: user.dept?.deptName,
        userName: loginInfo.userName,
        ipaddr: loginInfo.ipaddr,
        loginLocation: loginInfo.loginLocation,
        browser: loginInfo.browser,
        os: loginInfo.os,
        loginTime: loginInfo.loginTime,
      };
      const token = this.createToken(cacheInfo);
      //存储token
      await redisUtils.set(
        Constants.LOGIN_TOKEN_KEY + cacheInfo.tokenId,
        JSON.stringify(cacheInfo),
        Config.token.expiresIn,
      );
      //初始化用户信息存到reids缓存包括权限。。
      await this.refreshUserInfo(user.userId);
      return token;
    }
  }

  //获取用户信息，包括权限和角色
  async getUserInfo(userId: number) {
    //如果redis有用户信息直接返回
    const userinfo: SysUser & { roles: string[]; permissions: string[] } =
      JSON.parse(
        (await redisUtils.get(Constants.LOGIN_CACHE_TOKEN_KEY + userId)) ||
          null,
      );
    if (userinfo !== null) return userinfo;
    const user = await this.prisma.sysUser.findFirst({
      where: {
        userId: userId,
        status: '1', //正常状态
      },
      include: {
        dept: true,
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
    if (!user) return null;
    const ro = user.roles.map((v) => v.role).filter((v) => v.status === '1');
    const permissions = await this.getRolePermission(ro);
    const result = {
      ...user,
      roles: ro.map((v) => v.roleKey),
      permissions,
    };
    //存储到redis缓存，下次直接拿
    await redisUtils.set(
      Constants.LOGIN_CACHE_TOKEN_KEY + userId,
      JSON.stringify(result),
      Config.token.expiresIn,
    );
    return result;
  }
  //强制刷新redis缓存的用户信息
  async refreshUserInfo(userId: number) {
    const user = await this.prisma.sysUser.findFirst({
      where: {
        userId: userId,
        status: '1', //正常状态
      },
      include: {
        dept: true,
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
    if (!user) return null;
    const ro = user.roles.map((v) => v.role).filter((v) => v.status === '1');
    const permissions = await this.getRolePermission(ro);
    const result = {
      ...user,
      roles: ro.map((v) => v.roleKey),
      permissions,
    };
    //存储到redis缓存，下次直接拿
    await redisUtils.set(
      Constants.LOGIN_CACHE_TOKEN_KEY + userId,
      JSON.stringify(result),
      Config.token.expiresIn,
    );
    return true;
  }

  //获取用户能访问的路由
  async getRouters(userId: number) {
    //超级管理员，返回全部信息
    if (await this.isAdmin(userId)) {
      const r = await this.prisma.sysMenu.findMany({
        where: {
          menuType: {
            in: ['M', 'C'],
          },
          status: '1',
        },
        orderBy: [
          {
            parentId: 'asc',
          },
          {
            orderNum: 'asc',
          },
        ],
      });
      return this.MenuTree(r, 'menuId', 'parentId', 0);
    } else {
      const r: any = await this.prisma
        .$queryRaw`select distinct m.menu_id as menuId, m.parent_id as parentId, m.menu_name as menuName, m.path, m.component, m.query, m.visible, m.status, ifnull(m.perms,'') as perms, m.is_frame as isFrame, m.is_cache as isCache, m.menu_type as menuType, m.icon, m.order_num as orderNum, m.create_time as createTime
      from sys_menu m
       left join sys_role_menu rm on m.menu_id = rm.menu_id
       left join sys_user_role ur on rm.role_id = ur.role_id
       left join sys_role ro on ur.role_id = ro.role_id
       left join sys_user u on ur.user_id = u.user_id
      where u.user_id = ${userId} and m.menu_type in ('M', 'C') and m.status = 1  and ro.status = 1
      order by m.parent_id, m.order_num`;
      return this.MenuTree(r, 'menuId', 'parentId', 0);
    }
  }

  //获取角色组所有权限
  async getRolePermission(roles: SysRole[]) {
    //如果角色具有所有权限
    if (roles.some((v) => v.dataScope === '1')) return ['*:*:*'];
    const perms: string[] = [];
    for (let i = 0; i < roles.length; i++) {
      const r: { perms: string }[] = await this.prisma
        .$queryRaw`select distinct a.perms from sys_menu a 
      left join sys_role_menu b on a.menu_id = b.menu_id
      where a.status = '1' and b.role_id = ${roles[i].roleId}`;
      for (const item of r) {
        if (item && item.perms?.includes(':') && !perms.includes(item.perms)) {
          perms.push(item.perms);
        }
      }
    }
    return perms;
  }

  //获取用户角色
  async getUserRoles(userId: number) {
    return (await this.getUserInfo(userId)).roles;
  }
  //获取用户权限
  async getUserPermissions(userId: number) {
    return (await this.getUserInfo(userId)).permissions;
  }

  //检查用户是否含有权限
  async hasPermission(permission: string, userId: number) {
    const AllPermission = '*:*:*';
    const permissions = await this.getUserPermissions(userId);
    return (
      permissions.includes(AllPermission) ||
      permissions.some((v) => v === permission)
    );
  }

  //检测用户是否属于某个角色
  async hasRole(role: string, userId: number) {
    const roles = await this.getUserRoles(userId);
    return roles.some((v) => v === role);
  }

  //检测用户是否管理员
  async isAdmin(userId: number) {
    return (
      userId === 1 || (await this.getUserPermissions(userId)).includes('*:*:*')
    );
  }

  /**@desc 菜单树形化 */

  MenuTree(arr = [], id = 'id', pid = 'pid', rootValue = 0) {
    const result = [];
    const map = {};
    for (const item of arr) {
      map[item[id]] = {
        component: item.component,
        hidden: item.visible == 0,
        name: capitalize(item.path?.replaceAll('/', '')),
        path: item.path,
        meta: {
          icon: item.icon,
          link: null,
          noCache: item.isCache == 0,
          title: item.menuName,
        },
        children: map[item[id]]?.children || [],
      };
      if (item[pid] == rootValue && item.menuType === 'M') {
        map[item[id]].alwaysShow = true;
        map[item[id]].component = map[item[id]].component || 'Layout';
        map[item[id]].redirect = 'noRedirect';
        map[item[id]].path = '/' + (map[item[id]].path || map[item[id]].path);
        result.push(map[item[id]]);
      } else if (item[pid] == rootValue && item.menuType === 'C') {
        //是外链
        if (item.isFrame == '1') {
          result.unshift({
            component: 'Layout',
            hidden: item.visible == 0,
            name: item.path,
            path: item.path,
            meta: {
              icon: item.icon,
              link: true,
              noCache: item.isCache == 0,
              title: item.menuName,
            },
          });
        } else {
          //顶级菜单
          result.unshift({
            path: '/',
            component: 'Layout',
            hidden: item.visible == 0,
            meta: {
              icon: item.icon,
              link: null,
              noCache: item.isCache == 0,
              title: item.menuName,
            },
            children: [
              {
                component: item.component,
                hidden: item.visible == 0,
                name: capitalize(item.path?.replaceAll('/', '')),
                path: item.path,
                meta: {
                  icon: item.icon,
                  link: null,
                  noCache: item.isCache == 0,
                  title: item.menuName,
                },
              },
            ],
          });
        }
      } else {
        if (!map[item[pid]]) {
          map[item[pid]] = {
            children: [],
          };
        }
        map[item[pid]].children.push(map[item[id]]);
      }
    }

    for (const k in map) {
      if (!map[k].children.length) {
        delete map[k].children;
      } else {
        map[k]['alwaysShow'] = true;
        map[k]['redirect'] = 'noRedirect';
        if (!map[k]['component']) {
          map[k]['component'] = 'ParentView';
        }
      }
    }
    return result;
  }

  /**
   * @desc 检查验证码是否正确
   */

  async validaCaptcha(uuid: string, code: string) {
    const r = await redisUtils.get(Constants.CAPTCHA_CODE_KEY + uuid);
    if (r != code) {
      redisUtils.del(Constants.CAPTCHA_CODE_KEY + uuid);
      return false;
    } else {
      return true;
    }
  }

  /**
   * @desc 密码加密
   */
  encrypt(str: string): string {
    return HmacSHA256(str, Config.crypto.psdSecret).toString();
  }

  /**@desc 创建token */
  createToken(payload) {
    return jwt.sign(payload, Config.token.secret, {
      expiresIn: Config.token.expiresIn,
    });
  }
  /**@desc 解析token */

  verifyToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, Config.token.secret, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
