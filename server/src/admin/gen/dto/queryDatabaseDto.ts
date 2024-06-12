import { queryDomain } from "@/common/domain/queryDomain";
import { ApiProperty } from "@nestjs/swagger";

export class queryDataBaseDto extends queryDomain { 
  @ApiProperty({description:"表名称"})
  tableName: string | null
  @ApiProperty({description:"表描述"})
  tableComment: string | null
}