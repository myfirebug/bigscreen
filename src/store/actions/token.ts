import {
  SETTOKEN,
  SETTOKEN_TYPE,
  CLEARTOKEN,
  CLEARTOKEN_TYPE,
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

const actionSetTheme = (data: string): ISetTokenAction => ({
  type: SETTOKEN,
  data,
});

const actionClearTheme = (): IClearTokenAction => ({
  type: CLEARTOKEN,
});

export const setToken = (data: string) => (dispatch: Dispatch) => {
  dispatch(actionSetTheme(data));
};

export const clearToken = () => (dispatch: Dispatch) => {
  dispatch(actionClearTheme());
};
