/* eslint-disable */

import axios from 'axios';
import serviceConfig from './config';
import Qs from 'qs';
import { IDefaultConfig } from '@src/types';
import { message } from 'antd';
import Ajax from './index';
import session from '@src/utils/session-storage';
import { getUrl } from '@src/utils/tools';
// 是否需要刷新token接口
let isRefreshing = false;
// 存储待重发请求的数组
let requests: Function[] = [];

// 清空所有数据
const clearAllFn = () => {
	const routePrefix = session.getItem('routePrefix');
	window.sessionStorage.clear();
};

export interface IResult {
	code?: string;
	data?: any;
	datas?: any[];
	msg?: string;
	success?: boolean;

	[propNames: string]: any;
}

const baseUrl = process.env.REACT_APP_ENV;

const getService = (serviceUrl: string): void => {
	if (baseUrl && typeof baseUrl === 'string') {
		axios.defaults.baseURL = serviceConfig[baseUrl][serviceUrl];
	}
};

// 正在进行中的请求列表
const requestList: string[] = [];
// 需要loading次数
let loadingArray = 0;

/**
 * 阻止重复请求
 * @param url -当前请求url地址
 * @param cancel -请求中断函数
 */
const stopRepeatRequest = function (
	url: string,
	cancel: (url?: string) => void
): void {
	// const errorMsg = errorMessage || ''
	for (let i = 0, len = requestList.length; i < len; i++) {
		if (requestList[i] === url) {
			cancel(url);
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

/**
 * 获取config
 * @param config
 * @returns {*}
 */
const getConfig = function (config: IDefaultConfig) {
	// 不需要加stage:3
	const map: string[] = [
		'file-service/file/upload',
		'/comprehensive-service/tbSelectionJob/batch'
	];
	return {
		url: config.url || '', // 接口地址
		params: {
			...config.params,
			stage: config.params?.stage || getUrl('stage')
		}, // 接口参数
		loading: typeof config.loading === 'boolean' ? config.loading : true, // 加载过程中是否显示loading
		servicePrefix: config.servicePrefix || 'default', // 接口前缀（这里主要是在该项目对应多人开发时使用）
		data:
			map.findIndex((item) => config.url.indexOf(item) !== -1) !== -1 ||
			config.data instanceof Array
				? config.data
				: {
						...config.data,
						stage: getUrl('stage')
				  }, // 请求主体被发送的数据
		responseType: config.responseType || 'json'
	};
};

/**
 * 显示loading
 * @param status
 */
const showLoading = function (status: boolean) {
	if (status) {
		loadingArray++;
		const loadingDom = document.getElementById('js_loading');
		if (status && loadingDom) {
			loadingDom.style.display = 'fixed';
		}
	}
};

/**
 * 隐藏loading
 * @param status
 */
const hideLoading = function (status: boolean) {
	const loadingDom = document.getElementById('js_loading');
	if (status) {
		loadingArray--;
	}
	if (loadingArray <= 0 && loadingDom) {
		loadingDom.style.display = 'none';
	}
};

// 请求超时
axios.defaults.timeout = 60000;
// post 请求头的设置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//	设置
axios.defaults.withCredentials = true;

// 使用正则处理后台返回的大整数问题
// axios.defaults.transformResponse = function (data) {
//   return JSON.parse(data.replace(/\"id\":(\d+)/g, '"id":"$1"'))
// }

// 请求拦截器
axios.interceptors.request.use(
	(config) => {
		// message.destroy();
		let cancel: any;
		const token = session.getItem('access_token');
		if (typeof config.headers === 'object') {
			if (token && config.url !== 'oauth-service/user/refresh') {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		// 设置cancelToken对象
		config.cancelToken = new axios.CancelToken(function executor(c) {
			cancel = c;
		});
		if (typeof cancel === 'function') {
			stopRepeatRequest(
				`${config.url}?${Qs.stringify(config.params)}&method=${config.method}`,
				cancel
			);
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 响应拦截器
axios.interceptors.response.use(
	(response) => {
		const config = response.config;
		if (config) {
			allowRequest(
				`${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
			);
		}
		const status = response.status;
		switch (status) {
			case 200:
				// eslint-disable-next-line no-case-declarations
				const data = response.data;
				const code = data.respCode;
				if (code === undefined) {
					// 这里主要是处理blob数据
				} else if (code !== 0) {
					message.error(response.data.respMsg || '获取数据失败，请联系管理员');
				}
				return Promise.resolve(response.data);
			default:
				return Promise.reject(response);
		}
	},
	(error: any) => {
		const config = error.config;
		if (config) {
			allowRequest(
				`${config.url}?${Qs.stringify(config.params)}&method=${config.method}`
			);
		}
		if (error.message) {
			allowRequest(`${error.message}`);
		}
		let response = error.response;
		if (!response) {
			// message.error('服务器错误');
			return Promise.resolve({
				data: [],
				respCode: 0,
				respMsg: '失败',
				success: false
			});
		}
		let code = response.status;
		if (code) {
			switch (code) {
				case 401:
					if (!isRefreshing) {
						isRefreshing = true;
						return Ajax.refreshToken({
							refreshToken: session.getItem('refresh_token'),
							clientId: 'manage',
							clientSecretStr: 'manage'
						})
							.then((res: IResult) => {
								if (res.success) {
									// token 刷新后将数组的方法重新执行
									session.setItem('access_token', res.data.access_token);
									setTimeout(() => {
										requests.forEach((cb) => cb());
										requests = []; // 重新请求完清空
										return axios.request(config);
									}, 0);
								} else {
									clearAllFn();
								}
							})
							.catch(() => {
								clearAllFn();
							})
							.finally(() => {
								isRefreshing = false;
							});
					} else {
						// 返回未执行 resolve 的 Promise
						return new Promise((resolve) => {
							// 用函数形式将 resolve 存入，等待刷新后再执行
							requests.push(() => {
								resolve(axios.request(config));
							});
						});
					}
					break;
				// token过期
				case 403:
					// 跨域清空父级的token，跳到登录页面
					break;
				// 404请求不存在
				case 404:
					break;
				case 500:
					break;
				default:
					break;
			}
		}
		return Promise.reject({
			data: [],
			respCode: 0,
			respMsg: '失败',
			success: false
		});
	}
);

/**
 * get请求
 * @param url-接口地址
 * @param config-接口参数
 */
export function get(config: IDefaultConfig) {
	// 获取合并后的config
	const conf = getConfig(config);
	showLoading(conf.loading);
	if (conf.servicePrefix) {
		getService(conf.servicePrefix);
	}
	return new Promise(
		(resolve: (data: IResult) => void, reject: (data: IResult) => void) => {
			axios
				.get(conf.url, {
					params: conf.params
				})
				.then((res) => {
					hideLoading(conf.loading);
					resolve(res);
				})
				.catch((err) => {
					hideLoading(conf.loading);
					reject(err);
				});
		}
	);
}

/**
 * get请求
 * @param url-接口地址
 * @param config-接口参数
 */
export function ajaxDelete(config: IDefaultConfig) {
	// 获取合并后的config
	const conf = getConfig(config);
	showLoading(conf.loading);
	if (conf.servicePrefix) {
		getService(conf.servicePrefix);
	}
	return new Promise(
		(resolve: (data: IResult) => void, reject: (data: IResult) => void) => {
			axios
				.delete(conf.url, {
					params: conf.params,
					data: conf.data
				})
				.then((res) => {
					hideLoading(conf.loading);
					resolve(res);
				})
				.catch((err) => {
					hideLoading(conf.loading);
					reject(err);
				});
		}
	);
}

/**
 * post方法
 * @param config [请求的url地址]
 * @returns {Promise<any>}
 */
export function post(config: IDefaultConfig) {
	// 获取合并后的config
	const conf = getConfig(config);
	showLoading(conf.loading);
	if (conf.servicePrefix) {
		getService(conf.servicePrefix);
	}

	/**
	 * 如果以data方式传入数据则设置为application/json
	 * 如果以params方式传入数据则设置为multipart/form-data;charset=UTF-8
	 */
	axios.defaults.headers.post['Content-Type'] = config.data
		? 'application/json'
		: 'multipart/form-data;charset=UTF-8';

	const data = conf.data || conf.params;

	return new Promise(
		(resolve: (data: IResult) => void, reject: (data: IResult) => void) => {
			axios
				.post(conf.url, data)
				.then((res) => {
					hideLoading(conf.loading);
					resolve(res);
				})
				.catch((err) => {
					hideLoading(conf.loading);
					reject(err);
				});
		}
	);
}
