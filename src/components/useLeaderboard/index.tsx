import React, { memo, useEffect, useState } from "react";
import { Skeleton } from "antd";
import { Box, Echarts } from "@src/components";
import { IComponentstrendItem } from "@src/service";

interface ITrendChart {
  datas: IComponentstrendItem[];
  loading: boolean;
}

const TrendChart = memo(
  (props: ITrendChart) => {
    const { datas, loading } = props;
    const [xAxisData, setXAxisData] = useState<string[]>([]);
    const [seriesData, setSeriesData] = useState<number[]>([]);

    useEffect(() => {
      let xAxisArr = [];
      let seriesArr = [];
      for (let i = 0; i < datas.length; i++) {
        xAxisArr.push(datas[i].name);
        seriesArr.push(datas[i].value);
      }
      setXAxisData(xAxisArr);
      setSeriesData(seriesArr);
    }, [datas]);
    return (
      <Box title="使用排行榜TOP8">
        {loading ? (
          <Skeleton active />
        ) : (
          <Echarts
            loading={loading}
            option={{
              color: ["#1677ff"],
              backgroundColor: "rgba(0,0,0,0)",
              tooltip: {},
              xAxis: {
                type: "value",
              },
              yAxis: {
                data: xAxisData,
                type: "category",
              },
              grid: {
                left: 50,
                top: 20,
                bottom: 30,
                right: 20,
              },
              series: [
                {
                  name: "使用排行榜TOP8",
                  type: "bar",
                  data: seriesData,
                  itemStyle: {
                    borderRadius: [10, 10, 10, 10],
                  },
                },
              ],
            }}
          />
        )}
      </Box>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }
);

export default TrendChart;
