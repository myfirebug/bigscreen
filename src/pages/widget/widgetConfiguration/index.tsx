import React from "react";
import Header from "./components/header";
import Leftside from "./components/leftside";
import Rightside from "./components/rightside";
import Main from "./components/main";
import "./index.scss";

function CreateWidget() {
  return (
    <div className="cms-configuration">
      {/* 头部 */}
      <Header />
      <div className="cms-configuration__main">
        {/* 左侧边栏 */}
        <Leftside />
        {/* 操作区域 */}
        <Main />
        {/* 右侧边栏 */}
        <Rightside />
      </div>
    </div>
  );
}

export default CreateWidget;
