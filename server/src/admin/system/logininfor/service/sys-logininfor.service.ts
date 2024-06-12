import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import { QuerySysLogininforDto, CreateSysLogininforDto, UpdateSysLogininforDto } from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
@Injectable()
export class LogininforService {
  constructor(private prisma: PrismaService) { }
  /**@description 查询登录日志所有 */
  async selectLogininforAll () {
    return this.prisma.sysLogininfor.findMany()
  }
  /**@description 分页查询登录日志列表 */
  async selectLogininforList (q: QuerySysLogininforDto) {
    let queryCondition: Prisma.SysLogininforWhereInput = {}
        let order: "asc"|"desc" = q.isAsc === "ascending" ? "asc" : "desc"
        if (isNotEmpty(q["userName"])) {
            queryCondition.userName = {
              contains: q.userName
            }
        }
        if (isNotEmpty(q["ipaddr"])) {
            queryCondition.ipaddr = {
              contains: q.ipaddr
            }
        }
        if (isNotEmpty(q["loginLocation"])) {
            queryCondition.loginLocation = {
              equals: q.loginLocation
            }
        }
        if (isNotEmpty(q["browser"])) {
            queryCondition.browser = {
              equals: q.browser
            }
        }
        if (isNotEmpty(q["os"])) {
            queryCondition.os = {
              equals: q.os
            }
        }
        if (isNotEmpty(q["status"])) {
            queryCondition.status = {
              equals: q.status
            }
        }
        if (isNotEmpty(q["msg"])) {
            queryCondition.msg = {
              equals: q.msg
            }
        }
        if (isNotEmpty(q.params.beginLoginTime) && isNotEmpty(q.params.endLoginTime)) {
            queryCondition.loginTime = {
              lte: q.params.endLoginTime,
              gte: q.params.beginLoginTime
            }
        }
    return {
      rows: await this.prisma.sysLogininfor.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        orderBy: {
          loginTime: order
        },
        where: queryCondition,
      }),
      total: await this.prisma.sysLogininfor.count({
        where: queryCondition
      })
    }
  }
  /**@description 查询登录日志详情 */
  async selectLogininforByInfoId (infoId: number) {
    return this.prisma.sysLogininfor.findUnique({
      where: {
        infoId
      }
    })
  }
  /**@description 新增登录日志 */
  async addLogininfor (sysLogininfor: CreateSysLogininforDto) {
    //删除掉空值
    for (let key in sysLogininfor) {
      !isNotEmpty(sysLogininfor[key]) && delete sysLogininfor[key]
    }
    return await this.prisma.sysLogininfor.create({
      data: sysLogininfor
    })
  }
  /**@description 修改登录日志 */
  async updateLogininfor (sysLogininfor: UpdateSysLogininforDto) {
    //删除掉空值
    for (let key in sysLogininfor) {
      !isNotEmpty(sysLogininfor[key]) && delete sysLogininfor[key]
    }
    return await this.prisma.sysLogininfor.update({
        where: {
          infoId: sysLogininfor.infoId
        },
        data: sysLogininfor
      })
  }
  /** @description 清空所有 */
  async clear() { 
    return this.prisma.sysLogininfor.deleteMany()
  }
  /**@description 批量删除登录日志 */
  async deleteLogininforByInfoIds (infoIds: number[]) {
    return this.prisma.sysLogininfor.deleteMany({
      where: {
        infoId: {
          in: infoIds
        }
      }
    })
  }
  /**@description 单个删除登录日志 */
  async deleteLogininforByInfoId (infoId: number) {
    return this.prisma.sysLogininfor.delete({
      where: {
        infoId
      }
    })
  }
  /**@description 导出登录日志所有数据为xlsx */
  async exportLogininfor (res: Response) {
    let title = ["访问ID","用户账号","登录IP地址","登录地点","浏览器类型","操作系统","登录状态（0失败,1成功）","提示消息","访问时间"]
    let data = (await this.prisma.sysLogininfor.findMany()).map(v => Object.values(v))
    data.unshift(title)
    exportTable(data, res)
  }
}