/*
 * widget-base-text组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:18:50
 */

export default {
  code: 'widgetFormRadio',
  type: 'form',
  label: '单选',
  // 配置项值
  configureValue: {
    styleDisplay: 'block',
    radioSize: 'middle',
    radioColor: 'rgba(255,255,255, .6)',
    radioBackgroundColor: '#2F2271',
    radioBorderColor: '#36248C',
    radioHighColor: '#fff',
    radioHighBackgroundColor: '#3109EC',
    radioHighBorderColor: '#3109EC'
  },
  // 坐标值
  coordinateValue: {
    left: 0,
    top: 0,
    width: 300,
    height: 40
  },
  // 数据值
  dataValue: {
    useInterface: true,
    field: 'radio'
  }
}
