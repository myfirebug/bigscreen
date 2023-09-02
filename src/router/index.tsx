import React, { Suspense, FC, memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes, { IRoute, IMeta } from "./routes";
import { lazyLoad } from "@src/components";
import { connect } from "react-redux";
import { ALL_STATE } from "@src/store/actionType";

interface IPrivateRoute {
  children: JSX.Element | null;
  meta: IMeta;
  title: string;
  token: string;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, meta, title, token }) => {
  if (title) {
    document.title = `${window.CONFIG.title}-${title}`;
  }
  // 处理未登录情况时跳首页
  if (meta.auth && !token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const mapStateToProps = (state: ALL_STATE) => ({
  token: state.token,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {};

const NewPrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

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
            <NewPrivateRoute title={title} meta={meta}>
              {lazyLoad(modulePath)}
            </NewPrivateRoute>
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
            <NewPrivateRoute title={title} meta={meta}>
              {lazyLoad(modulePath)}
            </NewPrivateRoute>
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
