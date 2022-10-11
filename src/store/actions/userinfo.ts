import { USERINFO, USERINFO_TYPE } from '../actionType'
import { IAnyObject } from '@src/types/index'
import { Dispatch } from 'redux'

// 增加的接口类型
export interface IUserInfoAction {
  type: USERINFO_TYPE
  data: IAnyObject
}
// 定义 ModifyAction 类型，包含 IIncrementAction 和 IDecrementAction接口类型
export type ModifyAction = IUserInfoAction

// 增加 state 次数据的方法
const actioUserinfo = (data: IAnyObject): IUserInfoAction => ({
  type: USERINFO,
  data
})

export const userinfo = (data: IAnyObject) => (dispatch: Dispatch) => {
  dispatch(actioUserinfo(data))
}
