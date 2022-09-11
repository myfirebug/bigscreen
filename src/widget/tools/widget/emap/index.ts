/*
 * widget-emap-base组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 16:12:46
 */
import baseConfiguration from '../../base-configuration'
const { data } = baseConfiguration

export default {
  type: 'emap',
  // 数据值
  dataValue: {
    ...data.configureValue,
    field: 'series',
    mock: {
      series: [
        {
          seriesName: 'Email',
          data: [
            {
              name: 'Mon',
              value: 120
            },
            {
              name: 'Tue',
              value: 132
            },
            {
              name: 'Wed',
              value: 101
            },
            {
              name: 'Thu',
              value: 134
            },
            {
              name: 'Fri',
              value: 90
            },
            {
              name: 'Sat',
              value: 230
            },
            {
              name: 'Sun',
              value: 210
            }
          ]
        }
      ]
    }
  }
}
