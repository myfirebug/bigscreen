/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-08-28 14:00:20
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-05 09:52:27
 * @FilePath: \bigscreen\src\widget\form\widget-form-radio.tsx
 * Copyright (c) 2022 by hejp email: 378540660@qq.com, All Rights Reserved.
 */
import { FC } from 'react'
import { IAnyObject } from '@src/types'
import { getStyles } from '@utils/tools'
import { Radio } from 'antd'

interface IWidgetFormRadioProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject
  // 字段名
  field: string
  options: any
}

const WidgetFormRadio: FC<IWidgetFormRadioProps> = ({
  data = {},
  field = 'radio',
  options
}) => {
  return (
    <div
      style={getStyles(options)}
      className='app-element app-element__radio animated'>
      <Radio.Group
        options={data && data[field] ? data[field] : []}
        onChange={(e) => {
          console.log(e)
        }}
        value={field || 'radio'}
      />
    </div>
  )
}

export default WidgetFormRadio
