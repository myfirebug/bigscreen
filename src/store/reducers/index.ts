import { combineReducers } from "redux";
import { counter } from "./counter";
import { currentTheme } from "./theme";
export default combineReducers({
  counter,
  currentTheme,
});
