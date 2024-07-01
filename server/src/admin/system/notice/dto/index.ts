import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询通知公告表Dto */
export class QuerySysNoticeDto extends queryDomain {
  @ApiProperty({ description: '公告标题' })
  @IsOptional()
  noticeTitle: string | null;
  @ApiProperty({ description: '公告类型（1通知 2公告）' })
  @IsOptional()
  noticeType: string | null;
  @ApiProperty({ description: '公告状态（0关闭 1正常）' })
  @IsOptional()
  status: string | null;
}
/**@description 创建通知公告表Dto */
export class CreateSysNoticeDto extends BaseDomain {
  @ApiProperty({ description: '公告标题' })
  @IsNotEmpty({ message: '公告标题不能为空' })
  @IsString()
  noticeTitle: string;
  @ApiProperty({ description: '公告类型（1通知 2公告）' })
  @IsNotEmpty({ message: '公告类型（1通知 2公告）不能为空' })
  @IsString()
  noticeType: string;
  @ApiProperty({ description: '公告内容' })
  @IsOptional()
  @IsString()
  noticeContent?: string;
  @ApiProperty({ description: '公告状态（0关闭 1正常）' })
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
  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  remark?: string;
}
/**@description 更新通知公告表Dto */
export class UpdateSysNoticeDto extends BaseDomain {
  @ApiProperty({ description: '公告ID' })
  @IsNotEmpty({ message: '公告ID不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  noticeId: number;
  @ApiProperty({ description: '公告标题' })
  @IsNotEmpty({ message: '公告标题不能为空' })
  @IsString()
  noticeTitle: string;
  @ApiProperty({ description: '公告类型（1通知 2公告）' })
  @IsNotEmpty({ message: '公告类型（1通知 2公告）不能为空' })
  @IsString()
  noticeType: string;
  @ApiProperty({ description: '公告内容' })
  @IsOptional()
  @IsString()
  noticeContent?: string;
  @ApiProperty({ description: '公告状态（0关闭 1正常）' })
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
  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  remark?: string;
}
