import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class queryGenTableDto extends queryDomain {
  @ApiProperty({ description: '表名称',required:false })
  @IsOptional()
  tableName: string | null;
  @ApiProperty({ description: '表描述',required:false })
  @IsOptional()
  tableComment: string | null;
  @IsOptional()
  params: {
    beginTime: string | null;
    endTime: string | null;
  };
}
