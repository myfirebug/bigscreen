import axios from 'axios'
import serviceConfig from './config'
import Qs from 'qs'
import { IDefaultConfig } from '@src/types'
import { message as antdMessage } from 'antd'
import store from '@src/store'

// 清空所有数据
const clearAllFn = () => {
  window.sessionStorage.clear()
}

export interface IResult {
  code?: string
  data?: any
  datas?: any[]
  msg?: string
  success?: boolean

  [propNames: string]: any
}

const baseUrl = process.env.REACT_APP_ENV

const getService = (serviceUrl: string): void => {
  if (baseUrl && typeof baseUrl === 'string') {
    axios.defaults.baseURL = serviceConfig[baseUrl][serviceUrl]
  }
}

// 正在进行中的请求列表
const requestList: string[] = []
// 需要loading次数
let loadingArray = 0

/**
 * 阻止重复请求
 * @param url -当前请求url地址
 * @param cancel -请求中断函数
 */
const stopRepeatRequest = function (
  url: string,
  cancel: (url?: string) => void
): void {
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      cancel(url)
      return
    }
  }
  requestList.push(url)
}

/**
 * 允许某个请求可以继续进行
 * @param url -请求url地址
 */
const allowRequest = function (url: string): void {
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      requestList.splice(i, 1)
      break
    }
  }
}

/**
 * 获取config
 * @param config
 * @returns {*}
 */
const getConfig = function (config: IDefaultConfig) {
  return {
    ...config,
    url: config.url || '', // 接口地址
    method: config.method || 'post',
    params: config.params, // 接口参数
    loading: typeof config.loading === 'boolean' ? config.loading : true, // 加载过程中是否显示loading
    servicePrefix: config.servicePrefix || 'default', // 接口前缀（这里主要是在该项目对应多人开发时使用）
    data: config.data, // 请求主体被发送的数据
    responseType: config.responseType || 'json'
  }
}

/**
 * 显示loading
 * @param status
 */
const showLoading = function (status: boolean) {
  if (status) {
    loadingArray++
    const loadingDom = document.getElementById('js_loading')
    if (status && loadingDom) {
      loadingDom.style.display = 'fixed'
    }
  }
}

/**
 * 隐藏loading
 * @param status
 */
const hideLoading = function (status: boolean) {
  const loadingDom = document.getElementById('js_loading')
  if (status) {
    loadingArray--
  }
  if (loadingArray <= 0 && loadingDom) {
    loadingDom.style.display = 'none'
  }
}

// 请求超时
axios.defaults.timeout = 60000
// post 请求头的设置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
//	设置
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let cancel: any
    // 设置token参数
    if (typeof config.headers === 'object') {
      config.headers.Authorization = `Bearer ${
        store.getState().userinfo?.token
      }`
    }
    // 设置cancelToken对象
    config.cancelToken = new axios.CancelToken(function executor(c) {
      cancel = c
    })
    if (typeof cancel === 'function') {
      stopRepeatRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`,
        cancel
      )
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const { config, status } = response
    const { code, message, data } = response.data
    if (config) {
      allowRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
      )
    }
    if (status === 200) {
      // 处理一些没有code，能正常请求的接口
      if (code === undefined) {
        return Promise.resolve(response.data)
      } else if (code !== 0) {
        antdMessage.error(message || '获取数据失败，请联系管理员')
        return Promise.resolve(data)
      } else {
        return Promise.resolve(data)
      }
    } else {
      const err = new Error('请求出现异常, HTTP 状态码不为 200')
      return Promise.reject(err)
    }
  },
  (error: any) => {
    const { config, message, response } = error
    const { status } = response
    if (config) {
      allowRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
      )
    }
    if (message) {
      allowRequest(`${message}`)
    }
    switch (status) {
      case 401:
        break
      case 403:
        clearAllFn()
        antdMessage.error('token失效')
        break
      case 404:
        antdMessage.error('接口不存在')
        break
      case 500:
        antdMessage.error('服务器错误')
        break
      default:
        break
    }
    return Promise.reject({
      data: null,
      code: status,
      message: '失败',
      success: false
    })
  }
)

function request(config: IDefaultConfig) {
  // 获取合并后的config
  const conf = getConfig(config)
  showLoading(conf.loading)
  // 接口前缀
  if (conf.servicePrefix) {
    getService(conf.servicePrefix)
  }
  return new Promise(
    (resolve: (data: IResult) => void, reject: (data: IResult) => void) => {
      axios(conf)
        .then((res) => {
          hideLoading(conf.loading)
          resolve(res)
        })
        .catch((err) => {
          hideLoading(conf.loading)
          reject(err)
        })
    }
  )
}

/**
 * get请求
 */
export function get(config: IDefaultConfig) {
  return request({
    ...config,
    method: 'get'
  })
}

/**
 * post请求
 */
export function post(config: IDefaultConfig) {
  return request({
    ...config,
    method: 'post'
  })
}
