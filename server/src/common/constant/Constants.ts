/**
 * 通用常量信息
 */
export class Constants {
  /**
   * UTF-8 字符集
   */
  public static readonly UTF8: string = 'UTF-8';

  /**
   * GBK 字符集
   */
  public static readonly GBK: string = 'GBK';

  /**
   * http请求
   */
  public static readonly HTTP: string = 'http://';

  /**
   * https请求
   */
  public static readonly HTTPS: string = 'https://';

  /**
   * 通用成功标识
   */
  public static readonly SUCCESS: string = '0';

  /**
   * 通用失败标识
   */
  public static readonly FAIL: string = '1';

  /**
   * 登录成功
   */
  public static readonly LOGIN_SUCCESS: string = 'Success';

  /**
   * 注销
   */
  public static readonly LOGOUT: string = 'Logout';

  /**
   * 登录失败
   */
  public static readonly LOGIN_FAIL: string = 'Error';

  /**
   * 验证码 redis key
   */
  public static readonly CAPTCHA_CODE_KEY: string = 'captcha_codes:';

  /**
   * 登录用户 redis key
   */
  public static readonly LOGIN_TOKEN_KEY: string = 'login_tokens:';

  /**
   * 缓存用户信息 redis key
   */
  public static readonly LOGIN_CACHE_TOKEN_KEY: string = 'login_cache_tokens:';

  /**
   * 防重提交 redis key
   */
  public static readonly REPEAT_SUBMIT_KEY: string = 'repeat_submit:';

  /**
   * 验证码有效期（分钟）
   */
  public static readonly CAPTCHA_EXPIRATION: number = 2;

  /**
   * 令牌
   */
  public static readonly TOKEN: string = 'token';

  /**
   * 令牌前缀
   */
  public static readonly TOKEN_PREFIX: string = 'Bearer ';

  /**
   * 登录用户 key
   */
  public static readonly LOGIN_USER_KEY: string = 'login_user_key';

  /**
   * 用户ID
   */
  public static readonly JWT_USERID: string = 'userid';

  /**
   * 用户名称
   */
  public static readonly JWT_USERNAME: string = 'sub';

  /**
   * 用户头像
   */
  public static readonly JWT_AVATAR: string = 'avatar';

  /**
   * 创建时间
   */
  public static readonly JWT_CREATED: string = 'created';

  /**
   * 参数管理 cache key
   */
  public static readonly SYS_CONFIG_KEY: string = 'sys_config:';

  /**
   * 字典管理 cache key
   */
  public static readonly SYS_DICT_KEY: string = 'sys_dict:';

  /**
   * 文件访问前缀
   */
  public static readonly FILE_PREFIX: string = '/upload';
}
