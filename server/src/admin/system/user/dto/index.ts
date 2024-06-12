import { BaseDomain } from "@/common/domain/BaseDomain"
import { ApiProperty } from "@nestjs/swagger"
import { Transform } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, IsOptional, MinLength} from "class-validator"
import { queryDomain } from "@/common/domain/queryDomain";
/**@description 查询用户管理Dto */
export class QuerySysUserDto extends queryDomain {
      @ApiProperty({description:"部门ID"})
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      deptId: number | null
      @ApiProperty({description:"用户账号"})
      @IsOptional()
      userName: string | null
      @ApiProperty({description:"用户昵称"})
      @IsOptional()
      nickName: string | null
      @ApiProperty({description:"用户类型（00系统用户）"})
      @IsOptional()
      userType: string | null
      @ApiProperty({description:"用户邮箱"})
      @IsOptional()
      email: string | null
      @ApiProperty({description:"手机号码"})
      @IsOptional()
      phonenumber: string | null
      @ApiProperty({description:"用户性别（0男 1女 2未知）"})
      @IsOptional()
      sex: string | null
      @ApiProperty({description:"头像地址"})
      @IsOptional()
      avatar: string | null
      @ApiProperty({description:"密码"})
      @IsOptional()
      password: string | null
      @ApiProperty({description:"帐号状态（0停用,1正常 ）"})
      @IsOptional()
      status: string | null
      @ApiProperty({description:"最后登录IP"})
      @IsOptional()
      loginIp: string | null
}
/**@description 创建用户管理Dto */
export class CreateSysUserDto  extends BaseDomain {
      @ApiProperty({description:"部门ID"})
      @IsOptional()
      @Transform((v) => +v.value)
      @IsNumber()
      deptId?: number
      @ApiProperty({description:"用户账号"})
      @IsNotEmpty({ message: "用户账号不能为空" })
      @IsString()    
      userName: string
      @ApiProperty({description:"用户昵称"})
      @IsNotEmpty({ message: "用户昵称不能为空" })
      @IsString()    
      nickName: string
      @ApiProperty({description:"用户类型（00系统用户）"})
      @IsOptional()
      @IsString()    
      userType?: string
      @ApiProperty({description:"用户邮箱"})
      @IsOptional()
      @IsString()    
      email?: string
      @ApiProperty({description:"手机号码"})
      @IsOptional()
      @IsString()    
      phonenumber?: string
      @ApiProperty({description:"用户性别（0男 1女 2未知）"})
      @IsOptional()
      @IsString()    
      sex?: string
      @ApiProperty({description:"头像地址"})
      @IsOptional()
      @IsString()    
      avatar?: string
      @ApiProperty({description:"密码"})
      @IsOptional()
      @IsString()    
      password?: string
      @ApiProperty({description:"帐号状态（0停用,1正常 ）"})
      @IsOptional()
      @IsString()    
      status?: string
      @ApiProperty({description:"最后登录IP"})
      @IsOptional()
      @IsString()    
      loginIp?: string
      @ApiProperty({description:"最后登录时间"})
      @IsOptional()
      @IsString()    
      loginDate?: string
      @ApiProperty({description:"创建者"})
      @IsOptional()
      @IsString()    
      createBy?: string
      @ApiProperty({description:"创建时间"})
      @IsOptional()
      @IsString()    
      createTime?: string
      @ApiProperty({description:"更新者"})
      @IsOptional()
      @IsString()    
      updateBy?: string
      @ApiProperty({description:"更新时间"})
      @IsOptional()
      @IsString()    
      updateTime?: string
      @ApiProperty({description:"备注"})
      @IsOptional()
      @IsString()    
      remark?: string
      @ApiProperty({description:"角色ids"})
      @IsOptional()
      roleIds?: number[]
      @ApiProperty({description:"部门ids"})
      @IsOptional()
      postIds?: number[]
}
/**@description 更新用户管理Dto */
export class UpdateSysUserDto  extends BaseDomain {
      @ApiProperty({description:"用户ID"})
      @IsNotEmpty({ message: "用户ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      userId: number
      @ApiProperty({description:"用户账号"})
      @IsNotEmpty({ message: "用户账号不能为空" })
      @IsString()    
      userName: string
      @ApiProperty({description:"用户昵称"})
      @IsNotEmpty({ message: "用户昵称不能为空" })
      @IsString()    
      nickName: string
      @ApiProperty({description:"用户类型（00系统用户）"})
      @IsOptional()
      @IsString()    
      userType?: string
      @ApiProperty({description:"用户邮箱"})
      @IsOptional()
      @IsString()    
      email?: string
      @ApiProperty({description:"手机号码"})
      @IsOptional()
      @IsString()    
      phonenumber?: string
      @ApiProperty({description:"用户性别（0男 1女 2未知）"})
      @IsOptional()
      @IsString()    
      sex?: string
      @ApiProperty({description:"头像地址"})
      @IsOptional()
      @IsString()    
      avatar?: string
      @ApiProperty({description:"帐号状态（0停用,1正常 ）"})
      @IsOptional()
      @IsString()    
      status?: string
      @ApiProperty({description:"最后登录IP"})
      @IsOptional()
      @IsString()    
      loginIp?: string
      @ApiProperty({description:"最后登录时间"})
      @IsOptional()
      @IsString()    
      loginDate?: string
      @ApiProperty({description:"更新者"})
      @IsOptional()
      @IsString()    
      updateBy?: string
      @ApiProperty({description:"更新时间"})
      @IsOptional()
      @IsString()    
      updateTime?: string
      @ApiProperty({description:"备注"})
      @IsOptional()
      @IsString()    
      remark?: string
      @ApiProperty({description:"角色ids"})
      @IsOptional()
      roleIds?: number[]
      @ApiProperty({description:"部门ids"})
      @IsOptional()
      postIds?: number[]
      @ApiProperty({description:"角色"})
      @IsOptional()
      roles?: object[]
      @ApiProperty({description:"部门"})
      @IsOptional()
      posts?: object[]
}


/**@description 更新用户状态 */
export class UpdateSysUserStatusDto  extends BaseDomain {
      @ApiProperty({description:"用户ID"})
      @IsNotEmpty({ message: "用户ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      userId?: number
      @ApiProperty({description:"帐号状态（0停用,1正常 ）"})
      @IsOptional()
      @IsNotEmpty({message:"请传入状态"})   
      status?: string
}
/**@description 重置密码 */
export class resetPasswordDto  extends BaseDomain {
      @ApiProperty({description:"用户ID"})
      @IsNotEmpty({ message: "用户ID不能为空" })
      @Transform((v) => +v.value)
      @IsNumber()
      userId?: number
      @ApiProperty({ description: "密码" })
      @IsNotEmpty({ message: "密码不能为空" })
      @MinLength(6, {message: "密码长度不能小于6"})
      @IsOptional()
      @IsString()    
      password?: string
}



/**@description 修改用户个人信息 */
export class updateProfileDto {
      @ApiProperty({ description: "用户昵称" })
      @IsNotEmpty({ message: "用户昵称不能为空" })
      @IsString()
      nickName: string
      @ApiProperty({ description: "用户邮箱" })
      @IsNotEmpty({message:"邮箱不能为空"})
      @IsString()
      email?: string
      @ApiProperty({ description: "手机号码" })
      @IsNotEmpty({message:"手机号码不能为空"})
      @IsString()
      phonenumber?: string
      @ApiProperty({ description: "用户性别（0男 1女 2未知）" })
      @IsOptional()
      @IsString()
      sex?: string
}