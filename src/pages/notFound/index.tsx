import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

function Home() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面走丢了~~~"
      extra={
        <Button type="primary" onClick={() => navigate("/home")}>
          返回首页
        </Button>
      }
    />
  );
}

export default Home;
