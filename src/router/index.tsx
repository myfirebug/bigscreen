import React, { Suspense, FC, memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes, { IRoute } from "./routes";
import { lazyLoad } from "@src/components";

interface IPrivateRoute {
  children: JSX.Element;
  auth: boolean;
  title: string;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, auth, title }) => {
  if (title) {
    document.title = `${window.CONFIG.title}-${title}`;
  }
  // 处理未登录情况时跳首页
  if (auth) {
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
  return datas.map(({ path, children, modulePath, title, auth, redirect }) => {
    return children && children.length ? (
      <Route
        handle={auth}
        path={path}
        element={
          <PrivateRoute title={title} auth={auth}>
            {lazyLoad(modulePath)}
          </PrivateRoute>
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
        handle={auth}
        element={
          <PrivateRoute title={title} auth={auth}>
            {lazyLoad(modulePath)}
          </PrivateRoute>
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
