import { IuserInfo } from "@src/service";
import { ModifyAction } from "../actions/userInfo";
import { USERINFO } from "../actionType";

// 处理并返回 state
export const userInfo = (
  state: IuserInfo = {
    username: "",
    email: "",
    age: 0,
    avatar: "",
  },
  action: ModifyAction
): IuserInfo => {
  switch (action.type) {
    case USERINFO:
      return action.data;
    default:
      return state;
  }
};
