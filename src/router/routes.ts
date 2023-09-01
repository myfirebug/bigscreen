import { NonIndexRouteObject } from "react-router-dom";

export interface IMeta {
  // 是否需要token
  auth: boolean;
  // 是否全屏
  fullScreen?: boolean;
  // 是否是菜单
  menu?: boolean;
}

export interface IRoute extends NonIndexRouteObject {
  // 页面标题
  title: string;
  // 模块路径在template模块下的路径
  modulePath: string;
  // 子路由
  children?: IRoute[];
  // 访问的兄弟路由不存在时，重定向到该路由
  redirect?: string;
  state?: any;
  meta: IMeta;
}

const routerDatas: IRoute[] = [
  {
    path: "/",
    title: "",
    modulePath: "layout",
    meta: {
      auth: false,
    },
    children: [
      {
        path: "/login",
        title: "登录",
        redirect: "/login",
        modulePath: "login",
        meta: {
          auth: false,
          fullScreen: true,
          menu: false,
        },
      },
      {
        path: "/home",
        title: "首页",
        modulePath: "home",
        meta: {
          auth: false,
          menu: true,
        },
      },
      {
        path: "/web",
        title: "电脑端",
        modulePath: "",
        meta: {
          auth: true,
          menu: true,
        },
        children: [
          {
            path: "/web/project-list",
            title: "电脑端-项目列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/web/widget-list",
            title: "电脑端-微件模版列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/web/page-list",
            title: "电脑端-页面模版列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
        ],
      },
      {
        path: "/mobile",
        title: "移动端",
        modulePath: "",
        meta: {
          auth: true,
          menu: true,
        },
        children: [
          {
            path: "/mobile/project-list",
            title: "移动端-项目列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/mobile/widget-list",
            title: "移动端-微件模版列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/mobile/page-list",
            title: "移动端-页面模版列表",
            modulePath: "home",
            meta: {
              auth: true,
              menu: true,
            },
          },
        ],
      },
      {
        path: "*",
        title: "404",
        modulePath: "notFound",
        meta: {
          auth: false,
        },
      },
    ],
  },
];

export default routerDatas;
