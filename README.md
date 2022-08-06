# 基于 React 后台管理系统框架

# 目录结构

[一、框架使用技术](#1.框架使用技术)

[二、学习文档](#2.学习文档)

[三、依赖安装、启动、打包](#3.依赖安装、启动、打包)

[四、目录结构](#4.目录结构)

[五、文件路径依赖引用简写如下](#4.文件路径依赖引用简写如下)

# 1.框架使用技术

- 框架为`create-react-app`构架，搭配`react-router-dom`、`redux`、`react-redux`、`redux-thunk`、`redux-persist`、`redux-logger`、`axios`，UI 框架为`antd@4.19.3`

# 2.学习文档

- [react 中文官网](https://react.docschina.org 'react中文官网')
- [react 英文官网](https://reactjs.org 'react英文官网')
- [redux 中文官网](http://cn.redux.js.org 'redux中文官网')
- [redux 英文官网](https://redux.js.org 'redux英文官网')
- [create-react-app 中文文档](https://www.html.cn/create-react-app/docs/getting-started/ 'create-react-app中文文档')
- [antd 官网](https://3x.ant.design/index-cn 'antd官网')
- [react-app-rewired](https://github.com/timarney/react-app-rewired#readme '在不npm run inject的情况下修改webpack')
- [webpack-bundle-analyzer 分析 SPA 应用](https://github.com/webpack-contrib/webpack-bundle-analyzer 'webpack-bundle-analyzer分析SPA应用')

# 3.依赖安装、启动、打包

## 克隆

``

## 启动开发环境（开发调试时使用）

### `npm start`

## 构建测试项目

## `npm test`

## 构建正式项目

### `npm build`

# 4.目录结构

```
child-application
├── config-overrides.js                                        // webpack配置文件
├── package-lock.json
├── package.json
├── paths.json
├── public                                                     // 静态文件
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── mock                                                   // 模拟数据
│   │   └── menu.json
│   └── robots.txt
├── README.md
├── src                                                        // 开发目录
│   ├── App.test.tsx
│   ├── App.tsx                                                // 入口文件
│   ├── assets                                                 // 静态资源
│   │   ├── font
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   └── iconfont.woff2
│   │   ├── images
│   │   │   └── bg.jpg
│   │   └── scss
│   │       ├── base
│   │       │   ├── font.scss
│   │       │   ├── normalize.scss
│   │       │   └── var.scss
│   │       ├── index.scss
│   │       └── mixin
│   │           ├── basic.scss
│   │           ├── config.scss
│   │           ├── function.scss
│   │           └── mixins.scss
│   ├── components                                             // 组件
│   │   ├── loading
│   │   │   └── index.tsx
│   │   └── private-route
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── hook                                                    // hook文件
│   ├── index.tsx                                               // 入口文件
│   ├── layouts                                                 // 框架子应用没有使用
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── logo.svg
│   ├── pages                                                   // 页面
│   │   ├── frame                                               // 框架入口
│   │   │   ├── components
│   │   │   │   ├── bread-crumbs.tsx
│   │   │   │   ├── menu.tsx
│   │   │   │   └── routers.tsx
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── home
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   └── system-management
│   │       └── dictionary
│   │           ├── index.scss
│   │           └── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── service                                                 // 接口层
│   │   ├── config.ts
│   │   ├── fetch.ts
│   │   └── index.ts
│   ├── setupTests.ts
│   ├── store                                                   // 状态
│   │   ├── actions
│   │   │   ├── authorization.ts
│   │   │   └── counter.ts
│   │   ├── actionType.ts
│   │   ├── index.ts
│   │   └── reducers
│   │       ├── authorization.ts
│   │       ├── counter.ts
│   │       └── index.ts
│   ├── types                                                   // 常用ts类型
│   │   └── index.ts
│   └── utils                                                   // 工具
│       ├── session-storage.ts
│       └── tools.ts
├── tree.text
└── tsconfig.json

```

# 5.文件路径依赖引用简写如下

> 如：引入 components/loading 组件方法库路径：import Loading from '@src/components/loading'

```
'@src': path.resolve(__dirname, 'src'),
'@assets': path.resolve(__dirname, 'src/assets'),
'@utils': path.resolve(__dirname, 'src/utils'),
'@pages': path.resolve(__dirname, 'src/pages'),
'@service': path.resolve(__dirname, 'src/service'),
'@types': path.resolve(__dirname, 'src/types'),
'@store': path.resolve(__dirname, 'src/store')
```

# 6.特殊规范

## 6.1. page 里页面文件夹命名规范

这里必须以`xxx-xxx`方式命令文件夹，每个文件夹里都包含`index.js`,`index.scss`即该文件夹的入口文件

> 比如：`system-management`

```
├─system-management
|   ├─dictionary                   // 字典模块
|   |  └index.tsx                  // 字典模块入口文件
|   |  └index.scss                 // 字典模块页面样式
```

## 6.2 页面及组件样式规范

- 强制使用`BEM`方式
  BEM 配置的命名空间统一为后台 简写：bg，这里可以在 src/assets/scss/mixin/config.scss 里修改,最好不要修改

## 6.3 菜单管理（路由）

> 这里请注意无子路由时，`subResource:[]`,有子路由时`components`麻烦值为空

> 注意这里的`components`找的是 page 文件夹下面的文件

> path 里是必须是一级一级取的，比如系统菜单`/system-management`,订单中心->字典管理`/system-management/├─dictionary`,这主要是为了设置动态面包屑使用

```
[{
  "components": "home",
  "isMemu": 1,
  "resIcon": "e6fa",
  "resTitle": "首页",
  "resUrl": "/home",
  "status": 1,
  "subResource": []
  },
  {
  "components": "",
  "isMemu": 2,
  "resIcon": "e6fa",
  "resTitle": "系统管理",
  "resUrl": "/system-management",
  "status": 1,
  "subResource": [{
    "components": "system-management/dictionary",
    "isMemu": 1,
    "resIcon": "",
    "resTitle": "字典管理",
    "resUrl": "/system-management/dictionary",
    "status": 1
  }]
}]
```

## 6.4 面包屑

不能自己设置面包屑上的中文

> 直接是根据菜单自动生成的
