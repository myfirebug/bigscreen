import box from "./box";

const widget = {
  configureValue: {
    ...box.configureValue,
    styleBackgroundColor: "",
  },
  configure: [
    {
      componentName: "Input",
      label: "背景图",
      name: "styleBackgroundUrl",
      required: false,
      placeholder: "请输入背景图地址",
    },
    {
      componentName: "SketchPicker",
      label: "背景颜色",
      name: "styleBackgroundColor",
      required: false,
      placeholder: "",
    },
    [...box.configure],
  ],
};

export default widget;
