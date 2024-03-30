import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { ModifyAction } from "./store/action";
import { widgetReducer, initialState } from "./store/reducers";
import { ALL_STATE } from "./store/type";

interface IWidgetProvider {
  children: ReactNode;
}

export const WidgetContext = createContext<ALL_STATE | null>(null);

export const WidgetDispatchContext = createContext<
  React.Dispatch<ModifyAction>
>(() => {});

export function WidgetProvider(props: IWidgetProvider) {
  const { children } = props;
  const [widget, dispatch] = useReducer(widgetReducer, initialState);

  return (
    <WidgetContext.Provider value={widget}>
      <WidgetDispatchContext.Provider value={dispatch}>
        {children}
      </WidgetDispatchContext.Provider>
    </WidgetContext.Provider>
  );
}

export function useWidget() {
  return useContext(WidgetContext);
}

export function useWidgetDispatch() {
  return useContext(WidgetDispatchContext);
}
