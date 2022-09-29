/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-27 20:53:29
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-29 20:05:36
 * @FilePath: \bigscreen\src\widget\wordcloud\index.tsx
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

interface IWordcloudProps extends IEchartConfig {
  options: any
  data: any
  field: string
}

const Wordcloud: FC<IWordcloudProps> = ({ options, data, field }) => {
  // 处理echarts数据
  const getOption = useMemo(() => {
    const configuration = handleEchartsOption(options)
    const currentData = data && data[field] ? data[field] : []
    return {
      tooltip: {
        trigger: 'item'
      },
      series: currentData
        ? currentData.map((item: any) => ({
            ...configuration.wordcloud.series,
            data: item.data,
            name: item.seriesName
          }))
        : []
    }
  }, [data, field, options])

  return <CustomEcharts style={getStyles(options)} options={getOption} />
}

export default Wordcloud
