/*
 Navicat Premium Data Transfer

 Source Server         : mysql8
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : carole

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 16/06/2024 14:11:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gen_table
-- ----------------------------
DROP TABLE IF EXISTS `gen_table`;
CREATE TABLE `gen_table`  (
  `table_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '表名称',
  `table_comment` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '表描述',
  `sub_table_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '关联子表的表名',
  `sub_table_fk_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '子表关联的外键名',
  `class_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '实体类名称',
  `tpl_category` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'crud' COMMENT '使用的模板（crud单表操作 tree树表操作）',
  `tpl_web_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '前端模板类型（element-ui模版 element-plus模版）',
  `package_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成包路径',
  `module_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成模块名',
  `business_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成业务名',
  `function_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成功能名',
  `function_author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成功能作者',
  `gen_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '生成代码方式（0zip压缩包 1自定义路径）',
  `gen_path` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '/' COMMENT '生成路径（不填默认项目路径）',
  `options` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '其它生成选项',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`table_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 117 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '代码生成业务表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gen_table
-- ----------------------------
INSERT INTO `gen_table` VALUES (107, 'sys_logininfor', '系统访问记录', NULL, NULL, 'SysLogininfor', 'crud', 'element-plus', 'admin', 'system', 'logininfor', '系统访问记录', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (108, 'sys_menu', '菜单权限表', NULL, NULL, 'SysMenu', 'crud', 'element-plus', 'admin', 'system', 'menu', '菜单权限表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (109, 'sys_notice', '通知公告表', NULL, NULL, 'SysNotice', 'crud', 'element-plus', 'admin', 'system', 'notice', '通知公告表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (110, 'sys_post', '岗位信息表', NULL, NULL, 'SysPost', 'crud', 'element-plus', 'admin', 'system', 'post', '岗位信息表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (111, 'sys_role', '角色信息表', NULL, NULL, 'SysRole', 'crud', 'element-plus', 'admin', 'system', 'role', '角色信息表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (112, 'sys_user', '用户信息表', NULL, NULL, 'SysUser', 'crud', 'element-plus', 'admin', 'system', 'user', '用户信息表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16', NULL);
INSERT INTO `gen_table` VALUES (113, 'sys_config', '参数配置表', NULL, NULL, 'SysConfig', 'crud', 'element-plus', 'admin', 'system', 'config', '参数配置表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26', NULL);
INSERT INTO `gen_table` VALUES (114, 'sys_dept', '部门表', NULL, NULL, 'SysDept', 'crud', 'element-plus', 'admin', 'system', 'dept', '部门表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26', NULL);
INSERT INTO `gen_table` VALUES (115, 'sys_dict_data', '字典数据表', NULL, NULL, 'SysDictData', 'crud', 'element-plus', 'admin', 'system', 'data', '字典数据表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26', NULL);
INSERT INTO `gen_table` VALUES (116, 'sys_dict_type', '字典类型表', NULL, NULL, 'SysDictType', 'crud', 'element-plus', 'admin', 'system', 'type', '字典类型表', 'carole', '0', '/', NULL, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26', NULL);

-- ----------------------------
-- Table structure for gen_table_column
-- ----------------------------
DROP TABLE IF EXISTS `gen_table_column`;
CREATE TABLE `gen_table_column`  (
  `column_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '归属表编号',
  `column_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列名称',
  `column_comment` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列描述',
  `column_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列类型',
  `java_type` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'JAVA类型',
  `java_field` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'JAVA字段名',
  `is_pk` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否主键（1是）',
  `is_increment` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否自增（1是）',
  `is_required` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否必填（1是）',
  `is_insert` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否为插入字段（1是）',
  `is_edit` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否编辑字段（1是）',
  `is_list` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否列表字段（1是）',
  `is_query` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否查询字段（1是）',
  `query_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'EQ' COMMENT '查询方式（等于、不等于、大于、小于、范围）',
  `html_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）',
  `dict_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `sort` int(11) NULL DEFAULT NULL COMMENT '排序',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`column_id`) USING BTREE,
  INDEX `gen_table_column_table_id_idx`(`table_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1300 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '代码生成业务表字段' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gen_table_column
-- ----------------------------
INSERT INTO `gen_table_column` VALUES (1175, 107, 'info_id', '访问ID', 'int(10) unsigned', 'Number', 'infoId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1176, 107, 'user_name', '用户账号', 'varchar(50)', 'String', 'userName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1177, 107, 'ipaddr', '登录IP地址', 'varchar(128)', 'String', 'ipaddr', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1178, 107, 'login_location', '登录地点', 'varchar(255)', 'String', 'loginLocation', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1179, 107, 'browser', '浏览器类型', 'varchar(50)', 'String', 'browser', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1180, 107, 'os', '操作系统', 'varchar(50)', 'String', 'os', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1181, 107, 'status', '登录状态（0失败,1成功）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1182, 107, 'msg', '提示消息', 'varchar(255)', 'String', 'msg', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1183, 107, 'login_time', '访问时间', 'varchar(25)', 'String', 'loginTime', '0', '0', '0', '1', '1', '1', '1', 'BETWEEN', 'datetime', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1184, 108, 'menu_id', '菜单ID', 'int(10) unsigned', 'Number', 'menuId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1185, 108, 'menu_name', '菜单名称', 'varchar(50)', 'String', 'menuName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1186, 108, 'parent_id', '父菜单ID', 'int(10) unsigned', 'Number', 'parentId', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1187, 108, 'order_num', '显示顺序', 'int(11)', 'Number', 'orderNum', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1188, 108, 'path', '路由地址', 'varchar(200)', 'String', 'path', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1189, 108, 'component', '组件路径', 'varchar(255)', 'String', 'component', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1190, 108, 'query', '路由参数', 'varchar(255)', 'String', 'query', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1191, 108, 'is_frame', '是否为外链（0否 1是）', 'int(11)', 'Number', 'isFrame', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1192, 108, 'is_cache', '是否缓存（0不缓存 1缓存）', 'int(11)', 'Number', 'isCache', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1193, 108, 'menu_type', '菜单类型（M目录 C菜单 F按钮）', 'char(1)', 'String', 'menuType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 10, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1194, 108, 'visible', '菜单状态（0隐藏 1显示）', 'char(1)', 'String', 'visible', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 11, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1195, 108, 'status', '菜单状态（0停用 1正常）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 12, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1196, 108, 'perms', '权限标识', 'varchar(100)', 'String', 'perms', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 13, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1197, 108, 'icon', '菜单图标', 'varchar(100)', 'String', 'icon', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 14, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1198, 108, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 15, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1199, 108, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 16, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1200, 108, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 17, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1201, 108, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 18, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1202, 108, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 19, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1203, 109, 'notice_id', '公告ID', 'int(11)', 'Number', 'noticeId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1204, 109, 'notice_title', '公告标题', 'varchar(50)', 'String', 'noticeTitle', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1205, 109, 'notice_type', '公告类型（1通知 2公告）', 'char(1)', 'String', 'noticeType', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1206, 109, 'notice_content', '公告内容', 'mediumtext', 'String', 'noticeContent', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'editor', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1207, 109, 'status', '公告状态（0关闭 1正常）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1208, 109, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1209, 109, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1210, 109, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1211, 109, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1212, 109, 'remark', '备注', 'varchar(255)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'input', '', 10, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1213, 110, 'post_id', '岗位ID', 'int(10) unsigned', 'Number', 'postId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1214, 110, 'post_code', '岗位编码', 'varchar(64)', 'String', 'postCode', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1215, 110, 'post_name', '岗位名称', 'varchar(50)', 'String', 'postName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1216, 110, 'post_sort', '显示顺序', 'int(11)', 'Number', 'postSort', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1217, 110, 'status', '状态（0停用 1正常）', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'radio', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1218, 110, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1219, 110, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1220, 110, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1221, 110, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1222, 110, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 10, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1223, 111, 'role_id', '角色ID', 'int(10) unsigned', 'Number', 'roleId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1224, 111, 'role_name', '角色名称', 'varchar(30)', 'String', 'roleName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1225, 111, 'role_key', '角色权限字符串', 'varchar(100)', 'String', 'roleKey', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1226, 111, 'role_sort', '显示顺序', 'int(11)', 'Number', 'roleSort', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1227, 111, 'data_scope', '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限 5：仅个人权限）', 'char(1)', 'String', 'dataScope', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1228, 111, 'menu_check_strictly', '菜单树选择项是否关联显示', 'tinyint(11)', 'Number', 'menuCheckStrictly', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1229, 111, 'dept_check_strictly', '部门树选择项是否关联显示', 'tinyint(11)', 'Number', 'deptCheckStrictly', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1230, 111, 'status', '角色状态（0停用 1正常）', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'radio', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1231, 111, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1232, 111, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 10, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1233, 111, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 11, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1234, 111, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 12, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1235, 111, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 13, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1236, 112, 'user_id', '用户ID', 'int(10) unsigned', 'Number', 'userId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1237, 112, 'dept_id', '部门ID', 'int(10) unsigned', 'Number', 'deptId', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1238, 112, 'user_name', '用户账号', 'varchar(30)', 'String', 'userName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1239, 112, 'nick_name', '用户昵称', 'varchar(30)', 'String', 'nickName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1240, 112, 'user_type', '用户类型（00系统用户）', 'varchar(2)', 'String', 'userType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1241, 112, 'email', '用户邮箱', 'varchar(50)', 'String', 'email', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1242, 112, 'phonenumber', '手机号码', 'varchar(11)', 'String', 'phonenumber', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1243, 112, 'sex', '用户性别（0男 1女 2未知）', 'char(1)', 'String', 'sex', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 8, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1244, 112, 'avatar', '头像地址', 'varchar(100)', 'String', 'avatar', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 9, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1245, 112, 'password', '密码', 'varchar(100)', 'String', 'password', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 10, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1246, 112, 'status', '帐号状态（0停用,1正常 ）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 11, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1247, 112, 'login_ip', '最后登录IP', 'varchar(128)', 'String', 'loginIp', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 12, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1248, 112, 'login_date', '最后登录时间', 'varchar(25)', 'String', 'loginDate', '0', '0', '0', '1', '1', '1', '1', 'BETWEEN', 'datetime', '', 13, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1249, 112, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 14, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1250, 112, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 15, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1251, 112, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 16, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1252, 112, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 17, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1253, 112, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 18, 'admin', '2024-06-16 14:05:16', 'admin', '2024-06-16 14:05:16');
INSERT INTO `gen_table_column` VALUES (1254, 113, 'config_id', '参数主键', 'int(11)', 'Number', 'configId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1255, 113, 'config_name', '参数名称', 'varchar(100)', 'String', 'configName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1256, 113, 'config_key', '参数键名', 'varchar(100)', 'String', 'configKey', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1257, 113, 'config_value', '参数键值', 'varchar(500)', 'String', 'configValue', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 4, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1258, 113, 'config_type', '系统内置（Y是 N否）', 'char(1)', 'String', 'configType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1259, 113, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1260, 113, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 7, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1261, 113, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1262, 113, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 9, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1263, 113, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 10, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1264, 114, 'dept_id', '部门id', 'int(10) unsigned', 'Number', 'deptId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1265, 114, 'parent_id', '父部门id', 'int(10) unsigned', 'Number', 'parentId', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1266, 114, 'ancestors', '祖级列表', 'varchar(50)', 'String', 'ancestors', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1267, 114, 'dept_name', '部门名称', 'varchar(30)', 'String', 'deptName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1268, 114, 'order_num', '显示顺序', 'int(11)', 'Number', 'orderNum', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1269, 114, 'leader', '负责人', 'varchar(20)', 'String', 'leader', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1270, 114, 'phone', '联系电话', 'varchar(11)', 'String', 'phone', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1271, 114, 'email', '邮箱', 'varchar(50)', 'String', 'email', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1272, 114, 'status', '部门状态（0停用,1正常）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 9, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1273, 114, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1274, 114, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 11, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1275, 114, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1276, 114, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 13, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1277, 115, 'dict_code', '字典编码', 'int(10) unsigned', 'Number', 'dictCode', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1278, 115, 'dict_sort', '字典排序', 'int(11)', 'Number', 'dictSort', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1279, 115, 'dict_label', '字典标签', 'varchar(100)', 'String', 'dictLabel', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1280, 115, 'dict_value', '字典键值', 'varchar(100)', 'String', 'dictValue', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1281, 115, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1282, 115, 'css_class', '样式属性（其他样式扩展）', 'varchar(100)', 'String', 'cssClass', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1283, 115, 'list_class', '表格回显样式', 'varchar(100)', 'String', 'listClass', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1284, 115, 'is_default', '是否默认（Y是 N否）', 'char(1)', 'String', 'isDefault', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1285, 115, 'status', '状态（0停用 1正常）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 9, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1286, 115, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1287, 115, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 11, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1288, 115, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1289, 115, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 13, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1290, 115, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 14, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1291, 116, 'dict_id', '字典主键', 'int(10) unsigned', 'Number', 'dictId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1292, 116, 'dict_name', '字典名称', 'varchar(100)', 'String', 'dictName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1293, 116, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1294, 116, 'status', '状态（0停用,1正常）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 4, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1295, 116, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 5, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1296, 116, 'create_time', '创建时间', 'varchar(25)', 'String', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'BETWEEN', 'datetime', '', 6, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1297, 116, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 7, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1298, 116, 'update_time', '更新时间', 'varchar(25)', 'String', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'BETWEEN', 'datetime', '', 8, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');
INSERT INTO `gen_table_column` VALUES (1299, 116, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 9, 'admin', '2024-06-16 14:05:26', 'admin', '2024-06-16 14:05:26');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N' COMMENT '系统内置（Y是 N否）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '参数配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (2, '用户管理-账号初始密码', 'sys.user.initPassword', '123456', 'Y', 'admin', '2023-12-18 14:59:08', '', NULL, '初始化密码 123456');
INSERT INTO `sys_config` VALUES (4, '账号自助-验证码开关', 'sys.account.captchaEnabled', 'true', 'Y', 'admin', '2023-12-18 14:59:08', 'admin', '2024-06-06 20:03:46', '是否开启验证码功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (6, '用户登录-黑名单列表', 'sys.login.blackIPList', '1.1.1.1', 'Y', 'admin', '2023-12-18 14:59:08', 'admin', '2024-06-05 20:24:10', '设置登录IP黑名单限制，多个匹配项以;分隔，支持匹配（*通配、网段）');

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `dept_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `parent_id` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '父部门id',
  `ancestors` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '祖级列表',
  `dept_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '部门名称',
  `order_num` int(11) NULL DEFAULT 0 COMMENT '显示顺序',
  `leader` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '部门状态（0停用,1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`dept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 205 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '部门表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (100, 0, '0', '全国总部', 0, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', 'admin', '2023-12-19 11:51:14');
INSERT INTO `sys_dept` VALUES (101, 100, '0,100', '深圳总公司', 1, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', 'admin', '2023-12-19 11:51:25');
INSERT INTO `sys_dept` VALUES (103, 101, '0,100,101', '研发部门', 1, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', '', NULL);
INSERT INTO `sys_dept` VALUES (104, 101, '0,100,101', '市场部门', 2, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', '', NULL);
INSERT INTO `sys_dept` VALUES (105, 101, '0,100,101', '测试部门', 3, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', '', NULL);
INSERT INTO `sys_dept` VALUES (106, 101, '0,100,101', '财务部门', 2, 'carole', '15888888888', 'admin@carole.top', '1', 'admin', '2023-12-18 14:59:00', 'admin', '2024-06-10 12:39:55');

-- ----------------------------
-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_data`;
CREATE TABLE `sys_dict_data`  (
  `dict_code` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '字典编码',
  `dict_sort` int(11) NULL DEFAULT 0 COMMENT '字典排序',
  `dict_label` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典标签',
  `dict_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典键值',
  `dict_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `css_class` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `list_class` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表格回显样式',
  `is_default` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N' COMMENT '是否默认（Y是 N否）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '状态（0停用 1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_code`) USING BTREE,
  INDEX `sys_dict_data_dict_type_idx`(`dict_type` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 124 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '字典数据表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_data
-- ----------------------------
INSERT INTO `sys_dict_data` VALUES (1, 1, '男', '0', 'sys_user_sex', '', '', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '性别男');
INSERT INTO `sys_dict_data` VALUES (2, 2, '女', '1', 'sys_user_sex', '', '', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '性别女');
INSERT INTO `sys_dict_data` VALUES (3, 3, '未知', '2', 'sys_user_sex', '', '', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '性别未知');
INSERT INTO `sys_dict_data` VALUES (4, 1, '显示', '1', 'sys_show_hide', '', 'primary', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '显示菜单');
INSERT INTO `sys_dict_data` VALUES (5, 2, '隐藏', '0', 'sys_show_hide', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '隐藏菜单');
INSERT INTO `sys_dict_data` VALUES (6, 1, '正常', '1', 'sys_normal_disable', '', 'primary', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (7, 2, '停用', '0', 'sys_normal_disable', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (8, 1, '正常', '1', 'sys_job_status', '', 'primary', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (9, 2, '暂停', '0', 'sys_job_status', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (10, 1, '默认', 'DEFAULT', 'sys_job_group', '', '', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '默认分组');
INSERT INTO `sys_dict_data` VALUES (11, 2, '系统', 'SYSTEM', 'sys_job_group', '', '', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '系统分组');
INSERT INTO `sys_dict_data` VALUES (12, 1, '是', 'Y', 'sys_yes_no', '', 'primary', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '系统默认是');
INSERT INTO `sys_dict_data` VALUES (13, 2, '否', 'N', 'sys_yes_no', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '系统默认否');
INSERT INTO `sys_dict_data` VALUES (14, 1, '通知', '1', 'sys_notice_type', '', 'warning', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '通知');
INSERT INTO `sys_dict_data` VALUES (15, 2, '公告', '2', 'sys_notice_type', '', 'success', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '公告');
INSERT INTO `sys_dict_data` VALUES (16, 1, '正常', '1', 'sys_notice_status', '', 'primary', 'Y', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (17, 2, '关闭', '0', 'sys_notice_status', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '关闭状态');
INSERT INTO `sys_dict_data` VALUES (18, 99, '其他', '0', 'sys_oper_type', '', 'info', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '其他操作');
INSERT INTO `sys_dict_data` VALUES (19, 1, '新增', '1', 'sys_oper_type', '', 'info', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '新增操作');
INSERT INTO `sys_dict_data` VALUES (20, 2, '修改', '2', 'sys_oper_type', '', 'info', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '修改操作');
INSERT INTO `sys_dict_data` VALUES (21, 3, '删除', '3', 'sys_oper_type', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '删除操作');
INSERT INTO `sys_dict_data` VALUES (22, 4, '授权', '4', 'sys_oper_type', '', 'primary', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '授权操作');
INSERT INTO `sys_dict_data` VALUES (23, 5, '导出', '5', 'sys_oper_type', '', 'warning', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '导出操作');
INSERT INTO `sys_dict_data` VALUES (24, 6, '导入', '6', 'sys_oper_type', '', 'warning', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '导入操作');
INSERT INTO `sys_dict_data` VALUES (25, 7, '强退', '7', 'sys_oper_type', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '强退操作');
INSERT INTO `sys_dict_data` VALUES (26, 8, '生成代码', '8', 'sys_oper_type', '', 'warning', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '生成操作');
INSERT INTO `sys_dict_data` VALUES (27, 9, '清空数据', '9', 'sys_oper_type', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '清空操作');
INSERT INTO `sys_dict_data` VALUES (28, 1, '成功', '1', 'sys_common_status', '', 'primary', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (29, 2, '失败', '0', 'sys_common_status', '', 'danger', 'N', '1', 'admin', '2023-12-18 14:59:07', '', NULL, '停用状态');

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type`  (
  `dict_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '字典主键',
  `dict_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典名称',
  `dict_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '状态（0停用,1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_id`) USING BTREE,
  UNIQUE INDEX `dict_type`(`dict_type` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 118 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '字典类型表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_type
-- ----------------------------
INSERT INTO `sys_dict_type` VALUES (1, '用户性别', 'sys_user_sex', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '用户性别列表');
INSERT INTO `sys_dict_type` VALUES (2, '菜单状态', 'sys_show_hide', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '菜单状态列表');
INSERT INTO `sys_dict_type` VALUES (3, '系统开关', 'sys_normal_disable', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '系统开关列表');
INSERT INTO `sys_dict_type` VALUES (4, '任务状态', 'sys_job_status', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '任务状态列表');
INSERT INTO `sys_dict_type` VALUES (5, '任务分组', 'sys_job_group', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '任务分组列表');
INSERT INTO `sys_dict_type` VALUES (6, '系统是否', 'sys_yes_no', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '系统是否列表');
INSERT INTO `sys_dict_type` VALUES (7, '通知类型', 'sys_notice_type', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '通知类型列表');
INSERT INTO `sys_dict_type` VALUES (8, '通知状态', 'sys_notice_status', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '通知状态列表');
INSERT INTO `sys_dict_type` VALUES (9, '操作类型', 'sys_oper_type', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '操作类型列表');
INSERT INTO `sys_dict_type` VALUES (10, '系统状态', 'sys_common_status', '1', 'admin', '2023-12-18 14:59:07', 'admin', '2024-01-16 00:00:00', '登录状态列表');

-- ----------------------------
-- Table structure for sys_logininfor
-- ----------------------------
DROP TABLE IF EXISTS `sys_logininfor`;
CREATE TABLE `sys_logininfor`  (
  `info_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '访问ID',
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '用户账号',
  `ipaddr` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '登录IP地址',
  `login_location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '登录地点',
  `browser` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '浏览器类型',
  `os` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '操作系统',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '登录状态（0失败,1成功）',
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '提示消息',
  `login_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '访问时间',
  PRIMARY KEY (`info_id`) USING BTREE,
  INDEX `idx_sys_logininfor_s`(`status` ASC) USING BTREE,
  INDEX `idx_sys_logininfor_lt`(`login_time` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 353 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统访问记录' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_logininfor
-- ----------------------------
INSERT INTO `sys_logininfor` VALUES (260, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 10:13:04');
INSERT INTO `sys_logininfor` VALUES (261, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 10:26:49');
INSERT INTO `sys_logininfor` VALUES (262, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-05 11:14:49');
INSERT INTO `sys_logininfor` VALUES (263, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 11:14:55');
INSERT INTO `sys_logininfor` VALUES (264, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 11:15:02');
INSERT INTO `sys_logininfor` VALUES (265, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 11:15:08');
INSERT INTO `sys_logininfor` VALUES (266, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:19:51');
INSERT INTO `sys_logininfor` VALUES (267, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:02');
INSERT INTO `sys_logininfor` VALUES (268, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:09');
INSERT INTO `sys_logininfor` VALUES (269, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:18');
INSERT INTO `sys_logininfor` VALUES (270, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:27');
INSERT INTO `sys_logininfor` VALUES (271, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:34');
INSERT INTO `sys_logininfor` VALUES (272, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 20:23:45');
INSERT INTO `sys_logininfor` VALUES (273, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', 'ip:127.0.0.1被封禁', '2024-06-05 20:24:02');
INSERT INTO `sys_logininfor` VALUES (274, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 21:23:49');
INSERT INTO `sys_logininfor` VALUES (275, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-05 21:27:55');
INSERT INTO `sys_logininfor` VALUES (276, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-05 21:28:07');
INSERT INTO `sys_logininfor` VALUES (277, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 21:28:13');
INSERT INTO `sys_logininfor` VALUES (278, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-05 21:39:50');
INSERT INTO `sys_logininfor` VALUES (279, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 21:40:01');
INSERT INTO `sys_logininfor` VALUES (280, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-05 21:42:49');
INSERT INTO `sys_logininfor` VALUES (281, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-06 08:38:07');
INSERT INTO `sys_logininfor` VALUES (282, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-06 08:38:13');
INSERT INTO `sys_logininfor` VALUES (283, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-06 08:38:27');
INSERT INTO `sys_logininfor` VALUES (284, 'admin', '127.0.0.1', '内网IP', 'Chrome 120', 'Windows 10', '0', '验证码错误！', '2024-06-06 15:09:09');
INSERT INTO `sys_logininfor` VALUES (285, 'admin', '127.0.0.1', '内网IP', 'Chrome 120', 'Windows 10', '0', '验证码错误！', '2024-06-06 15:09:14');
INSERT INTO `sys_logininfor` VALUES (286, 'admin', '127.0.0.1', '内网IP', 'Chrome 120', 'Windows 10', '0', '验证码错误！', '2024-06-06 15:09:16');
INSERT INTO `sys_logininfor` VALUES (287, 'admin', '127.0.0.1', '内网IP', 'Chrome 120', 'Windows 10', '0', '验证码错误！', '2024-06-06 15:09:18');
INSERT INTO `sys_logininfor` VALUES (288, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 15:35:29');
INSERT INTO `sys_logininfor` VALUES (289, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 15:39:11');
INSERT INTO `sys_logininfor` VALUES (290, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-07 15:39:16');
INSERT INTO `sys_logininfor` VALUES (291, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 15:39:28');
INSERT INTO `sys_logininfor` VALUES (292, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '用户不存在/密码错误', '2024-06-07 15:42:45');
INSERT INTO `sys_logininfor` VALUES (293, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 15:43:16');
INSERT INTO `sys_logininfor` VALUES (294, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 15:43:23');
INSERT INTO `sys_logininfor` VALUES (295, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 15:46:04');
INSERT INTO `sys_logininfor` VALUES (296, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 15:47:56');
INSERT INTO `sys_logininfor` VALUES (297, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 15:53:44');
INSERT INTO `sys_logininfor` VALUES (298, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 16:22:49');
INSERT INTO `sys_logininfor` VALUES (299, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 16:22:58');
INSERT INTO `sys_logininfor` VALUES (300, 'test2', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 16:47:27');
INSERT INTO `sys_logininfor` VALUES (301, 'test2', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 16:47:34');
INSERT INTO `sys_logininfor` VALUES (302, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-07 20:19:38');
INSERT INTO `sys_logininfor` VALUES (303, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-07 20:19:48');
INSERT INTO `sys_logininfor` VALUES (304, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-08 13:53:25');
INSERT INTO `sys_logininfor` VALUES (305, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-08 13:53:39');
INSERT INTO `sys_logininfor` VALUES (306, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-08 13:53:45');
INSERT INTO `sys_logininfor` VALUES (307, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 10:59:44');
INSERT INTO `sys_logininfor` VALUES (308, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 11:00:07');
INSERT INTO `sys_logininfor` VALUES (309, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 11:01:54');
INSERT INTO `sys_logininfor` VALUES (310, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 11:02:42');
INSERT INTO `sys_logininfor` VALUES (311, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 11:03:37');
INSERT INTO `sys_logininfor` VALUES (312, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 13:35:32');
INSERT INTO `sys_logininfor` VALUES (313, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 13:35:41');
INSERT INTO `sys_logininfor` VALUES (314, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 14:51:52');
INSERT INTO `sys_logininfor` VALUES (315, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 15:03:14');
INSERT INTO `sys_logininfor` VALUES (316, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '密码不正确', '2024-06-10 15:03:22');
INSERT INTO `sys_logininfor` VALUES (317, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 15:03:33');
INSERT INTO `sys_logininfor` VALUES (318, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 15:20:14');
INSERT INTO `sys_logininfor` VALUES (319, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 15:20:21');
INSERT INTO `sys_logininfor` VALUES (320, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 15:21:24');
INSERT INTO `sys_logininfor` VALUES (321, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 15:21:29');
INSERT INTO `sys_logininfor` VALUES (322, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 15:53:15');
INSERT INTO `sys_logininfor` VALUES (323, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 15:56:40');
INSERT INTO `sys_logininfor` VALUES (324, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 15:56:49');
INSERT INTO `sys_logininfor` VALUES (325, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 18:12:33');
INSERT INTO `sys_logininfor` VALUES (326, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '密码不正确', '2024-06-10 18:14:24');
INSERT INTO `sys_logininfor` VALUES (327, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 18:17:58');
INSERT INTO `sys_logininfor` VALUES (328, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 18:18:02');
INSERT INTO `sys_logininfor` VALUES (329, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '密码不正确', '2024-06-10 18:18:10');
INSERT INTO `sys_logininfor` VALUES (330, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-10 18:37:48');
INSERT INTO `sys_logininfor` VALUES (331, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 18:37:53');
INSERT INTO `sys_logininfor` VALUES (332, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-10 18:38:22');
INSERT INTO `sys_logininfor` VALUES (333, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 08:37:46');
INSERT INTO `sys_logininfor` VALUES (334, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 08:38:36');
INSERT INTO `sys_logininfor` VALUES (335, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 08:39:30');
INSERT INTO `sys_logininfor` VALUES (336, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 08:48:50');
INSERT INTO `sys_logininfor` VALUES (337, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-11 09:05:23');
INSERT INTO `sys_logininfor` VALUES (338, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 09:05:29');
INSERT INTO `sys_logininfor` VALUES (339, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 09:07:52');
INSERT INTO `sys_logininfor` VALUES (340, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 09:29:37');
INSERT INTO `sys_logininfor` VALUES (341, 'test', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 09:53:13');
INSERT INTO `sys_logininfor` VALUES (342, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 10:24:10');
INSERT INTO `sys_logininfor` VALUES (343, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 15:11:36');
INSERT INTO `sys_logininfor` VALUES (344, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 15:37:20');
INSERT INTO `sys_logininfor` VALUES (345, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 16:57:29');
INSERT INTO `sys_logininfor` VALUES (346, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '0', '验证码错误！', '2024-06-11 18:40:48');
INSERT INTO `sys_logininfor` VALUES (347, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-11 18:40:55');
INSERT INTO `sys_logininfor` VALUES (348, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-12 12:15:46');
INSERT INTO `sys_logininfor` VALUES (349, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-12 12:19:56');
INSERT INTO `sys_logininfor` VALUES (350, 'admin', '127.0.0.1', '内网IP', 'Chrome 125', 'Windows 10', '1', '登录成功', '2024-06-12 12:21:38');
INSERT INTO `sys_logininfor` VALUES (351, 'admin', '127.0.0.1', '内网IP', 'Chrome 126', 'Windows 10', '1', '登录成功', '2024-06-14 21:27:00');
INSERT INTO `sys_logininfor` VALUES (352, 'admin', '127.0.0.1', '内网IP', 'Chrome 126', 'Windows 10', '1', '登录成功', '2024-06-16 13:54:15');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `parent_id` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '父菜单ID',
  `order_num` int(11) NULL DEFAULT 0 COMMENT '显示顺序',
  `path` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `query` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路由参数',
  `is_frame` int(11) NULL DEFAULT 0 COMMENT '是否为外链（0否 1是）',
  `is_cache` int(11) NULL DEFAULT 1 COMMENT '是否缓存（0不缓存 1缓存）',
  `menu_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单状态（0隐藏 1显示）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '菜单状态（0停用 1正常）',
  `perms` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '#' COMMENT '菜单图标',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2051 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '菜单权限表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', 0, 1, 'system', NULL, '', 0, 1, 'M', '1', '1', '', 'system', 'admin', '2023-12-18 14:59:03', '', NULL, '系统管理目录');
INSERT INTO `sys_menu` VALUES (2, '系统监控', 0, 2, 'monitor', NULL, '', 0, 1, 'M', '1', '1', '', 'monitor', 'admin', '2023-12-18 14:59:03', '', NULL, '系统监控目录');
INSERT INTO `sys_menu` VALUES (3, '系统工具', 0, 3, 'tool', NULL, '', 0, 1, 'M', '1', '1', '', 'tool', 'admin', '2023-12-18 14:59:03', '', NULL, '系统工具目录');
INSERT INTO `sys_menu` VALUES (100, '用户管理', 1, 1, 'user', 'system/user/index', '', 0, 1, 'C', '1', '1', 'system:user:list', 'user', 'admin', '2023-12-18 14:59:03', '', NULL, '用户管理菜单');
INSERT INTO `sys_menu` VALUES (101, '角色管理', 1, 2, 'role', 'system/role/index', '', 0, 1, 'C', '1', '1', 'system:role:list', 'peoples', 'admin', '2023-12-18 14:59:03', '', NULL, '角色管理菜单');
INSERT INTO `sys_menu` VALUES (102, '菜单管理', 1, 3, 'menu', 'system/menu/index', '', 0, 1, 'C', '1', '1', 'system:menu:list', 'tree-table', 'admin', '2023-12-18 14:59:03', '', NULL, '菜单管理菜单');
INSERT INTO `sys_menu` VALUES (103, '部门管理', 1, 4, 'dept', 'system/dept/index', '', 0, 1, 'C', '1', '1', 'system:dept:list', 'tree', 'admin', '2023-12-18 14:59:03', '', NULL, '部门管理菜单');
INSERT INTO `sys_menu` VALUES (104, '岗位管理', 1, 5, 'post', 'system/post/index', '', 0, 1, 'C', '1', '1', 'system:post:list', 'post', 'admin', '2023-12-18 14:59:03', '', NULL, '岗位管理菜单');
INSERT INTO `sys_menu` VALUES (105, '字典管理', 1, 6, 'dict', 'system/dict/index', '', 0, 1, 'C', '1', '1', 'system:dict:list', 'dict', 'admin', '2023-12-18 14:59:03', '', NULL, '字典管理菜单');
INSERT INTO `sys_menu` VALUES (106, '参数设置', 1, 7, 'config', 'system/config/index', '', 0, 1, 'C', '1', '1', 'system:config:list', 'edit', 'admin', '2023-12-18 14:59:03', '', NULL, '参数设置菜单');
INSERT INTO `sys_menu` VALUES (107, '通知公告', 1, 8, 'notice', 'system/notice/index', '', 0, 1, 'C', '1', '1', 'system:notice:list', 'message', 'admin', '2023-12-18 14:59:03', '', NULL, '通知公告菜单');
INSERT INTO `sys_menu` VALUES (108, '日志管理', 1, 9, 'log', '', '', 0, 1, 'M', '1', '1', '', 'log', 'admin', '2023-12-18 14:59:03', '', NULL, '日志管理菜单');
INSERT INTO `sys_menu` VALUES (109, '在线用户', 2, 1, 'online', 'monitor/online/index', '', 0, 1, 'C', '1', '1', 'monitor:online:list', 'online', 'admin', '2024-05-22 17:50:50', '', NULL, '在线用户菜单');
INSERT INTO `sys_menu` VALUES (112, '服务监控', 2, 4, 'server', 'monitor/server/index', '', 0, 1, 'C', '1', '1', 'monitor:server:list', 'server', 'admin', '2023-12-18 14:59:03', '', NULL, '服务监控菜单');
INSERT INTO `sys_menu` VALUES (116, '代码生成', 3, 2, 'gen', 'tool/gen/index', '', 0, 1, 'C', '1', '1', 'tool:gen:list', 'code', 'admin', '2023-12-18 14:59:03', '', NULL, '代码生成菜单');
INSERT INTO `sys_menu` VALUES (501, '登录日志', 108, 2, 'logininfor', 'monitor/logininfor/index', '', 0, 1, 'C', '1', '1', 'monitor:logininfor:list', 'logininfor', 'admin', '2023-12-18 14:59:03', '', NULL, '登录日志菜单');
INSERT INTO `sys_menu` VALUES (1000, '用户查询', 100, 1, '', '', '', 0, 1, 'F', '1', '1', 'system:user:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1001, '用户新增', 100, 2, '', '', '', 0, 1, 'F', '1', '1', 'system:user:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1002, '用户修改', 100, 3, '', '', '', 0, 1, 'F', '1', '1', 'system:user:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1003, '用户删除', 100, 4, '', '', '', 0, 1, 'F', '1', '1', 'system:user:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1004, '用户导出', 100, 5, '', '', '', 0, 1, 'F', '1', '1', 'system:user:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1007, '角色查询', 101, 1, '', '', '', 0, 1, 'F', '1', '1', 'system:role:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1008, '角色新增', 101, 2, '', '', '', 0, 1, 'F', '1', '1', 'system:role:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1009, '角色修改', 101, 3, '', '', '', 0, 1, 'F', '1', '1', 'system:role:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1010, '角色删除', 101, 4, '', '', '', 0, 1, 'F', '1', '1', 'system:role:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1011, '角色导出', 101, 5, '', '', '', 0, 1, 'F', '1', '1', 'system:role:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1012, '菜单查询', 102, 1, '', '', '', 0, 1, 'F', '1', '1', 'system:menu:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1013, '菜单新增', 102, 2, '', '', '', 0, 1, 'F', '1', '1', 'system:menu:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1014, '菜单修改', 102, 3, '', '', '', 0, 1, 'F', '1', '1', 'system:menu:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1015, '菜单删除', 102, 4, '', '', '', 0, 1, 'F', '1', '1', 'system:menu:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1016, '部门查询', 103, 1, '', '', '', 0, 1, 'F', '1', '1', 'system:dept:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1017, '部门新增', 103, 2, '', '', '', 0, 1, 'F', '1', '1', 'system:dept:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1018, '部门修改', 103, 3, '', '', '', 0, 1, 'F', '1', '1', 'system:dept:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1019, '部门删除', 103, 4, '', '', '', 0, 1, 'F', '1', '1', 'system:dept:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1020, '岗位查询', 104, 1, '', '', '', 0, 1, 'F', '1', '1', 'system:post:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1021, '岗位新增', 104, 2, '', '', '', 0, 1, 'F', '1', '1', 'system:post:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1022, '岗位修改', 104, 3, '', '', '', 0, 1, 'F', '1', '1', 'system:post:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1023, '岗位删除', 104, 4, '', '', '', 0, 1, 'F', '1', '1', 'system:post:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1024, '岗位导出', 104, 5, '', '', '', 0, 1, 'F', '1', '1', 'system:post:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1025, '字典查询', 105, 1, '#', '', '', 0, 1, 'F', '1', '1', 'system:dict:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1026, '字典新增', 105, 2, '#', '', '', 0, 1, 'F', '1', '1', 'system:dict:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1027, '字典修改', 105, 3, '#', '', '', 0, 1, 'F', '1', '1', 'system:dict:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1028, '字典删除', 105, 4, '#', '', '', 0, 1, 'F', '1', '1', 'system:dict:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1029, '字典导出', 105, 5, '#', '', '', 0, 1, 'F', '1', '1', 'system:dict:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1030, '参数查询', 106, 1, '#', '', '', 0, 1, 'F', '1', '1', 'system:config:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1031, '参数新增', 106, 2, '#', '', '', 0, 1, 'F', '1', '1', 'system:config:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1032, '参数修改', 106, 3, '#', '', '', 0, 1, 'F', '1', '1', 'system:config:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1033, '参数删除', 106, 4, '#', '', '', 0, 1, 'F', '1', '1', 'system:config:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1034, '参数导出', 106, 5, '#', '', '', 0, 1, 'F', '1', '1', 'system:config:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1035, '公告查询', 107, 1, '#', '', '', 0, 1, 'F', '1', '1', 'system:notice:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1036, '公告新增', 107, 2, '#', '', '', 0, 1, 'F', '1', '1', 'system:notice:add', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1037, '公告修改', 107, 3, '#', '', '', 0, 1, 'F', '1', '1', 'system:notice:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1038, '公告删除', 107, 4, '#', '', '', 0, 1, 'F', '1', '1', 'system:notice:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1042, '登录查询', 501, 1, '#', '', '', 0, 1, 'F', '1', '1', 'monitor:logininfor:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1043, '登录删除', 501, 2, '#', '', '', 0, 1, 'F', '1', '1', 'monitor:logininfor:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1044, '日志导出', 501, 3, '#', '', '', 0, 1, 'F', '1', '1', 'monitor:logininfor:export', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1046, '在线查询', 109, 1, '#', '', '', 0, 1, 'F', '1', '1', 'monitor:online:query', '#', 'admin', '2024-05-22 17:50:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1047, '批量强退', 109, 2, '#', '', '', 0, 1, 'F', '1', '1', 'monitor:online:batchLogout', '#', 'admin', '2024-05-22 17:50:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1055, '生成查询', 116, 1, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:query', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1056, '生成修改', 116, 2, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:edit', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1057, '生成删除', 116, 3, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:remove', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1058, '导入代码', 116, 4, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:import', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1059, '预览代码', 116, 5, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:preview', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1060, '生成代码', 116, 6, '#', '', '', 0, 1, 'F', '1', '1', 'tool:gen:code', '#', 'admin', '2023-12-18 14:59:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2032, '接口文档', 3, 3, 'swagger', 'tool/swagger/index', NULL, 0, 1, 'C', '1', '1', NULL, 'documentation', 'admin', '2024-06-05 19:03:55', 'admin', '2024-06-05 19:14:40', '');
INSERT INTO `sys_menu` VALUES (2035, '缓存监控', 2, 2, 'cache', 'monitor/cache/index', NULL, 0, 1, 'C', '1', '1', 'monitor:cache:list', 'redis', 'admin', '2024-06-05 20:55:04', 'admin', '2024-06-05 21:03:09', '');

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `notice_title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告标题',
  `notice_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `notice_content` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '公告状态（0关闭 1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`notice_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------
INSERT INTO `sys_notice` VALUES (10, '测试', '1', '<p>hello</p>', '1', 'admin', '2024-06-05 20:30:23', 'admin', '2024-06-05 20:30:23', NULL);

-- ----------------------------
-- Table structure for sys_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_post`;
CREATE TABLE `sys_post`  (
  `post_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '岗位ID',
  `post_code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '岗位编码',
  `post_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '岗位名称',
  `post_sort` int(11) NOT NULL COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '状态（0停用 1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`post_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '岗位信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_post
-- ----------------------------
INSERT INTO `sys_post` VALUES (1, 'ceo', '董事长', 1, '1', 'admin', '2023-12-18 14:59:02', '', NULL, '');
INSERT INTO `sys_post` VALUES (2, 'se', '项目经理', 2, '1', 'admin', '2023-12-18 14:59:02', '', NULL, '');
INSERT INTO `sys_post` VALUES (3, 'hr', '人力资源', 3, '1', 'admin', '2023-12-18 14:59:02', '', NULL, '');
INSERT INTO `sys_post` VALUES (4, 'user', '普通员工', 4, '1', 'admin', '2023-12-18 14:59:02', '', NULL, '');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名称',
  `role_key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色权限字符串',
  `role_sort` int(11) NOT NULL COMMENT '显示顺序',
  `data_scope` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '5' COMMENT '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限 5：仅个人权限）',
  `menu_check_strictly` tinyint(11) NULL DEFAULT 1 COMMENT '菜单树选择项是否关联显示',
  `dept_check_strictly` tinyint(11) NULL DEFAULT 1 COMMENT '部门树选择项是否关联显示',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '角色状态（0停用 1正常）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 107 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'admin', 1, '1', 1, 1, '1', 'admin', '2023-12-18 14:59:03', '', NULL, '超级管理员');
INSERT INTO `sys_role` VALUES (2, '普通角色', 'common', 2, '2', 1, 1, '1', 'admin', '2023-12-18 14:59:03', 'admin', '2024-06-07 20:34:41', '普通角色');

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept`  (
  `role_id` int(10) UNSIGNED NOT NULL COMMENT '角色ID',
  `dept_id` int(10) UNSIGNED NOT NULL COMMENT '部门ID',
  PRIMARY KEY (`role_id`, `dept_id`) USING BTREE,
  INDEX `sys_role_dept_dept_id_idx`(`dept_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色和部门关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------
INSERT INTO `sys_role_dept` VALUES (2, 100);
INSERT INTO `sys_role_dept` VALUES (2, 101);
INSERT INTO `sys_role_dept` VALUES (2, 103);
INSERT INTO `sys_role_dept` VALUES (2, 104);
INSERT INTO `sys_role_dept` VALUES (2, 105);
INSERT INTO `sys_role_dept` VALUES (2, 106);

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `role_id` int(10) UNSIGNED NOT NULL COMMENT '角色ID',
  `menu_id` int(10) UNSIGNED NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE,
  INDEX `sys_role_menu_menu_id_idx`(`menu_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色和菜单关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES (2, 1);
INSERT INTO `sys_role_menu` VALUES (2, 2);
INSERT INTO `sys_role_menu` VALUES (2, 3);
INSERT INTO `sys_role_menu` VALUES (2, 100);
INSERT INTO `sys_role_menu` VALUES (2, 101);
INSERT INTO `sys_role_menu` VALUES (2, 102);
INSERT INTO `sys_role_menu` VALUES (2, 103);
INSERT INTO `sys_role_menu` VALUES (2, 104);
INSERT INTO `sys_role_menu` VALUES (2, 105);
INSERT INTO `sys_role_menu` VALUES (2, 106);
INSERT INTO `sys_role_menu` VALUES (2, 107);
INSERT INTO `sys_role_menu` VALUES (2, 108);
INSERT INTO `sys_role_menu` VALUES (2, 112);
INSERT INTO `sys_role_menu` VALUES (2, 116);
INSERT INTO `sys_role_menu` VALUES (2, 501);
INSERT INTO `sys_role_menu` VALUES (2, 1000);
INSERT INTO `sys_role_menu` VALUES (2, 1007);
INSERT INTO `sys_role_menu` VALUES (2, 1012);
INSERT INTO `sys_role_menu` VALUES (2, 1016);
INSERT INTO `sys_role_menu` VALUES (2, 1020);
INSERT INTO `sys_role_menu` VALUES (2, 1025);
INSERT INTO `sys_role_menu` VALUES (2, 1030);
INSERT INTO `sys_role_menu` VALUES (2, 1035);
INSERT INTO `sys_role_menu` VALUES (2, 1042);
INSERT INTO `sys_role_menu` VALUES (2, 1055);
INSERT INTO `sys_role_menu` VALUES (2, 2032);
INSERT INTO `sys_role_menu` VALUES (2, 2035);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `dept_id` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '部门ID',
  `user_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  `user_type` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '00' COMMENT '用户类型（00系统用户）',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '用户邮箱',
  `phonenumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '手机号码',
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '用户性别（0男 1女 2未知）',
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '头像地址',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '密码',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '帐号状态（0停用,1正常 ）',
  `login_ip` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '最后登录IP',
  `login_date` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最后登录时间',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `sys_user_dept_id_idx`(`dept_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 125 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 103, 'admin', 'admin', '00', 'admin@carole.top', '18888888888', '0', '', 'e5fa720ab8006315ad95dd38736675b3e67604e099f19d644c503b604e9222bd', '1', '127.0.0.1', '2023-12-21 15:19:31', 'admin', '2023-12-18 14:59:02', '', '2024-01-20 21:49:45', '管理员');
INSERT INTO `sys_user` VALUES (2, 103, 'test', 'test', '00', 'test@carole.top', '18888888888', '0', '', 'e7e266243c001eb54353a87b890206dc3fe8af383a7e90a5577d609a97e87a9f', '1', '127.0.0.1', '2023-12-21 15:19:31', 'admin', '2024-06-07 16:47:07', 'admin', '2024-06-07 17:09:14', 'test');

-- ----------------------------
-- Table structure for sys_user_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_post`;
CREATE TABLE `sys_user_post`  (
  `user_id` int(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `post_id` int(10) UNSIGNED NOT NULL COMMENT '岗位ID',
  PRIMARY KEY (`user_id`, `post_id`) USING BTREE,
  INDEX `sys_user_post_post_id_idx`(`post_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户与岗位关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_post
-- ----------------------------
INSERT INTO `sys_user_post` VALUES (1, 1);

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `user_id` int(10) UNSIGNED NOT NULL COMMENT '用户ID',
  `role_id` int(10) UNSIGNED NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `sys_user_role_role_id_idx`(`role_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户和角色关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, 1);
INSERT INTO `sys_user_role` VALUES (2, 2);

SET FOREIGN_KEY_CHECKS = 1;
