import { ModifyAction } from "../actions/theme";
import { THEME } from "../actionType";
import { IThemeName } from "@core/theme";

// 处理并返回 state

export const currentTheme = (
  state: IThemeName = "theme01_light",
  action: ModifyAction
): IThemeName => {
  switch (action.type) {
    case THEME:
      return action.data;
    default:
      return state;
  }
};
