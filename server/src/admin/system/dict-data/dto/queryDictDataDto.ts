import { queryDomain } from "@/common/domain/queryDomain";
import { ApiProperty } from "@nestjs/swagger";

export class queryDictDataDto extends queryDomain { 
  @ApiProperty({description:"字典标签"})
  dictLabel: string | null
  @ApiProperty({description:"字典名称"})
  dictType: string | null
  @ApiProperty({description:"数据状态"})
  status: string | null
}