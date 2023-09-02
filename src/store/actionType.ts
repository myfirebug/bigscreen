import { IThemeName } from "@core/theme";
import { IuserInfo } from "@src/service";

// counter state数据类型
export type COUNTER_STATE = number;
// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT";
export type INCREMENT_TYPE = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";
export type DECREMENT_TYPE = typeof DECREMENT;

// 定义 theme 类型常量
export const THEME = "THEME";
export type THEME_TYPE = typeof THEME;

// 定义 settoken 类型常量
export const SETTOKEN = "SETTOKEN";
export type SETTOKEN_TYPE = typeof SETTOKEN;

// 定义 settoken 类型常量
export const CLEARTOKEN = "CLEARTOKEN";
export type CLEARTOKEN_TYPE = typeof CLEARTOKEN;

// 定义 userInfo 类型常量
export const USERINFO = "USERINFO";
export type USERINFO_TYPE = typeof USERINFO;

// 所有的数据的数据类型, 注意这里每加一个state模块都必须在这里进行申明
export type ALL_STATE = {
  counter: COUNTER_STATE;
  currentTheme: IThemeName;
  token: string;
  userInfo: IuserInfo;
};
