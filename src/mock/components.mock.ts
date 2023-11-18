import Mock from "mockjs";
// 获取统计数据
export const componentsTotal = {
  url: "/components-total",
  method: "get",
  data: {
    result: true,
    data: Mock.mock([
      {
        name: "移动端",
        "total|1-300": 100,
        unit: "个",
        bgFont: "Mobile",
      },
      {
        name: "PC端",
        "total|1-300": 100,
        unit: "个",
        bgFont: "Computer",
      },
      {
        name: "总数",
        "total|100-1000": 100,
        unit: "个",
        bgFont: "Total",
      },
      {
        name: "使用率",
        "total|1-100": 100,
        unit: "%",
        bgFont: "Rate",
      },
    ]),
    message: "请求成功",
  },
};

// 新增组件走势图
export const componentsTrendChart = {
  url: "/components-trend-chart",
  method: "get",
  data: Mock.mock({
    data: [
      {
        name: "01月",
        "value|1-300": 100,
      },
      {
        name: "02月",
        "value|1-300": 100,
      },
      {
        name: "03月",
        "value|1-300": 100,
      },
      {
        name: "04月",
        "value|1-300": 100,
      },
      {
        name: "05月",
        "value|1-300": 100,
      },
      {
        name: "06月",
        "value|1-300": 100,
      },
      {
        name: "07月",
        "value|1-300": 100,
      },
      {
        name: "08月",
        "value|1-300": 100,
      },
      {
        name: "09月",
        "value|1-300": 100,
      },
      {
        name: "10月",
        "value|1-300": 100,
      },
      {
        name: "11月",
        "value|1-300": 100,
      },
      {
        name: "12月",
        "value|1-300": 100,
      },
    ],
  }),
};
