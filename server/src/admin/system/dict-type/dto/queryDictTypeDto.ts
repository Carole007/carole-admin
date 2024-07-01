import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class queryDictTypeDto extends queryDomain {
  @ApiProperty({ description: '字典名称' })
  @IsString()
  @IsOptional()
  dictName?: string | null;
  @ApiProperty({ description: '字典类型' })
  @IsString()
  @IsOptional()
  dictType?: string | null;
  @ApiProperty({ description: '字典状态' })
  @IsString()
  @IsOptional()
  status?: string | null;
  @IsOptional()
  params: {
    beginTime: string | null;
    endTime: string | null;
  };
}
