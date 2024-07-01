import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import {
  QuerySysPostDto,
  CreateSysPostDto,
  UpdateSysPostDto,
} from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  /**@description 查询岗位信息表所有 */
  async selectPostAll() {
    return this.prisma.sysPost.findMany();
  }
  /**@description 分页查询岗位信息表列表 */
  async selectPostList(q: QuerySysPostDto) {
    const queryCondition: Prisma.SysPostWhereInput = {};
    if (isNotEmpty(q['postCode'])) {
      queryCondition.postCode = {
        equals: q.postCode,
      };
    }
    if (isNotEmpty(q['postName'])) {
      queryCondition.postName = {
        contains: q.postName,
      };
    }
    if (isNotEmpty(q['postSort'])) {
      queryCondition.postSort = {
        equals: q.postSort,
      };
    }
    if (isNotEmpty(q['status'])) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    if (
      isNotEmpty(q.params.beginCreateTime) &&
      isNotEmpty(q.params.endCreateTime)
    ) {
      queryCondition.createTime = {
        lte: q.params.endCreateTime,
        gte: q.params.beginCreateTime,
      };
    }
    if (
      isNotEmpty(q.params.beginUpdateTime) &&
      isNotEmpty(q.params.endUpdateTime)
    ) {
      queryCondition.updateTime = {
        lte: q.params.endUpdateTime,
        gte: q.params.beginUpdateTime,
      };
    }
    return {
      rows: await this.prisma.sysPost.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysPost.count({
        where: queryCondition,
      }),
    };
  }
  /**@description 查询岗位信息表详情 */
  async selectPostByPostId(postId: number) {
    return this.prisma.sysPost.findUnique({
      where: {
        postId,
      },
    });
  }
  /**@description 新增岗位信息表 */
  async addPost(sysPost: CreateSysPostDto) {
    //删除掉空值
    for (const key in sysPost) {
      !isNotEmpty(sysPost[key]) && delete sysPost[key];
    }
    return await this.prisma.sysPost.create({
      data: sysPost,
    });
  }
  /**@description 修改岗位信息表 */
  async updatePost(sysPost: UpdateSysPostDto) {
    //删除掉空值
    for (const key in sysPost) {
      !isNotEmpty(sysPost[key]) && delete sysPost[key];
    }
    return await this.prisma.sysPost.update({
      where: {
        postId: sysPost.postId,
      },
      data: sysPost,
    });
  }
  /**@description 批量删除岗位信息表 */
  async deletePostByPostIds(postIds: number[]) {
    const post = await this.prisma.sysUserPost.findFirst({
      where: {
        postId: {
          in: postIds,
        },
      },
    });
    assert(!post, '岗位已被分配,不允许删除!');
    return this.prisma.sysPost.deleteMany({
      where: {
        postId: {
          in: postIds,
        },
      },
    });
  }
  /**@description 单个删除岗位信息表 */
  async deletePostByPostId(postId: number) {
    const post = await this.prisma.sysUserPost.findFirst({
      where: {
        postId,
      },
    });
    assert(!post, '岗位已被分配,不允许删除!');
    return this.prisma.sysPost.delete({
      where: {
        postId,
      },
    });
  }
  /**@description 导出岗位信息表所有数据为xlsx */
  async exportPost(res: Response) {
    const title = [
      '岗位ID',
      '岗位编码',
      '岗位名称',
      '显示顺序',
      '状态（0停用 1正常）',
      '创建者',
      '创建时间',
      '更新者',
      '更新时间',
      '备注',
    ];
    const data = (await this.prisma.sysPost.findMany()).map((v) =>
      Object.values(v),
    );
    data.unshift(title);
    exportTable(data, res);
  }
}
