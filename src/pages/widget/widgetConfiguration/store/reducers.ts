import { ALL_STATE, WIDGET, MODIFY_WIDGET_NAME } from "./type";
import { ModifyAction } from "./action";
import { IwidgetsItem } from "@src/service";
// 处理并返回 state
export const initialState: ALL_STATE = {
  widget: null,
};

export const widgetReducer = (
  state: ALL_STATE = initialState,
  action: ModifyAction
) => {
  const copyWidget: IwidgetsItem = JSON.parse(JSON.stringify(state.widget));
  switch (action.type) {
    case WIDGET: {
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
  }
};
