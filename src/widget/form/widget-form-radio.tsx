/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-08-28 14:00:20
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-06 23:16:31
 * @FilePath: \bigscreen\src\widget\form\widget-form-radio.tsx
 * Copyright (c) 2022 by hejp email: 378540660@qq.com, All Rights Reserved.
 */
import React, { FC, useState } from 'react'
import { IAnyObject } from '@src/types'
import { getStyles } from '@utils/tools'
import { Radio } from 'antd'
import { IWidget } from '@store/actionType'

interface IWidgetFormRadioProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject
  // 字段名
  field: string
  options: any
  paramValue: any
  paramName: any
  parentWidget: IWidget
  modifyLargeScreenElement: (id: string, groupId: string, data: IWidget) => void
}

const WidgetFormRadio: FC<IWidgetFormRadioProps> = ({
  data = {},
  field = 'radio',
  options,
  paramValue,
  paramName,
  parentWidget,
  modifyLargeScreenElement
}) => {
  const changeHandler = (val: any) => {
    if (parentWidget && paramName) {
      const widget = JSON.parse(JSON.stringify(parentWidget))
      widget.dataValue.params[paramName] = val
      modifyLargeScreenElement(parentWidget.id, parentWidget.id, widget)
    }
  }
  return (
    <div
      style={getStyles(options)}
      className='app-element app-element__radio animated'>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .ant-radio-button-wrapper {
            background: ${options.radioBackgroundColor};
            color:${options.radioColor};
            border-color:${options.radioBorderColor};
          }
          .ant-radio-button-wrapper:hover{
            color:${options.radioHighColor}!important;
          }
          .ant-radio-button-wrapper.ant-radio-button-wrapper-checked{
            background: ${options.radioHighBackgroundColor}!important;
            color:${options.radioHighColor}!important;
            border-color:${options.radioHighBorderColor}!important;
          }
          .ant-radio-button-wrapper:first-child{
            border-left: 1px solid ${options.radioBorderColor};
          }
          .ant-radio-button-wrapper:not(:first-child):before{
            background:${options.radioBorderColor};
          }`
        }}></style>
      <Radio.Group
        buttonStyle='solid'
        optionType='button'
        options={data && data[field] ? data[field] : []}
        size={options.radioSize}
        onChange={(e) => changeHandler(e.target.value)}
        value={paramValue}
      />
    </div>
  )
}

export default WidgetFormRadio
