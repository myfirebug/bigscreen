import { themes, IThemeName } from "./themes";
import cssVars from "css-vars-ponyfill";
export * from "./themes";
// 判断浏览器是否支持cssVar
const isSupportCssVar =
  window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
/**
 * cssVar格式话
 * @param themeJson 换肤JSON
 * @param isJoin 是否转化成JSON
 * @returns
 */
const formatCssVar = (
  themeJson: Record<string, string> = {},
  isJoin = true
) => {
  const cssvar = Object.keys(themeJson)
    .map((item) => `${item}:${themeJson[item]};\n`)
    .join("");
  return isJoin ? `:root{\n${cssvar}}` : cssvar;
};
/**
 *
 * @param variable 换肤JSON
 * @param selector 换肤style标签
 * @returns
 */
const cssRootVar = (
  themeJson: Record<string, string> = {},
  selector = "style[data-theme='theme']"
) => {
  const root = selector
    ? document.querySelector(selector) || document.createElement("style")
    : document.createElement("style");
  console.log(root, "root");
  root.innerHTML = formatCssVar(themeJson);
  if (!root.getAttribute("data-theme")) {
    root.setAttribute("data-theme", "theme");
    const header = document.head || document.getElementsByName("head")[0];
    if (!header) return;
    header.appendChild(root);
  }
};
/**
 * 设置换肤
 * @param theme 换肤名称
 */
export function setTheme(theme: IThemeName) {
  if (isSupportCssVar) {
    cssRootVar(themes[theme]);
  } else {
    document.documentElement.setAttribute("data-theme", theme);
    cssVars({
      watch: true,
      variables: themes[theme],
      onlyLegacy: false,
    });
  }
}
