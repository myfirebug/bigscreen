import Mock from "mockjs";
// 登录模块
import * as login from "./login.mock";
// 用户模块
import * as userInfo from "./userInfo.mock";

create(login);
create(userInfo);
/**
 * 根据模块创建接口
 * @param mod m模块
 */
function create(mod: any) {
  for (let key in mod) {
    Mock.mock(RegExp(mod[key].url + "*"), mod[key].method, (options) => {
      const body = JSON.parse(options.body);
      const { url, data } = mod[key];
      // 这里判断登录是username:admin,password:123456,才可以判断
      if (
        url === "/login" &&
        (body.username !== "admin" || body.password !== "123456")
      ) {
        return {
          result: false,
          data: null,
          message: "用户名或密码错误",
        };
      }
      return data;
    });
  }
}

export default Mock;
