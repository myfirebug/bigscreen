import axios, { AxiosResponse, CancelTokenSource } from "axios";
import Qs from "qs";

export interface IBaseReponse<T> {
  // 状态码
  success: boolean;
  // 接口数据
  data: T;
}

axios.defaults.baseURL = "http://192.168.101.79:3000";

// 正在进行中的请求列表
const requestList: string[] = [];
/**
 * 阻止重复请求
 * @param url -当前请求url地址
 * @param cancel -请求中断函数
 */
const stopRepeatRequest = function (
  url: string,
  source: CancelTokenSource
): void {
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      source.cancel();
      return;
    }
  }
  requestList.push(url);
};

/**
 * 允许某个请求可以继续进行
 * @param url -请求url地址
 */
const allowRequest = function (url: string): void {
  for (let i = 0, len = requestList.length; i < len; i++) {
    if (requestList[i] === url) {
      requestList.splice(i, 1);
      break;
    }
  }
};

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    // 设置token参数
    if (typeof config.headers === "object") {
      config.headers.Authorization = `Bearer ${123}`;
    }
    // 取消请求
    config.cancelToken = source.token;

    stopRepeatRequest(
      `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`,
      source
    );

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { config, status } = response;
    if (config) {
      allowRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
      );
    }
    if (status !== 200) {
      throw new Error("请求出现异常, HTTP 状态码不为 200");
    }

    return response.data;
  },
  (error) => {
    const { config } = error;
    if (config) {
      allowRequest(
        `${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
      );
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default axios;
