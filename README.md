<div  align="center">
 <img src="assets/68747470733a2f2f6e6573746a732e636f6d2f6c6f676f2d736d616c6c2d6772616469656e742e37363631363430352e737667.svg" alt="68747470733a2f2f6e6573746a732e636f6d2f6c6f676f2d736d616c6c2d6772616469656e742e37363631363430352e737667" style="width: 25%;" />
 <h1 >Carole-Admin</h1>
    <h3 >一款基于 Nestjs+Vue前后端分离的后台框架</h3>
</div>

# 介绍

## 平台简介

`carole-admin` 是一款[Nestjs](https://nestjs.com/)+[Prisma](https://www.prisma.io/)+[Vue](https://vuejs.org/)+[Vite](https://vitejs.dev/)前后端分离的全栈快速开发平台, 前端基于[若依](https://github.com/yangzongzhuan/RuoYi-Vue3)。

- 前端采用[Vue3](https://vuejs.org/)、[Element-Plus](https://element-plus.org/)、[Vite](https://vitejs.dev/)。
- 后端采用[Nest](https://nestjs.com/)、[Prisma](https://www.prisma.io/)、[ioredis](https://github.com/redis/ioredis) & [Jwt](https://github.com/auth0/node-jsonwebtoken)。
- 权限认证使用[Jwt](https://github.com/auth0/node-jsonwebtoken)，支持多终端认证系统。
- 支持加载动态权限菜单，多方式轻松权限控制。
- 支持接口限流
- 高效率开发，使用代码生成器可以一键生成前后端代码。



## 项目

> 演示地址：[https://carole.top](https://carole.top)
>
> 默认有两个用户： admin的密码为carole test的密码为123456
>
> github: https://github.com/Carole007/carole-admin 
>
> gitee: https://gitee.com/Carole007/carole-admin



## 环境

- nodejs: v20.12.0
- mysql: 8.0.12
- redis


## 开始

```bash
# 克隆项目
git clone https://github.com/Carole007/carole-admin.git

# 进入项目目录
cd carole-admin/server

# 安装依赖
npm i  

# 导入sql

# 启动redis

# 修改server/src/里面的.env数据库连接配置，以及config.ts里面的redis连接配置，文件上传路径。

# 启动服务
npm run start:dev
```



## 内置功能

1. 用户管理：用户是系统操作者，该功能主要完成系统用户配置。

2. 部门管理：配置系统组织机构。

3. 岗位管理：配置系统用户所属担任职务。

4. 菜单管理：配置系统菜单，操作权限，按钮权限标识等。

5. 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。

6. 字典管理：对系统中经常使用的一些较为固定的数据进行维护。

7. 参数管理：对系统动态配置常用参数。

8. 通知公告：系统通知公告信息发布维护。

9. 登录日志：系统登录日志记录查询包含登录异常。

10. 代码生成：前后端代码的生成（js、vue、sql）支持CRUD下载 。

11. 系统接口：根据业务代码自动生成相关的api接口文档。

12. 在线用户：当前系统中活跃用户状态监控。

13. 服务监控：监视当前系统CPU、内存、磁盘、堆栈等相关信息。

14. 缓存监控：对系统的缓存信息查询，命令统计等。

## 演示图

| ![image-20240611165616048](assets/image-20240611165616048.png) | ![image-20240611120045810](assets/image-20240611120045810.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20240610155809785](assets/image-20240610155809785.png) | ![image-20240610155824377](assets/image-20240610155824377.png) |
| ![image-20240610155853085](assets/image-20240610155853085.png) | ![image-20240610155914577](assets/image-20240610155914577.png) |
| ![image-20240610155928620](assets/image-20240610155928620.png) | ![image-20240610155939603](assets/image-20240610155939603.png) |
| ![image-20240610155953022](assets/image-20240610155953022.png) | ![image-20240610160014116](assets/image-20240610160014116.png) |
| ![image-20240610160033126](assets/image-20240610160033126.png) | ![image-20240610160106498](assets/image-20240610160106498.png) |
| ![image-20240610160120728](assets/image-20240610160120728.png) | ![image-20240610160137315](assets/image-20240610160137315.png) |
| ![image-20240610160152700](assets/image-20240610160152700.png) | ![image-20240610160221567](assets/image-20240610160221567.png) |
| ![image-20240610160231844](assets/image-20240610160231844.png) | ![image-20240611170317679](./assets/image-20240611170317679.png) |

# 文档



## 主要文件结构

```
 server   #系统后端
 front    #系统前端
 server/src目录
           ├─admin                 #系统管理模块
           │  ├─gen                #代码生成
           │  └─system             #系统代码
           │  └─admin.module.ts    #系统模块配置
           
           ├─common                #工具类 
           │  ├─decorator          #自定义注解    
           │  ├─filter             #异常处理 
           │  ├─guard
           │  │  ├─permission      #权限校验 
           │  ├─middleware         #中间件
           │  │  └─auth   		   #身份校验 
           │  ├─pipe    		   #自定义管道
           │  ├─prisma-client 	   #prisma客户端
           │  ├─result    		   #返回对象
           │  ├─service
           │  │  ├─auth            #身份相关处理逻辑
           │  │  ├─gen    		   #代码生成逻辑
           │  │  │  └─gen-template #代码模板
           │  └─utils    		   #通用工具
           
           ├─prisma
           │  └─schema   		   #数据库模型定义
           │  └─schema.prisma      #prisma主文件
           
           ├─schedule    		   #定时任务
           
           ├─.env   		       #环境变量配置， 密码
           ├─main.ts   	           #主文件
           ├─config.ts 	           #系统配置文件
           ├─app.module.ts         #系统主模块

```

## 配置文件

- 主要配置 `src/config.ts`

```typescript
import * as dotenv from "dotenv";
import { join } from "path";
import { config } from "./common/types/config";
dotenv.config({ path: join(__dirname, ".env") })
export const Config: config = {
  //服务器的HTTP端口，默认为3000
  port: 3000,
  //# 应用的访问路径前缀
  contextPath: "/v1",
  swagger: {
    //是否启用swagger
    enable: true,
    //接口文档路径
    prefix: "/api"
  },
  captcha: {
    //验证码类型 math或text 
    mode: "math",
    //验证码过期时间
    expiresIn: 60 * 2,
  },
  //接口限流 2分钟内同一个接口允许60次请求
  rateLimit: {
    ttl: 2 * 60 * 1000,
    limit: 60,
  },
  crypto: {
    //密码加密秘钥
    psdSecret: process.env.psdSecret || "carole123456",
  },
  token: {
    // token加密秘钥
    secret: process.env.tokenSecret || "carole123456",
    //过期时间秒
    expiresIn: 60 * 60 * 24
  },
  prisma: {
    //是否显示执行的sql指令
    logEnable: false,
    //显示那些日志
    log: ['query', 'info', 'warn', 'error']
  },
  //redis连接配置
  redis: {
    //主机地址
    host: '127.0.0.1',
    //端口
    port: 6379,
    //数据库
    db: 5,
    //密码
    //password:""
  },
  upload: {
    //上传文件存储基目录 请设置一个绝对路径
    path: "d:/uploads",
    config: {
      img: {
        fileSize: 2 * 1024 * 1024,
        files: 1,
        fieldSize: 0.5 * 1024 * 1024,
        fields: 100,
        fieldNameSize: 100,
        parts: 100,
        headerPairs: 100,
      },
      file: {
        fileSize: 100 * 1024 * 1024,
        files: 10,
        fieldSize: 0.5 * 1024 * 1024,
        fields: 100,
        fieldNameSize: 100,
        parts: 100,
        headerPairs: 100,
      },
    },
  },
  //生成配置
  gen: {
    //作者
    author: "carole",
    //默认生成模块
    packageName: "admin",
    //子模块目录
    moduleName: "system",
    //是否去除表前缀，默认是false
    autoRemovePre: false, 
    //表前缀（生成类名不会包含表前缀，多个用逗号分隔）
    tablePrefix: ["sys_"]
  },
  //邮件发送配置
  mail: {
    //是否启用邮箱
    enable: false,
    //超时设置， 30秒未发送邮件，则返回失败
    timeout: 30 * 1000,
    config: {
      //邮箱服务器 qq：smtp.qq.com 网易： smtp.163.com
      host: process.env.mailHost,
      //端口
      port: 465,
      auth: {
        //用户名
        user: process.env.mailUser,
        //密码
        pass: process.env.mailPass,
      },
      // 端口465设置true, 其他false 
      secure: true,
      tls: {
        //建立 TLS 连接时是否应该拒绝未经授权的服务器证书
        rejectUnauthorized: false,
      },
    },
  },
};

```

- 环境变量配置 `src/.env`文件

  ```bash
  DATABASE_URL="mysql://root:123456@localhost:3306/carole" #url格式  mysql://用户名:密码@ip:端口/数据库?参数charset=utf8mb4
  psdSecret = "carole123456"#密码加密秘钥 加密算法：HmacSHA256
  tokenSecret = "carole123456" #token加密秘钥
  mailHost = ""#邮箱服务器 qq：smtp.qq.com 网易： smtp.163.com
  mailUser = "" #发件邮箱账号
  mailPass = "" #发件邮箱密码
  ```

### 配置注意点

> 数据库中的用户密码使用默认秘钥加密，如果你修改了密码加密秘钥，请手动执行 `server\test\password.js`获取新密码，并手动更新数据库。

## 权限注解

  注解权限控制

- `@RequirePermission`当前用户需要拥有特定的权限时，才能执行被该注解标注的方法。如果当前用户不具有这样的权限，则方法不会被执行。
- `@RequireRole`当前用户必须拥有所有指定的角色时，才能访问被该注解标注的方法。如果当前用户不拥有指定的角色，则方法不会执行。

### @RequireRole

`@RequireRole`注解用于配置接口要求用户拥有指定角色才可访问

| 参数  | 类型   | 描述 |
| ----- | ------ | ---- |
| value | String | 角色 |

示例:以下代码表示必须拥有`admin`角色才可访问

```typescript

@RequireRole("admin")
async test() {
    return Result.ok()
}
```

### @RequirePermission

`@RequirePermission`注解用于配置接口要求用户拥有指定权限才可访问

| 参数  | 类型   | 描述 |
| ----- | ------ | ---- |
| value | String | 权限 |

示例:以下代码表示必须拥有`system:user:remove`角色才可访问

```typescript
@RequirePermission("system:user:remove")
async test() {
    return Result.ok()
}
```



## Prisma相关

[prisma官方文档](https://www.prisma.io/docs/getting-started)

### server目录下的两个Prisma的bat脚本功能解释

##### 更新prisma的model.bat

- 此脚本用于当你已经编写好Prisma的model文件，但数据库结构发生了更改时。它可以同步数据库的最新结构到Prisma的schema文件中。

  相当于执行 `npx prisma db pull && npx prisma generate`

##### 驼峰生成prisma的model.bat

- 此脚本用于从数据库中生成Prisma的model定义，适用于数据库表没有在Prisma中的model定义过。（代码生成模板会使用驼峰命名法,并自动添加字段和表的map映射关系。）

  相当于执行 `npx prisma db pull` 然后把生成Model字段名改为驼峰  执行 `npx prisma generate`
  
- 生成之后会在src/prisma目录中有个`introspected.prisma`文件，可以更改名字并移动到 `src/prisma/schema`里面。

> 当然，你也可以手动执行Prisma指令之后修改Model。
>
### 注意

- 执行时，确保model都写好表和字段的映射关系了 @@map映射表 @Map映射字段

  model名称使用PascalCase命名 比如： test -> Test, sys_config -> SysConfig，  如果你不使用代码生成器，无需这样。

​       示例：

```javascript
model SysConfig {
  configId    Int     @id @default(autoincrement()) @map("config_id")
  configName  String? @default("") @map("config_name") @db.VarChar(100)
  configKey   String? @default("") @map("config_key") @db.VarChar(100)
  configValue String? @default("") @map("config_value") @db.VarChar(500)
  configType  String? @default("N") @map("config_type") @db.Char(1)
  createBy    String? @default("") @map("create_by") @db.VarChar(64)
  createTime  String? @map("create_time") @db.VarChar(25)
  updateBy    String? @default("") @map("update_by") @db.VarChar(64)
  updateTime  String? @map("update_time") @db.VarChar(25)
  remark      String? @map("remark") @db.VarChar(500)
  @@map("sys_config")
}
```

- prisma中日期类型字段插入时存在时差问题  
  
  > 解决办法：把sql中的日期类型改成字符串，插入更新时手动设置时间
  
- 当数据库使用 `long` 类型时，查询出来的数据会自动转换为 `bigint`。在将这些数据转换为 JSON 时可能会出现问题。可以转换为字符串返回前端，但前端传来数据后端也需要转换为long才能正常使用。

  当数字超出±(2^53 - 1)转换为Number也会出现问题![image-20240612094525584](./assets/image-20240612094525584.png)

  ```javascript
  BigInt.prototype.toJSON = function(){
  	return this.toString()
  }
  ```

  > 如果您考虑更改数据类型，以下是两种可能的解决方案：
  > 1.使用Int 无符号最大可以存4,294,967,295多条数据，作为主键一般场景完全够用了
  > 2.使用字符串，存uuid （无限制）



## 代码生成使用

1、在prisma\schema写好对应表的Model，字段名驼峰映射

2、登录系统（系统工具 -> 代码生成 -> 导入对应表）

3、代码生成列表中找到需要表（可预览、编辑、同步、删除生成配置）

4、点击生成代码会得到一个`carole.zip`执行`sql`文件生成菜单权限，按照包内目录结构复制到自己的项目中

5、修改对应模块的module.ts文件，在providers中注册生成的Service，controllers注册生成的Controller类

> 代码生成支持编辑、预览、同步
>
> 预览：对生成的代码提前预览，防止出现一些不符合预期的情况。
>
> 同步：对原表的字段进行同步，包括新增、删除、修改的字段处理。
>
> 修改：对生成的代码基本信息、字段信息、生成信息做一系列的调整。



## 定时任务

[@nestjs/schedule文档](https://docs.nestjs.com/techniques/task-scheduling#task-scheduling)

> 使用定时任务非常容易，只需在 `server\src\schedule\index.ts`中添加添加需要执行的方法并加上@Cron注解并携带cron表达式即可

示例：

```javascript
 //cron任务，每隔两秒执行一次
  @Cron('*/2 * * * * *')
  testCron() {
    console.log("cron excute...")
  }
```

## 接口限流

[@nestjs/throttler文档](https://docs.nestjs.com/security/rate-limiting#multiple-throttler-definitions)

> 默认所有接口2分钟内都只允许60次请求，可以在config.ts里面配置rateLimit，
> 单独定义某个接口，只需加上@Throttle根据自己需要配置即可

示例:

```typescript
//1个小时之内只能请求8次  
@Throttle({
    default: {
      limit: 8,
      ttl: 1000 * 60 * 60
    }
  })
  async test1() {
    return Result.ok()
  }
//5s内只能请求一次
@Throttle({
    default: {
      limit: 1,
      ttl: 1000 * 5
    }
  })
  async test2() {
    return Result.ok()
  }
```



## 发送邮件

1. 修改.env里面的 邮箱连接账号密码，和服务器地址
2. 按需修改config.ts的mail配置项,enable为true
3. 参考`server\src\common\utils\emial.ts`文件使用



## 部署

```bash
#后端
cd server && npm run build
# 把package.json移动到dist目录，上传dist目录到服务器，修改配置
node main.js

#前端
npm run build:prod
```



# 更新日志

## v1.0.0

- 系统发布    -2024-06-11



# Footer

## 贡献

欢迎大家一起参与:

- 提交 [issues](https://github.com/Carole007/carole-admin/issues) 来报告问题和优化建议.
- 主动 [pull requests](https://github.com/Carole007/carole-admin/pulls) 来优化代码.



## 联系方式

微信: `luotianyi_y`

qq交流群：[952834924](https://qm.qq.com/q/CspBa2r6h2)

<img src="assets/qun.jpg" alt="qun" style="width:25%;" />
