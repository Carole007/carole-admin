/**
 * 返回状态码
 */
export enum HttpStatus {
  /**
   * 操作成功
   */
  SUCCESS = 200,

  /**
   * 对象创建成功
   */
  CREATED = 201,

  /**
   * 请求已经被接受
   */
  ACCEPTED = 202,

  /**
   * 操作已经执行成功，但是没有返回数据
   */
  NO_CONTENT = 204,

  /**
   * 资源已被移除
   */
  MOVED_PERM = 301,

  /**
   * 重定向
   */
  SEE_OTHER = 303,

  /**
   * 资源没有被修改
   */
  NOT_MODIFIED = 304,

  /**
   * 参数列表错误（缺少，格式不匹配）
   */
  BAD_REQUEST = 400,

  /**
   * 未授权
   */
  UNAUTHORIZED = 401,

  /**
   * 访问受限，授权过期
   */
  FORBIDDEN = 403,

  /**
   * 资源，服务未找到
   */
  NOT_FOUND = 404,

  /**
   * 不允许的http方法
   */
  BAD_METHOD = 405,

  /**
   * 资源冲突，或者资源被锁
   */
  CONFLICT = 409,

  /**
   * 不支持的数据，媒体类型
   */
  UNSUPPORTED_TYPE = 415,

  /**
   * 参数验证不通过
   */
  Validation = 422,

  /**
   * 请求频繁
   */
  FREQUENT_REQUESTS = 429,

  /**
   * 系统内部错误
   */
  ERROR = 500,

  /**
   * 接口未实现
   */
  NOT_IMPLEMENTED = 501
}
