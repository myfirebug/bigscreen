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
    styleDisplay: 'block',
    backgroundColor: '',
    ...animate.configureValue,
    styleBoxInset: true,
    styleBoxShadowX: 0,
    styleBoxShadowY: 0,
    styleBoxShadowF: 10,
    styleBoxShadowC: 'rgba(15,32,212,0.5)',
    styleBorderStyle: 'solid',
    styleBorderWidth: 1,
    styleBorderColor: 'rgba(15,32,212, 1)',
    styleBorderTopLeftRadius: 5,
    styleBorderTopRightRadius: 5,
    styleBorderBottomLeftRadius: 5,
    styleBorderBottomRightRadius: 5
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
