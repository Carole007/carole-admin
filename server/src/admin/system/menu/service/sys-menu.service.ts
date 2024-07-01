import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import {
  QuerySysMenuDto,
  CreateSysMenuDto,
  UpdateSysMenuDto,
} from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  /**@description 查询菜单管理所有 */
  async selectMenuAll() {
    return this.prisma.sysMenu.findMany();
  }
  /**@description 查询菜单管理列表 */
  async selectMenuList(q: QuerySysMenuDto) {
    const queryCondition: Prisma.SysMenuWhereInput = {};
    if (isNotEmpty(q['menuName'])) {
      queryCondition.menuName = {
        contains: q.menuName,
      };
    }
    if (isNotEmpty(q['orderNum'])) {
      queryCondition.orderNum = {
        equals: q.orderNum,
      };
    }
    if (isNotEmpty(q['path'])) {
      queryCondition.path = {
        equals: q.path,
      };
    }
    if (isNotEmpty(q['component'])) {
      queryCondition.component = {
        equals: q.component,
      };
    }
    if (isNotEmpty(q['query'])) {
      queryCondition.query = {
        equals: q.query,
      };
    }
    if (isNotEmpty(q['isFrame'])) {
      queryCondition.isFrame = {
        equals: q.isFrame,
      };
    }
    if (isNotEmpty(q['isCache'])) {
      queryCondition.isCache = {
        equals: q.isCache,
      };
    }
    if (isNotEmpty(q['menuType'])) {
      queryCondition.menuType = {
        equals: q.menuType,
      };
    }
    if (isNotEmpty(q['visible'])) {
      queryCondition.visible = {
        equals: q.visible,
      };
    }
    if (isNotEmpty(q['status'])) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    if (isNotEmpty(q['perms'])) {
      queryCondition.perms = {
        equals: q.perms,
      };
    }
    if (isNotEmpty(q['icon'])) {
      queryCondition.icon = {
        equals: q.icon,
      };
    }
    return this.prisma.sysMenu.findMany({
      where: queryCondition,
      orderBy: {
        orderNum: 'asc',
      },
    });
  }
  /**@description 查询菜单管理详情 */
  async selectMenuByMenuId(menuId: number) {
    return this.prisma.sysMenu.findUnique({
      where: {
        menuId,
      },
    });
  }
  /**@description 新增菜单管理 */
  async addMenu(sysMenu: CreateSysMenuDto) {
    //删除掉空值
    for (const key in sysMenu) {
      !isNotEmpty(sysMenu[key]) && delete sysMenu[key];
    }
    return await this.prisma.sysMenu.create({
      data: sysMenu,
    });
  }
  /**@description 修改菜单管理 */
  async updateMenu(sysMenu: UpdateSysMenuDto) {
    //删除掉空值
    for (const key in sysMenu) {
      !isNotEmpty(sysMenu[key]) && delete sysMenu[key];
    }
    return await this.prisma.sysMenu.update({
      where: {
        menuId: sysMenu.menuId,
      },
      data: sysMenu,
    });
  }
  /**@description 批量删除菜单管理 */
  async deleteMenuByMenuIds(menuIds: number[]) {
    const menu = await this.prisma.sysMenu.findFirst({
      where: {
        parentId: {
          in: menuIds,
        },
        menuType: {
          in: ['M', 'C'],
        },
      },
    });
    assert(!menu, '存在子菜单,不允许删除!');
    const menu1 = await this.prisma.sysRoleMenu.findFirst({
      where: { menuId: { in: menuIds } },
    });
    assert(!menu1, '菜单已被分配,不允许删除!');
    return this.prisma.sysMenu.deleteMany({
      where: {
        OR: [
          {
            menuId: { in: menuIds },
          },
          {
            menuType: 'F',
            parentId: { in: menuIds },
          },
        ],
      },
    });
  }

  /**@description 单个删除菜单管理 */
  async deleteMenuByMenuId(menuId: number) {
    const menu = await this.prisma.sysMenu.findFirst({
      where: {
        parentId: menuId,
        menuType: {
          in: ['M', 'C'],
        },
      },
    });
    assert(!menu, '存在子菜单,不允许删除!');
    const menu1 = await this.prisma.sysRoleMenu.findFirst({
      where: { menuId },
    });
    assert(!menu1, '菜单已被分配,不允许删除!');
    return this.prisma.sysMenu.deleteMany({
      where: {
        OR: [
          {
            menuId,
          },
          {
            menuType: 'F',
            parentId: menuId,
          },
        ],
      },
    });
  }
  /**@description 导出菜单管理所有数据为xlsx */
  async exportMenu(res: Response) {
    const title = [
      '菜单ID',
      '菜单名称',
      '父菜单ID',
      '显示顺序',
      '路由地址',
      '组件路径',
      '路由参数',
      '是否为外链（0否 1是）',
      '是否缓存（0不缓存 1缓存）',
      '菜单类型（M目录 C菜单 F按钮）',
      '菜单状态（0隐藏 1显示）',
      '菜单状态（0停用 1正常）',
      '权限标识',
      '菜单图标',
      '创建者',
      '创建时间',
      '更新者',
      '更新时间',
      '备注',
    ];
    const data = (await this.prisma.sysMenu.findMany()).map((v) =>
      Object.values(v),
    );
    data.unshift(title);
    exportTable(data, res);
  }

  async selectMenuTree() {
    const menus = tree(
      (await this.prisma.sysMenu.findMany()).map((v) => ({
        id: v.menuId,
        label: v.menuName,
        pid: v.parentId,
      })),
    );
    return menus;
  }

  async roleMenuTreeselect(roleId: number) {
    const menus = await this.selectMenuTree();
    const checkedKeys = (
      await this.prisma.sysRoleMenu.findMany({ where: { roleId } })
    ).map((v) => v.menuId);
    return { menus, checkedKeys };
  }
}
