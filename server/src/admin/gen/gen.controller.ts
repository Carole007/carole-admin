import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { queryGenTableDto } from './dto/queryGenTableDto';
import { GenService } from '@/common/service/gen/gen.service';
import { queryDataBaseDto } from './dto/queryDatabaseDto';
import { isNumber } from 'class-validator';
import { Response } from 'express';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { RequireRole } from '@/common/decorator/require-role.decorator';
import { excuteSqlDto } from './dto/exucteSqlDto';
@ApiTags('代码生成')
@ApiBearerAuth()
@Controller('tool/gen')
export class GenController {
  constructor(private genService: GenService) {}

  @ApiOperation({ summary: '查询生成表数据' })
  @RequirePermission('tool:gen:query')
  @Get('/list')
  async listTable(@Query() q: queryGenTableDto) {
    return Result.TableData(await this.genService.listTable(q));
  }
  @ApiOperation({ summary: '查询db数据库列表' })
  @RequirePermission('tool:gen:query')
  @Get('/db/list')
  async listDbTable(@Query() q: queryDataBaseDto) {
    return Result.TableData(await this.genService.listDbTable(q));
  }

  @ApiOperation({ summary: '生成代码 返回压缩包' })
  @RequirePermission('tool:gen:code')
  @Get('/batchGenCode')
  genCode(
    @Query('tables', ParseArrayPipe) tables: string[],
    @Res() res: Response,
  ) {
    if (!tables.length || tables.some((v) => typeof v != 'string')) {
      return Result.BadRequest('参数错误！');
    }
    this.genService.genCode(tables, res);
  }
  @ApiOperation({ summary: '修改代码生成信息' })
  @RequirePermission('tool:gen:edit')
  @Put()
  async updateGenTable(@Body() info) {
    await this.genService.updateGenTable(info);
    return Result.ok();
  }
  @ApiOperation({ summary: '导入表' })
  @RequirePermission('tool:gen:import')
  @Post('/importTable')
  async importTable(@Query('tables', ParseArrayPipe) tables: string[]) {
    await this.genService.importTable(tables);
    return Result.ok();
  }

  @ApiOperation({ summary: '执行sql' })
  @RequireRole('admin')
  @Post('/excute')
  async excuteSql(@Body() excute: excuteSqlDto) {
    try {
      await this.genService.excute(excute.sql);
      return Result.ok(null, '执行成功！');
    } catch (error) {
      console.log(error);
      return Result.BadRequest('sql执行失败：' + error.message);
    }
  }

  @ApiOperation({ summary: '预览生成代码' })
  @RequirePermission('tool:gen:preview')
  @Get('/preview/:tableId')
  async previewTable(@Param('tableId', ParseIntPipe) tableId: number) {
    return Result.ok(await this.genService.previewTable(tableId));
  }

  @ApiOperation({ summary: '生成代码（自定义路径）' })
  @RequirePermission('tool:gen:code')
  @Get('/genCode/:tableNames')
  // 无用接口
  // async genCodeByPath(@Param('tableNames', ParseArrayPipe) tableNames: string[]) { }
  async genCodeByPath() {
    return Result.ok();
  }

  @ApiOperation({ summary: '同步数据库' })
  @RequirePermission('tool:gen:edit')
  @Get('synchDb/:tableName')
  async synchDb(@Param('tableName') tableName: string) {
    await this.genService.synchDb(tableName);
    return Result.ok('操作成功');
  }
  @ApiOperation({ summary: '查询表详细信息' })
  @RequirePermission('tool:gen:edit')
  @Get('/:id')
  async getGenTable(@Param('id') id: string) {
    const info = isNumber(+id)
      ? await this.genService.getTableInfoById(+id)
      : await this.genService.getTableInfoByTableName(id);
    if (!info) return Result.ok(null);
    const data = {
      info,
      rows: info.columns,
      tables: [info],
    };
    return Result.ok(data);
  }

  @ApiOperation({ summary: '删除表数据' })
  @RequirePermission('tool:gen:remove')
  @Delete('/:ids')
  async delTable(@Param('ids', ParseIntArrayPipe) ids: number[]) {
    await this.genService.delTable(ids);
    return Result.ok();
  }
}
