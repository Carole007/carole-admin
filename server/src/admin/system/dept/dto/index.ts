import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询部门管理Dto */
export class QuerySysDeptDto extends queryDomain {
  @ApiProperty({ description: '部门id',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  deptId: number | null;
  @ApiProperty({ description: '父部门',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  parentId: number | null;
  @ApiProperty({ description: '祖级列表',required:false })
  @IsOptional()
  ancestors: string | null;
  @ApiProperty({ description: '部门名称',required:false })
  @IsOptional()
  deptName: string | null;
  @ApiProperty({ description: '显示顺序',required:false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number | null;
  @ApiProperty({ description: '负责人',required:false })
  @IsOptional()
  leader: string | null;
  @ApiProperty({ description: '联系电话',required:false })
  @IsOptional()
  phone: string | null;
  @ApiProperty({ description: '邮箱',required:false })
  @IsOptional()
  email: string | null;
  @ApiProperty({ description: '部门状态（0停用,1正常）',required:false })
  @IsOptional()
  status: string | null;
  @ApiProperty({ description: '创建者',required:false })
  @IsOptional()
  createBy: string | null;
  @ApiProperty({ description: '更新者',required:false })
  @IsOptional()
  updateBy: string | null;
}
/**@description 创建部门管理Dto */
export class CreateSysDeptDto extends BaseDomain {
  @ApiProperty({ description: '父部门' })
  @IsNotEmpty({ message: '父部门不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  parentId: number;
  @ApiProperty({ description: '祖级列表',required:false })
  @IsOptional()
  @IsString()
  ancestors?: string;
  @ApiProperty({ description: '部门名称' })
  @IsNotEmpty({ message: '部门名称不能为空' })
  @IsString()
  deptName: string;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number;
  @ApiProperty({ description: '负责人',required:false })
  @IsOptional()
  @IsString()
  leader?: string;
  @ApiProperty({ description: '联系电话',required:false })
  @IsOptional()
  @IsString()
  phone?: string;
  @ApiProperty({ description: '邮箱',required:false })
  @IsOptional()
  @IsString()
  email?: string;
  @ApiProperty({ description: '部门状态（0停用,1正常）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
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
}
/**@description 更新部门管理Dto */
export class UpdateSysDeptDto extends BaseDomain {
  @ApiProperty({ description: '部门id' })
  @IsNotEmpty({ message: '部门id不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  deptId: number;
  @ApiProperty({ description: '祖级列表',required:false })
  @IsOptional()
  @IsString()
  ancestors?: string;
  @ApiProperty({ description: '部门名称' })
  @IsNotEmpty({ message: '部门名称不能为空' })
  @IsString()
  deptName: string;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number;
  @ApiProperty({ description: '负责人',required:false })
  @IsOptional()
  @IsString()
  leader?: string;
  @ApiProperty({ description: '联系电话',required:false })
  @IsOptional()
  @IsString()
  phone?: string;
  @ApiProperty({ description: '邮箱',required:false })
  @IsOptional()
  @IsString()
  email?: string;
  @ApiProperty({ description: '部门状态（0停用,1正常）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
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
}
