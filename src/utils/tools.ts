/*eslint no-invalid-this: "off"*/
import { IAnyObject } from '@src/types';

/**
 * 获取参数值
 * @param name
 * @param url
 * @returns {any}
 */
export function getUrl(name: string, url?: string): string {
	let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	let result =
		(url || window.location.href).split('?').length > 1 &&
		(url || window.location.href).split('?')[1].match(reg);
	return result ? decodeURIComponent(result[2]) : '';
}

/**
 * 修改url参数
 * @param paramName
 * @param replaceWith
 * @param url
 * @returns {string}
 */
export function replaceParamVal(
	paramName: string,
	replaceWith: string,
	url: string
): string {
	let oUrl = url || window.location.href;
	// eslint-disable-next-line no-eval
	let re = eval('/(' + paramName + '=)([^&]*)/gi');
	let nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
	return nUrl;
}

/**
 *格式化日期
 * @param dateString
 * @param fmt
 * @returns {*}
 */
export function fmtDate(dateString: string | number, fmt: string): string {
	const date = new Date(dateString);
	const o: IAnyObject = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		S: date.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(date.getFullYear() + '').substr(4 - RegExp.$1.length)
		);
	}
	for (const k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			);
		}
	}
	return fmt;
}

/**
 * 判断一个对象是否是纯对象
 * @param obj
 * @returns {boolean}
 */
export function isPlainObject(obj: IAnyObject): boolean {
	if (!obj || toString.call(obj) !== '[object Object]') {
		return false;
	}
	try {
		if (obj.constructor && !typeof obj.constructor.prototype.isPrototypeOf) {
			return false;
		}
	} catch (e) {
		return false;
	}
	return true;
}

/**
 * 判断是否是数组
 * @param arr
 * @returns {boolean}
 */
export function isArray(arr: any[]) {
	if (!arr || toString.call(arr) !== '[object Array]') {
		return false;
	}
	return true;
}

/**
 * 生成唯一ID
 * @returns {string}
 */
