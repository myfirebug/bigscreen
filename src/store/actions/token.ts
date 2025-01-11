import {
  SETTOKEN,
  SETTOKEN_TYPE,
  CLEARTOKEN,
  CLEARTOKEN_TYPE,
  CLEARUSERINFO,
} from "../actionType";
import { Dispatch } from "redux";

export interface ISetTokenAction {
  type: SETTOKEN_TYPE;
  data: string;
}

export interface IClearTokenAction {
  type: CLEARTOKEN_TYPE;
}

export type ModifyAction = ISetTokenAction | IClearTokenAction;

const actionSetToken = (data: string): ISetTokenAction => ({
  type: SETTOKEN,
  data,
});

const actionClearToken = (): IClearTokenAction => ({
  type: CLEARTOKEN,
});

export const setToken = (data: string) => (dispatch: Dispatch) => {
  dispatch(actionSetToken(data));
};

export const clearToken = () => (dispatch: Dispatch) => {
  dispatch(actionClearToken());
  dispatch({
    type: CLEARUSERINFO,
  });
};
