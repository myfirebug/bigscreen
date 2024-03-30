import { IwidgetsItem } from "@src/service";
// 获取微件数据
export const WIDGET = "WIDGET";
export type WIDGET_TYPE = typeof WIDGET;
// 修改微件名称
export const MODIFY_WIDGET_NAME = "MODIFY_WIDGET_NAME";
export type MODIFY_WIDGET_NAME_TYPE = typeof MODIFY_WIDGET_NAME;

export interface ALL_STATE {
  widget: IwidgetsItem | null;
}
