import {
  ALL_STATE,
  WIDGET,
  MODIFY_WIDGET_NAME,
  MODIFY_LAYOUT,
  MODIFY_TEMPORARILY_ELEMENT_NAME,
  MODIFY_ELEMENT_NAME,
  SELECT,
} from "./type";
import elementsConfiguration from "@src/elements/config/elements";
import { ModifyAction } from "./action";
import { IwidgetsItem, IModifyLayout, Idata } from "@src/service";
import { MIN } from "@src/core/types/constant";
import { DIRECTION } from "@src/core/types/constant";

/**
 * 获取最小，最大值
 * @param pid 父级ID
 * @param currentid 当前ID
 * @param nextid 下级ID
 * @param direction 方向
 * @returns
 */
const getMinAndMax = (
  pid: string,
  currentid: string,
  nextid: string,
  direction: DIRECTION
) => {
  const wrapDom = document.querySelector(
    ".cms-configuration__content--view"
  ) as Element;
  const pRect = (
    wrapDom.querySelector(`[data-id='${pid}']`) as HTMLDivElement
  ).getBoundingClientRect();
  const cRect = (
    wrapDom.querySelector(`[data-id='${currentid}']`) as HTMLDivElement
  ).getBoundingClientRect();
  const nRect = (
    wrapDom.querySelector(`[data-id='${nextid}']`) as HTMLDivElement
  ).getBoundingClientRect();

  return {
    min:
      direction === "horizontal"
        ? (MIN / pRect.width).toFixed(4)
        : (MIN / pRect.height).toFixed(4),
    max:
      direction === "horizontal"
        ? ((cRect.width + nRect.width - MIN) / pRect.width).toFixed(4)
        : ((cRect.height + nRect.height - MIN) / pRect.height).toFixed(4),
  };
};

const modifyData = (datas: Idata[], data: IModifyLayout) => {
  if (!datas) {
    return [];
  }
  const { parent, current, next } = data;
  datas.forEach((element) => {
    if (parent.id === element.id) {
      const currentObj = element.children.find(
        (item) => item.id === current.id
      ) as Idata;
      const nextObj = element.children.find(
        (item) => item.id === next.id
      ) as Idata;

      nextObj.configuration = {
        ...nextObj.configuration,
        ...next.configuration,
        styleFlexBasis: current.configuration?.styleFlexBasis
          ? (parseFloat(currentObj.configuration.styleFlexBasis) * 100 +
              parseFloat(nextObj.configuration.styleFlexBasis) * 100 -
              parseFloat(current.configuration?.styleFlexBasis) * 100) /
              100 +
            "%"
          : next.configuration?.styleFlexBasis ||
            nextObj.configuration.styleFlexBasis,
      };

      currentObj.configuration = {
        ...currentObj.configuration,
        ...current.configuration,
      };
    } else if (element.children.length) {
      modifyData(element.children, data);
    }
  });
};

// 处理并返回 state
export const initialState: ALL_STATE = {
  widget: null,
  temporarilyElementName: "",
  selectedId: "",
  selectedType: "widget",
  pid: "",
  nextid: "",
  min: 0,
  max: 1,
};

export const widgetReducer = (
  state: ALL_STATE = initialState,
  action: ModifyAction
) => {
  const copy: ALL_STATE = JSON.parse(JSON.stringify(state));
  console.log(state, action, "触发了action");
  switch (action.type) {
    // 获取微件数据
    case WIDGET: {
      copy.widget = {
        ...action.data,
      };
      return copy;
    }
    // 修改微件名称
    case MODIFY_WIDGET_NAME: {
      (copy.widget as IwidgetsItem).name = action.data;
      return copy;
    }
    // 修改微件布局
    case MODIFY_LAYOUT: {
      if (action.data.current.id === copy.selectedId) {
        const data = getMinAndMax(
          action.data.parent.id,
          action.data.current.id,
          action.data.next.id,
          action.data.direction
        );
        copy.min = Number(data.min);
        copy.max = Number(data.max);
      }
      modifyData(copy.widget?.layout || [], action.data);
      // copy.pid = action.data.parent.id;
      // copy.selectedId = action.data.current.id;
      // copy.selectedType = action.data.current.type;
      // copy.nextid = action.data.next.id;
      return copy;
    }
    // 修改临时使用的组件名称
    case MODIFY_TEMPORARILY_ELEMENT_NAME: {
      copy.temporarilyElementName = action.name;
      return copy;
    }
    // 修改组件
    case MODIFY_ELEMENT_NAME: {
      const index = copy.widget?.elements.findIndex(
        (item) => item.id === action.id
      );
      if (index !== -1) {
        // 修改组件
      } else {
        // 添加组件
        if (
          state.temporarilyElementName &&
          elementsConfiguration[state.temporarilyElementName]
        ) {
          copy.widget?.elements.push({
            ...elementsConfiguration[state.temporarilyElementName],
            id: action.id,
            count: 0,
          });
          copy.selectedId = action.id;
          copy.temporarilyElementName = "";
          copy.selectedType = "element";
        }
      }
      return copy;
    }
    // 选中微件
    case SELECT: {
      if (action.data.current.id !== copy.selectedId && action.data.parent.id) {
        const data = getMinAndMax(
          action.data.parent.id,
          action.data.current.id,
          action.data.next.id,
          action.data.direction
        );
        copy.min = Number(data.min);
        copy.max = Number(data.max);
      }

      modifyData(copy.widget?.layout || [], action.data);

      copy.pid = action.data.parent.id;
      copy.selectedId = action.data.current.id;
      copy.selectedType = action.data.current.type;
      copy.nextid = action.data.next.id;
      // copy.selectedId = action.data.id;
      // copy.selectedType = action.data.type;
      return copy;
    }
  }
};
