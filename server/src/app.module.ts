import {
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';
import { AuthMiddleware } from './common/middleware/auth/auth.middleware';
import { AuthService } from './common/service/auth/auth.service';
import { Config } from './config';
import { PermissionGuard } from './common/guard/permission/permission.guard';
import { RoleGuard } from './common/guard/permission/role.guard';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import {
  AssertionErrorFilter,
  AuthorizationFilter,
  BadRequestFilter,
  ForbiddenExceptionFilter,
  GlobalErrorFilter,
  MulterErrFilter,
  NotFoundErrFilter,
  PayloadTooLargeFilter,
  ThrottlerExceptionFilter,
  ValidationExceptionFilter,
} from '@/common/filter/global-error.filter';
import { ValidationException } from './common/exception/ValidationException';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerCustomGuard } from './common/guard/throttler/throttler-custom.guard';
import { RemoveThrottleHeadersInterceptor } from './common/interceptors/remove-throttle-headers.interceptor';
import '@/common/utils/email';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './schedule';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';
import Result from './common/result/Result';
@Module({
  imports: [
    AdminModule,
    CommonModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'default',
          ttl: Config.rateLimit.ttl,
          limit: Config.rateLimit.limit,
        },
      ],
      storage:
        Config.rateLimit.storage === 'redis'
          ? new ThrottlerStorageRedisService({
            ...Config.redis,
            disconnectTimeout: 60 * 5 * 1000,
          })
          : null,
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [
    TasksService,
    AuthService,
    PermissionGuard,
    RoleGuard,
    {
      provide: APP_GUARD,
      useClass: ThrottlerCustomGuard,
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
      useClass: GlobalErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ThrottlerExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: PayloadTooLargeFilter,
    },
    {
      provide: APP_FILTER,
      useClass: AuthorizationFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ForbiddenExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: AssertionErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MulterErrFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundErrFilter,
    },
    {
      provide: APP_PIPE,
      useFactory() {
        return new ValidationPipe({
          whitelist: true, // 自动剔除非 DTO 类中的字段
          // forbidNonWhitelisted: true, // 如果存在非 DTO 类中的字段则抛出异常
          exceptionFactory: (errors: ValidationError[]) => {
            const messages = errors
              .map((error) => Object.values(error.constraints))
              .flat();
            return new ValidationException(`参数验证失败: ${messages[0]}`);
            // return new ValidationException(`参数验证失败: ${messages.join(', ')}`);
          },
        });
      },
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RemoveThrottleHeadersInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const demo:any = (req, res, next) => {
      if (Config.is_demo && req.method !== "GET") {
        return res.send(Result.Error("演示模式，不允许操作"));
      }
      else {
        next();
      }
    };
    const middlewares = [AuthMiddleware]
    if (Config.is_demo) { 
      middlewares.push(demo);
    }
    consumer
      .apply(...middlewares)
      .exclude('/login', '/logout', '/captchaImage')
      .forRoutes('*');
  }
}
