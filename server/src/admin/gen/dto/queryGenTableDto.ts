import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class queryGenTableDto extends queryDomain {
  @ApiProperty({ description: '表名称' })
  @IsOptional()
  tableName: string | null;
  @ApiProperty({ description: '表描述' })
  @IsOptional()
  tableComment: string | null;
  @IsOptional()
  params: {
    beginTime: string | null;
    endTime: string | null;
  };
}
