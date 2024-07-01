import { IsOptional } from 'class-validator';
import { PageDomain } from './PageDomain';
import { ApiProperty } from '@nestjs/swagger';

export class queryDomain extends PageDomain {
  @ApiProperty({ description: '查询附加参数' })
  @IsOptional()
  params: { [key: string]: any } = {};
}
