const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
const SITE = process.env.SIYE;
// 所有站点
const sites = ["default"];
// 站点类型
const siteTypes = ["web", "mobile"];
const isDev = NODE_ENV === "development";
const isProd = NODE_ENV === "production";
/**
 * 用来获取处理样式的loader
 * @param {*} pre
 * @returns
 */
function getStyleLoader(pre) {
  return [
    isProd ? MiniCssExtractPlugin.loader : "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    pre,
    pre === "sass-loader" && {
      loader: "sass-resources-loader",
      options: {
        resources: [path.resolve(__dirname, "../src/assets/scss/index.scss")],
      },
    },
  ].filter(Boolean);
}

/**
 *格式化日期
 * @param dateString
 * @param fmt
 * @returns {*}
 */
function fmtDate(dateString, fmt) {
  const date = new Date(dateString);
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

exports.tools = {
  getStyleLoader,
  isDev,
  isProd,
  fmtDate,
  SITE,
  sites,
  siteTypes,
};
