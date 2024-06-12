import { Constants } from '@/common/constant/Constants';
import { AuthorizationException } from '@/common/exception/AuthorizationException';
import { AuthService } from '@/common/service/auth/auth.service';
import { redisUtils } from '@/common/utils/redisUtils';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) { }
  async use(req: Request, res: Response, next: () => void) {
    let token = req.headers["authorization"]
    if (!token || token.length < 20 || !token.startsWith("Bearer ")) {
      throw new AuthorizationException("无效的token！")
    }
    token = token.slice(7)
    try {
      let { userId,tokenId } = await this.authService.verifyToken(token) as { userId: number,tokenId: string }
      if (!await redisUtils.get(Constants.LOGIN_TOKEN_KEY + tokenId)) throw new AuthorizationException("无效的token！")
      let userInfo = JSON.parse(await redisUtils.get(Constants.LOGIN_CACHE_TOKEN_KEY + userId) || null)
      if (!userInfo) throw new AuthorizationException("无效的token！")
      //@ts-ignore
      req.userId = userId
      //@ts-ignore
      req.token = token
      //@ts-ignore
      req.user = userInfo
      next();
    } catch (error) {
      throw new AuthorizationException("无效的token！")
    }
  }
}
