# 基于 React 拖动配置大屏的后台管理系统

bigscreen 是一个高效的拖拽式低代码数据可视化开发平台，将图表或页面元素封装为基础组件，无需编写代码即可制作数据大屏，减少心智负担。

项目纯前端-Demo 地址：[https://myfirebug.github.io/bigscreen/index.html#/login](https://myfirebug.github.io/bigscreen/index.html#/login)

用户名：admin, 密码：123456

**工作台**

![RUNOOB 图标](https://myfirebug.github.io/example-images/bigscreen/0.jpg)

**大屏展示**

![RUNOOB 图标](https://myfirebug.github.io/example-images/bigscreen/1.jpg)

**主要依赖：**

| 名称              | 版本   | 名称          | 版本   |
| ----------------- | ------ | ------------- | ------ |
| react             | 18.0.0 | react-dom     | 18.0.0 |
| typescript        | 4.6.3  | jsoneditor    | 9.9.0  |
| redux             | 4.1.2  | react-redux   | 7.2.8  |
| react-rnd         | 10.3.7 | redux-logger  | 3.0.6  |
| redux-persist     | 6.0.0  | redux-thunk   | 2.4.1  |
| react-app-rewire  | 2.2.1  | echarts       | 5.3.2  |
| echarts-wordcloud | 2.0.0  | axios         | 0.26.1 |
| cross-env         | 7.0.3  | customize-cra | 1.0.0  |
| antd              | 4.19.3 |

**开发环境**

| 名称 | 版本    | 名称 | 版本   |
| ---- | ------- | ---- | ------ |
| node | 16.17.0 | npm  | 8.15.0 |

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

## `npm build:test`

## 构建正式项目

### `npm build:production`

# 4.目录结构

```
bigscreen
├── src
│   ├── assets                       // 静态资源
│   ├── components                   // 公共组件
│   ├── config                       // 配置文件
│   ├── pages                        // 页面
│   │   ├── configuration            // 大屏配置页面
│   │   ├── frame                    // 框架页面
│   │   ├── home                     // 首页页面
│   │   ├── login                    // 登录页面
│   │   ├── preview                  // 大屏展示页面
│   │   └── report                   // 大屏列表页面
│   ├── service                      // 接口服务
│   ├── store                        // 状态
│   ├── theme                        // echarts主题
│   ├── types                        // ts基本类型
│   ├── utils                        // 工具
│   └── widget                       // 组件及其配置
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
