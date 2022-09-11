/*
 * widget-base-text类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:17:30
 */

const widgetEmapBase = {
  // 基础配置项
  configure: [],
  data: [
    {
      componentName: 'Switch',
      label: '使用组数据',
      name: 'useInterface',
      disabled: true,
      required: false,
      placeholder: '',
      tooltip: '该组件使用组的接口数据'
    },
    {
      componentName: 'Input',
      label: '数据对应字段',
      name: 'field',
      required: false,
      placeholder: ''
    }
  ]
}

export default widgetEmapBase
