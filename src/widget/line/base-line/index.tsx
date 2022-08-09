import {
  FC, useMemo
} from 'react'
import CustomEcharts from '@src/components/echarts'

import { IEchartConfig } from '@src/types'

interface IBaseLineProps extends IEchartConfig {
  configure: any;
}

const BaseLine: FC<IBaseLineProps> = ({
  style
}) => {

  const getOption = useMemo(() => {
    return {
      title: {
        show: style?.titleTextShow,
        text: style?.titleText,
        textStyle: {
          color: style?.titleTextColor,
          fontWeight: style?.titleTextFontWeight,
          fontSize: style?.titleTextFontSize,
          fontFamily: style?.titleTextFontFamily,
          lineHeight: style?.titleTextLineHeight
        }
      },
      legend: {
        show: style?.legendShow,
        orient: style?.legendOrient,
        type: style?.legendType,
        icon: style?.legendIcon,
        left: style?.legendLeft,
        top: style?.legendTop,
        textStyle: {
          fontSize: style?.legendFontSize,
          color: style?.legendColor
        }
      }
    }
  }, [style])

  return (
    <CustomEcharts
      style={{
        width: style?.widget,
        height: style?.height
      }}
      options={{
        ...getOption,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          ...getOption.legend,
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }} />
  )
}

export default BaseLine