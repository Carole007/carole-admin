import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthService } from '@/common/service/auth/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private reflector: Reflector) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let req = context.switchToHttp().getRequest()
    let role = this.reflector.getAllAndOverride("role", [context.getClass(), context.getHandler()])
    //不需要鉴权
    if (role === undefined) return true
    //调用鉴权
    return this.authService.hasRole(role, req.userId)
  }
}
