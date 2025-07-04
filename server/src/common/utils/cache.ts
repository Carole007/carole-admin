import { Logger } from "@nestjs/common";

//缓存数据到内存中，过时自动刷新 
class CacheTool {
  cache: Map<string, {
    expirationTime: number,
    value: any,
    expiration: number,
    initFunction?: Function,
    isRefresh: boolean
  }>
  constructor() {
    this.cache = new Map()
  }

   /**
   * 
   * @param key 缓存的键
   * @param value 缓存的value
   * @param initFunction 初始值和刷新值的函数
   * @param expirationTime 过期时间，毫秒
   * @param isRefresh  过期是否自动刷新
   */
  set(key: string, value: any, initFunction?: Function, expirationTime: number = Infinity, isRefresh: boolean = true) {
    return this.init(key, value, initFunction, expirationTime, isRefresh)
  }

  async get(key: string) {
    const item = this.cache.get(key);
    if (!this.isExpire(key)) {
      return item.value;
    } else if (item && item.initFunction) {
      if (item.isRefresh) {
        return this.refresh(key);
      } else {
        this.cache.delete(key)
      }
    }
    return null;
  }
  /**
   * 
   * @param key 缓存的键
   * @param value 缓存的value
   * @param initFunction 初始值和刷新值的函数
   * @param expirationTime 过期时间，毫秒
   * @param isRefresh  过期是否自动刷新
   */
  async init(key: string, value: any, initFunction?: Function, expirationTime: number = Infinity, isRefresh: boolean = true) {
    const expiration = Date.now() + expirationTime;
    if (value) {
      return this.cache.set(key, {
        expirationTime,
        value,
        expiration,
        initFunction,
        isRefresh
      });
    } else {
      return this.cache.set(key, {
        expirationTime,
        value: (await Promise.resolve(initFunction())),
        expiration,
        initFunction,
        isRefresh
      });
    }

  }
  async refresh(key: string, value?: any) {
    const item = this.cache.get(key);
    try {
      if (!item || !item.isRefresh) return null
    if (value) {
      this.init(key, value, item.initFunction, item.expirationTime);
      return value;
    } else if (item.initFunction) {
      const refreshedValue = await Promise.resolve(item.initFunction());
      if (refreshedValue !== undefined) {
        this.init(key, refreshedValue,item.initFunction, item.expirationTime);
        return refreshedValue;
      }
    }
    } catch (error) {
      Logger.error(error);
      return; 
    }
  }
  delete(key: string) {
    return this.cache.delete(key)
  }
  keys() { 
    return this.cache.keys()
  }
  values() { 
    return this.cache.values()
  }
  size() { 
    return this.cache.size
  }
  isExpire(key:string) { 
    let item = this.cache.get(key)
    return !item || Date.now() > item.expiration
  }
}

export const cacheService = new CacheTool()