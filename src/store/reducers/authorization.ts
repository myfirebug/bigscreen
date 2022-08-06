/* eslint-disable */
import { ModifyMenuAction } from '../actions/authorization';
import { IAuthorization, MENU, STRATEGY } from '../actionType';
import { IAnyObject } from '@src/types';

import { getRouters, getGroupById, getParentsById } from '@src/utils/tools';

const initialState = {
	menu: [],
	routers: [],
	strategy: [],
	breadCrumbs: []
};

// 处理并返回 state
export const authorization = (
	state: IAuthorization = initialState,
	action: ModifyMenuAction
): IAuthorization => {
	switch (action.type) {
		case MENU: {
			const routers: any[] = [];
			getRouters(JSON.parse(JSON.stringify(action.datas)), routers);
			return {
				...state,
				menu: action.datas,
				routers: routers
			};
		}
		case STRATEGY: {
			let strategy: IAnyObject = {};
			const data: any = getGroupById(state.menu, action.key, 'resUrl');
			const breadCrumbs = getParentsById(state.menu, action.key);
			const menuDatas = data.subResource
				? data.subResource.filter(
						(item: any) => item.isMemu === 3 || item.isMemu === 4
				  )
				: [];
			if (menuDatas.length) {
				for (let i = 0; i < menuDatas.length; i++) {
					if (menuDatas[i].permissions) {
						strategy[menuDatas[i].permissions] = menuDatas[i].resUrl || true;
					}
				}
			}
			return {
				...state,
				breadCrumbs: breadCrumbs ? breadCrumbs.reverse() : [],
				strategy: strategy
			};
		}
		default:
			return state;
	}
};
