// 获取统计数据
export const componentsTotal = {
  url: "/components-total",
  method: "get",
  data: {
    result: true,
    data: [
      {
        name: "移动端",
        total: 32,
        unit: "个",
        bgFont: "Mobile",
      },
      {
        name: "PC端",
        total: 54,
        unit: "个",
        bgFont: "Computer",
      },
      {
        name: "总数",
        total: 876,
        unit: "个",
        bgFont: "Total",
      },
      {
        name: "使用率",
        total: 50,
        unit: "%",
        bgFont: "Rate",
      },
    ],
    message: "请求成功",
  },
};
