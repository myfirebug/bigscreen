import {
  LARGE_SCREEN,
  LARGE_SCREEN_TYPE,
  MODIFY_SCREEN,
  MODIFY_SCREEN_TYPE,
  ADD_LARGESCREEN_PAGE,
  ADD_LARGESCREEN_PAGE_TYPE,
  DEL_LARGESCREEN_PAGE,
  DEL_LARGESCREEN_PAGE_TYPE,
  MODIFY_LARGESCREEN_PAGE,
  MODIFY_LARGESCREEN_PAGE_TYPE,
  CHANGE_LARGESCREEN_PAGE,
  CHANGE_LARGESCREEN_PAGE_TYPE,
  ADD_LARGESCREEN_ELEMENT,
  ADD_LARGESCREEN_ELEMENT_TYPE,
  DEL_LARGESCREEN_ELEMENT,
  DEL_LARGESCREEN_ELEMENT_TYPE,
  MODIFY_LARGESCREEN_ELEMENT,
  MODIFY_LARGESCREEN_ELEMENT_TYPE,
  CHANGE_LARGESCREEN_ELEMENET,
  CHANGE_LARGESCREEN_ELEMENET_TYPE,
  COPY_LARGESCREEN_ELEMENET,
  COPY_LARGESCREEN_ELEMENET_TYPE,
  UNDO_LARGESCREEN,
  UNDO_LARGESCREEN_TYPE,
  REDO_LARGESCREEN,
  REDO_LARGESCREEN_TYPE,
  SHOWORHIDE_LARGESCREEN_ELEMENT,
  SHOWORHIDE_LARGESCREEN_ELEMENT_TYPE,
  GROUP,
  GROUP_TYPE,
  CANCEL_GROUP,
  CANCEL_GROUP_TYPE,
  IPage,
  IScreen,
  IWidget
} from '../actionType'
import { Dispatch } from 'redux'
import { debug } from 'console'

// 获取大屏页面数据
export interface ILargeScreenAction {
  type: LARGE_SCREEN_TYPE
  datas: IPage[]
}

// 修改屏幕数据
export interface IModifyScreenAction {
  type: MODIFY_SCREEN_TYPE
  datas: IScreen
}

// 添加页面
export interface IAddLargeScreenPageAction {
  type: ADD_LARGESCREEN_PAGE_TYPE
  data: IPage
}

// 删除页面
export interface IDelLargeScreenPageAction {
  type: DEL_LARGESCREEN_PAGE_TYPE
  id: string
}

// 修改页面
export interface IModifyLargeScreenPageAction {
  type: MODIFY_LARGESCREEN_PAGE_TYPE
  id: string
  data: IPage
}
// 切换页面
export interface IChangeLargeScreenPageAction {
  type: CHANGE_LARGESCREEN_PAGE_TYPE
  id: string
}

// 添加元素
export interface IAddLargeScreenElementAction {
  type: ADD_LARGESCREEN_ELEMENT_TYPE
  data: IWidget
  groupId?: string
}

// 删除元素
export interface IDelLargeScreenElementAction {
  type: DEL_LARGESCREEN_ELEMENT_TYPE
}

// 显示隐藏元素
export interface IShowOrHideLargeScreenElementAction {
  type: SHOWORHIDE_LARGESCREEN_ELEMENT_TYPE
  id: string
  groupId?: string
}

// 修改元素
export interface IModifyLargeScreenElementAction {
  type: MODIFY_LARGESCREEN_ELEMENT_TYPE
  id: string
  groupId: string
  data: IWidget
}

// 切换元素
export interface IChangeLargeScreenElementAction {
  type: CHANGE_LARGESCREEN_ELEMENET_TYPE
  id: string
  groupId?: string
}

// 复制元素
export interface ICopyLargeScreenElementAction {
  type: COPY_LARGESCREEN_ELEMENET_TYPE
}

// 撤销
export interface IUndoLargeScreenAction {
  type: UNDO_LARGESCREEN_TYPE
}

// 恢复
export interface IRedoLargeScreenAction {
  type: REDO_LARGESCREEN_TYPE
}

// 分组
export interface IGroupAction {
  type: GROUP_TYPE
}

