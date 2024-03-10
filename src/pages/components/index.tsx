import React, { FC, useEffect } from "react";
import { Col, Row } from "antd";
import { useComponents } from "@src/core/hook";
import Total from "@src/components/total";
import TrendChart from "@src/components/trendChart";
import UseLeaderboard from "@src/components/useLeaderboard";
import List from "./components/list";
import FilterItem from "./components/filter";
import "./index.scss";

const Widget: FC = () => {
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
  } = useComponents();
  useEffect(() => {
    getTotal();
    getTrend();
    getLeaderboard();
    getTypes();
    getList();
  }, [getTotal, getTrend, getLeaderboard, getTypes, getList]);

  console.log(list.searchDatas, "types");
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
                  <FilterItem
                    label={`${index + 1}级标签：`}
                    key={index}
                    index={index}
                    select={list.params.type[index]}
                    datas={types.datas.filter((item) => item.level === 1) || []}
                    listSearchHandler={listSearchHandler}
                  />
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
