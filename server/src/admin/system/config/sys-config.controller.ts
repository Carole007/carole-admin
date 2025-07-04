import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime, readJsonFile } from '@/common/utils';
import { ConfigService } from './service/sys-config.service';
import {
  QuerySysConfigDto,
  CreateSysConfigDto,
  UpdateSysConfigDto,
} from './dto/index';
import { Response } from 'express';
import { SysConfig } from '@prismaClient';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
import { RequireRole } from '@/common/decorator/require-role.decorator';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { Config } from '@/config';
@ApiTags('参数配置')
@ApiBearerAuth()
@Controller('system/config')
export class SysConfigController {
  constructor(private configService: ConfigService) { }
  @ApiOperation({ summary: '获取配置文件列表' })
  @Get("/getFileKeys")
  @RequirePermission("system:serverconfig:menu")
  getConfigFileKeys() {
    let map = structuredClone(Config.ConfigFileMap)
    for (let key in map) {
      delete map[key].filePath
    }
    return Result.ok(map);
  }
  @ApiOperation({ summary: '根据key获取配置信息' })
  @Get("/getConfigInfo")
 @RequirePermission("system:serverconfig:menu")
  getConfigInfo(@Query("key") key: string) {
    if (key && Config.ConfigFileMap[key]) {
      return Result.ok(readJsonFile(Config.ConfigFileMap[key].filePath))
    } else {
    }
  }
  @ApiOperation({ summary: '更新配置信息' })
  @Post("serverConfig")
  @RequirePermission("system:serverconfig:menu")
  changeServerConfig(@Body() data, @Query("key") key: string) {
    if (key in Config.ConfigFileMap) {
      if (typeof data != "string") {
        data = JSON.stringify(data, null, 2)
      }
      try {
        JSON.parse(data);
      } catch (error) {
        Logger.error("修改配置文件异常：", error?.message);
        return Result.Error("json格式有误！");
      }
      writeFileSync(Config.ConfigFileMap[key].filePath, data);
      Logger.log("修改配置文件成功：", key);
      return Result.ok("修改成功！");
    } else {
      return Result.Error("key不存在！");
    }

  }
  @ApiOperation({ summary: '查询参数配置列表' })
  @ApiResponse({ type: TableDataInfo<SysConfig> })
  @RequirePermission('system:config:query')
  @Get('/list')
  async listConfig(
    @Query() q: QuerySysConfigDto,
  ): Promise<TableDataInfo<SysConfig>> {
    return Result.TableData(await this.configService.selectConfigList(q));
  }
  @ApiOperation({ summary: '导出参数配置xlsx文件' })
  @RequirePermission('system:config:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.configService.exportConfig(res);
  }
  @ApiOperation({ summary: '查询参数配置详细' })
  @ApiResponse({ type: Result<SysConfig> })
  @RequirePermission('system:config:query')
  @Get('/:configId')
  async getConfig(
    @Param('configId', ParseIntPipe) configId: number,
  ): Promise<Result<SysConfig>> {
    return Result.ok(await this.configService.selectConfigByConfigId(configId));
  }
  @ApiOperation({ summary: '新增参数配置' })
  @ApiResponse({ type: Result<SysConfig> })
  @ApiBody({ type: CreateSysConfigDto })
  @RequirePermission('system:config:add')
  @Post('/')
  async addConfig(
    @Body() sysConfig: CreateSysConfigDto,
    @Req() req,
  ): Promise<Result<SysConfig>> {
    sysConfig = {
      ...sysConfig,
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName,
    };
    return Result.ok(await this.configService.addConfig(sysConfig));
  }
  @ApiOperation({ summary: '修改参数配置' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysConfigDto })
  @RequirePermission('system:config:edit')
  @Put('/')
  async updateConfig(
    @Body() sysConfig: UpdateSysConfigDto,
    @Req() req,
  ): Promise<Result<any>> {
    sysConfig = {
      ...sysConfig,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.configService.updateConfig(sysConfig);
    return Result.ok('修改成功！');
  }
  @ApiOperation({ summary: '删除参数配置' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:config:remove')
  @Delete('/:ids')
  async delConfig(
    @Param('ids', ParseIntArrayPipe) configIds: number[],
  ): Promise<Result<any>> {
    const { count } =
      await this.configService.deleteConfigByConfigIds(configIds);
    return Result.toAjax(count);
  }
}
