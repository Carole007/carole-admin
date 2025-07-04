# 开发指南

本文档提供了 Carole-Admin 系统的开发指南，帮助开发者更好地使用和扩展系统。

## 权限控制

Carole-Admin 提供了两种权限注解用于控制接口访问：`@RequireRole` 和 `@RequirePermission`。

### @RequireRole

`@RequireRole` 注解用于配置接口要求用户拥有指定角色才可访问。

| 参数  | 类型   | 描述 |
| ----- | ------ | ---- |
| value | String | 角色 |

示例：以下代码表示必须拥有 `admin` 角色才可访问

```typescript
@RequireRole("admin")
async test() {
    return Result.ok()
}
```

### @RequirePermission

`@RequirePermission` 注解用于配置接口要求用户拥有指定权限才可访问。

| 参数  | 类型   | 描述 |
| ----- | ------ | ---- |
| value | String | 权限 |

示例：以下代码表示必须拥有 `system:user:remove` 权限才可访问

```typescript
@RequirePermission("system:user:remove")
async test() {
    return Result.ok()
}
```

## Prisma 相关

[Prisma 官方文档](https://www.prisma.io/docs/getting-started)

### Prisma 脚本功能

项目提供了两个 Prisma 相关的 bat 脚本：

#### 更新 prisma 的 model.bat

- 此脚本用于当你已经编写好 Prisma 的 model 文件，但数据库结构发生了更改时。它可以同步数据库的最新结构到 Prisma 的 schema 文件中。
- 相当于执行 `npx prisma db pull && npx prisma generate`

#### 驼峰生成 prisma 的 model.bat

- 此脚本用于从数据库中生成 Prisma 的 model 定义，适用于数据库表没有在 Prisma 中的 model 定义过。（代码生成模板会使用驼峰命名法，并自动添加字段和表的 map 映射关系。）
- 生成之后会在 src/prisma 目录中有个 `introspected.prisma` 文件，可以更改名字并移动到 `src/prisma/schema` 里面。

### Prisma 使用注意事项

- 项目打包时，可以在 schema.prisma 里的 binaryTargets 添加目标平台
- 确保 model 都写好表和字段的映射关系，使用 @@map 映射表，@Map 映射字段
- model 名称使用 PascalCase 命名，如 test -> Test, sys_config -> SysConfig

示例：

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

- Prisma 中日期类型字段插入时存在时差问题

  > 解决办法：把 SQL 中的日期类型改成字符串，插入更新时手动设置时间

- 处理 BigInt 类型数据时，可以使用以下方法解决 JSON 转换问题：

```javascript
BigInt.prototype.toJSON = function () {
  return this.toString()
}
```

## 代码生成使用

代码生成器是 Carole-Admin 的核心功能之一，可以大幅提高开发效率。

详细教程：[https://juejin.cn/post/7385743189636808719](https://juejin.cn/post/7385743189636808719)

### 使用步骤

1. 在 prisma\schema 写好对应表的 Model，字段名驼峰映射
2. 登录系统（系统工具 -> 代码生成 -> 导入对应表）
3. 在代码生成列表中找到需要的表（可预览、编辑、同步、删除生成配置）
4. 点击生成代码获取 `carole.zip`，执行 `sql` 文件生成菜单权限，按照包内目录结构复制到自己的项目中
5. 修改对应模块的 module.ts 文件，在 providers 中注册生成的 Service，controllers 注册生成的 Controller 类

### 代码生成功能

代码生成支持以下功能：

- **预览**：对生成的代码提前预览，防止出现一些不符合预期的情况。
- **同步**：对原表的字段进行同步，包括新增、删除、修改的字段处理。
- **修改**：对生成的代码基本信息、字段信息、生成信息做一系列的调整。

### 生成代码结构

生成的代码包括：

- 前端：Vue 组件、API 调用、路由配置
- 后端：Controller、Service、DTO 类
- SQL：菜单权限配置

## 定时任务

Carole-Admin 使用 [@nestjs/schedule](https://docs.nestjs.com/techniques/task-scheduling#task-scheduling) 实现定时任务功能。

### 使用方法

在 `server\src\schedule\index.ts` 中添加需要执行的方法并加上 @Cron 注解并携带 cron 表达式即可。

示例：

```typescript
// cron任务，每隔两秒执行一次
@Cron('*/2 * * * * *')
testCron() {
  console.log("cron excute...")
}
```

### Cron 表达式说明

Cron 表达式由 6 个部分组成，从左到右依次为：

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ 星期几 (0 - 7) (0 或 7 是星期日)
│    │    │    │    └───── 月份 (1 - 12)
│    │    │    └────────── 日期 (1 - 31)
│    │    └─────────────── 小时 (0 - 23)
│    └──────────────────── 分钟 (0 - 59)
└───────────────────────── 秒 (0 - 59, 可选)
```

常用表达式：

- `* * * * * *` - 每秒执行
- `0 * * * * *` - 每分钟开始时执行
- `0 0 * * * *` - 每小时开始时执行
- `0 0 0 * * *` - 每天午夜执行
- `0 0 12 * * *` - 每天中午 12 点执行

## 接口限流

Carole-Admin 使用 [@nestjs/throttler](https://docs.nestjs.com/security/rate-limiting#multiple-throttler-definitions) 实现接口限流功能。

### 全局限流配置

默认所有接口 2 分钟内都只允许 60 次请求，可以在 config.ts 里面配置 rateLimit：

```typescript
rateLimit: {
  // 数据存储在 redis 或 memory
  storage: "redis",
  // 时间窗口（毫秒）
  ttl: 2 * 60 * 1000,
  // 在时间窗口内允许的最大请求次数
  limit: 60,
},
```

### 单个接口限流

使用 `@Throttle` 注解可以为单个接口配置限流规则：

```typescript
// 1个小时之内只能请求8次
@Throttle({
  default: {
    limit: 8,
    ttl: 1000 * 60 * 60
  }
})
async test1() {
  return Result.ok()
}

// 5s内只能请求一次
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

### 用户级别限流

使用 `@ThrottleUser()` 注解可以对用户进行限流：

```typescript
// 用户1天只能请求一次
@ThrottleUser()
@Throttle({
  default: {
    limit: 1,
    ttl: 1000 * 60 * 60 * 24
  }
})
async test3() {
  return Result.ok()
}
```

## 请求跳过登录验证

在某些情况下，您可能需要允许某些接口无需登录即可访问（如公开 API、健康检查等）。

修改 `server\src\app.module.ts` 文件：

```typescript
.exclude('/test(.*)', '/a') // 排除 /test 开头和 /a 的路由
.forRoutes('*') // 应用到所有路由
.forRoutes('/admin(*)') // 应用到所有 /admin 开头的路由
```

支持通配符：

- `/test(.*)` - 排除所有以 `/test` 开头的路由
- `*` - 应用到所有路由
- `/admin(*)` - 应用到所有以 `/admin` 开头的路由

## 使用 Redis

Carole-Admin 封装了 Redis 工具类，提供了常用的 Redis 操作方法。

### Redis 工具类

文件位置：`server\src\common\utils\redisUtils.ts`

该工具类封装了一个 Redis 连接池，提供了常用的 Redis 操作方法。

### 使用方法

```typescript
import { redisUtils } from '@/common/utils/redisUtils' // 导入

// 使用直接调用方法即可
const r = await redisUtils.get('demo')
await redisUtils.set('demo', 'hello world!', 10) // 过期时间秒为单位 10s过期
```

### 主要方法

- `get(key)` - 获取键值
- `set(key, value, expireTime)` - 设置键值，可选过期时间
- `del(key)` - 删除键
- `exists(key)` - 检查键是否存在
- `expire(key, seconds)` - 设置过期时间
- `ttl(key)` - 获取剩余过期时间
- `keys(pattern)` - 获取匹配模式的所有键
- 更多方法请查看源码

## 请求参数验证

Carole-Admin 使用 [class-validator](https://github.com/typestack/class-validator) 进行请求参数验证。

### 使用场景

使用类定义参数的模型规则，请求时会对参数做校验，不通过直接返回错误，以及自动删除不在类中的字段，更加安全方便。

例如，对于用户修改接口，如果只允许修改 nickname、age 和 email，但用户恶意传入了 password，使用参数验证可以自动过滤掉不允许的字段。

### 使用方法

1. 定义 DTO 类：

```typescript
export class CreateDictDataDto extends BaseDomain {
  @ApiProperty({ description: '字典类型' })
  @IsNotEmpty({ message: '字典类型不能为空' })
  @IsString()
  dictType: string

  @ApiProperty({ description: '数据标签' })
  @IsNotEmpty({ message: '数据标签不能为空' })
  @IsString()
  dictLabel: string

  @ApiProperty({ description: '数据键值' })
  @IsNotEmpty({ message: '数据键值不能为空' })
  @IsString()
  dictValue?: string

  @ApiProperty({ description: '样式属性' })
  @IsOptional()
  cssClass?: string

  @ApiProperty({ description: '回显样式' })
  @IsOptional()
  listClass?: string

  @ApiProperty({ description: '显示排序' })
  @IsNotEmpty({ message: '排序值不能为空' })
  @Transform(v => +v.value)
  @IsNumber()
  dictSort: number

  @ApiProperty({ description: '字典状态（0停用，1正常）' })
  @IsOptional()
  status?: string = '1'
}
```

2. 在 Controller 中使用：

```typescript
@Post()
async create(@Body() createDto: CreateDictDataDto) {
  // createDto 已经经过验证，可以安全使用
  return this.service.create(createDto);
}
```

### 注意事项

在 `server\src\app.module.ts` 中设置了 `whiteList: true`，会自动删除不在 DTO 类中的字段：

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true, // 自动删除不在 DTO 类中的字段
    transform: true, // 自动转换类型
    forbidNonWhitelisted: false // 不允许未在白名单中的属性
  })
)
```

因此，如果你使用了类来修饰参数类型，某个参数不想要验证，请务必加上 `@IsOptional()` 注解，标识可选的，否则这个字段会被直接删除掉。

## 发送邮件

Carole-Admin 提供了邮件发送功能，可用于系统通知、密码重置等场景。

### 配置邮件服务

1. 根据运行环境，修改 `config-[development|production].json` 文件中的邮箱配置：

```typescript
"mail": {
    "enable": true, // 设置为 true 启用邮件服务
    "timeout": 30000, //发送超时
    "config": {
      "host": "smtp.example.com",
      "port": 465,
      "auth": { "user": "用户名", "pass": "密码" },
      "secure": true,
      "tls": { "rejectUnauthorized": false }
    }
}
```

### 使用邮件服务

系统提供了邮件工具类 `server\src\common\utils\email.ts`，可以直接参考该文件使用：

## 部署

本节介绍如何将 Carole-Admin 系统部署到生产环境。

### 后端部署

1. 准备 Prisma 引擎：

[查看平台的引擎](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#binarytargets-options)

```bash
cd server

# 方法一：在本地生成目标平台的引擎
# 在 schema.prisma 文件中添加目标平台  
# generator client {
#   provider      = "prisma-client-js"
#   binaryTargets = ["native", "linux-musl", "debian-openssl-1.1.x"]
# }
npx prisma generate

# 方法二：在服务器上生成引擎
# 将源代码上传到服务器，然后执行
npx prisma generate
```

2. 构建后端应用：

```bash
# 在本地或服务器上构建
npm run build
```

3. 准备部署文件：

```bash
# 将 package.json 复制到 dist 目录
cp package.json dist/

```

4. 部署到服务器：

```bash
# 上传 dist 目录到服务器
cd dist

# 在服务器上安装依赖
npm install

# 修改为生产环境配置
.env

# 修改config.ts运行模式为production，并修改config-production.json相关配置
export let runMode: "development" | "production" = "production";

# 使用 PM2 启动应用
- 安装PM2  npm install -g pm2
pm2 start main.js --name carole-admin
```

### 前端部署

1. 构建前端应用：

```bash
cd front

# 修改生产环境 API 地址（如需）
# 编辑 .env.production 文件

# 构建生产版本
npm run build:prod
```

2. 部署到 Web 服务器：

```bash
# 上传 dist 目录到服务器
```

3. 配置 Nginx：

```nginx
#server块添加以下内容
 location / {
        try_files $uri $uri/ /index.html;
    }
```
