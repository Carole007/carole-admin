import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginBody {
  @ApiProperty({description: '用户名'})
  @IsNotEmpty({ message: '用户名不能为空！' })
  @MinLength(4, { message: '用户名格式不正确' })
  @IsString()
  username: string;
  @ApiProperty({description: '密码'})
  @IsNotEmpty({ message: '密码不能为空！' })
  @MinLength(5, { message: '密码格式不正确' })
  @IsString()
  password: string;
  @ApiProperty({description: '验证码', required:false})
  @IsString()
  @IsOptional()
  code?: string;
  @IsString()
  @IsOptional()
  @ApiProperty({description: '验证码uuid', required:false})
  uuid?: string;
}
