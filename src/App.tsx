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
import { IThemeName, setTheme } from "@core/theme";

dayjs.locale("zh-cn");

interface IApp {
  currentTheme: IThemeName;
}

const App: FC<IApp> = ({ currentTheme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  console.log(location, "location1", currentTheme);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
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
        Header={<Header collapsed={collapsed} setCollapsed={setCollapsed} />}
        Sidder={<Sidder collapsed={collapsed} />}
        style={{
          paddingTop: "55px",
          paddingLeft: collapsed ? "80px" : "200px",
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
