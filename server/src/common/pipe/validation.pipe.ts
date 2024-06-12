import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import { ValidationException } from '@/common/exception/ValidationException';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object,{});
    if (errors.length > 0) {
      let error = Object.values(errors[0].constraints)[0]
      throw new ValidationException(error);
    }
    return object;
  }
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
