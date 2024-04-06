import {
  WIDGET_TYPE,
  MODIFY_WIDGET_NAME_TYPE,
  MODIFY_LAYOUT_TYPE,
  MODIFY_TEMPORARILY_ELEMENT_NAME_TYPE,
  MODIFY_ELEMENT_NAME_TYPE,
  SELECT_ELEMENT_TYPE,
} from "./type";
import { IwidgetsItem } from "@src/service";

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
  useArea: "header" | "body";
}

// 选中组件
export interface selectElement {
  type: SELECT_ELEMENT_TYPE;
  id: string;
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | widgetAction
  | modifyWidgetNameAction
  | modifyWidgetLayout
  | modifyTemporarilyElementName
  | modifyElementName
  | selectElement;
