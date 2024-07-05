import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class queryDictTypeDto extends queryDomain {
  @ApiProperty({ description: '字典名称',required:false })
  @IsString()
  @IsOptional()
  dictName?: string | null;
  @ApiProperty({ description: '字典类型',required:false })
  @IsString()
  @IsOptional()
  dictType?: string | null;
  @ApiProperty({ description: '字典状态',required:false })
  @IsString()
  @IsOptional()
  status?: string | null;
  @ApiProperty({ description: '附加参数',required:false })
  @IsOptional()
  params: {
    beginTime: string | null;
    endTime: string | null;
  };
}
