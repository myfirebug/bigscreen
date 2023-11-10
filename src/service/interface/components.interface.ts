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
