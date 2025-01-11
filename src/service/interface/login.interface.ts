// 登录表单参数
export interface ILoginForm {
  username: string;
  password: string;
}
// 登录结果
export interface ILoginResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: string;
  message: string;
}
