/*
 * widget-empa-base类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:17:30
 */
import baseConfiguration from '../../base-configuration'
const { echarts, animate, data } = baseConfiguration
const widgetEmapBase = {
  // 基础配置项
  configure: [
    [
      {
        name: '地图设置',
        list: [
          {
            componentName: 'Slider',
            label: '比例',
            name: 'emapZoom',
            required: false,
            min: 0,
            max: 2,
            step: 0.1,
            placeholder: ''
          },
          {
            componentName: 'Switch',
            label: '名称显示',
            name: 'emapLabelShow',
            required: false,
            placeholder: '',
            tooltip: '是否显示名称'
          },
          {
            componentName: 'InputNumber',
            label: '字体大小',
            name: 'emapFontSize',
            required: false,
            min: 12,
            placeholder: '',
            relationFields: 'emapLabelShow',
            relationValues: 'true'
          },
          {
            componentName: 'SketchPicker',
            label: '字体颜色',
            name: 'emapFontColor',
            required: false,
            placeholder: '请选择字体颜色',
            relationFields: 'emapLabelShow',
            relationValues: 'true'
          },
          {
            componentName: 'SketchPicker',
            label: '字体高亮颜色',
            name: 'emapHighFontColor',
            required: false,
            placeholder: '请选择字体高亮颜色',
            relationFields: 'emapLabelShow',
            relationValues: 'true'
          },
          {
            componentName: 'InputNumber',
            label: '边框大小',
            name: 'emapBorderSize',
            required: false,
            min: 0,
            placeholder: ''
          },

          {
            componentName: 'SketchPicker',
            label: '边框颜色',
            name: 'emapBorderColor',
            required: false,
            placeholder: '请选择边框颜色'
          },
          {
            componentName: 'SketchPicker',
            label: '边框高亮颜色',
            name: 'emapHighBorderColor',
            required: false,
            placeholder: '请选择边框高亮颜色'
          },
          {
            componentName: 'SketchPicker',
            label: '区域颜色',
            name: 'emapAreaColor',
            required: false,
            placeholder: '请选择区域颜色'
          },
          {
            componentName: 'SketchPicker',
            label: '区域高亮颜色',
            name: 'emapHighAreaColor',
            required: false,
            placeholder: '请选择区域高亮颜色'
          }
        ]
      },
      {
        name: '容器距离',
        list: [
          {
            componentName: 'Slider',
            label: '上边距',
            name: 'emapTop',
            required: false,
            placeholder: ''
          }
        ]
      },
      {
        name: '视觉映射',
        list: [
          {
            componentName: 'Switch',
            label: '是否显示',
            name: 'emapVisualMapShow',
            required: false,
            placeholder: ''
          },
          {
            componentName: 'SketchPicker',
            label: '字体颜色',
            name: 'emapVisualMapFontColor',
            required: false,
            placeholder: '请选择字体颜色',
            relationFields: 'emapVisualMapShow',
            relationValues: 'true'
          },
          {
            componentName: 'Select',
            label: '对齐方式',
            name: 'emapVisualMapLeft',
            required: false,
            placeholder: '请选择对齐方式',
            options: [
              { code: 'left', name: 'left' },
              { code: 'center', name: 'center' },
              { code: 'right', name: 'right' }
            ],
            relationFields: 'emapVisualMapShow',
            relationValues: 'true'
          },
          {
            componentName: 'Select',
            label: '放置方向',
            name: 'emapVisualMapOrient',
            required: false,
            placeholder: '请选择放置方向',
            options: [
              { code: 'horizontal', name: '水平' },
              { code: 'vertical', name: '垂直' }
            ],
            relationFields: 'emapVisualMapShow',
            relationValues: 'true'
          },
          {
            componentName: 'SketchPicker',
            label: '开始颜色',
            name: 'emapVisualMapStartColor',
            required: false,
            placeholder: '请选择开始颜色',
            relationFields: 'emapVisualMapShow',
            relationValues: 'true'
          },
          {
            componentName: 'SketchPicker',
            label: '结束颜色',
            name: 'emapVisualMapEndColor',
            required: false,
            placeholder: '请选择结束颜色',
            relationFields: 'emapVisualMapShow',
            relationValues: 'true'
          }
        ]
      },
      {
        name: '自定义颜色',
        list: echarts.echartColor
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

export default widgetEmapBase
