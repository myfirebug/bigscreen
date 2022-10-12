/*
 * @Description: 大屏列表接口配置
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-11 08:53:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-12 16:08:53
 * @FilePath: \bigscreen\src\mock\modules\report.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
/*eslint-disable*/
import Mock from 'mockjs'
// 列表
export const reportList = {
  url: '/report-list',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'data|8': [
        {
          pages: [
            {
              name: '@cword(5)',
              id: '93b908bb=aebb=4e6b=ac65=575183548b7a',
              widgets: [
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 10,
                    top: 10
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { a: 2 }
                  },
                  id: 'c2c48cbd=d833=4d78=8dd9=f8b11589ddb4',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '5eea6dfc=63a9=4be2=8382=41528e043c53',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'a'
                      }
                    },
                    {
                      id: '8621f9bc=57d7=463c=82a1=1d4013fa1427',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: 'c5e2c6fe=3638=4de0=a3a4=8576fd6b71bb',
                      linkageIds: '',
                      code: 'widgetBaseSmoothLine',
                      label: '基础平滑折线图',
                      type: 'line',
                      configureValue: {
                        '0': {
                          name: '图形上的文本标签',
                          list: [
                            {
                              componentName: 'Switch',
                              label: '是否显示',
                              name: 'seriesLabelShow',
                              required: false,
                              placeholder: ''
                            },
                            {
                              componentName: 'Select',
                              label: '标签的位置',
                              name: 'seriesLabelPosition',
                              required: false,
                              placeholder: '请选择标签的位置',
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              options: [
                                { code: 'top', name: 'top' },
                                { code: 'left', name: 'left' },
                                { code: 'right', name: 'right' },
                                { code: 'bottom', name: 'bottom' },
                                { code: 'inside', name: 'inside' },
                                { code: 'insideLeft', name: 'insideLeft' },
                                { code: 'insideRight', name: 'insideRight' },
                                { code: 'insideTop', name: 'insideTop' },
                                { code: 'insideBottom', name: 'insideBottom' },
                                {
                                  code: 'insideTopLeft',
                                  name: 'insideTopLeft'
                                },
                                {
                                  code: 'insideBottomLeft',
                                  name: 'insideBottomLeft'
                                },
                                {
                                  code: 'insideTopRight',
                                  name: 'insideTopRight'
                                },
                                {
                                  code: 'insideBottomRight',
                                  name: 'insideinsideBottomRightTop'
                                }
                              ]
                            },
                            {
                              componentName: 'SketchPicker',
                              label: '文字颜色',
                              name: 'seriesLabelColor',
                              required: false,
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              placeholder: '请选择文字颜色'
                            }
                          ]
                        },
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'category',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: false,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: true,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'value',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: false,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: false,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: 'rgba(208,12,58,1)',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        lineWidth: 2,
                        lineSmooth: true,
                        lineAreaStyle: false,
                        lineAreaStyleOpacity: 70,
                        seriesStackValue: '',
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 4
                      },
                      coordinateValue: {
                        width: 328,
                        height: 197,
                        left: 0,
                        top: 46
                      },
                      dataValue: {
                        useInterface: false,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 11,
                    top: 263
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { b: 1 }
                  },
                  id: '16046c2f=b05b=4775=8194=7ef191d977b4',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '471465c5=7ae1=458c=b1a4=2cbdc9369a23',
                      linkageIds: '',
                      code: 'widgetBaseBar',
                      label: '带背景色的柱状图',
                      type: 'bar',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'category',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: true,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: true,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'value',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: true,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: false,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        barWidth: 13,
                        barShowBackground: false,
                        barBorderRadius: 0,
                        barBackgroundStyleColor: 'rgba(255,255,255, 0.1)',
                        barBackgroundStyleBorderColor: '',
                        barBackgroundStyleBorderWidth: 0,
                        barBackgroundStyleBorderType: 'solid',
                        seriesLabelShow: false,
                        seriesLabelPosition: 'top',
                        seriesLabelColor: '#fff',
                        seriesStackValue: ''
                      },
                      coordinateValue: {
                        width: 328,
                        height: 206,
                        left: 0,
                        top: 37
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    },
                    {
                      id: 'ea5c0f37=9fe9=4f3e=8c3b=3197cdc4ef59',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'b'
                      }
                    },
                    {
                      id: 'ab91a82f=1565=4500=be69=25abae11f604',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 10,
                    top: 516
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { c: 1 }
                  },
                  id: '6160a544=1a50=4f80=93c4=bdf63cc15842',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '296c6a19=ec84=49d0=9796=a62c7a4f69c5',
                      linkageIds: '',
                      code: 'widgetBaseBar',
                      label: '带背景色的柱状图',
                      type: 'bar',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'value',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: true,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: false,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'category',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: true,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: true,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        barWidth: 13,
                        barShowBackground: false,
                        barBorderRadius: 0,
                        barBackgroundStyleColor: 'rgba(255,255,255, 0.1)',
                        barBackgroundStyleBorderColor: '',
                        barBackgroundStyleBorderWidth: 0,
                        barBackgroundStyleBorderType: 'solid',
                        seriesLabelShow: false,
                        seriesLabelPosition: 'top',
                        seriesLabelColor: '#fff',
                        seriesStackValue: ''
                      },
                      coordinateValue: {
                        width: 328,
                        height: 206,
                        left: 0,
                        top: 37
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    },
                    {
                      id: 'ea9a5111=6bfd=4b7d=8cad=0dfd2f58a51a',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'c'
                      }
                    },
                    {
                      id: '845ac9f8=528e=496e=a1b6=defce00af479',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 350,
                    top: 514
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { d: 1 }
                  },
                  id: '72cfd138=6fa0=4e33=9c11=ab5da2337e2b',
                  linkageIds: '',
                  widgets: [
                    {
                      id: 'a7ff8370=bad2=4b4d=8738=9263e91d0477',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'd'
                      }
                    },
                    {
                      id: '543cd5c0=ba39=4e29=8dcd=6c34d664476e',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: 'b17848ad=4c52=4bca=ad36=a44d345abf2f',
                      linkageIds: '',
                      code: 'widgetBasePie',
                      label: '基础饼图',
                      type: 'pie',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        seriesInsideRadius: 0,
                        seriesAutsideRadius: 80,
                        seriesRoseType: false,
                        xAxisShow: false,
                        yAxisShow: false,
                        seriesLabelShow: true,
                        seriesLabelPosition: 'outside',
                        seriesLabelColor: '',
                        xAxisType: 'category',
                        yAxisType: 'value'
                      },
                      coordinateValue: {
                        width: 328,
                        height: 205,
                        left: 0,
                        top: 38
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 688,
                    top: 515
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { e: 1 }
                  },
                  id: 'edeeeb69=11cf=4c20=8c01=7e3c6523f37a',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '5191bcc3=4aec=4f5a=bf0c=28210b9b2c3b',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'e'
                      }
                    },
                    {
                      id: 'aeebe200=7c71=4161=8b59=c674bb82608a',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: 'c3920425=19ff=4599=86af=f1b6fef665db',
                      linkageIds: '',
                      code: 'widgetBaseRadar',
                      label: '基础雷达图',
                      type: 'radar',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        radarShape: 'polygon',
                        radarRadius: 75,
                        radarAxisLinelColor: 'rgba(255,255,255,.8)',
                        radarSplitLineColor: 'rgba(255,255,255,.05)',
                        radarSplitAreaOddColor: 'rgba(250,250,250,0.3)',
                        radarSplitAreaEvenColor: 'rgba(200,200,200,0.3)',
                        seriesLabelShow: false,
                        seriesLabelPosition: 'top',
                        seriesLabelColor: '#fff',
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 4,
                        xAxisShow: false,
                        yAxisShow: false,
                        xAxisType: 'category',
                        yAxisType: 'value'
                      },
                      coordinateValue: {
                        width: 328,
                        height: 205,
                        left: 0,
                        top: 38
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            },
                            {
                              seriesName: 'Direct',
                              data: [
                                { name: 'Mon', value: 220 },
                                { name: 'Tue', value: 182 },
                                { name: 'Wed', value: 191 },
                                { name: 'Thu', value: 234 },
                                { name: 'Fri', value: 290 },
                                { name: 'Sat', value: 330 },
                                { name: 'Sun', value: 310 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 1028,
                    top: 514
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { f: 1 }
                  },
                  id: 'b2340442=a94e=4878=ba03=74cb916f4524',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '1aae0cd7=e8fb=454f=804d=19930327bb95',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'f'
                      }
                    },
                    {
                      id: '7bae6a88=6e99=4087=8ee7=550c26c38b92',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: 'ef3a76b1=f245=46c5=800e=ffde3f39f5cd',
                      linkageIds: '',
                      code: 'widgetBaseFunnel',
                      label: '基础漏斗图',
                      type: 'funnel',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        funnelOrient: 'horizontal',
                        funnelSort: 'descending',
                        funnelGap: 0,
                        seriesLabelShow: true,
                        seriesLabelPosition: 'inside',
                        seriesLabelColor: '#fff',
                        xAxisShow: false,
                        yAxisShow: false,
                        xAxisType: 'category',
                        yAxisType: 'value'
                      },
                      coordinateValue: {
                        width: 330,
                        height: 205,
                        left: 0,
                        top: 38
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制][复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 1027,
                    top: 263
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { g: 3 }
                  },
                  id: 'c610cdbf=95ba=4798=863e=50c9682950fd',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '991dbff9=9629=4b87=8bcf=a7bc1c93baea',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'g'
                      }
                    },
                    {
                      id: '4ccd0305=106f=4d7a=bbf4=111cd6da5198',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: '9fe9fdeb=a636=4d9d=81e8=bc455fe1fc87',
                      linkageIds: '',
                      code: 'widgetBaseWordcloud',
                      label: '基础表格',
                      type: 'wordcloud',
                      configureValue: {
                        wordcloudFontFamily: 'Microsoft YaHei',
                        wordcloudFontWeight: 'bold',
                        wordcloudGridSize: 0,
                        wordcloudMaxFontSize: 32
                      },
                      coordinateValue: {
                        width: 328,
                        height: 205,
                        left: 0,
                        top: 38
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: '测试',
                              data: [
                                { name: '数据可视化', value: 3000 },
                                { name: '大数据', value: 2181 },
                                { name: '云计算', value: 1386 },
                                { name: '物联网', value: 2055 },
                                { name: '移动互联网', value: 2467 },
                                { name: '人工智能', value: 2244 },
                                { name: '深度学习', value: 1898 },
                                { name: '机器学习', value: 1484 },
                                { name: '区块链', value: 3865 },
                                { name: '互联网+', value: 2222 },
                                { name: '智能合约', value: 366 },
                                { name: '比特币', value: 360 },
                                { name: '数据挖掘', value: 273 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制][复制][复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 328,
                    height: 244,
                    left: 1028,
                    top: 11
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { h: 3 }
                  },
                  id: 'd927f513=f853=4377=87fa=b73c66f07a6a',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '44adccc9=d272=4a2c=9ad7=5f1cccf0480d',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 143,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'h'
                      }
                    },
                    {
                      id: 'e97f2c02=2653=4e49=8231=fd69e0d7fc10',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: '88d8661a=cf00=4635=ac77=32455199c2f2',
                      linkageIds: '',
                      code: 'widgetBaseAreaLine',
                      label: '基础面积图',
                      type: 'line',
                      configureValue: {
                        '0': {
                          name: '图形上的文本标签',
                          list: [
                            {
                              componentName: 'Switch',
                              label: '是否显示',
                              name: 'seriesLabelShow',
                              required: false,
                              placeholder: ''
                            },
                            {
                              componentName: 'Select',
                              label: '标签的位置',
                              name: 'seriesLabelPosition',
                              required: false,
                              placeholder: '请选择标签的位置',
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              options: [
                                { code: 'top', name: 'top' },
                                { code: 'left', name: 'left' },
                                { code: 'right', name: 'right' },
                                { code: 'bottom', name: 'bottom' },
                                { code: 'inside', name: 'inside' },
                                { code: 'insideLeft', name: 'insideLeft' },
                                { code: 'insideRight', name: 'insideRight' },
                                { code: 'insideTop', name: 'insideTop' },
                                { code: 'insideBottom', name: 'insideBottom' },
                                {
                                  code: 'insideTopLeft',
                                  name: 'insideTopLeft'
                                },
                                {
                                  code: 'insideBottomLeft',
                                  name: 'insideBottomLeft'
                                },
                                {
                                  code: 'insideTopRight',
                                  name: 'insideTopRight'
                                },
                                {
                                  code: 'insideBottomRight',
                                  name: 'insideinsideBottomRightTop'
                                }
                              ]
                            },
                            {
                              componentName: 'SketchPicker',
                              label: '文字颜色',
                              name: 'seriesLabelColor',
                              required: false,
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              placeholder: '请选择文字颜色'
                            }
                          ]
                        },
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'category',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: false,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: true,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'value',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: false,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: false,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        lineWidth: 2,
                        lineSmooth: false,
                        lineAreaStyle: true,
                        lineAreaStyleOpacity: 70,
                        seriesStackValue: '',
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 4
                      },
                      coordinateValue: {
                        width: 330,
                        height: 208,
                        left: 0,
                        top: 35
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                },
                {
                  code: 'widgetGroup',
                  type: 'group',
                  label: '[复制][复制][复制][复制][复制][复制][复制][复制]组件',
                  configureValue: {
                    styleDisplay: 'block',
                    backgroundColor: '',
                    styleAnimateInfinite: false,
                    styleAnimationDelay: 0,
                    styleAnimationName: '',
                    styleAnimationDuration: 1,
                    styleAnimationTimingFunction: 'linear',
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
                  coordinateValue: {
                    width: 667,
                    height: 498,
                    left: 350,
                    top: 9
                  },
                  dataValue: {
                    useInterface: true,
                    dataType: 'dynamic',
                    mock: {
                      value: '我是文本框',
                      radio: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                      ]
                    },
                    url: 'http://localhost:6001/configuration',
                    method: 'get',
                    params: { i: 1 }
                  },
                  id: 'a5c20d1f=1f9c=4c7a=95ad=6e3203ac8521',
                  linkageIds: '',
                  widgets: [
                    {
                      id: '2a682eaa=b9ea=4164=8b99=b48d2d8d53a4',
                      linkageIds: '',
                      code: 'widgetFormRadio',
                      type: 'form',
                      label: '单选',
                      configureValue: {
                        styleDisplay: 'block',
                        radioSize: 'small',
                        radioColor: 'rgba(255,255,255, .6)',
                        radioBackgroundColor: '#2F2271',
                        radioBorderColor: '#36248C',
                        radioHighColor: '#fff',
                        radioHighBackgroundColor: '#3109EC',
                        radioHighBorderColor: '#3109EC'
                      },
                      coordinateValue: {
                        width: 184,
                        height: 29,
                        left: 473,
                        top: 7
                      },
                      dataValue: {
                        useInterface: true,
                        field: 'radio',
                        paramName: 'i'
                      }
                    },
                    {
                      id: '96adb551=de40=4e00=91cd=6f41960fa6ec',
                      linkageIds: '',
                      code: 'widgetBaseText',
                      type: 'text',
                      label: '基础文本',
                      configureValue: {
                        styleDisplay: 'block',
                        styleTextShadowX: 0,
                        styleTextShadowY: 0,
                        styleTextShadowF: 0,
                        styleTextShadowC: '',
                        styleBoxInset: false,
                        styleBoxShadowX: 0,
                        styleBoxShadowY: 0,
                        styleBoxShadowF: 0,
                        styleBoxShadowC: '',
                        styleBorderStyle: 'none',
                        styleBorderWidth: 0,
                        styleBorderColor: '',
                        styleBorderTopLeftRadius: 0,
                        styleBorderTopRightRadius: 0,
                        styleBorderBottomLeftRadius: 0,
                        styleBorderBottomRightRadius: 0,
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        styleFontSize: 16,
                        styleLetterSpacing: 0,
                        styleFontWeight: 'bolder',
                        styleTextAlign: 'left',
                        styleBackgroundColor: '',
                        styleFontFamily: 'Microsoft YaHei',
                        styleLineHeight: 1,
                        styleColor: '#fff'
                      },
                      coordinateValue: {
                        width: 111,
                        height: 23,
                        left: 8,
                        top: 11
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: { value: '文本框' },
                        url: '',
                        method: 'get',
                        field: 'value'
                      }
                    },
                    {
                      id: '36d6e312=6ed2=4a5d=84dd=82380122b45a',
                      linkageIds: '',
                      code: 'widgetAnnulusPie',
                      label: '圆环饼图',
                      type: 'pie',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        seriesInsideRadius: 40,
                        seriesAutsideRadius: 80,
                        seriesRoseType: false,
                        xAxisShow: false,
                        yAxisShow: false,
                        seriesLabelShow: true,
                        seriesLabelPosition: 'outside',
                        seriesLabelColor: '',
                        xAxisType: 'category',
                        yAxisType: 'value'
                      },
                      coordinateValue: {
                        width: 330,
                        height: 215,
                        left: 0,
                        top: 34
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    },
                    {
                      id: '4c655ccf=fdce=45f9=8556=328d5fc9f766',
                      linkageIds: '',
                      code: 'widgetRadiusBar',
                      label: '圆角柱状图',
                      type: 'bar',
                      configureValue: {
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'category',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: true,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: true,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'value',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: true,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: false,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: '#fc97af',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        barWidth: 20,
                        barShowBackground: false,
                        barBorderRadius: 20,
                        barBackgroundStyleColor: 'rgba(255,255,255, 0.1)',
                        barBackgroundStyleBorderColor: '',
                        barBackgroundStyleBorderWidth: 0,
                        barBackgroundStyleBorderType: 'solid',
                        seriesLabelShow: false,
                        seriesLabelPosition: 'top',
                        seriesLabelColor: '#fff',
                        seriesStackValue: ''
                      },
                      coordinateValue: {
                        width: 327,
                        height: 208,
                        left: 342,
                        top: 36
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    },
                    {
                      id: 'ef999e71=8c3d=46bf=818a=2585d3c5bd23',
                      linkageIds: '',
                      code: 'widgetBaseSmoothLine',
                      label: '基础平滑折线图',
                      type: 'line',
                      configureValue: {
                        '0': {
                          name: '图形上的文本标签',
                          list: [
                            {
                              componentName: 'Switch',
                              label: '是否显示',
                              name: 'seriesLabelShow',
                              required: false,
                              placeholder: ''
                            },
                            {
                              componentName: 'Select',
                              label: '标签的位置',
                              name: 'seriesLabelPosition',
                              required: false,
                              placeholder: '请选择标签的位置',
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              options: [
                                { code: 'top', name: 'top' },
                                { code: 'left', name: 'left' },
                                { code: 'right', name: 'right' },
                                { code: 'bottom', name: 'bottom' },
                                { code: 'inside', name: 'inside' },
                                { code: 'insideLeft', name: 'insideLeft' },
                                { code: 'insideRight', name: 'insideRight' },
                                { code: 'insideTop', name: 'insideTop' },
                                { code: 'insideBottom', name: 'insideBottom' },
                                {
                                  code: 'insideTopLeft',
                                  name: 'insideTopLeft'
                                },
                                {
                                  code: 'insideBottomLeft',
                                  name: 'insideBottomLeft'
                                },
                                {
                                  code: 'insideTopRight',
                                  name: 'insideTopRight'
                                },
                                {
                                  code: 'insideBottomRight',
                                  name: 'insideinsideBottomRightTop'
                                }
                              ]
                            },
                            {
                              componentName: 'SketchPicker',
                              label: '文字颜色',
                              name: 'seriesLabelColor',
                              required: false,
                              relationFields: 'seriesLabelShow',
                              relationValues: 'true',
                              placeholder: '请选择文字颜色'
                            }
                          ]
                        },
                        styleDisplay: 'block',
                        styleAnimateInfinite: false,
                        styleAnimationDelay: 0,
                        styleAnimationName: '',
                        styleAnimationDuration: 1,
                        styleAnimationTimingFunction: 'linear',
                        titleTextShow: false,
                        titleText: '',
                        titleTextFontSize: 14,
                        titleTextLineHeight: 1.2,
                        titleTextFontFamily: 'Microsoft YaHei',
                        titleTextFontWeight: 'bold',
                        titleTextColor: '#fff',
                        legendShow: true,
                        legendType: 'plain',
                        legendOrient: 'horizontal',
                        legendFontSize: 12,
                        legendIcon: 'rect',
                        legendColor: '#fff',
                        legendLeft: 'center',
                        legendTop: 'top',
                        gridShow: false,
                        gridLeft: 50,
                        gridRight: 30,
                        gridTop: 30,
                        gridBottom: 30,
                        gridBorderColor: '#ccc',
                        xAxisShow: true,
                        xAxisType: 'category',
                        xAxisName: '',
                        xAxisNameLocation: 'end',
                        xAxisNameTextStyleFontSize: 12,
                        xAxisNameTextStyleLineHeight: 12,
                        xAxisNameTextStyleFontFamily: 'serif',
                        xAxisNameTextStyleFontWeight: 'normal',
                        xAxisBoundaryGap: false,
                        xAxisNameRotate: 0,
                        xAxisLineShow: true,
                        xAxisLabelShow: true,
                        xAxisLabelRotate: 0,
                        xAxisSplitLineShow: true,
                        xAxisSplitAreaShow: false,
                        xAxisSplitAreaOpacity: 10,
                        xAxisPointerShow: true,
                        xAxisTickShow: true,
                        xAxisAlignWithLabel: false,
                        yAxisShow: true,
                        yAxisType: 'value',
                        yAxisName: '',
                        yAxisNameLocation: 'end',
                        yAxisNameTextStyleFontSize: 12,
                        yAxisNameTextStyleLineHeight: 12,
                        yAxisNameTextStyleFontFamily: 'serif',
                        yAxisNameTextStyleFontWeight: 'normal',
                        yAxisBoundaryGap: false,
                        yAxisNameRotate: 0,
                        yAxisLineShow: true,
                        yAxisLabelShow: true,
                        yAxisLabelRotate: 0,
                        yAxisSplitLineShow: true,
                        yAxisSplitAreaShow: false,
                        yAxisSplitAreaOpacity: 10,
                        yAxisPointerShow: false,
                        yAxisTickShow: true,
                        yAxisAlignWithLabel: false,
                        axisNameColor: 'rgba(255,255,255,.2)',
                        axisLineColor: 'rgba(255,255,255,.2)',
                        axisLabelColor: 'rgba(255,255,255,.8)',
                        splitLineColor: 'rgba(255,255,255,.2)',
                        axisPointerColor: 'red',
                        themeColor1: 'rgba(212,54,10,1)',
                        themeColor2: '#87f7cf',
                        themeColor3: '#f7f494',
                        themeColor4: '#72ccff',
                        themeColor5: '#f7c5a0',
                        themeColor6: '#d4a4eb',
                        themeColor7: '#d2f5a6',
                        themeColor8: '#76f2f2',
                        lineWidth: 0,
                        lineSmooth: true,
                        lineAreaStyle: true,
                        lineAreaStyleOpacity: 29,
                        seriesStackValue: '',
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 9
                      },
                      coordinateValue: {
                        width: 670,
                        height: 240,
                        left: -1,
                        top: 256
                      },
                      dataValue: {
                        useInterface: true,
                        dataType: 'mock',
                        mock: {
                          series: [
                            {
                              seriesName: 'Email',
                              data: [
                                { name: 'Mon', value: 120 },
                                { name: 'Tue', value: 132 },
                                { name: 'Wed', value: 101 },
                                { name: 'Thu', value: 134 },
                                { name: 'Fri', value: 90 },
                                { name: 'Sat', value: 230 },
                                { name: 'Sun', value: 210 }
                              ]
                            }
                          ]
                        },
                        url: '',
                        method: 'get',
                        field: 'series'
                      }
                    }
                  ]
                }
              ]
            }
          ],
          id: '@id',
          auxiliaryBorderColor: '#1890ff',
          backgroundColor: '#090548',
          backgroundImage: '',
          description: '@cparagraph',
          height: 768,
          horizontalNumber: 4,
          interval: 10,
          projectName: '',
          showAuxiliary: true,
          title: '@csentence(10)',
          verticalNumber: 3,
          width: 1366,
          createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
        }
      ],
      total: 8
    }),
    message: '成功'
  }
}

// 删除
export const reportDelete = {
  url: '/report-delete',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: null,
    message: '删除成功'
  }
}
