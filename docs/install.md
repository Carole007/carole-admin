# 安装指南

本文档提供了 Carole-Admin 的基本安装步骤，帮助您快速搭建开发环境。更详细的配置和使用说明请参考[开发指南](guide.md)。

## 环境准备

在开始安装之前，请确保您的系统满足以下要求：

- **Node.js**: v20.12.0 或更高版本
- **MySQL**: 8.0.12 或更高版本
- **Redis**: 最新稳定版

您可以使用以下命令检查您的 Node.js 版本：

```bash
node -v
```

## 下载项目

```bash
# 克隆项目
git clone https://github.com/Carole007/carole-admin.git

# 进入项目目录
cd carole-admin
```

## 数据库配置

1. 创建一个名为 `carole` 的数据库 （可自定义数据库名称）

> 记得修改 `server/src/.env` 文件中的 `DATABASE_URL` 变量配置

2. 导入项目根目录下的 SQL 文件

## 快速启动

### 后端配置

```typescript
# 进入后端目录
cd server

# 安装依赖
npm install

# 生成 Prisma 客户端
npx prisma generate

# 配置环境变量
# 编辑 server/src/.env 文件，配置数据库连接信息
DATABASE_URL="mysql://root:root@localhost:3306/carole" #url格式  mysql://用户名:密码@ip:端口/数据库?参数charset=utf8mb4

# 修改相关配置
server/src/config-development.json
//redis连接信息
"redis": { "host": "127.0.0.1", "port": 6379, "db": 5, "password": "" },
//文件上传路径
"upload": {
    "path": "/Users/carole/carole-admin/upload",
  }
```

### 前端配置

```bash
# 进入前端目录
cd ../front

# 安装依赖
npm install
```

### 启动服务

```bash
# 启动后端服务
cd server
npm run start:dev

# 启动前端服务
cd ../front
npm run dev
```

## 访问系统

启动成功后，您可以通过以下地址访问系统：

- 前端页面：<http://localhost:3000>
- 后端 API：<http://localhost:3001>

## 默认账户

系统默认提供了两个账户：

- 管理员账户：用户名 `admin`，密码 `carole`
- 测试账户：用户名 `test`，密码 `123456`

## 更多配置

关于更详细的配置说明，请参考：

- [配置说明](config.md) - 系统配置文件详解
- [开发指南](guide.md) - 包含权限控制、Prisma 使用、代码生成等详细说明
- [常见问题](faq.md) - 常见问题解答
