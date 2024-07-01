import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class excuteSqlDto {
  @ApiProperty({ description: '执行的sql' })
  @IsNotEmpty({ message: 'sql语句不能为空！' })
  @IsString({ message: '类型不正确！' })
  sql: string;
}
