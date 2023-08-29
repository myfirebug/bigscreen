import React, { lazy } from "react";

/**
 * 组件或者路由懒加载
 * @param path 路径
 * @returns
 */
const lazyLoad = function (path: string) {
  const Module = lazy(() => import(`@src/pages/${path}`));
  return <Module />;
};

export default lazyLoad;
