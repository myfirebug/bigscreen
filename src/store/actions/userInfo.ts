import { USERINFO, USERINFO_TYPE } from "../actionType";
import { Dispatch } from "redux";
import { IuserInfo } from "@src/service";

// 增加的接口类型
export interface IUserInfoAction {
  type: USERINFO_TYPE;
  data: IuserInfo;
}

export type ModifyAction = IUserInfoAction;

// 增加 state 次数据的方法
const actionUserInfo = (data: IuserInfo): IUserInfoAction => ({
  type: USERINFO,
  data,
});

export const setUserInfo = (data: IuserInfo) => (dispatch: Dispatch) => {
  dispatch(actionUserInfo(data));
};
