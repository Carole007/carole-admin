
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
