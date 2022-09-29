/*
 * widget-wordcloud组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-18 10:07:26
 */
import baseConfiguration from '../../base-configuration'
const { data } = baseConfiguration

export default {
  type: 'wordcloud',
  // 配置项值
  configureValue: {
    wordcloudFontFamily: 'Microsoft YaHei',
    wordcloudFontWeight: 'bold',
    wordcloudGridSize: 0,
    wordcloudMaxFontSize: 32
  },
  // 坐标值
  coordinateValue: {
    left: 0,
    top: 0,
    width: 467,
    height: 346
  },
  // 数据值
  dataValue: {
    ...data.configureValue,
    field: 'series',
    mock: {
      series: [
        {
          seriesName: '测试',
          data: [
            {
              name: '数据可视化',
              value: 3000
            },
            {
              name: '大数据',
              value: 2181
            },
            {
              name: '云计算',
              value: 1386
            },
            {
              name: '物联网',
              value: 2055
            },
            {
              name: '移动互联网',
              value: 2467
            },
            {
              name: '人工智能',
              value: 2244
            },
            {
              name: '深度学习',
              value: 1898
            },
            {
              name: '机器学习',
              value: 1484
            },
            {
              name: '区块链',
              value: 3865
            },
            {
              name: '互联网+',
              value: 2222
            },
            {
              name: '智能合约',
              value: 366
            },
            {
              name: '比特币',
              value: 360
            },
            {
              name: '数据挖掘',
              value: 273
            }
          ]
        }
      ]
    }
  }
}
