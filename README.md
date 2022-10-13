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

**已完成功能**

| 页面     | 是否完成（功能）                                                                                           |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| 登录     | 是                                                                                                         |
| 首页     | 是                                                                                                         |
| 报表管理 | 是                                                                                                         |
| 大屏配置 | 是                                                                                                         |
| -        | 新增、编辑、删除页面功能（不能编辑、删除当面页面）                                                         |
| -        | 项目配置功能                                                                                               |
| -        | 图层管理功能                                                                                               |
| -        | 组件配置功能                                                                                               |
| -        | 数据配置功能（组组件里面的组件可以选择是否使用组的接口数据）                                               |
| -        | 组件坐标功能                                                                                               |
| -        | 组组件有联动功能（配置联动功能时，先配置组组件的数据接口地址和请求参数，另只有组组才有添加表单组件的功能） |
| -        | 分组、拆分、复制、删除、上移、下移、左移、右移、上移一层、下移一层、置顶图层、置底图标                     |
| 大屏预览 | 是                                                                                                         |

**已完成的组件**

| 分类   | 名称                 | 名称             | 名称                 | 名称           | 名称       | 名称       |
| ------ | -------------------- | ---------------- | -------------------- | -------------- | ---------- | ---------- |
| 文本   | 基础文本             | 时间文本         | 数字滚动             | -              | -          | -          |
| 图片   | 图片                 | -                | -                    | -              | -          | -          |
| 表格   | 基础表格             | -                | -                    | -              | -          | -          |
| 折线图 | 基础折线图           | 基础平滑折线图   | 基础面积图           | 基础纵向折线图 | -          | -          |
| 柱状图 | 基础柱状图           | 带背景色的柱状图 | 坐标轴刻度与标签对齐 | 圆角柱状图     | 纵向柱状图 | 堆积柱状图 |
| 饼图   | 基础饼图             | 圆环饼图         | 南丁格尔图           | -              | -          | -          |
| 雷达图 | 基础雷达图           | 圆形雷达图       | -                    | -              | -          | -          |
| 漏斗图 | 基础漏斗图           | -                | -                    | -              | -          | -          |
| 散点图 | 基础散点图           | -                | -                    | -              | -          | -          |
| 表单   | 单选                 | -                | -                    | -              | -          | -          |
| emap   | 基础地图（线上跨域） | -                | -                    | -              | -          | -          |
| 词云   | 基础词云             | -                | -                    | -              | -          | -          |

# 框架使用技术

- 框架为`create-react-app`构架，搭配`react-router-dom`、`redux`、`react-redux`、`redux-thunk`、`redux-persist`、`redux-logger`、`axios`，UI 框架为`antd@4.19.3`

# 学习文档

- [react 中文官网](https://react.docschina.org 'react中文官网')
- [react 英文官网](https://reactjs.org 'react英文官网')
- [redux 中文官网](http://cn.redux.js.org 'redux中文官网')
- [redux 英文官网](https://redux.js.org 'redux英文官网')
- [create-react-app 中文文档](https://www.html.cn/create-react-app/docs/getting-started/ 'create-react-app中文文档')
- [antd 官网](https://3x.ant.design/index-cn 'antd官网')
- [react-app-rewired](https://github.com/timarney/react-app-rewired#readme '在不npm run inject的情况下修改webpack')
- [webpack-bundle-analyzer 分析 SPA 应用](https://github.com/webpack-contrib/webpack-bundle-analyzer 'webpack-bundle-analyzer分析SPA应用')

# 依赖安装、启动、打包

## 克隆

``

## 启动开发环境（开发调试时使用）

### `npm start`

## 构建测试项目

## `npm build:test`

## 构建正式项目

### `npm build:production`

# 目录结构

```
bigscreen
├── src
│   ├── assets                       // 静态资源
│   ├── components                   // 公共组件
│   ├── config                       // 配置文件
│   ├── mock                         // 模拟接口
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

# 文件路径依赖引用简写如下

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

# 特殊规范

## page 里页面文件夹命名规范

这里必须以`xxx-xxx`方式命令文件夹，每个文件夹里都包含`index.js`,`index.scss`即该文件夹的入口文件

> 比如：`system-management`

```
├─system-management
|   ├─dictionary                   // 字典模块
|   |  └index.tsx                  // 字典模块入口文件
|   |  └index.scss                 // 字典模块页面样式
```

## 页面及组件样式规范

- 强制使用`BEM`方式
  BEM 配置的命名空间统一为后台 简写：bg，这里可以在 src/assets/scss/mixin/config.scss 里修改,最好不要修改

## 菜单管理（路由）

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

## 面包屑

不能自己设置面包屑上的中文

> 直接是根据菜单自动生成的
