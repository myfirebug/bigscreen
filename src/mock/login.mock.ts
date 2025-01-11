import Mock from "mockjs";

export const login = {
  url: "/login",
  method: "post",
  data: {
    result: true,
    data: Mock.mock("@guid"),
    message: "登录成功",
  },
};
