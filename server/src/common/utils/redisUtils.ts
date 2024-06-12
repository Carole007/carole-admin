import Redis, { RedisOptions } from 'ioredis';
import { createPool, Pool } from 'generic-pool';
import { Config } from '@/config';
const redisConfig: RedisOptions = {
  ...Config.redis,
  host: Config.redis.host || 'localhost',
  port: Config.redis.port || 6379,
  db: Config.redis.db || 0,
  disconnectTimeout: 60 * 5 * 1000
}
class RedisUtils {
  private pool: Pool<Redis>;
  constructor(config: RedisOptions) {
    this.pool = createPool({
      create: async () => {
        return new Redis(config);
      },
      destroy: async (client) => {
        await client.quit()
      }
    }, {
      max: 10,
      min: 2,
      idleTimeoutMillis: 60 * 5 * 1000,
      acquireTimeoutMillis: 8 * 1000,
    });
  }

  private async useClient<T>(callback: (client: Redis) => Promise<T>): Promise<T> {
    const client = await this.pool.acquire();
    try {
      return await callback(client);
    } finally {
      this.pool.release(client);
    }
  }

  async set(key: string, value: string, expire?: number): Promise<string> {
    return this.useClient(async (client) => {
      if (expire) {
        return await client.set(key, value, 'EX', expire);
      } else {
        return await client.set(key, value);
      }
    });
  }

  async get(key: string): Promise<string | null> {
    return this.useClient((client) => client.get(key));
  }

  async del(key: string): Promise<number> {
    return this.useClient((client) => client.del(key));
  }

  async hset(key: string, field: string, value: string): Promise<number> {
    return this.useClient((client) => client.hset(key, field, value));
  }

  async hget(key: string, field: string): Promise<string | null> {
    return this.useClient((client) => client.hget(key, field));
  }

  async hdel(key: string, field: string): Promise<number> {
    return this.useClient((client) => client.hdel(key, field));
  }

  async incr(key: string): Promise<number> {
    return this.useClient((client) => client.incr(key));
  }

  async decr(key: string): Promise<number> {
    return this.useClient((client) => client.decr(key));
  }

  async lpush(key: string, value: string): Promise<number> {
    return this.useClient((client) => client.lpush(key, value));
  }

  async rpush(key: string, value: string): Promise<number> {
    return this.useClient((client) => client.rpush(key, value));
  }

  async lpop(key: string): Promise<string | null> {
    return this.useClient((client) => client.lpop(key));
  }

  async rpop(key: string): Promise<string | null> {
    return this.useClient((client) => client.rpop(key));
  }

  async scanStream(match: string): Promise<string[]> {
    return this.useClient(async (client) => {
      const stream = client.scanStream({ match, count: 200 });
      const keys: string[] = [];

      return new Promise<string[]>((resolve, reject) => {
        stream.on('data', (resultKeys: string[]) => {
          keys.push(...resultKeys);
        });

        stream.on('end', () => resolve(keys));
        stream.on('error', (err: Error) => reject(err));
      });
    });
  }

  async mget(keys: string[]): Promise<(string | null)[]> {
    return this.useClient((client) => client.mget(keys));
  }

  async testConnection() {
    try {
      const client = await this.pool.acquire();
      await client.ping();
      this.pool.release(client);
      console.log('Redis连接成功！');
    } catch (error) {
      console.error('Redis连接失败: ', error);
    }
  }

  async getRedisInfo() {
    return this.useClient(async (client) => {
      try {
        // 获取 Redis INFO
        const info = await client.info();
        // 获取 Redis DBSIZE
        const dbSize = await client.dbsize();
        // 获取 Redis COMMANDSTATS
        const commandStats = await client.call('info', 'commandstats');

        // 解析 INFO
        const parsedInfo = parseRedisInfo(info);
        // 解析 COMMANDSTATS
        const parsedCommandStats = parseCommandStats(commandStats);
        return {
          commandStats: parsedCommandStats,
          info: parsedInfo,
          dbSize: dbSize
        }
      } catch (err) {
        console.error('Error fetching Redis info:', err);
      }
    })
  }
}

const redisUtils = new RedisUtils(redisConfig);
redisUtils.testConnection()

export {
  redisUtils
}


function parseRedisInfo(info) {
  const lines = info.split('\r\n');
  const result = {};
  lines.forEach(line => {
    if (line && line[0] !== '#') {
      const parts = line.split(':');
      if (parts.length === 2) {
        result[parts[0]] = parts[1];
      }
    }
  });
  return result;
}

function parseCommandStats(commandStats) {
  const lines = commandStats.split('\r\n');
  const result = [];
  lines.forEach(line => {
    if (line && line.startsWith('cmdstat_')) {
      const parts = line.split(':');
      if (parts.length === 2) {
        const name = parts[0].substring(8);
        const values = parts[1].split(',');
        const valueObj: any = {};
        values.forEach(value => {
          const [key, val] = value.split('=');
          valueObj[key] = val;
        });
        result.push({ name: name, value: valueObj?.calls || "0" });
      }
    }
  });
  return result;
}