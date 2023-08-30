import React from "react";
import { ConfigProvider, theme } from "antd";
import Routes from "./router";
import { Layout } from "@src/components";
import { useLocation } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "@src/assets/scss/base/normalize.css";
import zhCN from "antd/locale/zh_CN";
import { Header } from "./components";

dayjs.locale("zh-cn");

function App() {
  const location = useLocation();
  console.log(location, "location1");
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        // 1. 单独使用暗色算法
        algorithm: theme.defaultAlgorithm,

        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Layout className="cms-layout-default" Header={<Header />}>
        <Routes />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
