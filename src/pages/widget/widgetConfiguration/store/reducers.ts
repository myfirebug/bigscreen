import {
  ALL_STATE,
  WIDGET,
  MODIFY_WIDGET_NAME,
  MODIFY_LAYOUT,
  MODIFY_TEMPORARILY_ELEMENT_NAME,
  MODIFY_ELEMENT_NAME,
  SELECT_ELEMENT,
} from "./type";
import { ModifyAction } from "./action";
import { IwidgetsItem, Idata } from "@src/service";

/**
 *
 * @param {Idata[]} datas 数组
 * @param {string} id 查找的ID
 * @param {string} elementName 替换的名称
 */
export const modififyElementById = (
  datas: Idata[],
  id: string,
  elementName: string
) => {
  let hasFound = false; // 表示是否有找到id值
  let fn = function (datas: Idata[]) {
    if (Array.isArray(datas) && !hasFound) {
      // 判断是否是数组并且没有的情况下，
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === id) {
          datas[i].element = elementName;
          hasFound = true;
          break;
        } else if (datas[i].children) {
          fn(datas[i].children);
        }
      }
    }
  };
  fn(datas);
};

// 处理并返回 state
export const initialState: ALL_STATE = {
  widget: null,
  temporarilyElementName: "",
  selectedElementId: "",
};

export const widgetReducer = (
  state: ALL_STATE = initialState,
  action: ModifyAction
) => {
  const copyWidget: IwidgetsItem = JSON.parse(JSON.stringify(state.widget));
  console.log(state, action);
  switch (action.type) {
    case WIDGET: {
      console.log(action, "action");
      return {
        ...state,
        widget: action.data,
      };
    }
    case MODIFY_WIDGET_NAME: {
      return {
        ...state,
        widget: {
          ...copyWidget,
          name: action.data,
        },
      };
    }
    case MODIFY_LAYOUT: {
      return {
        ...state,
        widget: copyWidget,
      };
    }
    case MODIFY_TEMPORARILY_ELEMENT_NAME: {
      return {
        ...state,
        temporarilyElementName: action.name,
      };
    }
    case MODIFY_ELEMENT_NAME: {
      modififyElementById(
        action.useArea === "header"
          ? copyWidget.data.header
          : copyWidget.data.body,
        action.id,
        state.temporarilyElementName
      );

      return {
        ...state,
        selectedElementId: action.id,
        widget: copyWidget,
      };
    }
    case SELECT_ELEMENT: {
      return {
        ...state,
        selectedElementId: action.id,
      };
    }
  }
};
