import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import { Controller, Get, Req, Post, Put, Delete, Query, Body, Param, ParseIntPipe, Inject, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { queryDictTypeDto } from './dto/queryDictTypeDto';
import Result from '@/common/result/Result';
import { SysDictTypeService } from './service/sys-dict-type.service';
import { CreateDictTypeDto } from './dto/createDictTypeDto';
import { updateDictTypeDto } from './dto/updateDictTypeDto';
import { nowDateTime } from '@/common/utils';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { Response } from 'express';


@ApiTags("字典类型")
@ApiBearerAuth()
@Controller('/system/dict/type')
export class DictTypeController {

  @Inject()
  private readonly dictTypeService: SysDictTypeService;
  @ApiOperation({ summary: "查询字典类型列表" })
  @RequirePermission("system:dict:query")
  @Get("list")
  async listType(@Query() q: queryDictTypeDto) {
    return Result.TableData(await this.dictTypeService.selectDictTypeList(q))
  }

  @ApiOperation({ summary: "获取字典选择框列表" })
  @Get("optionselect")
  async optionselect() {
    return Result.ok(await this.dictTypeService.selectAllDictType())
  }

  @ApiOperation({ summary: "导出xlsx文件" })
  @Get("export")
  async export(@Res() res: Response) {
    this.dictTypeService.exportDictType(res)
  }
  @Get(":id")
  @ApiOperation({ summary: "查询字典类型详细" })
  async getType(@Param("id", ParseIntPipe) id: number) {
    return Result.ok(await this.dictTypeService.selectDictTypeDetail(id))
  }


  @ApiOperation({ summary: "新增字典类型" })
  @Post()
  async addType(@Body() dictType: CreateDictTypeDto, @Req() req) {
    dictType = {
      ...dictType,
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName
    }
    await this.dictTypeService.addDictType(dictType)
    return Result.ok("新增成功！")
  }

  @ApiOperation({ summary: "修改字典类型" })
  @Put()
  async updateType(@Body() dictType: updateDictTypeDto, @Req() req) {
    dictType = {
      ...dictType,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName
    }
    await this.dictTypeService.updateDictType(dictType)
    // 更新后刷新缓存
    await this.dictTypeService.refreshDictCache()
    return Result.ok("修改成功！")
  }

  @ApiOperation({ summary: "刷新字典缓存" })
  @Delete("refreshCache")
  async refreshCache() {
    await this.dictTypeService.refreshDictCache()
    return Result.ok()
  }


  @ApiOperation({ summary: "删除字典类型" })
  @Delete("/:ids")
  async delType(@Param("ids", ParseIntArrayPipe) ids: number[]) {
    let { count } = await this.dictTypeService.deleteDictType(ids)
    return Result.toAjax(count)
  }




}
