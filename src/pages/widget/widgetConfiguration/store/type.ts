import { IwidgetsItem, IdataTypes } from "@src/service";
// 获取微件数据
export const WIDGET = "WIDGET";
export type WIDGET_TYPE = typeof WIDGET;
// 修改微件名称
export const MODIFY_WIDGET_NAME = "MODIFY_WIDGET_NAME";
export type MODIFY_WIDGET_NAME_TYPE = typeof MODIFY_WIDGET_NAME;
// 修改布局
export const MODIFY_LAYOUT = "MODIFY_LAYOUT";
export type MODIFY_LAYOUT_TYPE = typeof MODIFY_LAYOUT;
// 修改临时组件名称
export const MODIFY_TEMPORARILY_ELEMENT_NAME =
  "MODIFY_TEMPORARILY_ELEMENT_NAME";
export type MODIFY_TEMPORARILY_ELEMENT_NAME_TYPE =
  typeof MODIFY_TEMPORARILY_ELEMENT_NAME;

// 修改组件名称
export const MODIFY_ELEMENT_NAME = "MODIFY_ELEMENT_NAME";
export type MODIFY_ELEMENT_NAME_TYPE = typeof MODIFY_ELEMENT_NAME;

// 切换选中组件
export const SELECT = "SELECT";
export type SELECT_TYPE = typeof SELECT;

export interface ALL_STATE {
  // 微件数据
  widget: IwidgetsItem | null;
  // 临时组件名称
  temporarilyElementName: string;
  // 选中ID
  selectedId: string;
  // 选中类型
  selectedType: IdataTypes;
  // 选中父ID
  pid: string;
  // 选中下一个兄弟节点ID
  nextid: string;
  // 选中方向
  direction?: "vertical" | "horizontal";
  // 最小值
  min: number;
  // 最大值
  max: number;
}
