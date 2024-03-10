export interface IComponentsTotalItem {
  name: string;
  total: number;
  unit: string;
  bgFont: string;
}
// 组件统计接口
export interface IComponentsTotalResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IComponentsTotalItem[];
  message: string;
}

// 新增组件统计图
export interface IComponentstrendItem {
  name: string;
  value: number;
}

export interface IComponentstrendResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IComponentstrendItem[];
  message: string;
}

// 使用排行榜TOP5
export interface IComponentsTeaderboardItem {
  name: string;
  value: number;
}

export interface IComponentsTeaderboardResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IComponentsTeaderboardItem[];
  message: string;
}

export type ILevel1Types = "echarts" | "table" | "text" | "images";
export type IEchartsTypes =
  | "line"
  | "bar"
  | "pie"
  | "scatter"
  | "tree"
  | "treemap"
  | "sunburst"
  | "boxplot"
  | "candlestick"
  | "map"
  | "parallel"
  | "lines"
  | "graph"
  | "sankey"
  | "funnel"
  | "gauge"
  | "pictorialBar"
  | "custom";
// 获取组件类型
export interface IComponentsTypeItem {
  name: string;
  value: string;
  level: number;
  id: string;
  pid: string;
  children?: IComponentsTypeItem[];
}

export interface IComponentsTypeResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IComponentsTypeItem[];
  message: string;
}

// 获取组件列表
export interface IComponentsItem {
  id: number;
  name: string;
  level1Type: ILevel1Types;
  level2Type: IEchartsTypes | "";
  images: string;
  count: number;
  createTime: string;
}

export interface IComponentsResult {
  // 结果
  result: boolean;
  // 后台返回的token
  data: IComponentsItem[];
  message: string;
}
