import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询岗位信息表Dto */
export class QuerySysPostDto extends queryDomain {
  @ApiProperty({ description: '岗位编码' })
  @IsOptional()
  postCode: string | null;
  @ApiProperty({ description: '岗位名称' })
  @IsOptional()
  postName: string | null;
  @ApiProperty({ description: '显示顺序' })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  postSort: number | null;
  @ApiProperty({ description: '状态（0停用 1正常）' })
  @IsOptional()
  status: string | null;
}
/**@description 创建岗位信息表Dto */
export class CreateSysPostDto extends BaseDomain {
  @ApiProperty({ description: '岗位编码' })
  @IsNotEmpty({ message: '岗位编码不能为空' })
  @IsString()
  postCode: string;
  @ApiProperty({ description: '岗位名称' })
  @IsNotEmpty({ message: '岗位名称不能为空' })
  @IsString()
  postName: string;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  postSort: number;
  @ApiProperty({ description: '状态（0停用 1正常）' })
  @IsNotEmpty({ message: '状态（0停用 1正常）不能为空' })
  @IsString()
  status: string;
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
  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  remark?: string;
}
/**@description 更新岗位信息表Dto */
export class UpdateSysPostDto extends BaseDomain {
  @ApiProperty({ description: '岗位ID' })
  @IsNotEmpty({ message: '岗位ID不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  postId: number;
  @ApiProperty({ description: '岗位编码' })
  @IsNotEmpty({ message: '岗位编码不能为空' })
  @IsString()
  postCode: string;
  @ApiProperty({ description: '岗位名称' })
  @IsNotEmpty({ message: '岗位名称不能为空' })
  @IsString()
  postName: string;
  @ApiProperty({ description: '显示顺序' })
  @IsNotEmpty({ message: '显示顺序不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  postSort: number;
  @ApiProperty({ description: '状态（0停用 1正常）' })
  @IsNotEmpty({ message: '状态（0停用 1正常）不能为空' })
  @IsString()
  status: string;
  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsString()
  updateBy?: string;
  @ApiProperty({ description: '更新时间' })
  @IsOptional()
  @IsString()
  updateTime?: string;
  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  remark?: string;
}
