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
import { RoleService } from './service/sys-role.service';
import {
  QuerySysRoleDto,
  CreateSysRoleDto,
  UpdateSysRoleDto,
  UpdateSysRoleStatusDto,
  QueryAllocatedListDto,
} from './dto/index';
import { Response } from 'express';
import { SysRole } from '@prismaClient';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
import { DeptService } from '../dept/service/sys-dept.service';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { RequireRole } from '@/common/decorator/require-role.decorator';
@ApiTags('角色管理')
@ApiBearerAuth()
@Controller('system/role')
export class SysRoleController {
  constructor(
    private roleService: RoleService,
    private deptService: DeptService,
    private prisma: PrismaService,
  ) {}
  @ApiOperation({ summary: '查询角色管理列表' })
  @ApiResponse({ type: TableDataInfo<SysRole> })
  @RequirePermission('system:role:query')
  @Get('/list')
  async listRole(@Query() q: QuerySysRoleDto): Promise<TableDataInfo<SysRole>> {
    return Result.TableData(await this.roleService.selectRoleList(q));
  }

  @ApiOperation({ summary: '查询属于角色的用户管理列表' })
  @RequirePermission('system:role:query')
  @Get('/authUser/allocatedList')
  async listAllocatedList(@Query() q: QueryAllocatedListDto) {
    return Result.TableData(await this.roleService.allocatedList(q));
  }

  @ApiOperation({ summary: '查询不属于角色的用户管理列表' })
  @RequirePermission('system:role:query')
  @Get('authUser/unallocatedList')
  async listUnallocatedList(@Query() q: QueryAllocatedListDto) {
    return Result.TableData(await this.roleService.unallocatedList(q));
  }

  @ApiOperation({ summary: '批量添加用户到该角色' })
  @RequirePermission('system:role:edit')
  @Put('authUser/selectAll')
  async addAllRoleUser(
    @Query('roleId', ParseIntPipe) roleId: number,
    @Query('userIds', ParseIntArrayPipe) userIds: number[],
  ) {
    await this.roleService.addRoleUser(roleId, userIds);
    return Result.ok();
  }

  @ApiOperation({ summary: '批量取消用户该角色' })
  @RequirePermission('system:role:edit')
  @Put('authUser/cancelAll')
  async cancelAllRoleUser(
    @Query('roleId', ParseIntPipe) roleId: number,
    @Query('userIds', ParseIntArrayPipe) userIds: number[],
  ) {
    await this.roleService.cancelRoleUser(roleId, userIds);
    return Result.ok();
  }

  @ApiOperation({ summary: '取消单个用户该角色' })
  @RequirePermission('system:role:edit')
  @Put('authUser/cancel')
  async cancelRoleUser(
    @Body('roleId', ParseIntPipe) roleId: number,
    @Body('userId', ParseIntPipe) userIds: number,
  ) {
    await this.roleService.cancelRoleUser(roleId, [userIds]);
    return Result.ok();
  }

  @ApiOperation({ summary: '导出角色管理xlsx文件' })
  @RequirePermission('system:role:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.roleService.exportRole(res);
  }

  @ApiOperation({ summary: '获取部门树' })
  @RequirePermission('system:role:edit')
  @Get('/deptTree/:roleId')
  async getDeptTrees(@Param('roleId', ParseIntPipe) roleId: number) {
    const depts = await this.deptService.getDeptTree();
    const checkedKeys = (
      await this.prisma.sysRoleDept.findMany({
        where: {
          roleId,
        },
      })
    )
      .map((v) => v.deptId)
      .filter((v) => !hasChildren(depts, v));
    function hasChildren(arr, id) {
      for (const item of arr) {
        if (item.id === id) {
          return item.children.length > 0;
        } else {
          const r = hasChildren(item.children, id);
          if (r !== null) return r;
        }
      }
      return null;
    }
    return {
      ...Result.ok(),
      depts,
      checkedKeys,
    };
  }

  @ApiOperation({ summary: '查询角色管理详细' })
  @ApiResponse({ type: Result<SysRole> })
  @RequirePermission('system:role:query')
  @Get('/:roleId')
  async getRole(
    @Param('roleId', ParseIntPipe) roleId: number,
  ): Promise<Result<SysRole>> {
    return Result.ok(await this.roleService.selectRoleByRoleId(roleId));
  }
  @ApiOperation({ summary: '新增角色管理' })
  @ApiResponse({ type: Result<SysRole> })
  @ApiBody({ type: CreateSysRoleDto })
  @RequirePermission('system:role:add')
  @Post('/')
  async addRole(
    @Body() sysRole: CreateSysRoleDto,
    @Req() req,
  ): Promise<Result<SysRole>> {
    sysRole = {
      ...sysRole,
      dataScope: '5', //自定义权限
      createTime: nowDateTime(),
      updateTime: nowDateTime(),
      createBy: req.user?.userName,
      updateBy: req.user?.userName,
    };
    return Result.ok(await this.roleService.addRole(sysRole));
  }
  @ApiOperation({ summary: '修改角色管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysRoleDto })
  @RequirePermission('system:role:edit')
  @Put('/')
  async updateRole(
    @Body() sysRole: UpdateSysRoleDto,
    @Req() req,
  ): Promise<Result<any>> {
    delete sysRole.dataScope;
    sysRole = {
      ...sysRole,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.roleService.updateRole(sysRole);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '分配用户角色' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysRoleDto })
  @RequireRole('admin')
  @Put('/dataScope')
  async dataScope(
    @Body() sysRole: UpdateSysRoleDto,
    @Req() req,
  ): Promise<Result<any>> {
    sysRole = {
      ...sysRole,
      updateTime: nowDateTime(),
      updateBy: req.user?.userName,
    };
    await this.roleService.dataScope(sysRole);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '修改角色状态' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateSysRoleDto })
  @RequirePermission('system:role:edit')
  @Put('/changeStatus')
  async updateRoleStatus(
    @Body() sysRole: UpdateSysRoleStatusDto,
  ): Promise<Result<any>> {
    await this.roleService.updateStatus(sysRole);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除角色管理' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:role:remove')
  @Delete('/:ids')
  async delRole(
    @Param('ids', ParseIntArrayPipe) roleIds: number[],
  ): Promise<Result<any>> {
    const { count } = await this.roleService.deleteRoleByRoleIds(roleIds);
    return Result.toAjax(count);
  }
}
