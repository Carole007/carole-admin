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
import { nowDateTime } from '@/common/utils';
import { NoticeService } from './service/sys-notice.service';
import {
  QuerySysNoticeDto,
  CreateSysNoticeDto,
  UpdateSysNoticeDto,
} from './dto/index';
import { Response } from 'express';
import { SysNotice } from '@prismaClient';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
@ApiTags('通知公告表')
@ApiBearerAuth()
@Controller('system/notice')
export class SysNoticeController {
  constructor(private noticeService: NoticeService) {}
  @ApiOperation({ summary: '查询通知公告表列表' })
  @ApiResponse({ type: TableDataInfo<SysNotice> })
  @RequirePermission('system:notice:query')
  @Get('/list')
  async listNotice(
    @Query() q: QuerySysNoticeDto,
  ): Promise<TableDataInfo<SysNotice>> {
    return Result.TableData(await this.noticeService.selectNoticeList(q));
  }
  @ApiOperation({ summary: '导出通知公告表xlsx文件' })
  @RequirePermission('system:notice:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.noticeService.exportNotice(res);
  }
  @ApiOperation({ summary: '查询通知公告表详细' })
  @ApiResponse({ type: Result<SysNotice> })
  @RequirePermission('system:notice:query')
  @Get('/:noticeId')
  async getNotice(
    @Param('noticeId', ParseIntPipe) noticeId: number,
  ): Promise<Result<SysNotice>> {
    return Result.ok(await this.noticeService.selectNoticeByNoticeId(noticeId));
  }
  @ApiOperation({ summary: '新增通知公告表' })
  @ApiResponse({ type: Result<SysNotice> })
  @ApiBody({ type: CreateSysNoticeDto })
  @RequirePermission('system:notice:add')
  @Post('/')
  async addNotice(
    @Body() sysNotice: CreateSysNoticeDto,
    @Req() req,
  ): Promise<Result<SysNotice>> {
    sysNotice = {
      ...sysNotice,
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName,
    };
    return Result.ok(await this.noticeService.addNotice(sysNotice));
  }
  @ApiOperation({ summary: '修改通知公告表' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysNoticeDto })
  @RequirePermission('system:notice:edit')
  @Put('/')
  async updateNotice(
    @Body() sysNotice: UpdateSysNoticeDto,
    @Req() req,
  ): Promise<Result<any>> {
    sysNotice = {
      ...sysNotice,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.noticeService.updateNotice(sysNotice);
    return Result.ok('修改成功！');
  }
  @ApiOperation({ summary: '删除通知公告表' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:notice:remove')
  @Delete('/:ids')
  async delNotice(
    @Param('ids', ParseIntArrayPipe) noticeIds: number[],
  ): Promise<Result<any>> {
    const { count } =
      await this.noticeService.deleteNoticeByNoticeIds(noticeIds);
    return Result.toAjax(count);
  }
}
