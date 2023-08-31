import React from "react";
import "./index.scss";
import { Button, Result } from "antd";

function Home() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面走丢了~~~"
      extra={<Button type="primary">返回上一页</Button>}
    />
  );
}

export default Home;
