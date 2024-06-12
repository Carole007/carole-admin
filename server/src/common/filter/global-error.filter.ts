import * as assert from 'assert';
import * as path from 'path';
import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  NotFoundException, PayloadTooLargeException,
} from '@nestjs/common';
import { ValidationException } from '@/common/exception/ValidationException';
import Result from '@/common/result/Result';
import { Response } from 'express';
import { AuthorizationException } from '@/common/exception/AuthorizationException';

import { MulterError } from 'multer';
import { ThrottlerException } from '@nestjs/throttler';


/**
 * @desc 参数验证不通过
 */
@Catch(ValidationException)
export class ValidationExceptionFilter<T> implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.Validation(exception.message))
  }
}

/**
 * @desc 断言不通过
 */
@Catch(assert.AssertionError)
export class AssertionErrorFilter<T> implements ExceptionFilter {
  catch(exception: assert.AssertionError, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.Validation(exception.message))
  }
}

/**
 * @desc 身份验证不通过
 */
@Catch(AuthorizationException)
export class AuthorizationFilter<T> implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.Unauthorized(exception.message))
  }
}

/**
 * @desc 权限不足
 */
@Catch(ForbiddenException)
export class ForbiddenExceptionFilter<T> implements ExceptionFilter {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.Forbidden())
  }
}

/**
 * @desc 资源路径不存在
 */
@Catch(NotFoundException)
export class NotFoundErrFilter<T> implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.NotFound())
  }
}

/**
 * @desc 文件上传失败
 */
@Catch(MulterError)
export class MulterErrFilter<T> implements ExceptionFilter {
  catch(exception: MulterError, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    let errMap = {
      TypeError: "不允许上传的文件类型！",
      LIMIT_PART_COUNT: '部件太多',
      LIMIT_FILE_SIZE: '文件大小不通过',
      LIMIT_FILE_COUNT: '文件数量不通过',
      LIMIT_FIELD_KEY: '字段名太长',
      LIMIT_FIELD_VALUE: '字段值太长',
      LIMIT_FIELD_COUNT: '字段太多',
      LIMIT_UNEXPECTED_FILE: '不包含此表单字段',
      MISSING_FIELD_NAME: '字段名缺失'
    }
    res.send(Result.BadRequest("文件上传失败：" + (errMap?.[exception?.code] || exception?.message)))
  }
}

/**
 * @desc 文件大小超出限制
 */
@Catch(PayloadTooLargeException)
export class PayloadTooLargeFilter<T> implements ExceptionFilter {
  catch(exception: PayloadTooLargeException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.BadRequest("文件大小超出限制！"))
  }
}

/**
 * @desc badRquest错误处理
 */
@Catch(BadRequestException)
export class BadRequestFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    console.log(exception)
    res.send(Result.BadRequest(exception.message))
  }
}

/**
 * @desc ratelimit处理
 */
@Catch(ThrottlerException)
export class ThrottlerExceptionFilter<T> implements ExceptionFilter {
  catch(exception: ThrottlerException, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    res.send(Result.Error("您的ip访问频繁，请稍后重试！",429))
  }
}

/**
 * @desc 全局错误处理
 */
@Catch(Error)
export class GlobalErrorFilter<T> implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    let res = host.switchToHttp().getResponse<Response>()
    console.log(exception)
    res.send(Result.Error("error"))
  }
}