export function guid(): string {
	const s: any[] = [];
	const hexDigits = '0123456789abcdef';
	for (let i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = '=';

	const uuid = s.join('');
	return uuid;
}

/**
 * 通过id找到数组，并在该数据下的children里push一条obj数据
 * 注意这里会修改原数组哈，请自行拷贝一份原数据出来，可通过JSON.parse(JSON.stringify(datas))
 * @param datas
 * @param id
 * @param obj
 * @returns {*}
 */
export function insertObjectById(
	datas: any[],
	id: number | string,
	obj: IAnyObject,
	fieldNames: {
		id: string;
		children: string;
	}
): any[] {
	if (!datas) {
		return [];
	}
	if (id) {
		for (let i = 0; i < datas.length; i++) {
			if (id === datas[i][fieldNames.id]) {
				datas[i][fieldNames.children].push(obj);
			} else if (
				datas[i][fieldNames.children] &&
				datas[i][fieldNames.children].length
			) {
				insertObjectById(datas[i][fieldNames.children], id, obj, fieldNames);
			}
		}
	} else {
		datas.push(obj);
	}
	return datas;
}

/**
 * 修改最后一级诉children修改为undefind
 * @param datas
 */
export function getTreeData(datas: any[]): any[] {
	for (let i = 0; i < datas.length; i++) {
		if (datas[i].subResource.length < 1) {
			datas[i].subResource = undefined;
		} else {
			getTreeData(datas[i].subResource);
		}
	}
	return datas;
}

/**
 * 查找给定的字段名查找数组里值对应的值
 * @param datas 数据
 * @param value 字段值
 * @param field 字段名
 */

export function lookupTreeByValue(
	datas: any[],
	value: number | string,
	field: string
) {
	let hasFound = false, // 表示是否有找到id值
		result: any = null;
	if (!datas) {
		return false;
	}
	const fn = function (datas: any[]) {
		if (Array.isArray(datas) && !hasFound) {
			// 判断是否是数组并且没有的情况下，
			for (let i = 0; i < datas.length; i++) {
				if (datas[i][field] === value) {
					result = datas[i];
					hasFound = true;
					break;
				} else if (datas[i].childList && datas[i].childList.length) {
					fn(datas[i].childList);
				}
			}
		}
	};
	fn(datas);
	return result;
}

/**
 * 根据当前节点id返回当前节点数据
 * @param datas 数据
 * @param value 字段值
 * @param field 字段名
 */
export function getTreeById(
	datas: any[],
	value: number | string,
	field: string
) {
	let hasFound = false, // 表示是否有找到id值
		parentPath: any[] = [],
		kpiOrder: number = 0,
		result: any = null;
	if (!datas) {
		return [];
	}
	let fn = function (datas: any[], parent: any[] = []) {
		if (Array.isArray(datas) && !hasFound) {
			// 判断是否是数组并且没有的情况下，
			for (let i = 0; i < datas.length; i++) {
				if (datas[i][field] === value) {
					result = datas[i];
					kpiOrder = datas[i].childList ? datas[i].childList.length : 0;
					parentPath =
						datas[i].level === 1
							? [datas[i].kpiName]
							: [...parent, datas[i].kpiName];
					hasFound = true;
					break;
				} else if (datas[i].childList && datas[i].childList.length) {
					fn(datas[i].childList, [...parent, datas[i].kpiName]);
				}
			}
		}
	};
	fn(datas);
	return [result, parentPath, kpiOrder];
}

/**
 * 根据当前节点id返回当前节点数据
 * @param datas 数据
 * @param value 字段值
 * @param field 字段名
 */
export function getGroupById(
	datas: any[],
	value: number | string,
	field: string
) {
	let hasFound = false, // 表示是否有找到id值
		result = null;
	if (!datas) {
		return [];
	}
	let fn = function (datas: any[]) {
		if (Array.isArray(datas) && !hasFound) {
			// 判断是否是数组并且没有的情况下，
			for (let i = 0; i < datas.length; i++) {
				if (datas[i][field] === value) {
					result = datas[i];
					hasFound = true;
					break;
				} else if (datas[i].subResource && datas[i].subResource.length) {
					fn(datas[i].subResource);
				}
			}
		}
	};
	fn(datas);
	return result;
}

/**
 * 根据id返回所有的父级
 * @param data
 * @param id
 */
export function getParentsById(data: any[], id: number | string): any {
	for (const i in data) {
		if (data[i].subResource) {
			let ro = getParentsById(data[i].subResource, id);
			if (ro !== undefined) {
				// 寻找当前前subResource是否有菜单
				const index = data[i].subResource.findIndex(
					(item: any) => item.isMemu === 1
				);
				// 如果有菜单就找到当前菜单的地址
				if (index !== -1) {
					return ro.concat({
						path: data[i].subResource[index].resUrl
							? data[i].subResource[index].resUrl
							: '',
						name: data[i].resTitle
					});
				}
				// 否则就不把path置空
				return ro.concat({
					path: '',
					name: data[i].resTitle
				});
			}
		}
		// 匹配的最后一级没有必要使用path了
		if (data[i].resUrl === id) {
			return [
				{
					path: '',
					name: data[i].resTitle
				}
			];
		}
	}
}

/**
 * 深拷贝
 * @param data
 * @returns {*}
 */
/** export function deepClone(data: any) {
  if (typeof data !== 'object' || data == null) {
    return data;
  }
  let result: any;
  if (data instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let field in data) {
    if (data.hasOwnProperty(field)) {
      result[field] = data[field];
      deepClone(data[field]);
    }
  }
  return result;
}

 /**
 * 锁定body
 * @param bodyClass
 * @returns {{afterOpen: afterOpen, beforeClose: beforeClose}}
 */
export const lockMaskScroll = ((bodyClass) => {
	let scrollTop: number = 0;
	return {
		afterOpen: function () {
			scrollTop =
				(document.scrollingElement && document.scrollingElement.scrollTop) ||
				document.body.scrollTop;
			document.body.classList.add(bodyClass);
			document.body.style.top = -scrollTop + 'px';
		},
		beforeClose: function () {
			if (document.body.classList.contains(bodyClass)) {
				document.body.classList.remove(bodyClass);
				if (document.scrollingElement) {
					document.scrollingElement.scrollTop = scrollTop;
				}
			}
		}
	};
})('fixed');

/**
 * 转换时间
 * @param str
 * @returns
 */
export const timeAgo = function (str: string): string {
	if (!str) return '';
	const date = new Date(str);
	const time = new Date().getTime() - date.getTime();
	if (time < 0) {
		return '';
	} else if (time / 1000 < 30) {
		return '刚刚';
	} else if (time / 1000 < 60) {
		return parseInt(time / 1000 + '') + '秒前';
	} else if (time / 60000 < 60) {
		return parseInt(time / 60000 + '') + '分钟前';
	} else if (time / 3600000 < 24) {
		return parseInt(time / 3600000 + '') + '小时前';
	} else if (time / 86400000 < 31) {
		return parseInt(time / 86400000 + '') + '天前';
	} else if (time / 2592000000 < 12) {
		return parseInt(time / 2592000000 + '') + '月前';
	} else {
		return parseInt(time / 31536000000 + '') + '年前';
	}
};

/**
 * [获取滚动条当前的位置]
 * @return {[Number]} [scrollTop]
 */
export function getScrollTop(): number {
	let scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

/**
 * [获取当前可视范围的高度]
 * @return {[Number]} [clientHeight]
 */
export function getClientHeight() {
	let clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = Math.min(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	} else {
		clientHeight = Math.max(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	}
	return clientHeight;
}

/**
 * [获取当前可视范围的高度]
 * @return {[Number]} [clientHeight]
 */
export function getScrollHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight
	);
}

/**
 * 转化路由
 * @param data
 * @param routers
 * @returns
 */
export const getRouters = function (data: any[], routers: any) {
	if (!data) {
		return [];
	}
	data.map((item) => {
		if (item.components && (item.isMemu === 1 || item.isMemu === 4)) {
			routers.push({
				id: routers.length,
				path: item.resUrl,
				component: item.components,
				name: item.resTitle,
				icon: item.resIcon,
				flag: item.flag
			});
		}
		if (item.subResource && item.subResource.length) {
			getRouters(item.subResource, routers);
		}
		return routers;
	});
};

/**
 * @description 对树结构进行递归，添加子项
 * @param tree
 */
// @ts-ignore
export const recursionTree = (tree: any[]): any => {
	return tree.map((item: any) => ({
		key: item.insSn,
		title: item.insName,
		icon: item.insPic,
		insType: item.insType,
		children: Array.isArray(item.childList) ? recursionTree(item.childList) : []
	}));
};

/**
 * @description 处理下拉数据
 * @param selectArray 源数据
 * @param label 下拉label字段名
 * @param value 下拉value字段名
 */
export const selectData = (
	selectArray: any[],
	label: string,
	value: string | number
) => {
	return selectArray.map((item) => ({
		value: item[value],
		label: item[label]
	}));
};

// FireFox和Safari兼容event.path
export const getEventPath = (event: any) => {
	return event.path || (event.composedPath && event.composedPath()) || '';
};

/**
 * 防抖
 * @param fn 传入的方法
 * @param delay 时间毫秒 单位ms
 * @returns 方法
 */
export const debounce = (fn: Function, delay: number): Function => {
	let timer: any = null;
	return (...args: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
export const validateionLen = {
	defalut: 50,
	small: 20,
	large: 100
};

/**
 * 节流
 * @param fn 传入的方法
 * @param delay 时间毫秒 单位ms
 * @returns 方法
 */
export const throttle = (fn: Function, delay: number): Function => {
	let timer: any = null;
	return (...args: any) => {
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args);
				timer = null;
			}, delay);
		}
	};
};

