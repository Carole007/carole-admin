import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询部门管理Dto */
export class QuerySysDeptDto extends queryDomain {
  @ApiProperty({ description: '部门id' })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  deptId: number | null;
  @ApiProperty({ description: '父部门' })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  parentId: number | null;
  @ApiProperty({ description: '祖级列表' })
  @IsOptional()
  ancestors: string | null;
  @ApiProperty({ description: '部门名称' })
  @IsOptional()
  deptName: string | null;
  @ApiProperty({ description: '显示顺序' })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  orderNum: number | null;
  @ApiProperty({ description: '负责人' })
  @IsOptional()
  leader: string | null;
  @ApiProperty({ description: '联系电话' })
  @IsOptional()
  phone: string | null;
  @ApiProperty({ description: '邮箱' })
  @IsOptional()
  email: string | null;
  @ApiProperty({ description: '部门状态（0停用,1正常）' })
  @IsOptional()
  status: string | null;
  @ApiProperty({ description: '创建者' })
  @IsOptional()
  createBy: string | null;
  @ApiProperty({ description: '更新者' })
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
  @ApiProperty({ description: '祖级列表' })
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
  @ApiProperty({ description: '负责人' })
  @IsOptional()
  @IsString()
  leader?: string;
  @ApiProperty({ description: '联系电话' })
  @IsOptional()
  @IsString()
  phone?: string;
  @ApiProperty({ description: '邮箱' })
  @IsOptional()
  @IsString()
  email?: string;
  @ApiProperty({ description: '部门状态（0停用,1正常）' })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '创建者' })
  @IsOptional()
  @IsString()
  createBy?: string;
  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  @IsString()
  createTime?: string;
  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsString()
  updateBy?: string;
  @ApiProperty({ description: '更新时间' })
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
  @ApiProperty({ description: '祖级列表' })
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
  @ApiProperty({ description: '负责人' })
  @IsOptional()
  @IsString()
  leader?: string;
  @ApiProperty({ description: '联系电话' })
  @IsOptional()
  @IsString()
  phone?: string;
  @ApiProperty({ description: '邮箱' })
  @IsOptional()
  @IsString()
  email?: string;
  @ApiProperty({ description: '部门状态（0停用,1正常）' })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '创建者' })
  @IsOptional()
  @IsString()
  createBy?: string;
  @ApiProperty({ description: '创建时间' })
  @IsOptional()
  @IsString()
  createTime?: string;
  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsString()
  updateBy?: string;
  @ApiProperty({ description: '更新时间' })
  @IsOptional()
  @IsString()
  updateTime?: string;
}
