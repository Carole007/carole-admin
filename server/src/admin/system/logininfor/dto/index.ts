import { BaseDomain } from "@/common/domain/BaseDomain"
import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator"
import { queryDomain } from "@/common/domain/queryDomain";
/**@description 查询登录日志Dto */
export class QuerySysLogininforDto extends queryDomain {
      @ApiProperty({description:"用户账号"})
      @IsOptional()
      userName: string | null
      @ApiProperty({description:"登录IP地址"})
      @IsOptional()
      ipaddr: string | null
      @ApiProperty({description:"登录地点"})
      @IsOptional()
      loginLocation: string | null
      @ApiProperty({description:"浏览器类型"})
      @IsOptional()
      browser: string | null
      @ApiProperty({description:"操作系统"})
      @IsOptional()
      os: string | null
      @ApiProperty({description:"登录状态（0失败,1成功）"})
      @IsOptional()
      status: string | null
      @ApiProperty({description:"提示消息"})
      @IsOptional()
      msg: string | null
      @ApiProperty({ description: "登录时间排序 descending|ascending" })
      @IsOptional()     
      isAsc: string | null
}
/**@description 创建登录日志Dto */
export class CreateSysLogininforDto {
      @ApiProperty({description:"用户账号"})
      @IsOptional()
      @IsString()    
      userName?: string
      @ApiProperty({description:"登录IP地址"})
      @IsOptional()
      @IsString()    
      ipaddr?: string
      @ApiProperty({description:"登录地点"})
      @IsOptional()
      @IsString()    
      loginLocation?: string
      @ApiProperty({description:"浏览器类型"})
      @IsOptional()
      @IsString()    
      browser?: string
      @ApiProperty({description:"操作系统"})
      @IsOptional()
      @IsString()    
      os?: string
      @ApiProperty({description:"登录状态（0失败,1成功）"})
      @IsOptional()
      @IsString()    
      status?: string
      @ApiProperty({description:"提示消息"})
      @IsOptional()
      @IsString()    
      msg?: string
      @ApiProperty({description:"访问时间"})
      @IsOptional()
      @IsString()    
      loginTime?: string
}
/**@description 更新登录日志Dto */
export class UpdateSysLogininforDto {
      @ApiProperty({description:"访问ID"})
      @IsNotEmpty({ message: "访问ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      infoId: number
      @ApiProperty({description:"用户账号"})
      @IsOptional()
      @IsString()    
      userName?: string
      @ApiProperty({description:"登录IP地址"})
      @IsOptional()
      @IsString()    
      ipaddr?: string
      @ApiProperty({description:"登录地点"})
      @IsOptional()
      @IsString()    
      loginLocation?: string
      @ApiProperty({description:"浏览器类型"})
      @IsOptional()
      @IsString()    
      browser?: string
      @ApiProperty({description:"操作系统"})
      @IsOptional()
      @IsString()    
      os?: string
      @ApiProperty({description:"登录状态（0失败,1成功）"})
      @IsOptional()
      @IsString()    
      status?: string
      @ApiProperty({description:"提示消息"})
      @IsOptional()
      @IsString()    
      msg?: string
      @ApiProperty({description:"访问时间"})
      @IsOptional()
      @IsString()    
      loginTime?: string
}