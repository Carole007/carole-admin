import { HttpStatus } from "@/common/constant/HttpStatus";
import { ApiProperty } from "@nestjs/swagger";

export class TableDataInfo<T> {
  @ApiProperty({
    example: 0,
    description: "总记录数"
  })
  total: number;

  @ApiProperty({
    default: null,
    description: "列表数据"
  })
  rows: T[];

  @ApiProperty({
    example: 200,
    description: "消息状态码"
  })
  code: number;

  @ApiProperty({
    example: "查询成功",
    description: "消息内容"
  })
  msg: string;
  constructor(rows: T[], total: number, code?: number, msg?: string) {
    this.total = total;
    this.rows = rows;
    this.code = code || HttpStatus.SUCCESS;
    this.msg = msg || "查询成功";
  }
}
