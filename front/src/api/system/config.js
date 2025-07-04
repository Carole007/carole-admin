import request from '@/utils/request'

// 查询参数列表
export function listConfig(query) {
  return request({
    url: '/system/config/list',
    method: 'get',
    params: query
  })
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: '/system/config/' + configId,
    method: 'get'
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/system/config/configKey/' + configKey,
    method: 'get'
  })
}

// 新增参数配置
export function addConfig(data) {
  return request({
    url: '/system/config',
    method: 'post',
    data: data
  })
}

// 修改参数配置
export function updateConfig(data) {
  return request({
    url: '/system/config',
    method: 'put',
    data: data
  })
}

// 删除参数配置
export function delConfig(configId) {
  return request({
    url: '/system/config/' + configId,
    method: 'delete'
  })
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    method: 'delete'
  })
}



/** 获取所有 Filekey 列表 */
export function getKeys() {
  return request({
    url: '/system/config/getFileKeys',
    method: 'get',
  })
}

/** 根据 key 获取文件数据 */
export function getInfoByKey(key) {
  return request({
    url: '/system/config/getConfigInfo',
    method: 'get',
    params: { key }
  })
}

/** 根据 key 修改文件数据 */
export function updateInfoByKey(key, data) {
  return request({
    url: '/system/config/serverConfig',
    method: 'post',
    params: { key },
    data
  })
}