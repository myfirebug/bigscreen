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
  configureValue: {},
  // 坐标值
  coordinateValue: {
    left: 0,
    top: 0,
    width: 467,
    height: 346
  },
  // 数据值
  dataValue: {
    field: 'wrodcloud',
    mock: {
      wrodcloud: []
    }
  }
}
