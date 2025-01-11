import {
  USERINFO,
  USERINFO_TYPE,
  CLEARUSERINFO,
  CLEARUSERINFO_TYPE,
} from "../actionType";
import { Dispatch } from "redux";
import { IuserInfo } from "@src/service";

// 增加的接口类型
export interface IUserInfoAction {
  type: USERINFO_TYPE;
  data: IuserInfo;
}

export interface IClearUserInfoAction {
  type: CLEARUSERINFO_TYPE;
}

export type ModifyAction = IUserInfoAction | IClearUserInfoAction;

const actionUserInfo = (data: IuserInfo): IUserInfoAction => ({
  type: USERINFO,
  data,
});

const actionClearUserInfo = (): IClearUserInfoAction => ({
  type: CLEARUSERINFO,
});

export const setUserInfo = (data: IuserInfo) => (dispatch: Dispatch) => {
  dispatch(actionUserInfo(data));
};

export const clearUserInfo = () => (dispatch: Dispatch) => {
  dispatch(actionClearUserInfo());
};
