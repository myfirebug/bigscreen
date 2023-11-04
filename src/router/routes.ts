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
  meta: IMeta;
  // 子路由
  children?: IRoute[];
  // 访问的兄弟路由不存在时，重定向到该路由
  redirect?: string;
  state?: any;
  icon?: string;
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
        icon: "&#xe8b9;",
        meta: {
          auth: true,
          menu: true,
        },
      },
      {
        path: "/components",
        title: "组件",
        modulePath: "home",
        icon: "&#xe640;",
        meta: {
          auth: true,
          menu: true,
        },
      },
      {
        path: "/widget",
        title: "微件",
        modulePath: "widget",
        icon: "&#xe634;",
        meta: {
          auth: true,
          menu: true,
        },
      },
      {
        path: "/web",
        title: "电脑端",
        icon: "&#xe61f;",
        modulePath: "",
        meta: {
          auth: true,
          menu: true,
        },
        children: [
          {
            path: "/web/project-list",
            title: "项目",
            modulePath: "web/projectList",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/web/page-list",
            title: "页面模版",
            modulePath: "web/pageList",
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
        icon: "&#xe6b2;",
        modulePath: "",
        meta: {
          auth: true,
          menu: true,
        },
        children: [
          {
            path: "/mobile/project-list",
            title: "项目",
            modulePath: "mobile/projectList",
            meta: {
              auth: true,
              menu: true,
            },
          },
          {
            path: "/mobile/page-list",
            title: "页面模版",
            modulePath: "mobile/pageList",
            meta: {
              auth: true,
              menu: true,
            },
          },
        ],
      },
      {
        path: "/404",
        title: "404",
        modulePath: "notFound",
        meta: {
          auth: false,
          menu: false,
        },
      },
      {
        path: "*",
        title: "404",
        modulePath: "",
        meta: {
          auth: false,
        },
      },
    ],
  },
];

export default routerDatas;
