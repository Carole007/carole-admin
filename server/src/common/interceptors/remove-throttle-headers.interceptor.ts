import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RemoveThrottleHeadersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    response.removeHeader('X-RateLimit-Limit');
    response.removeHeader('X-RateLimit-Remaining');
    response.removeHeader('X-RateLimit-Reset');
    response.removeHeader('Retry-After');
    return next.handle();
  }
}
