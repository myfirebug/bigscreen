import React from "react";
import { Col, Row } from "antd";
import Total from "./components/total";
import TrendChart from "./components/trendChart";
import CompoentsTable from "./components/table";
import Leaderboard from "./components/leaderboard";
import "./index.scss";

function Widget() {
  return (
    <div className="cms-components">
      <Row gutter={16}>
        <Total />
        <Col span={18}>
          <TrendChart />
        </Col>
        <Col span={6}>
          <Leaderboard />
        </Col>
        <Col span={24}>
          <CompoentsTable />
        </Col>
      </Row>
    </div>
  );
}

export default Widget;
