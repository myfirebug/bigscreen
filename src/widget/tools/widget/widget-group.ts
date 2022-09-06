/*
 * widget-group组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 16:13:46
 */
// 获取本地环境的数据
import baseConfiguration from '../base-configuration'
const { animate, box } = baseConfiguration

export default {
  code: 'widgetGroup',
  type: 'group',
  label: '组件',
  // 配置项值
  configureValue: {
    display: 'block',
    backgroundColor: '',
    ...animate.configureValue,
    ...box.configureValue
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
    useInterface: false,
    dataType: 'dynamic',
    mock: {
      value: '我是文本框',
      radio: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    },
    url: '',
    method: 'get'
  }
}
