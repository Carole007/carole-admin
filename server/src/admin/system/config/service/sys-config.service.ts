import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import {
  QuerySysConfigDto,
  CreateSysConfigDto,
  UpdateSysConfigDto,
} from '../dto/index';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import { redisUtils } from '@/common/utils/redisUtils';
import { Constants } from '@/common/constant/Constants';
@Injectable()
export class ConfigService {
  constructor(private prisma: PrismaService) {
    this.initSysConfigData();
  }

  /**@desc 初始化系统配置到redis缓存 */
  async initSysConfigData() {
    const configData = await this.prisma.sysConfig.findMany({
      select: {
        configKey: true,
        configValue: true,
      },
    });
    for (const item of configData) {
      await redisUtils.set(
        Constants.SYS_CONFIG_KEY + item.configKey,
        item.configValue,
      );
    }
    console.log('系统配置信息初始化完成！');
  }
  /**@description 查询参数配置所有 */
  async selectConfigAll() {
    return this.prisma.sysConfig.findMany();
  }
  /**@description 分页查询参数配置列表 */
  async selectConfigList(q: QuerySysConfigDto) {
    const queryCondition: Prisma.SysConfigWhereInput = {};
    if (isNotEmpty(q['configId'])) {
      queryCondition.configId = {
        equals: q.configId,
      };
    }
    if (isNotEmpty(q['configName'])) {
      queryCondition.configName = {
        contains: q.configName,
      };
    }
    if (isNotEmpty(q['configKey'])) {
      queryCondition.configKey = {
        contains: q.configKey,
      };
    }
    if (isNotEmpty(q['configValue'])) {
      queryCondition.configValue = {
        equals: q.configValue,
      };
    }
    if (isNotEmpty(q['configType'])) {
      queryCondition.configType = {
        equals: q.configType,
      };
    }
    if (isNotEmpty(q['createBy'])) {
      queryCondition.createBy = {
        equals: q.createBy,
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
    if (isNotEmpty(q['updateBy'])) {
      queryCondition.updateBy = {
        equals: q.updateBy,
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
      rows: await this.prisma.sysConfig.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysConfig.count({
        where: queryCondition,
      }),
    };
  }
  /**@description 查询参数配置详情 */
  async selectConfigByConfigId(configId: number) {
    return this.prisma.sysConfig.findUnique({
      where: {
        configId,
      },
    });
  }
  /**@description 新增参数配置 */
  async addConfig(sysConfig: CreateSysConfigDto) {
    //删除掉空值
    for (const key in sysConfig) {
      !isNotEmpty(sysConfig[key]) && delete sysConfig[key];
    }
    const d = await this.prisma.sysConfig.create({
      data: sysConfig,
    });
    await redisUtils.set(
      Constants.SYS_CONFIG_KEY + sysConfig.configKey,
      sysConfig.configValue,
    );
    return d;
  }
  /**@description 修改参数配置 */
  async updateConfig(sysConfig: UpdateSysConfigDto) {
    //删除掉空值
    for (const key in sysConfig) {
      !isNotEmpty(sysConfig[key]) && delete sysConfig[key];
    }
    await this.prisma.sysConfig.update({
      where: {
        configId: sysConfig.configId,
      },
      data: sysConfig,
    });
    await redisUtils.set(
      Constants.SYS_CONFIG_KEY + sysConfig.configKey,
      sysConfig.configValue,
    );
    return true;
  }
  /**@description 批量删除参数配置 */
  async deleteConfigByConfigIds(configIds: number[]) {
    const r = await this.prisma.sysConfig.deleteMany({
      where: {
        configId: {
          in: configIds,
        },
      },
    });
    await this.initSysConfigData();
    return r;
  }
  /**@description 单个删除参数配置 */
  async deleteConfigByConfigId(configId: number) {
    const r = this.prisma.sysConfig.delete({
      where: {
        configId,
      },
    });
    await this.initSysConfigData();
    return r;
  }
  /**@description 导出参数配置所有数据为xlsx */
  async exportConfig(res: Response) {
    const title = [
      '参数主键',
      '参数名称',
      '参数键名',
      '参数键值',
      '系统内置',
      '创建者',
      '创建时间',
      '更新者',
      '更新时间',
      '备注',
    ];
    const data = (await this.prisma.sysConfig.findMany()).map((v) =>
      Object.values(v),
    );
    data.unshift(title);
    exportTable(data, res);
  }
}
