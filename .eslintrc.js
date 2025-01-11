module.exports = {
  // 解析选项
  parserOptions: {
    babelOptions: {
      presets: [
        // 解决页面报错问题
        ["babel-preset-react-app", false],
        "babel-preset-react-app/prod",
        "@babel/preset-typescript",
      ],
    },
  },
  // 继承其他规则
  extends: ["react-app"],
  rules: {
    "react-hooks/rules-of-hooks": 0,
  },
};
