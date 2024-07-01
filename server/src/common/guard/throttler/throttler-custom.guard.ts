import { ThrottlerGuard } from '@nestjs/throttler';
import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { THROTTLE_USER_KEY } from '@/common/decorator/throttle-user';

@Injectable()
export class ThrottlerCustomGuard extends ThrottlerGuard {
  @Inject()
  protected reflector: Reflector;
  protected generateKey(
    context: ExecutionContext,
    suffix: string,
    name: string,
  ): string {
    const req = context.switchToHttp().getRequest();
    const isThrottleUser = this.reflector.getAllAndOverride<boolean>(
      THROTTLE_USER_KEY,
      [context.getClass(), context.getHandler()],
    );
    return isThrottleUser && req.userId !== undefined
      ? `rate-limit:${context.getClass().name}-${context.getHandler().name}-${name}-user-${req.userId}`
      : `rate-limit:${context.getClass().name}-${context.getHandler().name}-${name}-ip-${req.ips.length ? req.ips[0] : req.ip}`;
  }
}
