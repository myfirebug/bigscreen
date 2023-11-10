import React, { FC, useEffect } from "react";
import { Col, Row } from "antd";
import { useComponents } from "@src/core/hook";
import Total from "@src/components/total";
import TrendChart from "./components/trendChart";
import CompoentsTable from "./components/table";
import Leaderboard from "./components/leaderboard";
import "./index.scss";

const Widget: FC = () => {
  const { total, getTotal } = useComponents();
  useEffect(() => {
    getTotal();
  }, [getTotal]);
  return (
    <div className="cms-components">
      <Row gutter={16}>
        <Total datas={total.datas} loading={total.loading} />
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
};

export default Widget;
