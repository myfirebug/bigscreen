import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'

interface IPieProps extends IEchartConfig {
  style: any;
  data: any;
  field: string;
}

const Pie: FC<IPieProps> = ({ style, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(style);
    const currentData = data && data[field] ? data[field] : [];
    const { legendData, xAxisData, yAxisData, series } =
      handleData(currentData);
    console.log(currentData, series, 'series')
    return {
      ...configuration,
      legend: {
        ...configuration.legend,
        data: legendData
      },
      xAxis: {
        ...configuration.xAxis,
        data: xAxisData
      },
      yAxis: {
        ...configuration.yAxis,
        data: yAxisData
      },
      series: series
        ? series.map((item, index) => ({
          ...configuration.pie,
          ...item,
          data: currentData[index].data,
          label: {
            show: style?.seriesLabelShow,
            position: style?.seriesLabelPosition,
            color: style?.seriesLabelColor
          },
          roseType: style?.seriesRoseType,
          itemStyle: {
            borderRadius: style?.seriesRoseType ? 4 : 0
          },
          radius: [`${style?.seriesInsideRadius || 0}%`, `${style?.seriesAutsideRadius || 0}%`]
        }))
        : []
    };
  }, [data, field, style]);

  return (
    <CustomEcharts style={{
      width: style.width,
      height: style.height
    }} options={getOption} />
  )
}

export default Pie
