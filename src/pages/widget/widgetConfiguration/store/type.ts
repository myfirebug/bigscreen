import { IwidgetsItem } from "@src/service";
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
export const SELECT_ELEMENT = "SELECT_ELEMENT";
export type SELECT_ELEMENT_TYPE = typeof SELECT_ELEMENT;

export interface ALL_STATE {
  // 微件数据
  widget: IwidgetsItem | null;
  // 临时组件名称
  temporarilyElementName: "";
  // 选中组件ID
  selectedElementId: "";
}
