import React from "react";
import { Col } from "antd";
import "./index.scss";

const Total: React.FC = () => (
  <>
    <Col span={6}>
      <div className="cms-components__card">
        <div className="name">移动端</div>
        <div className="total">
          <b>1231</b>个
        </div>
        <div className="bg-font">Mobile</div>
      </div>
    </Col>
    <Col span={6}>
      <div className="cms-components__card">
        <div className="name">PC端</div>
        <div className="total">
          <b>1231</b>个
        </div>
        <div className="bg-font">Computer</div>
      </div>
    </Col>
    <Col span={6}>
      <div className="cms-components__card">
        <div className="name">总数</div>
        <div className="total">
          <b>1233</b>个
        </div>
        <div className="bg-font">Total</div>
      </div>
    </Col>
    <Col span={6}>
      <div className="cms-components__card">
        <div className="name">使用率</div>
        <div className="total">
          <b>30</b>%
        </div>
        <div className="bg-font">Rate</div>
      </div>
    </Col>
  </>
);

export default Total;
