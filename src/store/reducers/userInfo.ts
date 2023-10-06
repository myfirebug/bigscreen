import { IuserInfo } from "@src/service";
import { ModifyAction } from "../actions/userInfo";
import { USERINFO, CLEARUSERINFO } from "../actionType";

const initialState = {
  username: "",
  email: "",
  age: 0,
  avatar: "",
};

// 处理并返回 state
export const userInfo = (
  state: IuserInfo = initialState,
  action: ModifyAction
): IuserInfo => {
  switch (action.type) {
    case USERINFO:
      return action.data;
    case CLEARUSERINFO:
      return initialState;
    default:
      return state;
  }
};
