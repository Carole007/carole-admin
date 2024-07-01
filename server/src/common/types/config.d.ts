import { RedisOptions } from 'ioredis';
interface config {
  port: number;
  contextPath: string;
  swagger: {
    enable: boolean;
    prefix: string;
  };
  captcha: {
    mode: 'text' | 'math';
    expiresIn: number;
  };
  rateLimit: {
    storage: 'memory' | 'redis';
    ttl: number;
    limit: number;
  };
  crypto: {
    psdSecret: string;
  };
  token: {
    secret: string;
    expiresIn: number;
  };
  prisma: {
    logEnable: boolean;
    log: LogLevel[];
  };
  redis: RedisOptions;
  upload: {
    path: string;
    config: {
      img: {
        fileSize: number;
        files: number;
        fieldSize: number;
        fields: number;
        fieldNameSize: number;
        parts: number;
        headerPairs: number;
      };
      file: {
        fileSize: number;
        files: number;
        fieldSize: number;
        fields: number;
        fieldNameSize: number;
        parts: number;
        headerPairs: number;
      };
    };
  };
  gen: {
    author: string;
    packageName: string;
    moduleName: string;
    autoRemovePre: boolean;
    tablePrefix: string[];
  };
  mail: {
    enable: boolean;
    timeout: number;
    config: {
      host: string;
      port: number;
      auth: {
        user: string;
        pass: string;
      };
      secure: boolean;
      tls: {
        rejectUnauthorized: boolean;
      };
    };
  };
}
