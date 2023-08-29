import React from "react";
import { ConfigProvider } from "antd";
import Routes from "./router";
import { Layout } from "@src/components";
import { useLocation } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "@src/assets/scss/base/normalize.css";
import zhCN from "antd/locale/zh_CN";

dayjs.locale("zh-cn");

function App() {
  const location = useLocation();
  console.log(location, "location1");
  return (
    <ConfigProvider locale={zhCN}>
      <Layout
        className="cms-layout-default"
        paddingTop="50px"
        mainMinHeight="calc(100vh - 50px)"
      >
        <Routes />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
