import { ApiProperty } from "@nestjs/swagger"

export class queryMenuDto { 
  @ApiProperty({description:"菜单名称"})
  menuName: string | null
  @ApiProperty({description:"菜单状态"})
  status:string | null
}