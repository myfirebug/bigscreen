/*
 * 页面配置
 * @Author: hejp
 * @Date: 2022-08-10 10:16:25
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-14 16:23:23
 */
const page = {
  type: 'page',
  label: '页面配置',
  configure: [
    {
      componentName: 'Input',
      label: '项目名称',
      name: 'projectName',
      required: false,
      placeholder: '请输入项目名称'
    },
    {
      componentName: 'InputNumber',
      label: '屏幕宽度',
      name: 'width',
      required: false,
      placeholder: '请输入屏幕宽度',
      min: 1366,
      max: 5000
    },
    {
      componentName: 'InputNumber',
      label: '屏幕高度',
      name: 'height',
      required: false,
      placeholder: '请输入屏幕高度',
      min: 768,
      max: 3000
    },
    {
      componentName: 'InputNumber',
      label: '横几屏',
      name: 'horizontalNumber',
      required: false,
      min: 1,
      max: 6,
      placeholder: '请输入横几屏'
    },
    {
      componentName: 'InputNumber',
      label: '竖几屏',
      min: 1,
      max: 6,
      name: 'verticalNumber',
      required: false,
      placeholder: '请输入竖几屏'
    },
    {
      componentName: 'SketchPicker',
      label: '背景颜色',
      name: 'backgroundColor',
      required: false,
      placeholder: '请选择背景颜色'
    },
    {
      componentName: 'Input',
      label: '背景图片',
      name: 'backgroundImage',
      required: false,
      placeholder: '请输入背景图片地址'
    },
    {
      componentName: 'Input',
      label: '标题',
      name: 'title',
      require: false,
      placeholder: '请输入标题'
    },
    {
      componentName: 'TextArea',
      label: '大屏简介',
      name: 'description',
      required: false,
      placeholder: '请输入大屏简介'
    },
    [
      {
        name: '屏幕辅助线',
        list: [
          {
            componentName: 'Switch',
            label: '是否显示',
            name: 'showAuxiliary',
            required: false,
            placeholder: '请选择是否显示'
          },
          {
            componentName: 'InputNumber',
            label: '屏幕间隔',
            min: 0,
            max: 20,
            name: 'interval',
            required: false,
            placeholder: '请输入竖几屏'
          },
          {
            componentName: 'SketchPicker',
            label: '线颜色',
            name: 'auxiliaryBorderColor',
            required: false,
            placeholder: '请选择网络线颜色'
          }
        ]
      }
    ]
  ]
}

export default page
