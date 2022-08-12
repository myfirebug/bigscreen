import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'

interface IBarProps extends IEchartConfig {
  style: any;
  data: any;
  field: string;
}

const Bar: FC<IBarProps> = ({ style, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(style);
    const currentData = data && data[field] ? data[field] : [];
    const { legendData, xAxisData, yAxisData, series } =
      handleData(currentData);
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
        ? series.map((item) => ({
          ...configuration.bar,
          ...item,
          label: {
            show: style?.seriesLabelShow,
            position: style?.seriesLabelPosition,
            color: style?.seriesLabelColor
          },
          stack: style?.seriesStackValue
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

export default Bar
