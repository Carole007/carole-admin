import { MiddlewareConsumer, Module, NestModule, ValidationError, ValidationPipe } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';
import { AuthMiddleware } from './common/middleware/auth/auth.middleware';
import { AuthService } from './common/service/auth/auth.service';
import { Config } from './config';
import { PermissionGuard } from './common/guard/permission/permission.guard';
import { RoleGuard } from './common/guard/permission/role.guard';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import {
  AssertionErrorFilter, AuthorizationFilter, BadRequestFilter, ForbiddenExceptionFilter, GlobalErrorFilter, MulterErrFilter, NotFoundErrFilter, PayloadTooLargeFilter, ThrottlerExceptionFilter, ValidationExceptionFilter,
} from '@/common/filter/global-error.filter';
import { ValidationException } from './common/exception/ValidationException';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerBehindProxyGuard } from './common/guard/throttler/throttler-behind-proxy.guard';
import { RemoveThrottleHeadersInterceptor } from './common/interceptors/remove-throttle-headers.interceptor';
import "@/common/utils/emial"
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './schedule';
import Result from '@/common/result/Result';
@Module({
  imports: [
    AdminModule,
    CommonModule,
    ThrottlerModule.forRoot([
      {
        name: "default",
        ttl: Config.rateLimit.ttl,
        limit: Config.rateLimit.limit
      },
    ]),
    ScheduleModule.forRoot()],
  controllers: [],
  providers: [
    TasksService,
    AuthService,
    PermissionGuard,
    RoleGuard,
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalErrorFilter
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestFilter
    },
    {
      provide: APP_FILTER,
      useClass: ThrottlerExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: PayloadTooLargeFilter
    },
    {
      provide: APP_FILTER,
      useClass: AuthorizationFilter
    },
    {
      provide: APP_FILTER,
      useClass: ForbiddenExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: AssertionErrorFilter
    },
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: MulterErrFilter
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundErrFilter
    },
    {
      provide: APP_PIPE,
      useFactory() {
        return new ValidationPipe({
          whitelist: true, // 自动剔除非 DTO 类中的字段
          // forbidNonWhitelisted: true, // 如果存在非 DTO 类中的字段则抛出异常
          exceptionFactory: (errors: ValidationError[]) => {
            const messages = errors.map(error => Object.values(error.constraints)).flat();
            return new ValidationException(`参数验证失败: ${messages[0]}`);
            // return new ValidationException(`参数验证失败: ${messages.join(', ')}`);
          },
        })
      },
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RemoveThrottleHeadersInterceptor
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude("/login", "/logout", "/captchaImage").forRoutes("*")
  }
}
