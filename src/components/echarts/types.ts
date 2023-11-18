import { init } from "echarts/core";
import type {
  SetOptionOpts,
  EChartsOption,
  ECElementEvent,
  ElementEvent,
} from "echarts";

type InitType = typeof init;
export type AutoresizeProp = {
  throttle?: number;
  onResize?: () => void;
};
export type LoadingOptions = {};
export type InitParameters = Parameters<InitType>;
export type Theme = NonNullable<InitParameters[1]>;
export type Option = EChartsOption;
export type InitOptions = NonNullable<InitParameters[2]>;
export type UpdateOptions = SetOptionOpts;
export type EChartsType = ReturnType<InitType>;

type MouseEventName =
  | "click"
  | "dblclick"
  | "mouseout"
  | "mouseover"
  | "mouseup"
  | "mousedown"
  | "mousemove"
  | "contextmenu"
  | "globalout";

type ElementEventName =
  | MouseEventName
  | "mousewheel"
  | "drag"
  | "dragstart"
  | "dragend"
  | "dragenter"
  | "dragleave"
  | "dragover"
  | "drop";

type ZRenderEventName = `zr:${ElementEventName}`;

type OtherEventName =
  | "highlight"
  | "downplay"
  | "selectchanged"
  | "legendselectchanged"
  | "legendselected"
  | "legendunselected"
  | "legendselectall"
  | "legendinverseselect"
  | "legendscroll"
  | "datazoom"
  | "datarangeselected"
  | "graphroam"
  | "georoam"
  | "treeroam"
  | "timelinechanged"
  | "timelineplaychanged"
  | "restore"
  | "dataviewchanged"
  | "magictypechanged"
  | "geoselectchanged"
  | "geoselected"
  | "geounselected"
  | "axisareaselected"
  | "brush"
  | "brushEnd"
  | "brushselected"
  | "globalcursortaken";

type MouseEmits = {
  [key in MouseEventName]: (params: ECElementEvent) => boolean;
};

type ZRenderEmits = {
  [key in ZRenderEventName]: (params: ElementEvent) => boolean;
};

type OtherEmits = {
  [key in OtherEventName]: null;
};

export type Emits = MouseEmits & OtherEmits & ZRenderEmits;
