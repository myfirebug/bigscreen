import { user } from "../api";
import { IuserInfo, IUserInfoResult } from "../interface";
import axios from "../fetch";

const userService = {
  // 用户信息
  userInfo() {
    return axios.get<IuserInfo, IUserInfoResult>(user.userInfo);
  },
};

export default userService;
