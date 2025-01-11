import baseConfiguration from "../../base-configuration";
const { font, animate, data, box } = baseConfiguration;

const baseText = {
  element: "baseText",
  level1Type: "text",
  level2Type: "",
  name: "基础文本",
  // 配置项值
  configureValue: {
    styleDisplay: "block",
    styleTextShadowX: 0,
    styleTextShadowY: 0,
    styleTextShadowF: 0,
    styleTextShadowC: "",
    ...box.configureValue,
    ...animate.configureValue,
    ...font.configureValue,
  },
  // 数据值
  dataValue: data.configureValue,
};

export default baseText;
