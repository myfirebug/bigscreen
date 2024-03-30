import { WIDGET_TYPE, MODIFY_WIDGET_NAME_TYPE } from "./type";
import { IwidgetsItem } from "@src/service";

// 获取widget数据
export interface widgetAction {
  type: WIDGET_TYPE;
  data: IwidgetsItem;
}

// 获取widget数据
export interface modifyWidgetNameAction {
  type: MODIFY_WIDGET_NAME_TYPE;
  data: string;
}

// 定义 ModifyAction 类型
export type ModifyAction = widgetAction | modifyWidgetNameAction;
