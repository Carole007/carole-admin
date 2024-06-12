import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import { QuerySysRoleDto, CreateSysRoleDto, UpdateSysRoleDto, UpdateSysRoleStatusDto, QueryAllocatedListDto } from '../dto/index';
import { Prisma } from '@prismaClient';
import { isArray, isNotEmpty } from 'class-validator';
import * as assert from 'assert';
import { AuthService } from '@/common/service/auth/auth.service';
@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService,private authService:AuthService) { }
  /**@description 查询角色管理所有 */
  async selectRoleAll() {
    return this.prisma.sysRole.findMany()
  }
  /**@description 分页查询角色管理列表 */
  async selectRoleList(q: QuerySysRoleDto) {
    let queryCondition: Prisma.SysRoleWhereInput = {}
    if (isNotEmpty(q["roleName"])) {
      queryCondition.roleName = {
        contains: q.roleName
      }
    }
    if (isNotEmpty(q["roleKey"])) {
      queryCondition.roleKey = {
        contains: q.roleKey
      }
    }
    if (isNotEmpty(q["roleSort"])) {
      queryCondition.roleSort = {
        equals: q.roleSort
      }
    }
    if (isNotEmpty(q["dataScope"])) {
      queryCondition.dataScope = {
        equals: q.dataScope
      }
    }
    if (isNotEmpty(q["menuCheckStrictly"])) {
      queryCondition.menuCheckStrictly = {
        equals: q.menuCheckStrictly
      }
    }
    if (isNotEmpty(q["deptCheckStrictly"])) {
      queryCondition.deptCheckStrictly = {
        equals: q.deptCheckStrictly
      }
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.status = {
        equals: q.status
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
      rows: await this.prisma.sysRole.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysRole.count({
        where: queryCondition
      })
    }
  }


  /**@description 分页查询属于角色的用户列表 */
  async allocatedList(q: QueryAllocatedListDto) {
    let queryCondition: Prisma.SysUserWhereInput = {
      roles: {
        some: {
          roleId: q.roleId
        }
      }
    }
    if (isNotEmpty(q.userName)) {
      queryCondition.userName = {
        contains: q.userName
      }
    }
    if (isNotEmpty(q.phoneNumber)) {
      queryCondition.phonenumber = {
        contains: q.phoneNumber
      }
    }
    return {
      rows: await this.prisma.sysUser.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysUser.count({
        where: queryCondition
      })
    }
  }

  /**@description 分页查询不属于角色的用户列表 */
  async unallocatedList(q: QueryAllocatedListDto) {
    let queryCondition: Prisma.SysUserWhereInput = {
      roles: {
        every: {
          roleId: {
            not: q.roleId
          }
        }
      }
    }
    if (isNotEmpty(q.userName)) {
      queryCondition.userName = {
        contains: q.userName
      }
    }
    if (isNotEmpty(q.phoneNumber)) {
      queryCondition.phonenumber = {
        contains: q.phoneNumber
      }
    }
    return {
      rows: await this.prisma.sysUser.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysUser.count({
        where: queryCondition
      })
    }
  }

  //批量添加授权用户
  async addRoleUser(roleId: number, userIds: number[]) {
    if (!userIds.length) return null
    await this.prisma.sysUserRole.createMany({
      data: userIds.map(v => ({
        userId: v,
        roleId
      }))
    })
    userIds.forEach(v => this.authService.refreshUserInfo(v))
    return true
  }

  //批量取消授权用户
  async cancelRoleUser(roleId: number, userIds: number[]) {
    if (!userIds.length) return null
    await  this.prisma.sysUserRole.deleteMany({
      where: {
        roleId,
        userId: {
          in: userIds
        }
      }
    })
    userIds.forEach(v => this.authService.refreshUserInfo(v))
    return true
  }

  /**@description 查询角色管理详情 */
  async selectRoleByRoleId(roleId: number) {
    return this.prisma.sysRole.findUnique({
      where: {
        roleId
      }
    })
  }
  /**@description 新增角色管理 */
  async addRole(sysRole: CreateSysRoleDto) {
    //删除掉空值
    for (let key in sysRole) {
      !isNotEmpty(sysRole[key]) && delete sysRole[key]
    }
    return this.prisma.$transaction(async (db) => {
      let { menuIds, deptIds, ...role } = sysRole
      let addRole = await db.sysRole.create({
        data: role
      })
      if (isArray(menuIds) && menuIds.length) {
        await db.sysRoleMenu.createMany({
          data: menuIds.map(v => ({ menuId: v, roleId: addRole.roleId }))
        })
      }
      return addRole
    })

  }
  /**@description 修改角色管理 */
  async updateRole(sysRole: UpdateSysRoleDto) {
    //删除掉空值
    for (let key in sysRole) {
      !isNotEmpty(sysRole[key]) && delete sysRole[key]
    }
    return this.prisma.$transaction(async (db) => {
      let { menuIds, deptIds, ...role } = sysRole
      await db.sysRoleMenu.deleteMany({ where: { roleId: role.roleId } })
      let res = await db.sysRole.update({
        where: {
          roleId: role.roleId
        },
        data: role
      })
      if (isArray(menuIds) && menuIds.length) {
        await db.sysRoleMenu.createMany({
          data: menuIds.map(v => ({ menuId: v, roleId: res.roleId }))
        })
      }
      //更新属于这个角色的用户的缓存信息
      { 
        let userIds = [...new Set((await db.sysUserRole.findMany({
          where: {roleId:sysRole.roleId}
        })).map(v => v.userId))]
        userIds.forEach(userId => { 
          this.authService.refreshUserInfo(userId)
        })
      }
      return res
    })
  }
  /**@description 批量删除角色管理 */
  async deleteRoleByRoleIds(roleIds: number[]) {
    let userroles = await this.prisma.sysUserRole.findFirst({
      where: {
        roleId: { in: roleIds }
      }
    })
    assert(!userroles, "角色已被分配！")
    return this.prisma.$transaction(async (db) => {
      await db.sysRoleDept.deleteMany({
        where: {
          roleId: {
            in: roleIds
          }
        }
      })
      await db.sysRoleMenu.deleteMany({
        where: {
          roleId: {
            in: roleIds
          }
        }
      })
      return db.sysRole.deleteMany({
        where: {
          roleId: {
            in: roleIds
          }
        }
      })
    })

  }
  /**@description 单个删除角色管理 */
  async deleteRoleByRoleId(roleId: number) {
    let userroles = await this.prisma.sysUserRole.findFirst({
      where: {
        roleId
      }
    })
    assert(!userroles, "角色已被分配！")
    return this.prisma.$transaction(async (db) => {
      await db.sysRoleDept.deleteMany({
        where: {
          roleId
        }
      })
      await db.sysRoleMenu.deleteMany({
        where: {
          roleId
        }
      })
      return db.sysRole.deleteMany({
        where: {
          roleId
        }
      })
    })
  }
  /**@description 导出角色管理所有数据为xlsx */
  async exportRole(res: Response) {
    let title = ["角色ID", "角色名称", "角色权限字符串", "显示顺序", "数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）", "菜单树选择项是否关联显示", "部门树选择项是否关联显示", "角色状态（0停用 1正常）", "删除标志（0删除 1存在）", "创建者", "创建时间", "更新者", "更新时间", "备注"]
    let data = (await this.prisma.sysRole.findMany()).map(v => Object.values(v))
    data.unshift(title)
    exportTable(data, res)
  }
/**@description 更新角色状态 */
  async updateStatus(role: UpdateSysRoleStatusDto) {
    let res = await this.prisma.sysRole.update({
      where: {
        roleId: role.roleId
      },
      data: role
    })
    //更新属于这个角色的用户的缓存信息
    { 
      let userIds = [...new Set((await this.prisma.sysUserRole.findMany({
        where: {roleId:role.roleId}
      })).map(v => v.userId))]
      userIds.forEach(userId => { 
        this.authService.refreshUserInfo(userId)
      })
    }
    return res
  }


  /**@description 分配数据权限 */
  async dataScope(sysRole: UpdateSysRoleDto) {
    //删除掉空值
    for (let key in sysRole) {
      !isNotEmpty(sysRole[key]) && delete sysRole[key]
    }
    return this.prisma.$transaction(async (db) => {
      let { menuIds, deptIds, ...role } = sysRole
      await db.sysRoleDept.deleteMany({ where: { roleId: role.roleId } })
      await db.sysRole.update({
        where: {
          roleId: role.roleId
        },
        data: role
      })
      if (isArray(deptIds) && deptIds.length) {
        return await db.sysRoleDept.createMany({
          data: deptIds.map(v => ({ deptId: v, roleId: role.roleId }))
        })
      }
    })
  }
  

}