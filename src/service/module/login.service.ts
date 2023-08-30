import { login } from "../api";
import { ILoginForm, ILoginResult } from "../interface";
import axios from "../fetch";

const loginService = {
  // 登录
  login(params: ILoginForm) {
    return axios.post<ILoginForm, ILoginResult>(login.login, params);
  },
};

export default loginService;
