# 代码生成的使用

​
> 本篇文章介绍carole-admin系统的代码生成器使用
>
> 这里演示一个用户管理crud
​

## 前置准备

```sql
-- 建表
CREATE TABLE `test_user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '头像',
  `status` char(1) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1' COMMENT '状态(0禁用，1正常)',
  `create_time` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '注册时间',
  `update_time` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='测试用户表';
-- 插入数据
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (1, 'Steve', 'U4GC3q7QRo', 'Liao Wai Lam', NULL, '1', '2022-12-15 08:24:00', '2001-02-06');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (2, 'Sarah', '1oQl45QK1b', 'Kwong Tin Lok', NULL, '0', '2020-08-02 06:48:56', '2024-02-02');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (3, 'Jose', 'JvVL0dC243', 'Tong Ka Ming', NULL, '1', '2007-10-03 09:13:04', '2009-08-16');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (4, 'Matthew', 'qAEgP7NxFY', 'Kwok Ka Keung', NULL, '0', '2012-04-07 15:29:30', '2021-02-25');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (5, 'Ronald', '2qME1z0UhZ', 'Choi Tsz Ching', NULL, '1', '2006-04-08 01:21:21', '2010-01-29');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (6, 'Ellen', 'FRuTzGFgWj', 'Yip Sze Yu', NULL, '1', '2012-04-21 17:20:16', '2003-12-24');
INSERT INTO `test_user` (`id`, `username`, `password`, `nickname`, `avatar`, `status`, `create_time`, `update_time`) VALUES (7, 'Shirley', 'pouCHlM5jm', 'Yue Kar Yan', NULL, '1', '2011-03-13 21:45:26', '2003-12-02');
```

## 导入表

​

- 登录系统，进入系统工具-代码生成，点击导入，勾选需要生成的表，点击确定。
​
![alt text](image.png)
​
![alt text](assets/image-1.png)
​

## 字典添加

​
这里我们用户有两种状态（禁用，正常），咋们可以使用字典进行管理，后期进行添加修改比较方便，比如再添加一个状态为封禁。
​

1. 添加字典类型
​
    ![alt text](assets/image-2.png)
    ![alt text](assets/image-3.png)

2. 点击字典类型，为此类型添加数据
​
    ![alt text](assets/image-4.png)
    ![alt text](assets/image-5.png)
    ![alt text](assets/image-6.png)
    ![alt text](assets/image-7.png)
​

## 修改代码生成配置

​点击左侧菜单-> 系统工具 -> 代码生成 修改刚才添加的表

![alt text](assets/image-8.png)

### 修改字段信息

这里按照自己的业务需求设置即可,用户状态选择单选或者下拉，字典类型选择刚才新建的那个。

​![alt text](assets/image-9.png)

### 修改生成信息

![alt text](assets/image-10.png)

#### 💡 **注意事项**

系统admin模块中已存在默认的`/system/user`，因此建议在生成业务代码时：

- 将业务名修改为 `user1` 或其他不冲突的名称。
- 或者修改子系统名，以避免接口 URL 冲突。

生成的菜单信息中 `name` 默认使用业务名，请务必确保名称不与现有菜单重复。  
如果业务名与已有模块（如 `user`）重复，可以选择：

✅ 修改业务名后生成代码  
✅ 或直接生成代码并执行菜单创建 SQL，再通过菜单管理手动修改菜单路由地址  

此外，如果将代码生成到独立的模块目录中（不用默认的admin模块），也可避免路径冲突。  
这里主要演示此类场景的处理方式。

​这里我们修改子系统名和业务名  点击提交

![alt text](assets/image-11.png)

## 添加菜单和权限

> 如果你已经有此表对应的菜单，不需要再执行
​

- 点击这个小眼睛图标查看代码

![alt text](assets/image-12.png)

- 复制sql代码
![alt text](assets/image-13.png)

- 执行sql
 ![alt text](assets/image-14.png)
 粘贴刚才复制的sql代码，执行
 ![alt text](assets/image-15.png)
 执行完毕刷新网页可看到菜单已添加
​ ![alt text](assets/image-16.png)
 修改菜单图标
 ![alt text](assets/image-17.png)
 ![alt text](assets/image-18.png)

接下来完成代码导入

## 生成prisma模型

> 因为这个表是新建的，没有prisma模型，所以需要生成
> 如果你已经有这表的模型了，可以不用生成
​

1. cd到server目录 执行server目录下的 `驼峰生成prisma的model.bat`或者驼峰生成prisma的model.sh ` ./驼峰生成prisma的model.sh `
​
![alt text](assets/image-19.png)
​
1. 生成完毕后，会在prisma里生成一个文件，introspected.prisma，我们可以自己改名移动到schema里面，或者把model复制粘贴到schema里面的某个文件中（记得删除文件），这里我就改为test移动到schema里面。
​
![alt text](assets/image-20.png)

![alt text](assets/image-21.png)

## 下载&导入代码

​

1. 下载代码

​这里我们点击右边的下载图标即可

![alt text](assets/image-22.png)
​
2. 解压得到，node就是后端的代码，vue前端代码
​
![alt text](assets/image-23.png)
​

> 建议大家使用git管理代码，防止代码丢失，导入代码时会覆盖代码

### 导入后端代码

​
> 如果您使用了eslint，请格式化代码
>
> 如果你生成时没有用默认的admin模块，请确保已存在你填写的模块，没有的话：执行`nest g mo 模块名`生成模块
​

进入node目录， 复制整个模块到 覆盖项目server/src
​
> 一定要选择合并覆盖 而不是替换该目录。
![alt text](assets/image-24.png)

​
在代码生成的模块中，我们刚才选择的是默认的admin模块，注册service和controller
​
![alt text](assets/image-26.png)
​

如果serice或controller类名冲突，我们可以手动改下类名，或者修改代码生成的基本信息实体类配置

### 导入前端代码

​
进入下载的压缩文件vue目录， 复制代码到 front/src  合并覆盖
​
![alt text](assets/image-27.png)

## 刷新页面查看效果

>若出现500错误，重启一下后端服务

### 默认查询

![alt text](assets/image-28.png)
​

### 测试修改

![alt text](assets/image-29.png)
​
![alt text](assets/image-30.png)

本期教程结束。
