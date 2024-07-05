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
import { PostService } from './service/sys-post.service';
import {
  QuerySysPostDto,
  CreateSysPostDto,
  UpdateSysPostDto,
} from './dto/index';
import { Response } from 'express';
import { SysPost } from '@prismaClient';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
@ApiTags('岗位信息表')
@ApiBearerAuth()
@Controller('system/post')
export class SysPostController {
  constructor(private postService: PostService) {}
  @ApiOperation({ summary: '查询岗位信息表列表' })
  @ApiResponse({ type: TableDataInfo<SysPost> })
  @RequirePermission('system:post:query')
  @Get('/list')
  async listPost(@Query() q: QuerySysPostDto): Promise<TableDataInfo<SysPost>> {
    return Result.TableData(await this.postService.selectPostList(q));
  }
  @ApiOperation({ summary: '导出岗位信息表xlsx文件' })
  @RequirePermission('system:post:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.postService.exportPost(res);
  }
  @ApiOperation({ summary: '查询岗位信息表详细' })
  @ApiResponse({ type: Result<SysPost> })
  @RequirePermission('system:post:query')
  @Get('/:postId')
  async getPost(
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<Result<SysPost>> {
    return Result.ok(await this.postService.selectPostByPostId(postId));
  }
  @ApiOperation({ summary: '新增岗位信息表' })
  @ApiResponse({ type: Result<SysPost> })
  @ApiBody({ type: CreateSysPostDto })
  @RequirePermission('system:post:add')
  @Post('/')
  async addPost(
    @Body() sysPost: CreateSysPostDto,
    @Req() req,
  ): Promise<Result<SysPost>> {
    sysPost = {
      ...sysPost,
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName,
    };
    return Result.ok(await this.postService.addPost(sysPost));
  }
  @ApiOperation({ summary: '修改岗位信息表' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysPostDto })
  @RequirePermission('system:post:edit')
  @Put('/')
  async updatePost(
    @Body() sysPost: UpdateSysPostDto,
    @Req() req,
  ): Promise<Result<any>> {
    sysPost = {
      ...sysPost,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.postService.updatePost(sysPost);
    return Result.ok('修改成功！');
  }
  @ApiOperation({ summary: '删除岗位信息表' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:post:remove')
  @Delete('/:ids')
  async delPost(
    @Param('ids', ParseIntArrayPipe) postIds: number[],
  ): Promise<Result<any>> {
    const { count } = await this.postService.deletePostByPostIds(postIds);
    return Result.toAjax(count);
  }
}
