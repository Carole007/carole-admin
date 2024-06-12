import { ValidationException } from '@/common/exception/ValidationException';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntArrayPipe implements PipeTransform<string, number[]> {
  transform(value: string, metadata: ArgumentMetadata): number[] {
    // 将字符串按逗号分割成数组
    const array = value.split(',').filter(v => v !== '').map(item => parseInt(item.trim(), 10));
    // 检查是否所有元素都成功转换为数字
    if (array.some(Number.isNaN)) {
      throw new ValidationException('参数不正确');
    }
    return array;
  }
}
