import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PageDomain {
  @ApiProperty({ description: '当前页码',required:false })
  @IsNumber()
  @IsOptional()
  @Transform((v) => +v.value)
  pageNum: number = 1;
  @ApiProperty({ description: '每页的数据条目', required:false })
  @IsNumber()
  @IsOptional()
  @Transform((v) => +v.value)
  pageSize: number = 10;
}
