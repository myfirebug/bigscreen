import Mock from "mockjs";
export const userInfo = {
  url: "/user-info",
  method: "get",
  data: {
    result: true,
    data: Mock.mock({
      email: "@email()",
      "age|20-80": 10,
      username: "admin",
      avatar: "@image(40x40)",
    }),
    message: "登录成功",
  },
};
