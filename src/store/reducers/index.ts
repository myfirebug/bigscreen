import { combineReducers } from "redux";
import { counter } from "./counter";
import { currentTheme } from "./theme";
import { token } from "./token";
import { userInfo } from "./userInfo";
export default combineReducers({
  counter,
  currentTheme,
  token,
  userInfo,
});
