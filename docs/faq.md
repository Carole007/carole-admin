# 常见问题解答 (FAQ)

本文档收集了使用 Carole-Admin 系统时可能遇到的常见问题及其解决方案。

## 安装与配置问题

### Q: 执行 `npx prisma generate` 时失败怎么办？

**A:** 这通常是由于网络问题导致的。可以尝试以下解决方案：

1. 多次执行该命令
2. 使用代理或更换网络环境

### Q: 如何修改默认的数据库连接？

**A:** 编辑 `server/src/.env` 文件中的 `DATABASE_URL` 变量：

```
DATABASE_URL="mysql://用户名:密码@主机:端口/数据库名?charset=utf8mb4"
```

### Q: 如何修改系统的默认端口？

**A:** 编辑 `server/src/config.ts` 文件中的 `port` 配置项：

```typescript
port: 3000, // 修改为你需要的端口
```

### Q: 修改了密码加密秘钥后，无法登录系统怎么办？

**A:** 修改密码加密秘钥后，需要重新生成用户密码并更新数据库：

1. 执行 `server/test/password.js` 脚本生成新密码
2. 使用生成的密码更新数据库中的用户密码

```bash
node server/test/password.js
```

## Prisma 相关问题

### Q: 如何处理 Prisma 中的日期时区问题？

**A:** Prisma 中日期类型字段插入时可能存在时差问题。建议将数据库中的日期类型改为字符串类型，并在插入/更新时手动设置时间：

```typescript
// 插入数据时
const nowDate = () => dayjs().format('YYYY-MM-DD');
await prisma.user.create({
  data: {
    // ...其他字段
    createTime: nowDate(),
    updateTime: nowDate(),
  },
});
```

### Q: 如何处理 BigInt 类型在 JSON 中的序列化问题？

**A:** 当数据库使用 `bigint` 类型时，在 JSON 序列化时可能会出现问题。可以通过扩展 `BigInt` 的 `toJSON` 方法解决：

```typescript
// 在应用启动时添加
BigInt.prototype.toJSON = function() {
  return this.toString();
};
```

或者在查询时将 BigInt 转换为字符串：

```typescript
const result = await prisma.table.findMany();
return result.map(item => ({
  ...item,
  bigIntField: item.bigIntField.toString(),
}));
```

### Q: 如何在 Prisma 中使用事务？

**A:** Prisma 提供了 `$transaction` 方法来支持事务操作：

```typescript
const [result1, result2] = await prisma.$transaction([
  prisma.user.create({ data: { name: 'Alice' } }),
  prisma.post.create({ data: { title: 'Hello World' } }),
]);
```

对于更复杂的事务逻辑，可以使用交互式事务：

```typescript
const result = await prisma.$transaction(async (tx) => {
  // 使用 tx 代替 prisma 执行查询
  const user = await tx.user.create({ data: { name: 'Alice' } });
  
  // 基于第一个查询的结果执行第二个查询
  const post = await tx.post.create({
    data: {
      title: 'Hello World',
      authorId: user.id,
    },
  });
  
  return { user, post };
});
```

## 代码生成问题

### Q: 代码生成时找不到表怎么办？

**A:** 确保以下几点：

1. 表已经在数据库中创建
2. 数据库连接配置正确
3. 在 Prisma schema 中已经定义了对应的模型
4. 模型名称使用 PascalCase 命名，并正确设置了 `@@map` 映射到表名

### Q: 生成的代码中字段名与数据库不一致怎么办？

**A:** 这通常是因为 Prisma 模型中的字段映射配置不正确。确保在模型中使用 `@map` 注解正确映射字段名：

```typescript
model User {
  id        Int     @id @default(autoincrement())
  firstName String  @map("first_name")
  lastName  String  @map("last_name")
  
  @@map("sys_user")
}
```

### Q: 如何自定义生成的代码模板？

**A:** 代码生成模板位于 `server/src/common/service/gen/gen-template` 目录下。你可以根据需要修改这些模板文件，但请注意保留模板中的变量占位符。

## 部署与性能问题

### Q: 如何优化系统性能？

**A:** 可以考虑以下优化措施：

1. **数据库优化**：
   - 为常用查询添加索引
   - 优化复杂查询
   - 使用数据库连接池

2. **缓存策略**：
   - 使用 Redis 缓存频繁访问的数据
   - 实现适当的缓存失效策略

3. **代码优化**：
   - 避免 N+1 查询问题
   - 使用批量操作代替循环单个操作
   - 优化大型响应的数据结构

4. **服务器配置**：
   - 增加服务器资源（CPU、内存）
   - 使用负载均衡分发请求
   - 配置适当的 Node.js 内存限制

## 其他问题

### Q: 如何扩展现有功能？

**A:** 扩展现有功能的最佳实践：

1. **遵循模块化原则**：
   - 创建新的模块来封装相关功能
   - 使用依赖注入来集成现有服务

2. **扩展而非修改**：
   - 尽量不直接修改核心代码
   - 使用继承或组合模式扩展现有类

3. **保持一致的代码风格**：
   - 遵循项目的命名约定和结构
   - 编写单元测试验证新功能

### Q: 如何贡献代码？

**A:** 欢迎通过以下方式贡献代码：

1. Fork 项目仓库
2. 创建功能分支
3. 提交更改
4. 确保代码通过测试
5. 提交 Pull Request

请确保您的代码符合项目的编码规范，并包含适当的文档和测试。

### Q: 在哪里可以获取更多帮助？

**A:** 如果您有其他问题，可以通过以下渠道获取帮助：

1. 查阅项目文档
2. 在 GitHub 仓库中提交 Issue
3. 加入社区讨论组
4. 联系项目维护者

---

如果您的问题未在此 FAQ 中列出，请在 GitHub 仓库中提交 Issue，我们会尽快回复并更新此 FAQ。
