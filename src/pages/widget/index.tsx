import React, { FC, useEffect } from "react";
import { Button, Col, Row } from "antd";
import { useWidgets } from "@src/core/hook";
import Total from "@src/components/total";
import TrendChart from "@src/components/trendChart";
import UseLeaderboard from "@src/components/useLeaderboard";
import List from "@src/components/list";
import FilterItem from "@src/components/filter";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Widget: FC = () => {
  const navigate = useNavigate();
  const {
    total,
    getTotal,
    getTrend,
    trend,
    leaderboard,
    getLeaderboard,
    types,
    getTypes,
    list,
    getList,
    listSearchHandler,
  } = useWidgets();
  useEffect(() => {
    getTotal();
    getTrend();
    getLeaderboard();
    (async function fn() {
      await getTypes();
      await getList();
    })();
  }, [getTotal, getTrend, getLeaderboard, getTypes, getList]);
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
          <List loading={list.loading} datas={list.searchDatas}>
            {list.params.type.map((_, index) => {
              if (index === 0) {
                return (
                  <div key={index} style={{ position: "relative" }}>
                    <FilterItem
                      label={`${index + 1}级标签：`}
                      index={index}
                      field="type"
                      select={list.params.type[index]}
                      datas={
                        types.datas.filter((item) => item.level === 1) || []
                      }
                      listSearchHandler={listSearchHandler}
                    />
                    <Button
                      type="primary"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "15px",
                      }}
                      onClick={() => navigate("/widget/configuration")}
                    >
                      新增微件
                    </Button>
                  </div>
                );
              } else if (
                list.params.type[index - 1] &&
                types.datas.filter(
                  (item) => item.pid && item.pid === list.params.type[index - 1]
                )?.length
              ) {
                return (
                  <FilterItem
                    label={`${index + 1}级标签：`}
                    key={index}
                    index={index}
                    field="type"
                    select={list.params.type[index]}
                    datas={
                      types.datas.filter(
                        (item) => item.pid === list.params.type[index - 1]
                      ) || []
                    }
                    listSearchHandler={listSearchHandler}
                  />
                );
              }
              return null;
            })}
          </List>
        </Col>
      </Row>
    </div>
  );
};

export default Widget;