// 拆分
export interface ICancelGroupAction {
  type: CANCEL_GROUP_TYPE
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | ILargeScreenAction
  | IAddLargeScreenPageAction
  | IDelLargeScreenPageAction
  | IModifyLargeScreenPageAction
  | IChangeLargeScreenPageAction
  | IAddLargeScreenElementAction
  | IDelLargeScreenElementAction
  | IModifyLargeScreenElementAction
  | IChangeLargeScreenElementAction
  | ICopyLargeScreenElementAction
  | IUndoLargeScreenAction
  | IRedoLargeScreenAction
  | IModifyScreenAction
  | IGroupAction
  | IShowOrHideLargeScreenElementAction
  | ICancelGroupAction

// 获取页面数据的方法
const actionLargeScreen = (datas: IPage[]): ILargeScreenAction => ({
  type: LARGE_SCREEN,
  datas
})

// 新增页面数据的方法
const actionAddLargeScreenPage = (data: IPage): IAddLargeScreenPageAction => ({
  type: ADD_LARGESCREEN_PAGE,
  data
})

// 删除页面数据的方法
const actionDelLargeScreenPage = (id: string): IDelLargeScreenPageAction => ({
  type: DEL_LARGESCREEN_PAGE,
  id
})

// 修改页面数据的方法
const actionModifyLargeScreenPage = (
  id: string,
  data: IPage
): IModifyLargeScreenPageAction => ({
  type: MODIFY_LARGESCREEN_PAGE,
  id,
  data
})

// 切换页面数据的方法
const actionChangeLargeScreenPage = (
  id: string
): IChangeLargeScreenPageAction => ({
  type: CHANGE_LARGESCREEN_PAGE,
  id
})

// 新增元素数据的方法
const actionAddLargeScreenElement = (
  data: IWidget,
  groupId?: string
): IAddLargeScreenElementAction => ({
  type: ADD_LARGESCREEN_ELEMENT,
  data,
  groupId
})

// 删除元素数据的方法
const actionDelLargeScreenElement = (): IDelLargeScreenElementAction => ({
  type: DEL_LARGESCREEN_ELEMENT
})

// 显示隐藏元素数据的方法
const actionShowOrHideLargeScreenElement = (
  id: string,
  groupId?: string
): IShowOrHideLargeScreenElementAction => ({
  type: SHOWORHIDE_LARGESCREEN_ELEMENT,
  id,
  groupId
})

// 修改元素数据的方法
const actionModifyLargeScreenElement = (
  id: string,
  groupId: string,
  data: IWidget
): IModifyLargeScreenElementAction => ({
  type: MODIFY_LARGESCREEN_ELEMENT,
  id,
  groupId,
  data
})

// 切换元素数据的方法
const actionChangeLargeScreenElement = (
  id: string,
  groupId?: string
): IChangeLargeScreenElementAction => ({
  type: CHANGE_LARGESCREEN_ELEMENET,
  id,
  groupId
})

// 复制元素数据的方法
const actionCopyLargeScreenElement = (): ICopyLargeScreenElementAction => ({
  type: COPY_LARGESCREEN_ELEMENET
})

// 撤销元素数据的方法
const actionUndoLargeScreen = (): IUndoLargeScreenAction => ({
  type: UNDO_LARGESCREEN
})

// 恢复元素数据的方法
const actionRedoLargeScreen = (): IRedoLargeScreenAction => ({
  type: REDO_LARGESCREEN
})

// 分组的方法
const actionGroup = (): IGroupAction => ({
  type: GROUP
})

// 拆分的方法
const actionCancelGroup = (): ICancelGroupAction => ({
  type: CANCEL_GROUP
})

// 修改屏幕数据的方法
const actionModifyScreen = (datas: IScreen): IModifyScreenAction => ({
  type: MODIFY_SCREEN,
  datas
})

// 获取当前项目所有页面
export const getLargeScreenPages = (datas: IPage[]) => (dispatch: Dispatch) => {
  dispatch(actionLargeScreen(datas))
}

// 新增页面数据
export const addLargeScreenPage =
  (data: IPage, callback?: Function) => (dispatch: Dispatch) => {
    dispatch(actionAddLargeScreenPage(data))
    callback && callback()
  }

// 删除页面数据
export const delLargeScreenPage =
  (id: string, callback?: Function) => (dispatch: Dispatch) => {
    dispatch(actionDelLargeScreenPage(id))
    callback && callback()
  }

// 修改页面数据
export const modifyLargeScreenPage =
  (id: string, data: IPage, callback?: Function) => (dispatch: Dispatch) => {
    dispatch(actionModifyLargeScreenPage(id, data))
    callback && callback()
  }

// 切换页面数据
export const changeLargeScreenPage =
  (id: string, callback?: Function) => (dispatch: Dispatch) => {
    dispatch(actionChangeLargeScreenPage(id))
    callback && callback()
  }

// 新增元素数据
export const addLargeScreenElement =
  (data: IWidget, groupId?: string) => (dispatch: Dispatch) => {
    dispatch(actionAddLargeScreenElement(data, groupId))
  }

// 删除元素数据
export const delLargeScreenElement = () => (dispatch: Dispatch) => {
  dispatch(actionDelLargeScreenElement())
}

// 显示隐藏页面数据
export const showOrHideLargeScreenElement =
  (id: string, groupId?: string) => (dispatch: Dispatch) => {
    dispatch(actionShowOrHideLargeScreenElement(id, groupId))
  }

// 修改元素数据
export const modifyLargeScreenElement =
  (id: string, groupId: string, data: IWidget) => (dispatch: Dispatch) => {
    dispatch(actionModifyLargeScreenElement(id, groupId, data))
  }

// 切换元素数据
export const changeLargeScreenElement =
  (id: string, groupId?: string) => (dispatch: Dispatch) => {
    dispatch(actionChangeLargeScreenElement(id, groupId))
  }

// 复制元素数据
export const copyLargeScreenElement = () => (dispatch: Dispatch) => {
  dispatch(actionCopyLargeScreenElement())
}

// 撤销元素数据
export const undoLargeScreen = () => (dispatch: Dispatch) => {
  dispatch(actionUndoLargeScreen())
}

// 恢复元素数据
export const redoLargeScreen = () => (dispatch: Dispatch) => {
  dispatch(actionRedoLargeScreen())
}

// 修改屏幕数据
export const modifyScreen = (datas: IScreen) => (dispatch: Dispatch) => {
  dispatch(actionModifyScreen(datas))
}

// 分组
export const group = () => (dispatch: Dispatch) => {
  dispatch(actionGroup())
}

// 拆分
export const cancelGroup = () => (dispatch: Dispatch) => {
  dispatch(actionCancelGroup())
}
