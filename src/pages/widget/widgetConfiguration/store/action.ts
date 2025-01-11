import {
  WIDGET_TYPE,
  MODIFY_WIDGET_NAME_TYPE,
  MODIFY_LAYOUT_TYPE,
  MODIFY_TEMPORARILY_ELEMENT_NAME_TYPE,
  MODIFY_ELEMENT_NAME_TYPE,
  SELECT_TYPE,
} from "./type";
import { IwidgetsItem, IModifyLayout } from "@src/service";

// 获取widget数据
export interface widgetAction {
  type: WIDGET_TYPE;
  data: IwidgetsItem;
}

// 修改微件名称
export interface modifyWidgetNameAction {
  type: MODIFY_WIDGET_NAME_TYPE;
  data: string;
}

// 修改微件布局
export interface modifyWidgetLayout {
  type: MODIFY_LAYOUT_TYPE;
  data: IModifyLayout;
}

// 修改临时组件名称
export interface modifyTemporarilyElementName {
  type: MODIFY_TEMPORARILY_ELEMENT_NAME_TYPE;
  name: string;
}

// 修改临时组件名称
export interface modifyElementName {
  type: MODIFY_ELEMENT_NAME_TYPE;
  id: string;
}

// 选中组件
export interface select {
  type: SELECT_TYPE;
  data: IModifyLayout;
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | widgetAction
  | modifyWidgetNameAction
  | modifyWidgetLayout
  | modifyTemporarilyElementName
  | modifyElementName
  | select;
