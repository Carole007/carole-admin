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
import { MenuService } from './service/sys-menu.service';
import {
  QuerySysMenuDto,
  CreateSysMenuDto,
  UpdateSysMenuDto,
} from './dto/index';
import { Response } from 'express';
import { SysMenu } from '@prismaClient';
@ApiTags('菜单管理')
@ApiBearerAuth()
@Controller('system/menu')
export class SysMenuController {
  constructor(private menuService: MenuService) {}

  @ApiOperation({ summary: '获取树形菜单选项' })
  @RequirePermission('system:menu:query')
  @Get('/treeselect')
  async listMenuTree() {
    return Result.ok(await this.menuService.selectMenuTree());
  }
  @ApiOperation({ summary: '获取树形菜单选项' })
  @RequirePermission('system:menu:edit')
  @Get('/roleMenuTreeselect/:menuId')
  async roleMenuTreeselect(@Param('menuId', ParseIntPipe) menuId: number) {
    return {
      ...Result.ok(),
      ...(await this.menuService.roleMenuTreeselect(menuId)),
    };
  }

  @ApiOperation({ summary: '查询菜单管理列表' })
  @ApiResponse({ type: Result<SysMenu[]> })
  @RequirePermission('system:menu:query')
  @Get('/list')
  async listMenu(@Query() q: QuerySysMenuDto): Promise<Result<SysMenu[]>> {
    return Result.ok(await this.menuService.selectMenuList(q));
  }
  @ApiOperation({ summary: '导出菜单管理xlsx文件' })
  @RequirePermission('system:menu:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.menuService.exportMenu(res);
  }
  @ApiOperation({ summary: '查询菜单管理详细' })
  @ApiResponse({ type: Result<SysMenu> })
  @RequirePermission('system:menu:query')
  @Get('/:menuId')
  async getMenu(
    @Param('menuId', ParseIntPipe) menuId: number,
  ): Promise<Result<SysMenu>> {
    return Result.ok(await this.menuService.selectMenuByMenuId(menuId));
  }
  @ApiOperation({ summary: '新增菜单管理' })
  @ApiResponse({ type: Result<SysMenu> })
  @ApiBody({ type: CreateSysMenuDto })
  @RequirePermission('system:menu:add')
  @Post('/')
  async addMenu(
    @Body() sysMenu: CreateSysMenuDto,
    @Req() req,
  ): Promise<Result<SysMenu>> {
    sysMenu = {
      ...sysMenu,
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName,
    };
    return Result.ok(await this.menuService.addMenu(sysMenu));
  }
  @ApiOperation({ summary: '修改菜单管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysMenuDto })
  @RequirePermission('system:menu:edit')
  @Put('/')
  async updateMenu(
    @Body() sysMenu: UpdateSysMenuDto,
    @Req() req,
  ): Promise<Result<any>> {
    sysMenu = {
      ...sysMenu,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.menuService.updateMenu(sysMenu);
    return Result.ok('修改成功！');
  }
  @ApiOperation({ summary: '删除菜单管理' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:menu:remove')
  @Delete('/:ids')
  async delMenu(
    @Param('ids', ParseIntArrayPipe) menuIds: number[],
  ): Promise<Result<any>> {
    const { count } = await this.menuService.deleteMenuByMenuIds(menuIds);
    return Result.toAjax(count);
  }
}
