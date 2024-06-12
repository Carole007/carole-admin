import { ApiProperty } from "@nestjs/swagger"

export class BaseDomain {
  @ApiProperty({description:"创建者"})
  createBy?: string
  @ApiProperty({description:"创建时间"})
  createTime?: string
  @ApiProperty({description:"更新者"})
  updateBy?: string
  @ApiProperty({description:"更新时间"})
  updateTime?: string
  @ApiProperty({description:"备注"})
  remark?:string
}