export interface IuserInfo {
  username: string;
  email: string;
  age: number;
  avatar: string;
}
// 用户信息结果
export interface IUserInfoResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IuserInfo;
  message: string;
}
