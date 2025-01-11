import { THEME, THEME_TYPE } from "../actionType";
import { Dispatch } from "redux";
import { IThemeName, setTheme } from "@core/theme";

// 增加的接口类型
export interface IThemeAction {
  type: THEME_TYPE;
  data: IThemeName;
}

export type ModifyAction = IThemeAction;

// 增加 state 次数据的方法
const actionTheme = (data: IThemeName): IThemeAction => ({
  type: THEME,
  data,
});

export const setCurrentTheme = (data: IThemeName) => (dispatch: Dispatch) => {
  dispatch(actionTheme(data));
  setTheme(data);
};
