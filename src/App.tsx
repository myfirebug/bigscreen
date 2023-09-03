import React, { useState, FC, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import Routes from "./router";
import { Layout } from "@src/components";
import { useLocation } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "@src/assets/scss/base/normalize.css";
import zhCN from "antd/locale/zh_CN";
import { Header, Sidder } from "./components";
import { connect } from "react-redux";
import { ALL_STATE } from "./store/actionType";
import { IThemeName, setTheme, getCurrentPrimaryColor } from "@core/theme";
import { getGroupById } from "@src/utils";
import routerDatas, { IRoute } from "./router/routes";

dayjs.locale("zh-cn");

interface IApp {
  currentTheme: IThemeName;
}

const App: FC<IApp> = ({ currentTheme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname, "location1");

  const currentRoute: IRoute = getGroupById(routerDatas, pathname, "path");

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: getCurrentPrimaryColor(currentTheme),
        },
        // 1. 单独使用暗色算法
        algorithm: currentTheme.includes("_dark")
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,

        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Layout
        className={collapsed ? "is-collapsed" : ""}
        Header={
          !currentRoute?.meta?.fullScreen ? (
            <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          ) : null
        }
        Sidder={
          !currentRoute?.meta?.fullScreen ? (
            <Sidder collapsed={collapsed} />
          ) : null
        }
        style={{
          paddingTop: currentRoute?.meta?.fullScreen ? "0px" : "55px",
          paddingLeft: currentRoute?.meta?.fullScreen
            ? "0px"
            : collapsed
            ? "80px"
            : "200px",
        }}
      >
        <Routes />
      </Layout>
    </ConfigProvider>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  currentTheme: state.currentTheme,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
