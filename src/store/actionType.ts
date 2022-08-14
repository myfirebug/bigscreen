import { IAnyObject } from '@src/types/index';

// counter state数据类型
export type COUNTER_STATE = number;
// 定义增加 state 类型常量
export const INCREMENT = 'INCREMENT';
export type INCREMENT_TYPE = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = 'DECREMENT';
export type DECREMENT_TYPE = typeof DECREMENT;

// 用户信息里的insInfos接口
export interface IUserInfoItem {
	insSn: string;
	insName: string;
	roleCode: string;
	roleName: string;
	notes: string;
}
// 获取用户信息
export const USERINFO = 'USERINFO';
export type USERINFO_TYPE = typeof USERINFO;
// 编辑用户信息
export const UPDATE_USERINFO = 'UPDATE_USERINFO';
export type UPDATE_USERINFO_TYPE = typeof UPDATE_USERINFO;

// 菜单接口
export interface IMenu {
	isMemu: 1 | 2 | 3;
	resUrl: string;
	components: string;
	resIcon: string;
	resTitle: string;
	status: number;
	flag: Boolean;
	subResource?: IMenu[];
}
export type MENU_STATE = IMenu[];

// 面包屑
export interface IBreadCrumbsItem {
	path: string;
	name: string;
}

// 路由接口
export interface IRouter {
	component: string;
	icon: string;
	id: number;
	name: string;
	path: string;
	flag: Boolean;
}

/**
 * 策略
 */
// authorization 数据类型
export interface IAuthorization {
	menu: MENU_STATE;
	routers: IRouter[];
	strategy: IAnyObject;
	breadCrumbs: IBreadCrumbsItem[];
}

// 获取菜单
export const MENU = 'MENU';
export type MENU_TYPE = typeof MENU;

// 获取策略
export const STRATEGY = 'STRATEGY';
export type STRATEGY_TYPE = typeof STRATEGY;

// 组件
export interface IWidget extends IAnyObject {
	// 组件code
	code: string;
	// 组件类型
	type: string;
	// 组件ID
	id: string;
	// 配置项值
	configureValue: any;
	// 基础配置项
	configure: any[];
	// 坐标值
	coordinateValue: any;
	// 是否是是组
	isGroup: boolean;
	// 组件
	widgets: IWidget[];
}

// 页面接口
export interface IPage {
	id: string;
	name: string;
	widgets: IWidget[];
}

export interface IScreen {
	width: number | string;
	height: number | string;
	horizontalNumber: number;
	verticalNumber: number;
	title: string;
	description: string;
	backgroundColor: string;
	backgroundImage: string;
	showAuxiliary: boolean;
	auxiliaryBorderColor: string;
	interval: number;
}
/**
 * 所有页面
 * 注意：
 * 1.当前切换页面时，pastPage, futurePage重置[], currentPage的数据等于当前选中的页面的数据，currentWidgetId需要重置
 * 2.只有当前页面才会有撤销和恢复
 */
export type LARGESCREEN_STATE = {
	// 当前项目所有页面
	pages: IPage[];
	// 撤销
	pastPage: IPage[];
	// 恢复
	futurePage: IPage[];
	// 当前页面
	currentPage: IPage;
	// 选中组件ID
	currentWidgetId: string;
	// 选中的组件
	currentWidget: IWidget;
	// 屏幕配置
	screen: IScreen;
	// groupID
	currentWidgetGroupId: string;
};
// 获取大屏数据
export const LARGE_SCREEN = 'LARGE_SCREEN';
export type LARGE_SCREEN_TYPE = typeof LARGE_SCREEN;
// 修改屏幕数据
export const MODIFY_SCREEN = 'MODIFY_SCREEN';
export type MODIFY_SCREEN_TYPE = typeof MODIFY_SCREEN;
// 添加页面
export const ADD_LARGESCREEN_PAGE = 'ADD_LARGESCREEN_PAGE';
export type ADD_LARGESCREEN_PAGE_TYPE = typeof ADD_LARGESCREEN_PAGE;
// 删除页面
export const DEL_LARGESCREEN_PAGE = 'DEL_LARGESCREEN_PAGE';
export type DEL_LARGESCREEN_PAGE_TYPE = typeof DEL_LARGESCREEN_PAGE;
// 切换页面
export const CHANGE_LARGESCREEN_PAGE = 'CHANGE_LARGESCREEN_PAGE';
export type CHANGE_LARGESCREEN_PAGE_TYPE = typeof CHANGE_LARGESCREEN_PAGE;
// 修改页面
export const MODIFY_LARGESCREEN_PAGE = 'MODIFY_LARGESCREEN_PAGE';
export type MODIFY_LARGESCREEN_PAGE_TYPE = typeof MODIFY_LARGESCREEN_PAGE;
// 添加组件
export const ADD_LARGESCREEN_ELEMENT = 'ADD_LARGESCREEN_ELEMENT';
export type ADD_LARGESCREEN_ELEMENT_TYPE = typeof ADD_LARGESCREEN_ELEMENT;
// 删除组件
export const DEL_LARGESCREEN_ELEMENT = 'DEL_LARGESCREEN_ELEMENT';
export type DEL_LARGESCREEN_ELEMENT_TYPE = typeof DEL_LARGESCREEN_ELEMENT;
// 显示隐藏组件
export const SHOWORHIDE_LARGESCREEN_ELEMENT = 'SHOWORHIDE_LARGESCREEN_ELEMENT';
export type SHOWORHIDE_LARGESCREEN_ELEMENT_TYPE =
	typeof SHOWORHIDE_LARGESCREEN_ELEMENT;
// 修改组件
export const MODIFY_LARGESCREEN_ELEMENT = 'MODIFY_LARGESCREEN_ELEMENT';
export type MODIFY_LARGESCREEN_ELEMENT_TYPE = typeof MODIFY_LARGESCREEN_ELEMENT;
// 切换组件
export const CHANGE_LARGESCREEN_ELEMENET = 'CHANGE_LARGESCREEN_ELEMENET';
export type CHANGE_LARGESCREEN_ELEMENET_TYPE =
	typeof CHANGE_LARGESCREEN_ELEMENET;
// 复制组件
export const COPY_LARGESCREEN_ELEMENET = 'COPY_LARGESCREEN_ELEMENET';
export type COPY_LARGESCREEN_ELEMENET_TYPE = typeof COPY_LARGESCREEN_ELEMENET;
// 撤销
export const UNDO_LARGESCREEN = 'UNDO_LARGESCREEN';
export type UNDO_LARGESCREEN_TYPE = typeof UNDO_LARGESCREEN;
// 恢复
export const REDO_LARGESCREEN = 'REDO_LARGESCREEN';
export type REDO_LARGESCREEN_TYPE = typeof REDO_LARGESCREEN;
// 分组
export const GROUP = 'GROUP';
export type GROUP_TYPE = typeof GROUP;
// 拆分（取消分组）
export const CANCEL_GROUP = 'CANCEL_GROUP';
export type CANCEL_GROUP_TYPE = typeof CANCEL_GROUP;

// 所有的数据的数据类型, 注意这里每加一个state模块都必须在这里进行申明
export type ALL_STATE = {
	counter: COUNTER_STATE;
	authorization: IAuthorization;
	userInfo: IAnyObject;
	largeScreen: LARGESCREEN_STATE;
};

// 定义省市区
export const RESIDENCES = 'RESIDENCES';
export type RESIDENCES_TYPE = typeof RESIDENCES;
