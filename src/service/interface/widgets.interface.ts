import { ILevel1Types, IEchartsTypes } from "./index";

export interface IwidgetsTotalItem {
  name: string;
  total: number;
  unit: string;
  bgFont: string;
}
// 微件统计接口
export interface IwidgetsTotalResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IwidgetsTotalItem[];
  message: string;
}

// 新增微件统计图
export interface IwidgetstrendItem {
  name: string;
  value: number;
}

export interface IwidgetstrendResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IwidgetstrendItem[];
  message: string;
}

// 使用排行榜TOP5
export interface IwidgetsTeaderboardItem {
  name: string;
  value: number;
}

export interface IwidgetsTeaderboardResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IwidgetsTeaderboardItem[];
  message: string;
}
// 获取微件类型
export interface IwidgetsTypeItem {
  name: string;
  value: string;
  level: number;
  id: string;
  pid: string;
  children?: IwidgetsTypeItem[];
}

export interface IwidgetsTypeResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IwidgetsTypeItem[];
  message: string;
}

export interface Idata {
  id: string;
  type: "row" | "col" | "element" | "widget"; //类型
  element: string; //组件名称
  configuration: {
    [propName: string]: any;
  };
  children: Idata[];
}

// 获取微件列表
export interface IwidgetsItem {
  id: string;
  name: string;
  level1Type: ILevel1Types;
  level2Type: IEchartsTypes | "";
  images: string;
  count: number;
  createTime: string;
  configuration: {
    [propName: string]: any;
  };
  data: {
    header: Idata[];
    body: Idata[];
  };
}

export interface IwidgetsResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IwidgetsItem[];
  message: string;
}

// 传入layout布局容器类型
export interface IModifyLayout {
  type: "header" | "body";
  pid: string;
  current: {
    id: string;
    layout: {
      [propName: string]: string;
    };
  };
  next: {
    id: string;
    layout: {
      [propName: string]: string;
    };
  };
}
