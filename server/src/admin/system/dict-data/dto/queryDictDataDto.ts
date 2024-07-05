import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class queryDictDataDto extends queryDomain {
  @ApiProperty({ description: '字典标签',required:false })
  @IsString()
  @IsOptional()
  dictLabel?: string | null;
  @ApiProperty({ description: '字典名称',required:false })
  @IsString()
  @IsOptional()
  dictType?: string | null;
  @ApiProperty({ description: '数据状态',required:false })
  @IsString()
  @IsOptional()
  status?: string | null;
}
