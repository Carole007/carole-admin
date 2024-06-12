import { queryDomain } from "@/common/domain/queryDomain";
import { PageDomain } from "@/common/domain/PageDomain";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class queryDictTypeDto extends queryDomain { 
  @ApiProperty({description:"字典名称"})
  dictName: string | null
  @ApiProperty({description:"字典类型"})
  dictType: string | null
  @ApiProperty({description:"字典状态"})
  status: string | null
  @IsOptional()
  params: {
    beginTime: string | null
    endTime:string | null
  }
}