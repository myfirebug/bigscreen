import React, { Suspense, FC, memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes, { IRoute, IMeta } from "./routes";
import { lazyLoad } from "@src/components";

interface IPrivateRoute {
  children: JSX.Element | null;
  meta: IMeta;
  title: string;
  path: string | undefined;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, meta, title, path }) => {
  if (title) {
    document.title = `${window.CONFIG.title}-${title}`;
  }
  // 处理未登录情况时跳首页
  if (meta.auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

/**
 * 递归路由
 * @param datas 路由数据
 * @returns
 */
const routeTree = (datas: IRoute[]) => {
  return datas.map(({ path, children, modulePath, title, meta, redirect }) => {
    return children && children.length ? (
      <Route
        path={path}
        element={
          modulePath ? (
            <PrivateRoute title={title} meta={meta} path={path}>
              {lazyLoad(modulePath)}
            </PrivateRoute>
          ) : null
        }
        key={modulePath}
      >
        {routeTree(children)}
        {redirect ? (
          <Route path={path} element={<Navigate to={redirect} />}></Route>
        ) : (
          <Route
            path={path}
            element={<Navigate to={children[0].path as string} />}
          ></Route>
        )}
      </Route>
    ) : (
      <Route
        path={path}
        element={
          (path as string) === "*" ? (
            <Navigate to="/404" replace />
          ) : modulePath ? (
            <PrivateRoute title={title} meta={meta} path={path}>
              {lazyLoad(modulePath)}
            </PrivateRoute>
          ) : null
        }
        key={modulePath}
      ></Route>
    );
  });
};

const RoutesView = memo(
  () => {
    return (
      <Suspense>
        <Routes>{routeTree(routes)}</Routes>
      </Suspense>
    );
  },
  (a, b) => {
    return true;
  }
);

export default RoutesView;
