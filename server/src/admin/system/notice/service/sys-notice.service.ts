import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import { QuerySysNoticeDto, CreateSysNoticeDto, UpdateSysNoticeDto } from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
@Injectable()
export class NoticeService {
  constructor(private prisma: PrismaService) { }
  /**@description 查询通知公告表所有 */
  async selectNoticeAll() {
    return this.prisma.sysNotice.findMany()
  }
  /**@description 分页查询通知公告表列表 */
  async selectNoticeList(q: QuerySysNoticeDto) {
    let queryCondition: Prisma.SysNoticeWhereInput = {}
    if (isNotEmpty(q["noticeTitle"])) {
      queryCondition.noticeTitle = {
        equals: q.noticeTitle
      }
    }
    if (isNotEmpty(q["noticeType"])) {
      queryCondition.noticeType = {
        equals: q.noticeType
      }
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.status = {
        equals: q.status
      }
    }
    return {
      rows: await this.prisma.sysNotice.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysNotice.count({
        where: queryCondition
      })
    }
  }
  /**@description 查询通知公告表详情 */
  async selectNoticeByNoticeId(noticeId: number) {
    return this.prisma.sysNotice.findUnique({
      where: {
        noticeId
      }
    })
  }
  /**@description 新增通知公告表 */
  async addNotice(sysNotice: CreateSysNoticeDto) {
    //删除掉空值
    for (let key in sysNotice) {
      !isNotEmpty(sysNotice[key]) && delete sysNotice[key]
    }
    return await this.prisma.sysNotice.create({
      data: sysNotice
    })
  }
  /**@description 修改通知公告表 */
  async updateNotice(sysNotice: UpdateSysNoticeDto) {
    //删除掉空值
    for (let key in sysNotice) {
      !isNotEmpty(sysNotice[key]) && delete sysNotice[key]
    }
    return await this.prisma.sysNotice.update({
      where: {
        noticeId: sysNotice.noticeId
      },
      data: sysNotice
    })
  }
  /**@description 批量删除通知公告表 */
  async deleteNoticeByNoticeIds(noticeIds: number[]) {
    return this.prisma.sysNotice.deleteMany({
      where: {
        noticeId: {
          in: noticeIds
        }
      }
    })
  }
  /**@description 单个删除通知公告表 */
  async deleteNoticeByNoticeId(noticeId: number) {
    return this.prisma.sysNotice.delete({
      where: {
        noticeId
      }
    })
  }
  /**@description 导出通知公告表所有数据为xlsx */
  async exportNotice(res: Response) {
    let title = ["公告ID", "公告标题", "公告类型（1通知 2公告）", "公告内容", "公告状态（0关闭 1正常）", "创建者", "创建时间", "更新者", "更新时间", "备注"]
    let data = (await this.prisma.sysNotice.findMany()).map(v => Object.values(v))
    data.unshift(title)
    exportTable(data, res)
  }
}