import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import { Controller, Get, Post, Put, Delete, Query, Body, Param, ParseIntPipe, Inject, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { queryDictDataDto } from './dto/queryDictDataDto';
import { SysDictDataService } from './service/sys-dict-data.service';
import Result from '@/common/result/Result';
import { CreateDictDataDto } from './dto/createDictDataDto';
import { nowDate } from '@/common/utils';
import { updateDictDataDto } from './dto/updateDictDataDto';
import { Response } from 'express';


@ApiTags("字典数据")
@ApiBearerAuth()
@Controller('/system/dict/data')
export class DictDataController {


  @Inject()
  dictDataService: SysDictDataService
  @ApiOperation({ summary: "查询字典数据列表" })
  @Get("list")
  async listData(@Query() q: queryDictDataDto) {
    return Result.TableData(await this.dictDataService.selectDictDataList(q))
  }
  @ApiOperation({ summary: "导出xlsx文件" })
  @Get("export")
  async export(@Res() res: Response) {
    this.dictDataService.exportDictData(res)
  }
  @Get("/type/:type")
  @ApiOperation({ summary: "根据字典类型查询字典数据信息" })
  async getDicts(@Param("type") type: string) {
    if (!type) return Result.Validation("请传入字典类型")
    return Result.ok(await this.dictDataService.selectDictDataByDictType(type) || [])
  }
  @Get(":id")
  @ApiOperation({ summary: "查询字典数据详细" })
  async getData(@Param("id", ParseIntPipe) id: number) {
    return Result.ok(await this.dictDataService.selectDictDataDetail(id))
  }


  @ApiOperation({ summary: "新增字典数据" })
  @Post()
  async addData(@Body() dictData: CreateDictDataDto, @Req() req) {
    dictData.createTime = nowDate()
    dictData.updateTime = nowDate()
    dictData.createBy = req.user.userName
    dictData.updateBy = req.user.userName
    await this.dictDataService.addDictData(dictData)
    return Result.ok("新增成功！")
  }

  @ApiOperation({ summary: "修改字典数据" })
  @Put()
  async updateData(@Body() dictData: updateDictDataDto, @Req() req) {
    dictData.updateTime = nowDate()
    dictData.updateBy = req.user.userName
    await this.dictDataService.updateDictData(dictData)
    return Result.ok("修改成功！")
  }
  @ApiOperation({ summary: "删除字典数据" })
  @Delete(":dictCodes")
  async delData(@Param("dictCodes", ParseIntArrayPipe) dictCodes: number[]) {
    let { count } = await this.dictDataService.deleteDictData(dictCodes)
    return Result.toAjax(count)
  }

}