import { HttpStatus } from '@/common/constant/HttpStatus';
import { TableDataInfo } from '../domain/TableDataInfo';
import { nowDateTime } from '@/common/utils';
import { ApiProperty } from '@nestjs/swagger';

export default class Result<T> {
  @ApiProperty({
    example: 200,
    description: "响应code"
  })
  code: number = HttpStatus.SUCCESS;
  @ApiProperty({
    example: true,
    description: "请求是否成功处理"
  })
  success: boolean = true;
  @ApiProperty({
    example: "成功",
    description: "接口备注信息"
  })
  msg: string = "成功";
  @ApiProperty({
    default: null,
    description: "返回数据"
  })
  data: T = null;
  @ApiProperty({
    example: "2024-04-28 22:32:35",
    description: "处理时间"
  })
  time: string | null = null;

  constructor(code: number = HttpStatus.SUCCESS, success: boolean = true, msg: string = "成功", data: T = null) {
    this.code = code;
    this.success = success;
    this.msg = msg;
    this.data = data;
    this.time = nowDateTime();
  }
  static Ok<K = null>(data: K = null, msg: string = "成功") {
    return new Result<K>(HttpStatus.SUCCESS, true, msg, data);
  }
  static ok<K = null>(data: K = null, msg: string = "成功") {
    return new Result<K>(HttpStatus.SUCCESS, true, msg, data);
  }
  static Error(msg: string = "error", code: number = HttpStatus.ERROR) {
    return new Result(code, false, msg, null);
  }

  static BadRequest(msg: string = "bad request",) {
    return new Result(HttpStatus.BAD_REQUEST, false, msg, null);
  }

  static NotFound(msg: string = "notFound") {
    return Result.Error(msg, HttpStatus.NOT_FOUND);
  }

  static Unauthorized(msg: string = "身份校验不通过！") {
    return Result.Error(msg, HttpStatus.UNAUTHORIZED);
  }

  static Forbidden(msg: string = "您没有权限！") {
    return Result.Error(msg, HttpStatus.FORBIDDEN);
  }

  static Validation(msg: string = "参数不正确!") {
    return Result.Error(msg, HttpStatus.Validation);
  }

  static Frequent(msg: string = "您的ip请求过于频繁!") {
    return Result.Error(msg, HttpStatus.FREQUENT_REQUESTS);
  }

  static toAjax(affectRows: number) {
    return affectRows > 0 ? Result.ok(null, "操作成功！") : Result.Error("操作失败！")
  }

  static TableData<L = any>(data: { rows: L[], total: number }) {
    return new TableDataInfo<L>(data.rows, data.total, HttpStatus.SUCCESS, "查询成功")
  }
}
