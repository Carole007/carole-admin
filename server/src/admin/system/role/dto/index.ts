import { BaseDomain } from "@/common/domain/BaseDomain"
import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsArray } from "class-validator"
import { queryDomain } from "@/common/domain/queryDomain";
/**@description 查询角色管理Dto */
export class QuerySysRoleDto extends queryDomain {
      @ApiProperty({ description: "角色名称" })
      @IsOptional()
      roleName: string | null
      @ApiProperty({ description: "角色权限字符串" })
      @IsOptional()
      roleKey: string | null
      @ApiProperty({ description: "显示顺序" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      roleSort: number | null
      @ApiProperty({ description: "数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限 5：仅个人权限）" })
      @IsOptional()
      dataScope: string | null
      @ApiProperty({ description: "菜单树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      menuCheckStrictly: number | null
      @ApiProperty({ description: "部门树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      deptCheckStrictly: number | null
      @ApiProperty({ description: "角色状态（0停用 1正常）" })
      @IsOptional()
      status: string | null
}
/**@description 创建角色管理Dto */
export class CreateSysRoleDto extends BaseDomain {
      @ApiProperty({ description: "角色名称" })
      @IsNotEmpty({ message: "角色名称不能为空" })
      @IsString()
      roleName: string
      @ApiProperty({ description: "角色权限字符串" })
      @IsNotEmpty({ message: "角色权限字符串不能为空" })
      @IsString()
      roleKey: string
      @ApiProperty({ description: "显示顺序" })
      @IsNotEmpty({ message: "显示顺序不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      roleSort: number
      @ApiProperty({ description: "数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）" })
      @IsOptional()
      @IsString()
      dataScope?: string
      @ApiProperty({ description: "菜单树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      menuCheckStrictly?: number
      @ApiProperty({ description: "部门树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      deptCheckStrictly?: number
      @ApiProperty({ description: "角色状态（0停用 1正常）" })
      @IsNotEmpty({ message: "角色状态（0停用 1正常）不能为空" })
      @IsString()
      status: string
      @ApiProperty({ description: "创建者" })
      @IsOptional()
      @IsString()
      createBy?: string
      @ApiProperty({ description: "创建时间" })
      @IsOptional()
      @IsString()
      createTime?: string
      @ApiProperty({ description: "更新者" })
      @IsOptional()
      @IsString()
      updateBy?: string
      @ApiProperty({ description: "更新时间" })
      @IsOptional()
      @IsString()
      updateTime?: string
      @ApiProperty({ description: "备注" })
      @IsOptional()
      @IsString()
      remark?: string
      @ApiProperty({ description: "菜单权限" })
      @IsArray()
      menuIds: number[]
      @ApiProperty({ description: "部门权限" })
      @IsOptional()
      deptIds?: number[]
}
/**@description 更新角色管理Dto */
export class UpdateSysRoleDto extends BaseDomain {
      @ApiProperty({ description: "角色ID" })
      @IsNotEmpty({ message: "角色ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      roleId: number
      @ApiProperty({ description: "角色名称" })
      @IsNotEmpty({ message: "角色名称不能为空" })
      @IsString()
      roleName: string
      @ApiProperty({ description: "角色权限字符串" })
      @IsNotEmpty({ message: "角色权限字符串不能为空" })
      @IsString()
      roleKey: string
      @ApiProperty({ description: "显示顺序" })
      @IsNotEmpty({ message: "显示顺序不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      roleSort: number
      @ApiProperty({ description: "数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）" })
      @IsOptional()
      @IsString()
      dataScope?: string
      @ApiProperty({ description: "菜单树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      menuCheckStrictly?: number
      @ApiProperty({ description: "部门树选择项是否关联显示" })
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      deptCheckStrictly?: number
      @ApiProperty({ description: "角色状态（0停用 1正常）" })
      @IsNotEmpty({ message: "角色状态（0停用 1正常）不能为空" })
      @IsString()
      status: string
      @ApiProperty({ description: "创建时间" })
      @IsOptional()
      @IsString()
      createTime?: string
      @ApiProperty({ description: "更新者" })
      @IsOptional()
      @IsString()
      updateBy?: string
      @ApiProperty({ description: "更新时间" })
      @IsOptional()
      @IsString()
      updateTime?: string
      @ApiProperty({ description: "备注" })
      @IsOptional()
      @IsString()
      remark?: string
      @ApiProperty({ description: "菜单权限" })
      @IsOptional()
      @IsArray()
      menuIds: number[]
      @ApiProperty({ description: "部门权限" })
      @IsOptional()
      @IsArray()
      deptIds: number[]
}



/**@description 更新角色状态管理Dto */
export class UpdateSysRoleStatusDto {
      @ApiProperty({ description: "角色ID" })
      @IsNotEmpty({ message: "角色ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      roleId?: number
      @ApiProperty({ description: "角色状态（0停用 1正常）" })
      @IsNotEmpty({ message: "角色状态（0停用 1正常）不能为空" })
      @IsString()
      status: string
}


/**@description 查询授权角色用户管理Dto */
export class QueryAllocatedListDto extends queryDomain { 
      @IsNotEmpty({ message: "角色ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      roleId:number
      @IsOptional()
      userName?: string
      @IsOptional()
      phoneNumber?:string
}