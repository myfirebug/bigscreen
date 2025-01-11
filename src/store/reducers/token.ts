import { ModifyAction } from "../actions/token";
import { SETTOKEN, CLEARTOKEN } from "../actionType";

// 处理并返回 state

export const token = (state: string = "", action: ModifyAction): string => {
  switch (action.type) {
    case SETTOKEN:
      return action.data;
    case CLEARTOKEN:
      return "";
    default:
      return state;
  }
};
