import {
  FC, useMemo
} from 'react'
import CustomEcharts from '@src/components/echarts'

import { IEchartConfig } from '@src/types'

interface IBaseSmoothLineProps extends IEchartConfig {
  configure: any;
}

const BaseSmoothLine: FC<IBaseSmoothLineProps> = ({
  style
}) => {

  const getOption = useMemo(() => {
    return {
      color: [
        style?.themeColor1,
        style?.themeColor2,
        style?.themeColor3,
        style?.themeColor4,
        style?.themeColor5,
        style?.themeColor6,
        style?.themeColor7,
        style?.themeColor8],
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
          color: style?.axisNameColor,
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
            color: style?.axisLineColor
          }
        },
        axisLabel: {
          show: style?.xAxisLabelShow,
          color: style?.axisLabelColor,
          rotate: style?.xAxisLabelRotate
        },
        splitLine: {
          show: style?.xAxisSplitLineShow,
          lineStyle: {
            color: style?.splitLineColor
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
            color: style?.axisPointerColor
          }
        }
      },
      yAxis: {
        show: style?.yAxisShow,
        type: style?.yAxisType,
        name: style?.yAxisName,
        nameLocation: style?.yAxisNameLocation,
        nameTextStyle: {
          color: style?.axisNameColor,
          fontWeight: style?.yAxisNameTextStyleFontWeight,
          lineHeight: style?.yAxisNameTextStyleLineHeight,
          fontFamily: style?.yAxisNameTextStyleFontFamily,
          fontSize: style?.yAxisNameTextStyleFontSize
        },
        nameRotate: style?.yAxisNameRotate,
        boundaryGap: style?.yAxisBoundaryGap,
        axisLine: {
          show: style?.yAxisLineShow,
          lineStyle: {
            color: style?.axisLineColor
          }
        },
        axisLabel: {
          show: style?.yAxisLabelShow,
          color: style?.axisLabelColor,
          rotate: style?.yAxisLabelRotate
        },
        splitLine: {
          show: style?.yAxisSplitLineShow,
          lineStyle: {
            color: style?.splitLineColor
          }
        },
        splitArea: {
          show: style?.yAxisSplitAreaShow,
          areaStyle: {
            color: ['#fff', '#000'],
            opacity: style?.yAxisSplitAreaOpacity ? style?.yAxisSplitAreaOpacity / 100 : 0.1
          }
        },
        axisPointer: {
          show: style?.yAxisPointerShow,
          lineStyle: {
            color: style?.axisPointerColor
          }
        }
      },
      line: {
        showSymbol: style?.lineShowSymbol,
        symbol: style?.lineSymbol,
        symbolSize: style?.lineSymbolSize,
        smooth: style?.lineSmooth,
        lineStyle: {
          width: style?.lineWidth
        },
        areaStyle: style?.lineAreaStyle ? {
          opacity: style?.lineAreaStyleOpacity ? style?.lineAreaStyleOpacity / 100 : 0.7
        } : null
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
          data: ['Email', 'Email1']
        },
        xAxis: {
          ...getOption.xAxis,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          ...getOption.yAxis
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            ...getOption.line,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Email1',
            type: 'line',
            ...getOption.line,
            data: [12, 13, 11, 134, 90, 20, 100]
          }
        ]
      }} />
  )
}

export default BaseSmoothLine