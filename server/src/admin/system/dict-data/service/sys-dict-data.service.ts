import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { groupBy } from 'lodash';
import { redisUtils } from '@/common/utils/redisUtils';
import { Constants } from '@/common/constant/Constants';
import { queryDictDataDto } from '@/admin/system/dict-data/dto/queryDictDataDto';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import { CreateDictDataDto } from '@/admin/system/dict-data/dto/createDictDataDto';
import { updateDictDataDto } from '@/admin/system/dict-data/dto/updateDictDataDto';
import { exportTable } from '@/common/utils';
import { Response } from 'express';

@Injectable()
export class SysDictDataService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}
  onModuleInit() {
    this.initSysDictData();
  }
  //初始化字典数据
  async initSysDictData() {
    const dictData = groupBy(
      await this.prisma.sysDictData.findMany(),
      'dictType',
    );
    for (const dictKey in dictData) {
      await redisUtils.set(
        Constants.SYS_DICT_KEY + dictKey,
        JSON.stringify(dictData[dictKey], null, 2),
      );
    }
    console.log('字典信息初始化完毕！');
  }

  //根据字典类型更新redis字典数据
  async updateCache(dictType: string) {
    const dictDatas = await this.prisma.sysDictData.findMany({
      where: {
        dictType,
      },
    });
    return await redisUtils.set(
      Constants.SYS_DICT_KEY + dictType,
      JSON.stringify(dictDatas, null, 2),
    );
  }

  //查询字典数据列表
  async selectDictDataList(q: queryDictDataDto) {
    const queryCondition: Prisma.SysDictDataWhereInput = {};
    if (isNotEmpty(q.dictType)) {
      queryCondition.dictType = {
        equals: q.dictType,
      };
    }
    if (isNotEmpty(q.dictLabel)) {
      queryCondition.dictLabel = {
        contains: q.dictLabel,
      };
    }
    if (isNotEmpty(q.status)) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    return {
      rows: await this.prisma.sysDictData.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          dictSort: 'asc',
        },
      }),
      total: await this.prisma.sysDictData.count({
        where: queryCondition,
      }),
    };
  }
  //查询所有数据
  async selectAllDictData() {
    return await this.prisma.sysDictData.findMany();
  }

  //查询字典数据详细
  async selectDictDataDetail(dictCode: number) {
    return this.prisma.sysDictData.findUnique({
      where: {
        dictCode: dictCode,
      },
    });
  }

  //根据字典类型查询字典数据信息
  async selectDictDataByDictType(dictType: string) {
    return JSON.parse(
      (await redisUtils.get(Constants.SYS_DICT_KEY + dictType)) || null,
    );
  }

  //新增字典数据
  async addDictData(dictData: CreateDictDataDto) {
    const res = await this.prisma.sysDictData.create({
      data: dictData,
    });
    await this.updateCache(dictData.dictType);
    return res;
  }

  //修改字典数据
  async updateDictData(dictData: updateDictDataDto) {
    const res = await this.prisma.sysDictData.update({
      where: {
        dictCode: dictData.dictCode,
      },
      data: dictData,
    });
    await this.updateCache(dictData.dictType);
    return res;
  }
  //删除字典数据
  async deleteDictData(dictCodes: number[]) {
    const dictType = (
      await this.prisma.sysDictData.findFirst({
        select: {
          dictType: true,
        },
        where: {
          dictCode: dictCodes[0],
        },
      })
    ).dictType;
    const res = await this.prisma.sysDictData.deleteMany({
      where: {
        dictCode: {
          in: dictCodes,
        },
      },
    });
    await this.updateCache(dictType);
    return res;
  }

  //导出xlsx文件
  async exportDictData(res: Response) {
    const title = [
      '字典编码',
      '字典排序',
      '字典标签',
      '字典键值',
      '字典类型',
      '样式属性',
      '表格回显样式',
      '是否默认',
      '状态',
      '创建者',
      '创建时间',
      '更新者',
      '更新时间',
      '备注',
    ];
    const data = (await this.prisma.sysDictData.findMany()).map((v) =>
      Object.values(v),
    );
    data.unshift(title);
    exportTable(data, res);
  }
}
