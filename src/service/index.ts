import { get, post, IResult } from './fetch';
import { IAnyObject } from '@src/types';
interface IApi {
	[propNames: string]: (params?: IAnyObject) => Promise<IResult>;
}

const api: IApi = {
	// 刷新token
	refreshToken(params) {
		return post({
			url: 'oauth-service/user/refresh',
			data: params,
			loading: true,
			servicePrefix: 'default'
		});
	},
	// 获取菜单树
	getMenus(params) {
		return get({
			params: params,
			url: '/cloud-service/cloudresource/tree/left',
			loading: true,
			servicePrefix: 'default'
		});
	}
};

export default api;
