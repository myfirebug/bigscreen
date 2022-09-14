/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-14 14:22:41
 * @FilePath: \bigscreen\src\widget\pie\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'
import { getStyles } from '@utils/tools'

interface IPieProps extends IEchartConfig {
  options: any
  data: any
  field: string
}

const Pie: FC<IPieProps> = ({ options, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(options)
    const currentData = data && data[field] ? data[field] : []
    const { legendData, xAxisData, yAxisData, series } = handleData(currentData)
    return {
      ...configuration,
      tooltip: {
        trigger: 'item'
      },
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
            ...configuration.pie.series,
            ...item,
            data: currentData[index].data
          }))
        : []
    }
  }, [data, field, options])

  return <CustomEcharts style={getStyles(options)} options={getOption} />
}

export default Pie
