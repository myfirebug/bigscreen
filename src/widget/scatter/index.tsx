import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'

interface IScatterProps extends IEchartConfig {
  style: any;
  data: any;
  field: string;
}

const Scatter: FC<IScatterProps> = ({ style, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(style);
    const currentData = data && data[field] ? data[field] : [];
    const { legendData, xAxisData, yAxisData, series } =
      handleData(currentData);
    console.log(configuration, 'configuration')
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
          ...configuration.scatter.series,
          ...item
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

export default Scatter
