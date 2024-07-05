import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询菜单管理Dto */
export class QuerySysMenuDto extends queryDomain {
  @ApiProperty({ description: '菜单名称',required:false })
  @IsOptional()
  menuName: string | null;
  @ApiProperty({ description: '显示顺序',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number | null;
  @ApiProperty({ description: '路由地址',required:false })
  @IsOptional()
  path: string | null;
  @ApiProperty({ description: '组件路径',required:false })
  @IsOptional()
  component: string | null;
  @ApiProperty({ description: '路由参数',required:false })
  @IsOptional()
  query: string | null;
  @ApiProperty({ description: '是否为外链（0否 1是）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isFrame: number | null;
  @ApiProperty({ description: '是否缓存（0不缓存 1缓存）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isCache: number | null;
  @ApiProperty({ description: '菜单类型（M目录 C菜单 F按钮）',required:false })
  @IsOptional()
  menuType: string | null;
  @ApiProperty({ description: '菜单状态（0隐藏 1显示）',required:false })
  @IsOptional()
  visible: string | null;
  @ApiProperty({ description: '菜单状态（0停用 1正常）',required:false })
  @IsOptional()
  status: string | null;
  @ApiProperty({ description: '权限标识',required:false })
  @IsOptional()
  perms: string | null;
  @ApiProperty({ description: '菜单图标',required:false })
  @IsOptional()
  icon: string | null;
}
/**@description 创建菜单管理Dto */
export class CreateSysMenuDto extends BaseDomain {
  @ApiProperty({ description: '菜单名称' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @IsString()
  menuName: string;
  @ApiProperty({ description: '父菜单ID',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  parentId?: number;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number;
  @ApiProperty({ description: '路由地址' })
  @IsNotEmpty({ message: '路由地址不能为空' })
  @IsString()
  path: string;
  @ApiProperty({ description: '组件路径',required:false })
  @IsOptional()
  @IsString()
  component?: string;
  @ApiProperty({ description: '路由参数',required:false })
  @IsOptional()
  @IsString()
  query?: string;
  @ApiProperty({ description: '是否为外链（0否 1是）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isFrame?: number;
  @ApiProperty({ description: '是否缓存（0不缓存 1缓存）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isCache?: number;
  @ApiProperty({ description: '菜单类型（M目录 C菜单 F按钮）',required:false })
  @IsOptional()
  @IsString()
  menuType?: string;
  @ApiProperty({ description: '菜单状态（0隐藏 1显示）',required:false })
  @IsOptional()
  @IsString()
  visible?: string;
  @ApiProperty({ description: '菜单状态（0停用 1正常）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '权限标识',required:false })
  @IsOptional()
  @IsString()
  perms?: string;
  @ApiProperty({ description: '菜单图标',required:false })
  @IsOptional()
  @IsString()
  icon?: string;
  @ApiProperty({ description: '创建者',required:false })
  @IsOptional()
  @IsString()
  createBy?: string;
  @ApiProperty({ description: '创建时间',required:false })
  @IsOptional()
  @IsString()
  createTime?: string;
  @ApiProperty({ description: '更新者',required:false })
  @IsOptional()
  @IsString()
  updateBy?: string;
  @ApiProperty({ description: '更新时间',required:false })
  @IsOptional()
  @IsString()
  updateTime?: string;
  @ApiProperty({ description: '备注',required:false })
  @IsOptional()
  @IsString()
  remark?: string;
}
/**@description 更新菜单管理Dto */
export class UpdateSysMenuDto extends BaseDomain {
  @ApiProperty({ description: '菜单ID' })
  @IsNotEmpty({ message: '菜单ID不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  menuId: number;
  @ApiProperty({ description: '菜单名称' })
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @IsString()
  menuName: string;
  @ApiProperty({ description: '父菜单ID',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  parentId?: number;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number;
  @ApiProperty({ description: '路由地址' })
  @IsNotEmpty({ message: '路由地址不能为空' })
  @IsString()
  path: string;
  @ApiProperty({ description: '组件路径',required:false })
  @IsOptional()
  @IsString()
  component?: string;
  @ApiProperty({ description: '路由参数',required:false })
  @IsOptional()
  @IsString()
  query?: string;
  @ApiProperty({ description: '是否为外链（0否 1是）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isFrame?: number;
  @ApiProperty({ description: '是否缓存（0不缓存 1缓存）',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  isCache?: number;
  @ApiProperty({ description: '菜单类型（M目录 C菜单 F按钮）',required:false })
  @IsOptional()
  @IsString()
  menuType?: string;
  @ApiProperty({ description: '菜单状态（0隐藏 1显示）',required:false })
  @IsOptional()
  @IsString()
  visible?: string;
  @ApiProperty({ description: '菜单状态（0停用 1正常）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '权限标识',required:false })
  @IsOptional()
  @IsString()
  perms?: string;
  @ApiProperty({ description: '菜单图标',required:false })
  @IsOptional()
  @IsString()
  icon?: string;
  @ApiProperty({ description: '创建者',required:false })
  @IsOptional()
  @IsString()
  createBy?: string;
  @ApiProperty({ description: '创建时间',required:false })
  @IsOptional()
  @IsString()
  createTime?: string;
  @ApiProperty({ description: '更新者',required:false })
  @IsOptional()
  @IsString()
  updateBy?: string;
  @ApiProperty({ description: '更新时间',required:false })
  @IsOptional()
  @IsString()
  updateTime?: string;
  @ApiProperty({ description: '备注',required:false })
  @IsOptional()
  @IsString()
  remark?: string;
}
