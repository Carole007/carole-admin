import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QuerySysDeptDto, CreateSysDeptDto, UpdateSysDeptDto } from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
@Injectable()
export class DeptService {
  constructor(private prisma: PrismaService) { }
  /**@description 分页查询部门管理列表 */
  async selectDeptList(q: QuerySysDeptDto) {
    let queryCondition: Prisma.SysDeptWhereInput = {}
    if (isNotEmpty(q["deptId"])) {
      queryCondition.deptId = {
        equals: q.deptId
      }
    }
    if (isNotEmpty(q["parentId"])) {
      queryCondition.parentId = {
        equals: q.parentId
      }
    }
    if (isNotEmpty(q["ancestors"])) {
      queryCondition.ancestors = {
        equals: q.ancestors
      }
    }
    if (isNotEmpty(q["deptName"])) {
      queryCondition.deptName = {
        contains: q.deptName
      }
    }
    if (isNotEmpty(q["orderNum"])) {
      queryCondition.orderNum = {
        equals: q.orderNum
      }
    }
    if (isNotEmpty(q["leader"])) {
      queryCondition.leader = {
        equals: q.leader
      }
    }
    if (isNotEmpty(q["phone"])) {
      queryCondition.phone = {
        equals: q.phone
      }
    }
    if (isNotEmpty(q["email"])) {
      queryCondition.email = {
        equals: q.email
      }
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.status = {
        equals: q.status
      }
    }
    if (isNotEmpty(q["createBy"])) {
      queryCondition.createBy = {
        equals: q.createBy
      }
    }
    if (isNotEmpty(q.params.beginCreateTime) && isNotEmpty(q.params.endCreateTime)) {
      queryCondition.createTime = {
        lte: q.params.endCreateTime,
        gte: q.params.beginCreateTime
      }
    }
    if (isNotEmpty(q["updateBy"])) {
      queryCondition.updateBy = {
        equals: q.updateBy
      }
    }
    if (isNotEmpty(q.params.beginUpdateTime) && isNotEmpty(q.params.endUpdateTime)) {
      queryCondition.updateTime = {
        lte: q.params.endUpdateTime,
        gte: q.params.beginUpdateTime
      }
    }
    return await this.prisma.sysDept.findMany({
      where: queryCondition
    })

  }
 /**@description 分页查询部门管理列表 */
  async listDeptExcludeChild(deptId:number) { 
    return this.prisma.sysDept.findMany({
      where: {
        deptId: {
          not:deptId
        }
      },
      orderBy: {
        orderNum:"asc"
      }
    })
  }

  
  /**@description 查询部门管理详情 */
  async selectDeptByDeptId(deptId: number) {
    return this.prisma.sysDept.findUnique({
      where: {
        deptId
      }
    })
  }
  /**@description 新增部门管理 */
  async addDept(sysDept: CreateSysDeptDto) {
    //删除掉空值
    for (let key in sysDept) {
      !isNotEmpty(sysDept[key]) && delete sysDept[key]
    }
    return await this.prisma.sysDept.create({
      data: sysDept
    })
  }
  /**@description 修改部门管理 */
  async updateDept(sysDept: UpdateSysDeptDto) {
    //删除掉空值
    for (let key in sysDept) {
      !isNotEmpty(sysDept[key]) && delete sysDept[key]
    }
    return await this.prisma.sysDept.update({
      where: {
        deptId: sysDept.deptId
      },
      data: sysDept
    })
  }
  /**@description 批量删除部门管理 */
  async deleteDeptByDeptIds(deptIds: number[]) {
    let dept = await this.prisma.sysDept.findFirst({
      where: {
        parentId: {
          in: deptIds
        }
      }
    })
    assert(!dept, "存在子部门,不允许删除!")
    let dept1 = await this.prisma.sysRoleDept.findFirst({ where: { deptId: { in: deptIds } } })
    assert(!dept1, "部门已分配,不允许删除!")
    let dept2 = await this.prisma.sysUser.findFirst({ where: { deptId: { in: deptIds } } })
    assert(!dept2, "部门已分配,不允许删除!")
    return this.prisma.sysDept.deleteMany({
      where: {
        deptId: {
          in: deptIds
        }
      }
    })
  }
  /**@description 单个删除部门管理 */
  async deleteDeptByDeptId(deptId: number) {
    let dept = await this.prisma.sysDept.findFirst({
      where: {
        parentId: deptId
      }
    })
    assert(!dept, "存在子部门,不允许删除!")
    let dept1 = await this.prisma.sysRoleDept.findFirst({ where: { deptId } })
    assert(!dept1, "部门已分配,不允许删除!")
    let dept2 = await this.prisma.sysUser.findFirst({ where: { deptId } })
    assert(!dept2, "部门已分配,不允许删除!")
    return this.prisma.sysDept.deleteMany({
      where: {
        deptId
      }
    })
  }
  /**@description 导出部门管理所有数据为xlsx */
  async exportDept(res: Response) {
    let title = ["部门id", "父部门", "祖级列表", "部门名称", "显示顺序", "负责人", "联系电话", "邮箱", "部门状态（0停用,1正常）", "删除标志（0删除,1存在 ）", "创建者", "创建时间", "更新者", "更新时间"]
    let data = (await this.prisma.sysDept.findMany()).map(v => Object.values(v))
    data.unshift(title)
    exportTable(data, res)
  }

  async getDeptTree() {
    return tree((await this.prisma.sysDept.findMany()).map(v => ({
      id: v.deptId,
      pid: v.parentId,
      label: v.deptName
    })))
  }
}