/**
 * 获取元素的绝对位置
 * @param ele dom元素
 * @returns
 */
export const getElementPagePosition = (ele: any) => {
	//计算x坐标
	let actualLeft = ele.offsetLeft;
	let currentLeft = ele.offsetParent;
	while (currentLeft !== null) {
		actualLeft += currentLeft.offsetLeft;
		currentLeft = currentLeft.offsetParent;
	}
	//计算y坐标
	let actualTop = ele.offsetTop;
	let currentTop = ele.offsetParent;
	while (currentTop !== null) {
		actualTop += currentTop.offsetTop + currentTop.clientTop;
		currentTop = currentTop.offsetParent;
	}
	//返回结果
	return { x: actualLeft, y: actualTop };
};

/**
 * 设置样式
 * @param config json数据
 */
export const getStyles = (config: IAnyObject) => {
	let result: any = {
		width: config.width,
		height: config.height,
		animationIterationCount: config.styleAnimateInfinite ? 'infinite' : 1,
		textShadow: `${config.styleTextShadowX}px ${config.styleTextShadowY}px ${config.styleTextShadowF}px ${config.styleTextShadowC}`,
		boxShadow: `${config.styleBoxShadowX}px ${config.styleBoxShadowY}px ${
			config.styleBoxShadowF
		}px ${config.styleBoxShadowC} ${config.styleBoxInset ? 'inset' : ''}`
	};
	for (let filed in config) {
		if (filed.indexOf('style') === 0) {
			let newField = filed.substring(5);
			newField = newField.replace(newField[0], newField[0].toLocaleLowerCase());
			result[newField] = config[filed];
		}
	}
	result.animationDelay = config.styleAnimationDelay + 's';
	result.animationDuration = config.styleAnimationDuration + 's';
	return result;
};

// 路由前缀，主要用于部署时
export const routePrefix = '/manamage';
