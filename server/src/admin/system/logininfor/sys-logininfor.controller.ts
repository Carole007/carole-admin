import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
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
import { LogininforService } from './service/sys-logininfor.service';
import {
  QuerySysLogininforDto,
  CreateSysLogininforDto,
  UpdateSysLogininforDto,
} from './dto/index';
import { Response } from 'express';
import { SysLogininfor } from '@prismaClient';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
@ApiTags('登录日志')
@ApiBearerAuth()
@Controller('monitor/logininfor')
export class SysLogininforController {
  constructor(private logininforService: LogininforService) {}
  @ApiOperation({ summary: '查询登录日志列表' })
  @ApiResponse({ type: TableDataInfo<SysLogininfor> })
  @RequirePermission('monitor:logininfor:query')
  @Get('/list')
  async listLogininfor(
    @Query() q: QuerySysLogininforDto,
  ): Promise<TableDataInfo<SysLogininfor>> {
    return Result.TableData(
      await this.logininforService.selectLogininforList(q),
    );
  }
  @ApiOperation({ summary: '清空登录日志' })
  @Delete('/clean')
  async clearInfo(): Promise<Result<null>> {
    await this.logininforService.clear();
    return Result.ok();
  }
  @ApiOperation({ summary: '导出登录日志xlsx文件' })
  @RequirePermission('monitor:logininfor:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.logininforService.exportLogininfor(res);
  }
  @ApiOperation({ summary: '查询登录日志详细' })
  @ApiResponse({ type: Result<SysLogininfor> })
  @RequirePermission('monitor:logininfor:query')
  @Get('/:infoId')
  async getLogininfor(
    @Param('infoId', ParseIntPipe) infoId: number,
  ): Promise<Result<SysLogininfor>> {
    return Result.ok(
      await this.logininforService.selectLogininforByInfoId(infoId),
    );
  }
  @ApiOperation({ summary: '新增登录日志' })
  @ApiResponse({ type: Result<SysLogininfor> })
  @ApiBody({ type: CreateSysLogininforDto })
  @RequirePermission('monitor:logininfor:add')
  @Post('/')
  async addLogininfor(
    @Body() sysLogininfor: CreateSysLogininforDto,
  ): Promise<Result<SysLogininfor>> {
    return Result.ok(await this.logininforService.addLogininfor(sysLogininfor));
  }
  @ApiOperation({ summary: '修改登录日志' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysLogininforDto })
  @RequirePermission('monitor:logininfor:edit')
  @Put('/')
  async updateLogininfor(
    @Body() sysLogininfor: UpdateSysLogininforDto,
  ): Promise<Result<any>> {
    await this.logininforService.updateLogininfor(sysLogininfor);
    return Result.ok('修改成功！');
  }
  @ApiOperation({ summary: '删除登录日志' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('monitor:logininfor:remove')
  @Delete('/:ids')
  async delLogininfor(
    @Param('ids', ParseIntArrayPipe) infoIds: number[],
  ): Promise<Result<any>> {
    const { count } =
      await this.logininforService.deleteLogininforByInfoIds(infoIds);
    return Result.toAjax(count);
  }
}
