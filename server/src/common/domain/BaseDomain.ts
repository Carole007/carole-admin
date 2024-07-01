import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BaseDomain {
  @ApiProperty({ description: '创建者' })
  @IsString()
  @IsOptional()
  createBy?: string;
  @ApiProperty({ description: '创建时间' })
  @IsString()
  @IsOptional()
  createTime?: string;
  @ApiProperty({ description: '更新者' })
  @IsString()
  @IsOptional()
  updateBy?: string;
  @ApiProperty({ description: '更新时间' })
  @IsString()
  @IsOptional()
  updateTime?: string;
  @ApiProperty({ description: '备注' })
  @IsString()
  @IsOptional()
  remark?: string;
}
