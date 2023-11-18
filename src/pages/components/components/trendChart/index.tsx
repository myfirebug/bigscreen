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
      <Box title="新增走势">
        {loading ? (
          <Skeleton active />
        ) : (
          <Echarts
            loading={loading}
            option={{
              tooltip: {},
              xAxis: {
                data: xAxisData,
              },
              grid: {
                left: 30,
                top: 20,
                bottom: 30,
                right: 0,
              },
              yAxis: {},
              series: [
                {
                  name: "新增组件",
                  type: "bar",
                  data: seriesData,
                  barMaxWidth: 50,
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
