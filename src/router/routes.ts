import { NonIndexRouteObject } from "react-router-dom";

export interface IRoute extends NonIndexRouteObject {
  // 页面标题
  title: string;
  // 模块路径在template模块下的路径
  modulePath: string;
  // 是否需要token
  auth: boolean;
  // 子路由
  children?: IRoute[];
  // 访问的兄弟路由不存在时，重定向到该路由
  redirect?: string;
  state?: any;
}

const routerDatas: IRoute[] = [
  {
    path: "/",
    title: "",
    modulePath: "layout",
    auth: false,
    children: [
      {
        path: "/home",
        title: "首页",
        redirect: "/home",
        modulePath: "home",
        auth: false,
      },
      {
        path: "/login",
        title: "登录",
        modulePath: "login",
        auth: false,
      },
      {
        path: "*",
        title: "404",
        modulePath: "notFound",
        auth: false,
      },
    ],
  },
];

export default routerDatas;
