import * as dotenv from 'dotenv';
import { join } from 'path';
import { watch } from 'fs';
import { readJsonFile } from './common/utils';
dotenv.config({ path: join(__dirname, `.env`) });
//运行模式，根据不同的模式加载不同的配置文件 development=>开发环境  production=>生产环境
export let runMode: "development" | "production" = "development";
const config_file_path = join(__dirname, `config-${runMode}.json`)

/* 根据运行模式加载文件后，会覆盖默认配置
可直接修改对应的json文件  config-${runMode}.json  或者删除json文件中对应的key，默认就使用下面的配置。
后台提供了默认的配置文件修改，Config也会自动加载修改后的配置。 */
export const Config = {
  //服务器的HTTP端口，默认为3000
  port: 3000,
  //# 应用的访问路径前缀
  contextPath: '/v1',
  swagger: {
    //是否启用swagger
    enable: true,
    //接口文档路径
    prefix: '/api',
  },
  captcha: {
    //验证码类型 math或text
    mode: 'math',
    //验证码过期时间
    expiresIn: 60 * 2,
  },
  //配置文件列表,管理后台可快捷编辑同步Config数据  注意：开发环境运行在dist目录，修改的也是dist里面的配置文件
  //根据业务可能会有多个配置文件
  ConfigFileMap: {
    "production_config": {
      desc: "生产环境配置",
      filePath: join(__dirname, "./config-production.json")
    },
    "dev_config": {
      desc: "开发环境配置",
      filePath: join(__dirname, "./config-production.json")
    }
  },
  //接口限流 2分钟内同一个接口允许60次请求
  rateLimit: {
    //数据存储在redis or memory
    storage: 'redis',
    ttl: 2 * 60 * 1000,
    limit: 60,
  },
  crypto: {
    //密码加密秘钥
    psdSecret:  'carole123456',
  },
  token: {
    // token加密秘钥
    secret:  'carole123456',
    //过期时间秒
    expiresIn: 60 * 60 * 24,
  },
  prisma: {
    //是否显示执行的sql指令
    logEnable: false,
    //显示那些日志
    log: ['query', 'info', 'warn', 'error'] as any
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
    password: ""
  },
  upload: {
    //上传文件存储基目录 请设置一个绝对路径
    path: join(__dirname, "uploads"),
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
    author: 'carole',
    //默认生成模块
    packageName: 'admin',
    //子模块目录
    moduleName: 'system',
    //是否去除表前缀，默认是false
    autoRemovePre: false,
    //表前缀（生成类名不会包含表前缀，多个用逗号分隔）
    tablePrefix: ['sys_'],
  },
  //邮件发送配置
  mail: {
    //是否启用邮箱
    enable: false,
    //超时设置， 30秒未发送邮件，则返回失败
    timeout: 30 * 1000,
    config: {
      //邮箱服务器 qq：smtp.qq.com 网易： smtp.163.com
      host: "",
      //端口
      port: 465,
      auth: {
        //用户名
        user: "",
        //密码
        pass: "",
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
initConfig();
export function initConfig() {
  let data = readJsonFile(config_file_path)
  if (data) {
    for (let k in data) {
      Config[k] = data[k];
    }
  }
}
// 监听config文件变化
watch(config_file_path, (eventType, filename) => {
  if (eventType === 'change') {
    try {
      initConfig();
      console.log('config已更新')
    } catch (err) {
      console.log('更新config失败:', err)
    }
  }
})
//是否开发环境
export function isDevelopment() {
  return runMode === "development";
}
//是否生产环境
export function isProduction() {
  return runMode === "production";
}