
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.1
 * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
 */
Prisma.prismaVersion = {
  client: "5.15.1",
  engine: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GenTableScalarFieldEnum = {
  tableId: 'tableId',
  tableName: 'tableName',
  tableComment: 'tableComment',
  subTableName: 'subTableName',
  subTableFkName: 'subTableFkName',
  className: 'className',
  tplCategory: 'tplCategory',
  tplWebType: 'tplWebType',
  packageName: 'packageName',
  moduleName: 'moduleName',
  businessName: 'businessName',
  functionName: 'functionName',
  functionAuthor: 'functionAuthor',
  genType: 'genType',
  genPath: 'genPath',
  options: 'options',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.GenTableColumnScalarFieldEnum = {
  columnId: 'columnId',
  tableId: 'tableId',
  columnName: 'columnName',
  columnComment: 'columnComment',
  columnType: 'columnType',
  javaType: 'javaType',
  javaField: 'javaField',
  isPk: 'isPk',
  isIncrement: 'isIncrement',
  isRequired: 'isRequired',
  isInsert: 'isInsert',
  isEdit: 'isEdit',
  isList: 'isList',
  isQuery: 'isQuery',
  queryType: 'queryType',
  htmlType: 'htmlType',
  dictType: 'dictType',
  sort: 'sort',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysConfigScalarFieldEnum = {
  configId: 'configId',
  configName: 'configName',
  configKey: 'configKey',
  configValue: 'configValue',
  configType: 'configType',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDeptScalarFieldEnum = {
  deptId: 'deptId',
  parentId: 'parentId',
  ancestors: 'ancestors',
  deptName: 'deptName',
  orderNum: 'orderNum',
  leader: 'leader',
  phone: 'phone',
  email: 'email',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime'
};

exports.Prisma.SysDictDataScalarFieldEnum = {
  dictCode: 'dictCode',
  dictSort: 'dictSort',
  dictLabel: 'dictLabel',
  dictValue: 'dictValue',
  dictType: 'dictType',
  cssClass: 'cssClass',
  listClass: 'listClass',
  isDefault: 'isDefault',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysDictTypeScalarFieldEnum = {
  dictId: 'dictId',
  dictName: 'dictName',
  dictType: 'dictType',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysLogininforScalarFieldEnum = {
  infoId: 'infoId',
  userName: 'userName',
  ipaddr: 'ipaddr',
  loginLocation: 'loginLocation',
  browser: 'browser',
  os: 'os',
  status: 'status',
  msg: 'msg',
  loginTime: 'loginTime'
};

exports.Prisma.SysMenuScalarFieldEnum = {
  menuId: 'menuId',
  menuName: 'menuName',
  parentId: 'parentId',
  orderNum: 'orderNum',
  path: 'path',
  component: 'component',
  query: 'query',
  isFrame: 'isFrame',
  isCache: 'isCache',
  menuType: 'menuType',
  visible: 'visible',
  status: 'status',
  perms: 'perms',
  icon: 'icon',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysNoticeScalarFieldEnum = {
  noticeId: 'noticeId',
  noticeTitle: 'noticeTitle',
  noticeType: 'noticeType',
  noticeContent: 'noticeContent',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysPostScalarFieldEnum = {
  postId: 'postId',
  postCode: 'postCode',
  postName: 'postName',
  postSort: 'postSort',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysUserPostScalarFieldEnum = {
  userId: 'userId',
  postId: 'postId'
};

exports.Prisma.SysRoleDeptScalarFieldEnum = {
  roleId: 'roleId',
  deptId: 'deptId'
};

exports.Prisma.SysRoleMenuScalarFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId'
};

exports.Prisma.SysUserScalarFieldEnum = {
  userId: 'userId',
  deptId: 'deptId',
  userName: 'userName',
  nickName: 'nickName',
  userType: 'userType',
  email: 'email',
  phonenumber: 'phonenumber',
  sex: 'sex',
  avatar: 'avatar',
  password: 'password',
  status: 'status',
  loginIp: 'loginIp',
  loginDate: 'loginDate',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysRoleScalarFieldEnum = {
  roleId: 'roleId',
  roleName: 'roleName',
  roleKey: 'roleKey',
  roleSort: 'roleSort',
  dataScope: 'dataScope',
  menuCheckStrictly: 'menuCheckStrictly',
  deptCheckStrictly: 'deptCheckStrictly',
  status: 'status',
  createBy: 'createBy',
  createTime: 'createTime',
  updateBy: 'updateBy',
  updateTime: 'updateTime',
  remark: 'remark'
};

exports.Prisma.SysUserRoleScalarFieldEnum = {
  userId: 'userId',
  roleId: 'roleId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  GenTable: 'GenTable',
  GenTableColumn: 'GenTableColumn',
  SysConfig: 'SysConfig',
  SysDept: 'SysDept',
  SysDictData: 'SysDictData',
  SysDictType: 'SysDictType',
  SysLogininfor: 'SysLogininfor',
  SysMenu: 'SysMenu',
  SysNotice: 'SysNotice',
  SysPost: 'SysPost',
  SysUserPost: 'SysUserPost',
  SysRoleDept: 'SysRoleDept',
  SysRoleMenu: 'SysRoleMenu',
  SysUser: 'SysUser',
  SysRole: 'SysRole',
  SysUserRole: 'SysUserRole'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/zheqi/Documents/carole-admin/server/src/common/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin"
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      }
    ],
    "previewFeatures": [
      "views",
      "relationJoins",
      "prismaSchemaFolder",
      "omitApi"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.15.1",
  "engineVersion": "5675a3182f972f1a8f31d16eee6abf4fd54910e3",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "model GenTable {\n  tableId        Int              @id @default(autoincrement()) @map(\"table_id\") @db.UnsignedInt\n  tableName      String?          @default(\"\") @map(\"table_name\") @db.VarChar(200)\n  tableComment   String?          @default(\"\") @map(\"table_comment\") @db.VarChar(500)\n  subTableName   String?          @map(\"sub_table_name\") @db.VarChar(64)\n  subTableFkName String?          @map(\"sub_table_fk_name\") @db.VarChar(64)\n  className      String?          @default(\"\") @map(\"class_name\") @db.VarChar(100)\n  tplCategory    String?          @default(\"crud\") @map(\"tpl_category\") @db.VarChar(200)\n  tplWebType     String?          @default(\"\") @map(\"tpl_web_type\") @db.VarChar(30)\n  packageName    String?          @map(\"package_name\") @db.VarChar(100)\n  moduleName     String?          @map(\"module_name\") @db.VarChar(30)\n  businessName   String?          @map(\"business_name\") @db.VarChar(30)\n  functionName   String?          @map(\"function_name\") @db.VarChar(50)\n  functionAuthor String?          @map(\"function_author\") @db.VarChar(50)\n  genType        String?          @default(\"0\") @map(\"gen_type\") @db.Char(1)\n  genPath        String?          @default(\"/\") @map(\"gen_path\") @db.VarChar(200)\n  options        String?          @map(\"options\") @db.VarChar(1000)\n  createBy       String?          @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime     String?          @map(\"create_time\") @db.VarChar(25)\n  updateBy       String?          @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime     String?          @map(\"update_time\") @db.VarChar(25)\n  remark         String?          @db.VarChar(500)\n  tableColumns   GenTableColumn[]\n\n  @@map(\"gen_table\")\n}\n\nmodel GenTableColumn {\n  columnId      Int       @id @default(autoincrement()) @map(\"column_id\") @db.UnsignedInt\n  tableId       Int?      @map(\"table_id\") @db.UnsignedInt\n  columnName    String?   @map(\"column_name\") @db.VarChar(200)\n  columnComment String?   @map(\"column_comment\") @db.VarChar(500)\n  columnType    String?   @map(\"column_type\") @db.VarChar(100)\n  javaType      String?   @map(\"java_type\") @db.VarChar(500)\n  javaField     String?   @map(\"java_field\") @db.VarChar(200)\n  isPk          String?   @map(\"is_pk\") @db.Char(1)\n  isIncrement   String?   @map(\"is_increment\") @db.Char(1)\n  isRequired    String?   @map(\"is_required\") @db.Char(1)\n  isInsert      String?   @map(\"is_insert\") @db.Char(1)\n  isEdit        String?   @map(\"is_edit\") @db.Char(1)\n  isList        String?   @map(\"is_list\") @db.Char(1)\n  isQuery       String?   @map(\"is_query\") @db.Char(1)\n  queryType     String?   @default(\"EQ\") @map(\"query_type\") @db.VarChar(200)\n  htmlType      String?   @map(\"html_type\") @db.VarChar(200)\n  dictType      String?   @default(\"\") @map(\"dict_type\") @db.VarChar(200)\n  sort          Int?      @map(\"sort\")\n  createBy      String?   @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime    String?   @map(\"create_time\") @db.VarChar(25)\n  updateBy      String?   @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime    String?   @map(\"update_time\") @db.VarChar(25)\n  table         GenTable? @relation(fields: [tableId], references: [tableId])\n\n  @@index([tableId])\n  @@map(\"gen_table_column\")\n}\n\nmodel SysConfig {\n  configId    Int     @id @default(autoincrement()) @map(\"config_id\")\n  configName  String? @default(\"\") @map(\"config_name\") @db.VarChar(100)\n  configKey   String? @default(\"\") @map(\"config_key\") @db.VarChar(100)\n  configValue String? @default(\"\") @map(\"config_value\") @db.VarChar(500)\n  configType  String? @default(\"N\") @map(\"config_type\") @db.Char(1)\n  createBy    String? @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String? @map(\"create_time\") @db.VarChar(25)\n  updateBy    String? @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String? @map(\"update_time\") @db.VarChar(25)\n  remark      String? @map(\"remark\") @db.VarChar(500)\n\n  @@map(\"sys_config\")\n}\n\nmodel SysDept {\n  deptId     Int           @id @default(autoincrement()) @map(\"dept_id\") @db.UnsignedInt\n  parentId   Int?          @default(0) @map(\"parent_id\") @db.UnsignedInt\n  ancestors  String?       @default(\"\") @map(\"ancestors\") @db.VarChar(50)\n  deptName   String?       @default(\"\") @map(\"dept_name\") @db.VarChar(30)\n  orderNum   Int?          @default(0) @map(\"order_num\")\n  leader     String?       @map(\"leader\") @db.VarChar(20)\n  phone      String?       @map(\"phone\") @db.VarChar(11)\n  email      String?       @map(\"email\") @db.VarChar(50)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  users      SysUser[]\n  roles      SysRoleDept[]\n\n  @@map(\"sys_dept\")\n}\n\nmodel SysDictData {\n  dictCode    Int          @id @default(autoincrement()) @map(\"dict_code\") @db.UnsignedInt\n  dictSort    Int?         @default(0) @map(\"dict_sort\")\n  dictLabel   String?      @default(\"\") @map(\"dict_label\") @db.VarChar(100)\n  dictValue   String?      @default(\"\") @map(\"dict_value\") @db.VarChar(100)\n  dictType    String?      @default(\"\") @map(\"dict_type\") @db.VarChar(100)\n  cssClass    String?      @map(\"css_class\") @db.VarChar(100)\n  listClass   String?      @map(\"list_class\") @db.VarChar(100)\n  isDefault   String?      @default(\"N\") @map(\"is_default\") @db.Char(1)\n  status      String?      @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy    String?      @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String?      @map(\"create_time\") @db.VarChar(25)\n  updateBy    String?      @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String?      @map(\"update_time\") @db.VarChar(25)\n  remark      String?      @map(\"remark\") @db.VarChar(500)\n  sysDictType SysDictType? @relation(fields: [dictType], references: [dictType])\n\n  @@index([dictType])\n  @@map(\"sys_dict_data\")\n}\n\nmodel SysDictType {\n  dictId     Int           @id @default(autoincrement()) @map(\"dict_id\") @db.UnsignedInt\n  dictName   String?       @default(\"\") @map(\"dict_name\") @db.VarChar(100)\n  dictType   String?       @unique(map: \"dict_type\") @default(\"\") @map(\"dict_type\") @db.VarChar(100)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @map(\"remark\") @db.VarChar(500)\n  dictDatas  SysDictData[]\n\n  @@map(\"sys_dict_type\")\n}\n\nmodel SysLogininfor {\n  infoId        Int     @id @default(autoincrement()) @map(\"info_id\") @db.UnsignedInt\n  userName      String? @default(\"\") @map(\"user_name\") @db.VarChar(50)\n  ipaddr        String? @default(\"\") @map(\"ipaddr\") @db.VarChar(128)\n  loginLocation String? @default(\"\") @map(\"login_location\") @db.VarChar(255)\n  browser       String? @default(\"\") @map(\"browser\") @db.VarChar(50)\n  os            String? @default(\"\") @map(\"os\") @db.VarChar(50)\n  status        String? @default(\"1\") @map(\"status\") @db.Char(1)\n  msg           String? @default(\"\") @map(\"msg\") @db.VarChar(255)\n  loginTime     String? @map(\"login_time\") @db.VarChar(25)\n\n  @@index([loginTime], map: \"idx_sys_logininfor_lt\")\n  @@index([status], map: \"idx_sys_logininfor_s\")\n  @@map(\"sys_logininfor\")\n}\n\nmodel SysMenu {\n  menuId     Int           @id @default(autoincrement()) @map(\"menu_id\") @db.UnsignedInt\n  menuName   String        @map(\"menu_name\") @db.VarChar(50)\n  parentId   Int?          @default(0) @map(\"parent_id\") @db.UnsignedInt\n  orderNum   Int?          @default(0) @map(\"order_num\")\n  path       String?       @default(\"\") @map(\"path\") @db.VarChar(200)\n  component  String?       @map(\"component\") @db.VarChar(255)\n  query      String?       @map(\"query\") @db.VarChar(255)\n  isFrame    Int?          @default(0) @map(\"is_frame\")\n  isCache    Int?          @default(1) @map(\"is_cache\")\n  menuType   String?       @default(\"\") @map(\"menu_type\") @db.Char(1)\n  visible    String?       @default(\"1\") @map(\"visible\") @db.Char(1)\n  status     String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  perms      String?       @map(\"perms\") @db.VarChar(100)\n  icon       String?       @default(\"#\") @map(\"icon\") @db.VarChar(100)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @default(\"\") @map(\"remark\") @db.VarChar(500)\n  roles      SysRoleMenu[]\n\n  @@map(\"sys_menu\")\n}\n\nmodel SysNotice {\n  noticeId      Int     @id @default(autoincrement()) @map(\"notice_id\")\n  noticeTitle   String  @map(\"notice_title\") @db.VarChar(50)\n  noticeType    String  @map(\"notice_type\") @db.Char(1)\n  noticeContent String? @map(\"notice_content\") @db.MediumText\n  status        String? @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy      String? @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime    String? @map(\"create_time\") @db.VarChar(25)\n  updateBy      String? @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime    String? @map(\"update_time\") @db.VarChar(25)\n  remark        String? @map(\"remark\") @db.VarChar(255)\n\n  @@map(\"sys_notice\")\n}\n\nmodel SysPost {\n  postId     Int           @id @default(autoincrement()) @map(\"post_id\") @db.UnsignedInt\n  postCode   String        @map(\"post_code\") @db.VarChar(64)\n  postName   String        @map(\"post_name\") @db.VarChar(50)\n  postSort   Int           @map(\"post_sort\")\n  status     String        @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy   String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy   String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime String?       @map(\"update_time\") @db.VarChar(25)\n  remark     String?       @map(\"remark\") @db.VarChar(500)\n  users      SysUserPost[]\n\n  @@map(\"sys_post\")\n}\n\nmodel SysUserPost {\n  userId Int     @map(\"user_id\") @db.UnsignedInt\n  postId Int     @map(\"post_id\") @db.UnsignedInt\n  user   SysUser @relation(fields: [userId], references: [userId])\n  post   SysPost @relation(fields: [postId], references: [postId])\n\n  @@id([userId, postId])\n  @@index([postId])\n  @@map(\"sys_user_post\")\n}\n\nmodel SysRoleDept {\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  deptId Int     @map(\"dept_id\") @db.UnsignedInt\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n  dept   SysDept @relation(fields: [deptId], references: [deptId])\n\n  @@id([roleId, deptId])\n  @@index([deptId])\n  @@map(\"sys_role_dept\")\n}\n\nmodel SysRoleMenu {\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  menuId Int     @map(\"menu_id\") @db.UnsignedInt\n  menu   SysMenu @relation(fields: [menuId], references: [menuId])\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n\n  @@id([roleId, menuId])\n  @@index([menuId])\n  @@map(\"sys_role_menu\")\n}\n\nmodel SysUser {\n  userId      Int           @id @default(autoincrement()) @map(\"user_id\") @db.UnsignedInt\n  deptId      Int?          @map(\"dept_id\") @db.UnsignedInt\n  userName    String        @map(\"user_name\") @db.VarChar(30)\n  nickName    String        @map(\"nick_name\") @db.VarChar(30)\n  userType    String?       @default(\"00\") @map(\"user_type\") @db.VarChar(2)\n  email       String?       @default(\"\") @map(\"email\") @db.VarChar(50)\n  phonenumber String?       @default(\"\") @map(\"phonenumber\") @db.VarChar(11)\n  sex         String?       @default(\"0\") @map(\"sex\") @db.Char(1)\n  avatar      String?       @default(\"\") @map(\"avatar\") @db.VarChar(100)\n  password    String?       @default(\"\") @map(\"password\") @db.VarChar(100)\n  status      String?       @default(\"1\") @map(\"status\") @db.Char(1)\n  loginIp     String?       @default(\"\") @map(\"login_ip\") @db.VarChar(128)\n  loginDate   String?       @map(\"login_date\") @db.VarChar(25)\n  createBy    String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime  String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy    String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime  String?       @map(\"update_time\") @db.VarChar(25)\n  remark      String?       @map(\"remark\") @db.VarChar(500)\n  dept        SysDept?      @relation(fields: [deptId], references: [deptId])\n  roles       SysUserRole[]\n  posts       SysUserPost[]\n\n  @@index([deptId])\n  @@map(\"sys_user\")\n}\n\nmodel SysRole {\n  roleId            Int           @id @default(autoincrement()) @map(\"role_id\") @db.UnsignedInt\n  roleName          String        @map(\"role_name\") @db.VarChar(30)\n  roleKey           String        @map(\"role_key\") @db.VarChar(100)\n  roleSort          Int           @map(\"role_sort\")\n  dataScope         String?       @default(\"5\") @map(\"data_scope\") @db.Char(1)\n  menuCheckStrictly Int?          @default(1) @map(\"menu_check_strictly\") @db.TinyInt\n  deptCheckStrictly Int?          @default(1) @map(\"dept_check_strictly\") @db.TinyInt\n  status            String        @default(\"1\") @map(\"status\") @db.Char(1)\n  createBy          String?       @default(\"\") @map(\"create_by\") @db.VarChar(64)\n  createTime        String?       @map(\"create_time\") @db.VarChar(25)\n  updateBy          String?       @default(\"\") @map(\"update_by\") @db.VarChar(64)\n  updateTime        String?       @map(\"update_time\") @db.VarChar(25)\n  remark            String?       @map(\"remark\") @db.VarChar(500)\n  users             SysUserRole[]\n  menus             SysRoleMenu[]\n  depts             SysRoleDept[]\n\n  @@map(\"sys_role\")\n}\n\nmodel SysUserRole {\n  userId Int     @map(\"user_id\") @db.UnsignedInt\n  roleId Int     @map(\"role_id\") @db.UnsignedInt\n  user   SysUser @relation(fields: [userId], references: [userId])\n  role   SysRole @relation(fields: [roleId], references: [roleId])\n\n  @@id([userId, roleId])\n  @@index([roleId])\n  @@map(\"sys_user_role\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./common/prisma-client\"\n  previewFeatures = [\"views\", \"relationJoins\", \"prismaSchemaFolder\", \"omitApi\"]\n  //可以选择自己的平台，这里我就全部一起指定了\n  binaryTargets   = [\"darwin\", \"windows\", \"linux-musl\", \"debian-openssl-3.0.x\", \"darwin-arm64\"]\n}\n\ndatasource db {\n  provider     = \"mysql\"\n  url          = env(\"DATABASE_URL\")\n  relationMode = \"prisma\"\n}\n",
  "inlineSchemaHash": "dedc2a1f4212eb12cf47f9546f470eb22ecd93d5a4c6f79dd890225bf02af2b9",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"GenTable\":{\"dbName\":\"gen_table\",\"fields\":[{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableName\",\"dbName\":\"table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableComment\",\"dbName\":\"table_comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subTableName\",\"dbName\":\"sub_table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subTableFkName\",\"dbName\":\"sub_table_fk_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"className\",\"dbName\":\"class_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tplCategory\",\"dbName\":\"tpl_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"crud\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tplWebType\",\"dbName\":\"tpl_web_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageName\",\"dbName\":\"package_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moduleName\",\"dbName\":\"module_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"businessName\",\"dbName\":\"business_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"functionName\",\"dbName\":\"function_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"functionAuthor\",\"dbName\":\"function_author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genType\",\"dbName\":\"gen_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genPath\",\"dbName\":\"gen_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"options\",\"dbName\":\"options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableColumns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenTableColumn\",\"relationName\":\"GenTableToGenTableColumn\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GenTableColumn\":{\"dbName\":\"gen_table_column\",\"fields\":[{\"name\":\"columnId\",\"dbName\":\"column_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"dbName\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnName\",\"dbName\":\"column_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnComment\",\"dbName\":\"column_comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"columnType\",\"dbName\":\"column_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"javaType\",\"dbName\":\"java_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"javaField\",\"dbName\":\"java_field\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPk\",\"dbName\":\"is_pk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isIncrement\",\"dbName\":\"is_increment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRequired\",\"dbName\":\"is_required\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isInsert\",\"dbName\":\"is_insert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isEdit\",\"dbName\":\"is_edit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isList\",\"dbName\":\"is_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isQuery\",\"dbName\":\"is_query\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queryType\",\"dbName\":\"query_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EQ\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"htmlType\",\"dbName\":\"html_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"dbName\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenTable\",\"relationName\":\"GenTableToGenTableColumn\",\"relationFromFields\":[\"tableId\"],\"relationToFields\":[\"tableId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysConfig\":{\"dbName\":\"sys_config\",\"fields\":[{\"name\":\"configId\",\"dbName\":\"config_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configName\",\"dbName\":\"config_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configKey\",\"dbName\":\"config_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configValue\",\"dbName\":\"config_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"configType\",\"dbName\":\"config_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDept\":{\"dbName\":\"sys_dept\",\"fields\":[{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ancestors\",\"dbName\":\"ancestors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptName\",\"dbName\":\"dept_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leader\",\"dbName\":\"leader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"dbName\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"relationName\":\"SysDeptToSysUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleDept\",\"relationName\":\"SysDeptToSysRoleDept\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDictData\":{\"dbName\":\"sys_dict_data\",\"fields\":[{\"name\":\"dictCode\",\"dbName\":\"dict_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictSort\",\"dbName\":\"dict_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictLabel\",\"dbName\":\"dict_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictValue\",\"dbName\":\"dict_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cssClass\",\"dbName\":\"css_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listClass\",\"dbName\":\"list_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"dbName\":\"is_default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sysDictType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDictType\",\"relationName\":\"SysDictDataToSysDictType\",\"relationFromFields\":[\"dictType\"],\"relationToFields\":[\"dictType\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysDictType\":{\"dbName\":\"sys_dict_type\",\"fields\":[{\"name\":\"dictId\",\"dbName\":\"dict_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictName\",\"dbName\":\"dict_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictType\",\"dbName\":\"dict_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dictDatas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDictData\",\"relationName\":\"SysDictDataToSysDictType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysLogininfor\":{\"dbName\":\"sys_logininfor\",\"fields\":[{\"name\":\"infoId\",\"dbName\":\"info_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipaddr\",\"dbName\":\"ipaddr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginLocation\",\"dbName\":\"login_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"browser\",\"dbName\":\"browser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"os\",\"dbName\":\"os\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"msg\",\"dbName\":\"msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginTime\",\"dbName\":\"login_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysMenu\":{\"dbName\":\"sys_menu\",\"fields\":[{\"name\":\"menuId\",\"dbName\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuName\",\"dbName\":\"menu_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"dbName\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"component\",\"dbName\":\"component\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"query\",\"dbName\":\"query\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFrame\",\"dbName\":\"is_frame\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCache\",\"dbName\":\"is_cache\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuType\",\"dbName\":\"menu_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visible\",\"dbName\":\"visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"perms\",\"dbName\":\"perms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"dbName\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleMenu\",\"relationName\":\"SysMenuToSysRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysNotice\":{\"dbName\":\"sys_notice\",\"fields\":[{\"name\":\"noticeId\",\"dbName\":\"notice_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeTitle\",\"dbName\":\"notice_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeType\",\"dbName\":\"notice_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noticeContent\",\"dbName\":\"notice_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysPost\":{\"dbName\":\"sys_post\",\"fields\":[{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postCode\",\"dbName\":\"post_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postName\",\"dbName\":\"post_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postSort\",\"dbName\":\"post_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserPost\",\"relationName\":\"SysPostToSysUserPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUserPost\":{\"dbName\":\"sys_user_post\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"dbName\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"relationName\":\"SysUserToSysUserPost\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysPost\",\"relationName\":\"SysPostToSysUserPost\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"postId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"postId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRoleDept\":{\"dbName\":\"sys_role_dept\",\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"relationName\":\"SysRoleToSysRoleDept\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDept\",\"relationName\":\"SysDeptToSysRoleDept\",\"relationFromFields\":[\"deptId\"],\"relationToFields\":[\"deptId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"deptId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRoleMenu\":{\"dbName\":\"sys_role_menu\",\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"dbName\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysMenu\",\"relationName\":\"SysMenuToSysRoleMenu\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"menuId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"relationName\":\"SysRoleToSysRoleMenu\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roleId\",\"menuId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUser\":{\"dbName\":\"sys_user\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptId\",\"dbName\":\"dept_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickName\",\"dbName\":\"nick_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"dbName\":\"user_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"00\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"dbName\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phonenumber\",\"dbName\":\"phonenumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"dbName\":\"sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"dbName\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"dbName\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginIp\",\"dbName\":\"login_ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginDate\",\"dbName\":\"login_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysDept\",\"relationName\":\"SysDeptToSysUser\",\"relationFromFields\":[\"deptId\"],\"relationToFields\":[\"deptId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserRole\",\"relationName\":\"SysUserToSysUserRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserPost\",\"relationName\":\"SysUserToSysUserPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysRole\":{\"dbName\":\"sys_role\",\"fields\":[{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleName\",\"dbName\":\"role_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleKey\",\"dbName\":\"role_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleSort\",\"dbName\":\"role_sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataScope\",\"dbName\":\"data_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"5\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuCheckStrictly\",\"dbName\":\"menu_check_strictly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptCheckStrictly\",\"dbName\":\"dept_check_strictly\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"dbName\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"dbName\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"dbName\":\"update_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"dbName\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUserRole\",\"relationName\":\"SysRoleToSysUserRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleMenu\",\"relationName\":\"SysRoleToSysRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"depts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRoleDept\",\"relationName\":\"SysRoleToSysRoleDept\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SysUserRole\":{\"dbName\":\"sys_user_role\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysUser\",\"relationName\":\"SysUserToSysUserRole\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SysRole\",\"relationName\":\"SysRoleToSysUserRole\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"roleId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"roleId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

