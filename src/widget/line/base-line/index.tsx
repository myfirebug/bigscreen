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
      },
      grid: {
        show: style?.gridShow,
        left: style?.gridLeft,
        right: style?.gridRight,
        top: style?.gridTop,
        bottom: style?.gridBottom,
        borderColor: style?.gridBorderColor
      },
      xAxis: {
        show: style?.xAxisShow,
        type: style?.xAxisType,
        name: style?.xAxisName,
        nameLocation: style?.xAxisNameLocation,
        nameTextStyle: {
          color: style?.xAxisNameTextStyleColor,
          fontWeight: style?.xAxisNameTextStyleFontWeight,
          lineHeight: style?.xAxisNameTextStyleLineHeight,
          fontFamily: style?.xAxisNameTextStyleFontFamily,
          fontSize: style?.xAxisNameTextStyleFontSize
        },
        nameRotate: style?.xAxisNameRotate,
        boundaryGap: style?.xAxisBoundaryGap,
        axisLine: {
          show: style?.xAxisLineShow,
          lineStyle: {
            color: style?.xAxisLineColor
          }
        },
        axisLabel: {
          show: style?.xAxisLabelShow,
          color: style?.xAxisLabelColor,
          rotate: style?.xAxisLabelRotate
        },
        splitLine: {
          show: style?.xAxisSplitLineShow,
          lineStyle: {
            color: style?.xAxisSplitLineColor
          }
        },
        splitArea: {
          show: style?.xAxisSplitAreaShow,
          areaStyle: {
            color: ['#fff', '#000'],
            opacity: style?.xAxisSplitAreaOpacity ? style?.xAxisSplitAreaOpacity / 100 : 0.1
          }
        },
        axisPointer: {
          show: style?.xAxisPointerShow,
          lineStyle: {
            color: style?.xAxisPointerColor
          }
        }
      }
    }
  }, [style])

  return (
    <CustomEcharts
      style={style}
      options={{
        ...getOption,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          ...getOption.legend,
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          ...getOption.xAxis,
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