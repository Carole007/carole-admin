import { ApiProperty } from "@nestjs/swagger"

export class ResponseVo<T=null> {
  @ApiProperty({
    example: 200,
    description: "响应code"
  })
  code: number
  @ApiProperty({
    example: true,
    description: "请求是否成功处理"
  })
  "success": boolean
  @ApiProperty({
    example: "successful",
    description: "接口备注信息"
  })
  "msg": string
  @ApiProperty({
    default: null,
    description: "返回数据"
  })
  "data": T
  @ApiProperty({
    example: "2024-04-28 22:32:35",
    description: "处理时间"
  })
  "time": string
}

export class ResponseTableVo<T=any> {
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
}
