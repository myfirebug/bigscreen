/*
 * widget-base-text类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:17:30
 */

const widgetFormRadio = {
  // 基础配置项
  configure: [
    {
      componentName: 'Select',
      label: '大小',
      name: 'radioSize',
      required: false,
      placeholder: '',
      options: [
        { code: 'large', name: 'large' },
        { code: 'middle', name: 'middle' },
        { code: 'small', name: 'small' }
      ]
    },
    {
      componentName: 'SketchPicker',
      label: '字体颜色',
      name: 'radioColor',
      required: false,
      placeholder: '请选择字体颜色'
    },
    {
      componentName: 'SketchPicker',
      label: '背景颜色',
      name: 'radioBackgroundColor',
      required: false,
      placeholder: '请选择背景颜色'
    },
    {
      componentName: 'SketchPicker',
      label: '边框颜色',
      name: 'radioBorderColor',
      required: false,
      placeholder: '请选择边框颜色'
    },
    [
      {
        name: '高亮',
        list: [
          {
            componentName: 'SketchPicker',
            label: '字体颜色',
            name: 'radioHighColor',
            required: false,
            placeholder: '请选择字体颜色'
          },
          {
            componentName: 'SketchPicker',
            label: '背景颜色',
            name: 'radioHighBackgroundColor',
            required: false,
            placeholder: '请选择背景颜色'
          },
          {
            componentName: 'SketchPicker',
            label: '颜色',
            name: 'radioHighBorderColor',
            required: false,
            placeholder: '请选择边框颜色'
          }
        ]
      }
    ]
  ],
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

export default widgetFormRadio
