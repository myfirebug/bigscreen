import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'

interface IFunnelProps extends IEchartConfig {
  style: any;
  data: any;
  field: string;
}

const Funnel: FC<IFunnelProps> = ({ style, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(style);
    const currentData = data && data[field] ? data[field] : [];
    const { legendData, xAxisData, yAxisData, series } =
      handleData(currentData);

    console.log(configuration, currentData)
    return {
      ...configuration,
      legend: {
        ...configuration.legend,
        data: legendData
      },
      series: series
        ? series.map((item, index) => ({
          ...configuration.funnel.series,
          name: item.name,
          labelLine: {
            length: 10,
            lineStyle: {
              width: 0,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0
          },
          data: currentData[index].data
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

export default Funnel
