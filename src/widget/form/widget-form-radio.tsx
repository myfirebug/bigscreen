/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-08-28 14:00:20
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-06 20:47:44
 * @FilePath: \bigscreen\src\widget\form\widget-form-radio.tsx
 * Copyright (c) 2022 by hejp email: 378540660@qq.com, All Rights Reserved.
 */
import React, { FC, useState } from 'react'
import { IAnyObject } from '@src/types'
import { getStyles } from '@utils/tools'
import { Radio } from 'antd'

interface IWidgetFormRadioProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject
  // 字段名
  field: string
  options: any
  paramValue: any
  paramName: any
  setParmas: React.Dispatch<any>
}

const WidgetFormRadio: FC<IWidgetFormRadioProps> = ({
  data = {},
  field = 'radio',
  options,
  paramValue,
  paramName,
  setParmas
}) => {
  const [value, setValue] = useState('')
  const changeHandler = (val: any) => {
    setValue(val)
    setParmas((state: any) => ({
      ...state,
      [paramName]: val
    }))
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
        value={value || paramValue}
      />
    </div>
  )
}

export default WidgetFormRadio
