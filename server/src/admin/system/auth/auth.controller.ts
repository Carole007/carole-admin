import { Body, Controller, Get, Headers, Post, Req } from '@nestjs/common';
import { LoginBody } from '@/admin/system/auth/dto/LoginBody';
import { AuthService } from '@/common/service/auth/auth.service';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Constants } from '@/common/constant/Constants';
import { redisUtils } from '@/common/utils/redisUtils';
import { Throttle } from '@nestjs/throttler';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Throttle({
    default: {
      limit: 8,
      ttl: 1000 * 60 * 60,
    },
  })
  @Post('/login')
  @ApiOperation({ summary: '登录' })
  async login(@Body() loginBody: LoginBody, @Req() req) {
    const token = await this.authService.login(loginBody, req);
    return {
      ...Result.ok(),
      token,
    };
  }

  @ApiOperation({ summary: '退出登录' })
  @Throttle({
    default: {
      limit: 8,
      ttl: 1000 * 60 * 60,
    },
  })
  @Post('/logout')
  async logout(@Headers('authorization') token: string) {
    try {
      await redisUtils.del(Constants.LOGIN_TOKEN_KEY + token.slice(7));
    } catch (error) {
    } finally {
      return Result.ok();
    }
  }

  @ApiOperation({ summary: '获取用户信息，包括权限和角色' })
  @ApiBearerAuth()
  @Get('/getInfo')
  async getInfo(@Req() req) {
    const user = await this.authService.getUserInfo(req.userId);
    return {
      ...Result.ok(),
      user,
      roles: user.roles,
      permissions: user.permissions,
    };
  }

  @ApiOperation({ summary: '获取用户能访问的路由' })
  @ApiBearerAuth()
  @Get('/getRouters')
  async getRouters(@Req() req) {
    return Result.ok(await this.authService.getRouters(req.userId));
  }
}
