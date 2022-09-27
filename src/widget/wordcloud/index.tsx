/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-27 20:53:29
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-27 21:02:02
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
    const { legendData, xAxisData, yAxisData, series } = handleData(currentData)
    return {
      series: [
        {
          type: 'wordCloud',

          // The shape of the "cloud" to draw. Can be any polar equation represented as a
          // callback function, or a keyword present. Available presents are circle (default),
          // cardioid (apple or heart shape curve, the most known polar equation), diamond (
          // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

          shape: 'circle',

          // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
          // Default to be put in the center and has 75% x 80% size.

          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          right: null,
          bottom: null,

          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.

          sizeRange: [12, 60],

          // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

          rotationRange: [-90, 90],
          rotationStep: 45,

          // size of the grid in pixels for marking the availability of the canvas
          // the larger the grid size, the bigger the gap between words.

          gridSize: 8,

          // set to true to allow word being draw partly outside of the canvas.
          // Allow word bigger than the size of the canvas to be drawn
          drawOutOfBound: false,

          // If perform layout animation.
          // NOTE disable it will lead to UI blocking when there is lots of words.
          layoutAnimation: true,

          // Global text style
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') +
                ')'
              )
            }
          },
          emphasis: {
            focus: 'self',

            textStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [
            {
              value: '50', // 词典大小配置
              name: 'iPhone 13', // 词典名称配置
              textStyle: {
                // 单独配置某个词典样式
                shadowBlur: 4,
                shadowOffsetY: 14,
                color: '#BDBEFA'
              }
            },
            { value: '30', name: 'VIVO' },
            { value: '29', name: 'OPPO' },
            { value: '28', name: 'HONOR' },
            { value: '27', name: 'iPhone 12 pro max' },
            { value: '26', name: 'iPhone 12 pro max' },
            { value: '25', name: 'HUAWEI MATE 10' },
            { value: '24', name: 'ONEPLUS' },
            { value: '23', name: 'Lenova T470' },
            { value: '22', name: 'MacBook Air ' },
            { value: '21', name: 'SAMSUNG' },
            { value: '20', name: 'iPad mini' },
            { value: '16', name: 'BLACKBERRY' },
            { value: '14', name: 'OPPO' },
            { value: '13', name: 'SAMSUNG' },
            { value: '12', name: '361' },
            { value: '10', name: 'Lenova' }
          ]
        }
      ]
    }
  }, [data, field, options])

  return <CustomEcharts style={getStyles(options)} options={getOption} />
}

export default Wordcloud
