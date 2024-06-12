import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import { QuerySysUserDto, CreateSysUserDto, UpdateSysUserDto, resetPasswordDto, UpdateSysUserStatusDto, updateProfileDto } from '../dto/index';
import { Prisma, SysUser } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
import { AuthService } from '@/common/service/auth/auth.service';
import { isArray } from 'lodash';
import Result from '@/common/result/Result';
import { redisUtils } from '@/common/utils/redisUtils';
import { Constants } from '@/common/constant/Constants';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private authService: AuthService) {

  }
  /**@description 查询用户所有 */
  async selectUserAll() {
    return this.prisma.sysUser.findMany()
  }
  /**@description 分页查询用户列表 */
  async selectUserList(q: QuerySysUserDto) {
    let queryCondition: Prisma.SysUserWhereInput = {}
    if (isNotEmpty(q["deptId"])) {
      queryCondition.deptId = {
        equals: q.deptId
      }
    }
    if (isNotEmpty(q["userName"])) {
      queryCondition.userName = {
        contains: q.userName
      }
    }
    if (isNotEmpty(q["nickName"])) {
      queryCondition.nickName = {
        contains: q.nickName
      }
    }
    if (isNotEmpty(q["userType"])) {
      queryCondition.userType = {
        equals: q.userType
      }
    }
    if (isNotEmpty(q["email"])) {
      queryCondition.email = {
        contains: q.email
      }
    }
    if (isNotEmpty(q["phonenumber"])) {
      queryCondition.phonenumber = {
        contains: q.phonenumber
      }
    }
    if (isNotEmpty(q["sex"])) {
      queryCondition.sex = {
        equals: q.sex
      }
    }
    if (isNotEmpty(q["avatar"])) {
      queryCondition.avatar = {
        equals: q.avatar
      }
    }
    if (isNotEmpty(q["password"])) {
      queryCondition.password = {
        equals: q.password
      }
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.status = {
        equals: q.status
      }
    }
    if (isNotEmpty(q["loginIp"])) {
      queryCondition.loginIp = {
        equals: q.loginIp
      }
    }
    if (isNotEmpty(q.params.beginLoginDate) && isNotEmpty(q.params.endLoginDate)) {
      queryCondition.loginDate = {
        lte: q.params.endLoginDate,
        gte: q.params.beginLoginDate
      }
    }
    if (isNotEmpty(q.params.beginCreateTime) && isNotEmpty(q.params.endCreateTime)) {
      queryCondition.createTime = {
        lte: q.params.endCreateTime,
        gte: q.params.beginCreateTime
      }
    }
    if (isNotEmpty(q.params.beginUpdateTime) && isNotEmpty(q.params.endUpdateTime)) {
      queryCondition.updateTime = {
        lte: q.params.endUpdateTime,
        gte: q.params.beginUpdateTime
      }
    }
    return {
      rows: await this.prisma.sysUser.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        include: {
          dept: true
        }
      }),
      total: await this.prisma.sysUser.count({
        where: queryCondition
      })
    }
  }
  /**@description 查询用户详情 */
  async selectUserByUserId(userId: number) {
    return this.prisma.sysUser.findUnique({
      where: {
        userId
      },
      include: {
        roles: true,
        posts: true
      }
    })
  }
  /**@description 新增用户 */
  async addUser(sysUser: CreateSysUserDto) {
    sysUser.password = this.authService.encrypt(sysUser.password)
    //删除掉空值
    for (let key in sysUser) {
      !isNotEmpty(sysUser[key]) && delete sysUser[key]
    }
    return this.prisma.$transaction(async (db) => {
      let { roleIds, postIds, ...user } = sysUser
      //更新用户信息
      let addUser = await db.sysUser.create({
        data: user
      })
      let { userId } = addUser
      //添加用户的部门和角色
      if (isArray(sysUser.roleIds) && sysUser.roleIds.length) {
        await db.sysUserRole.createMany({
          data: sysUser.roleIds.map(v => ({ userId, roleId: v }))
        })
      }
      if (isArray(sysUser.postIds) && sysUser.postIds.length) {
        await db.sysUserPost.createMany({
          data: sysUser.postIds.map(v => ({
            userId, postId: v
          }))
        })
      }
      return addUser
    })
  }
  /**@description 修改用户 */
  async updateUser(sysUser: UpdateSysUserDto) {
    //删除掉空值
    for (let key in sysUser) {
      !isNotEmpty(sysUser[key]) && delete sysUser[key]
    }
    await this.prisma.$transaction(async (db) => {
      //删除用户的部门和角色
      {
        await db.sysUserPost.deleteMany({
          where: {
            userId: sysUser.userId
          }
        })
        await db.sysUserRole.deleteMany({
          where: {
            userId: sysUser.userId
          }
        })
      }
      //添加用户的部门和角色
      if (isArray(sysUser.roleIds) && sysUser.roleIds.length) {
        await db.sysUserRole.createMany({
          data: sysUser.roleIds.map(v => ({ userId: sysUser.userId, roleId: v }))
        })
      }
      if (isArray(sysUser.postIds) && sysUser.postIds.length) {
        await db.sysUserPost.createMany({
          data: sysUser.postIds.map(v => ({
            userId: sysUser.userId, postId: v
          }))
        })
      }
      let { roleIds, postIds, roles, posts, ...user } = sysUser
      //更新用户信息
      return await db.sysUser.update({
        where: {
          userId: sysUser.userId
        },
        data: user
      })
    })
     //如果为禁用状态，我们把用户的token删除，禁用账户！
     if (sysUser.status === "0") { 
      await redisUtils.del(Constants.LOGIN_TOKEN_KEY+sysUser.userId)
    }
    return Result.ok()
  }

  /**@description 修改用户密码 */
  async resetPassword(sysUser: resetPasswordDto) {
    sysUser.password = this.authService.encrypt(sysUser.password)
    //删除掉空值
    let res = await this.prisma.sysUser.update({
      where: {
        userId: sysUser.userId
      },
      data: {
        password: sysUser.password
      }
    })
    await redisUtils.del(Constants.LOGIN_TOKEN_KEY + sysUser.userId)
    return res
  }
  /**@description 修改用户状态 */
  async updateStatus(sysUser: UpdateSysUserStatusDto) {

    let res = await this.prisma.sysUser.update({
      where: {
        userId: sysUser.userId
      },
      data: {
        status: sysUser.status
      }
    })
    //如果为禁用状态，我们把用户的token删除，禁用账户！
    if (sysUser.status === "0") {
      await redisUtils.del(Constants.LOGIN_TOKEN_KEY + sysUser.userId)
    }
    return res
  }

  /**@description 批量删除用户 */
  async deleteUserByUserIds(userIds: number[]) {
    return this.prisma.$transaction(async (db) => {
      await db.sysUserPost.deleteMany({
        where: {
          userId: {
            in: userIds
          }
        }
      })
      await db.sysUserRole.deleteMany({
        where: {
          userId: {
            in: userIds
          }
        }
      })
      let res = await db.sysUser.deleteMany({
        where: {
          userId: {
            in: userIds
          }
        }
      })
      //清空用户的登录token
      for (let id of userIds) {
        await redisUtils.del(Constants.LOGIN_TOKEN_KEY + id)
      }
      return res
    })

  }
  /**@description 单个删除用户 */
  async deleteUserByUserId(userId: number) {
    return this.prisma.$transaction(async (db) => {
      await db.sysUserPost.deleteMany({
        where: {
          userId
        }
      })
      await db.sysUserRole.deleteMany({
        where: {
          userId
        }
      })
      let res = await db.sysUser.delete({
        where: {
          userId
        }
      })
      await redisUtils.del(Constants.LOGIN_TOKEN_KEY + userId)
      return res
    })
  }
  /**@description 导出用户所有数据为xlsx */
  async exportUser(res: Response) {
    let title = ["用户ID", "部门ID", "用户账号", "用户昵称", "用户类型（00系统用户）", "用户邮箱", "手机号码", "用户性别（0男 1女 2未知）", "头像地址", "密码", "帐号状态（0停用,1正常 ）", "删除标志（0删除，1可用）", "最后登录IP", "最后登录时间", "创建者", "创建时间", "更新者", "更新时间", "备注"]
    let data = (await this.selectUserAll()).map(v => Object.values(v))
    data.unshift(title)
    exportTable(data, res)
  }


  /**
    * @description 查询授权角色
    */
  async getAuthRole(userId: number) {
    let user = (await this.prisma.sysUser.findUnique({
      where: {
        userId
      },
      include: {
        dept: true,
        roles: {
          include: {
            role: true
          }
        }
      }
    }))
    return {
      ...user,
      roles: user.roles.map(v => v.role)
    }
  }

  /**
   * @description 保存授权角色
   */
  async updateAuthRole(userId: number, roleIds: number[]) {
    await this.prisma.$transaction(async (db) => {
      await db.sysUserRole.deleteMany({
        where: {
          userId
        }
      })
      await db.sysUserRole.createMany({
        data: roleIds.map(roleId => ({
          userId,
          roleId
        }))
      })
    })
    return this.authService.refreshUserInfo(userId)
  }


  /**
    * @description 查询用户个人信息
    */
  async getUserProfile(userId) {

    let user = (await this.prisma.sysUser.findUnique({
      where: {
        userId
      },
      include: {
        dept: true,
        posts: {
          include: {
            post: true
          }
        },
        roles: {
          include: {
            role: true
          }
        }
      }
    }))
    return {
      ...user,
      roleGroup: user.roles.map(v => v.role.roleName).join(","),
      postGroup: user.posts.map(v => v.post.postName).join(",")
    }
  }

  /**
   * @description 修改用户个人信息
   */
  async updateUserProfile(userId: number, user: updateProfileDto) {
    await this.prisma.sysUser.update({
      where: {
        userId
      },
      data: user
    })
    return this.authService.refreshUserInfo(userId)
  }

  /** 修改头像 */
  async updateAvatar(userId: number, avatar: string) {
    await this.prisma.sysUser.update({
      where: {
        userId
      },
      data: {
        avatar
      }
    })
    return this.authService.refreshUserInfo(userId)
  }

  /** 修改密码 */
  async updateUserPwd(userId: number, oldPassword: string, newPassword: string) {
    assert(isNotEmpty(oldPassword) && isNotEmpty(newPassword), "请检查参数！")
    assert(oldPassword.length > 5 && newPassword.length > 5, "请检查参数！")
    let user = await this.prisma.sysUser.findUnique({
      where: {
        userId
      }
    })
    assert(this.authService.encrypt(oldPassword) === user.password, "验证失败：旧密码不正确！")
    let res = await this.prisma.sysUser.update({
      where: {
        userId
      },
      data: {
        password: this.authService.encrypt(newPassword)
      }
    })
    await redisUtils.del(Constants.LOGIN_TOKEN_KEY + userId)
    return res
  }

}