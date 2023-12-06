import React, { FC, useEffect } from "react";
import { Col, Row } from "antd";
import { useComponents } from "@src/core/hook";
import Total from "@src/components/total";
import TrendChart from "@src/components/trendChart";
import CompoentsTable from "@src/components/table";
import UseLeaderboard from "@src/components/useLeaderboard";
import "./index.scss";

const Widget: FC = () => {
  const { total, getTotal, getTrend, trend, leaderboard, getLeaderboard } =
    useComponents();
  useEffect(() => {
    getTotal();
    getTrend();
    getLeaderboard();
  }, [getTotal, getTrend, getLeaderboard]);
  return (
    <div className="cms-components">
      <Row gutter={16}>
        <Total datas={total.datas} loading={total.loading} />
        <Col span={18}>
          <TrendChart datas={trend.datas} loading={trend.loading} />
        </Col>
        <Col span={6}>
          <UseLeaderboard
            datas={leaderboard.datas}
            loading={leaderboard.loading}
          />
        </Col>
        <Col span={24}>
          <CompoentsTable />
        </Col>
      </Row>
    </div>
  );
};

export default Widget;
