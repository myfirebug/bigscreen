import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./index.scss";

function Widget() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/widget/create-widget")}>
        创建微件
      </Button>
    </div>
  );
}

export default Widget;
