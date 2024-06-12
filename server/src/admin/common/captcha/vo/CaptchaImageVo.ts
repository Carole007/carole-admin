import { ApiProperty } from "@nestjs/swagger"

class Data {
  @ApiProperty({
    example: true,
    description: "验证码是否启用"
  })
  "captchaEnabled": boolean
  @ApiProperty({
    example: "<svg>.....</svg>",
    description: "接口图片svg格式"
  })
  "img": string
  @ApiProperty({
    example: "14196d31-2bdf-4a42-b34c-eb771556e10e",
    description: "接口uuid，验证需要"
  })
  "uuid": string
}

export default class CaptchaImageVo {
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
    type:Data,
    description: "返回数据"
  })
  "data": Data
  @ApiProperty({
    example: "2024-04-28 22:32:35",
    description: "处理时间"
  })
  "time": string
}

