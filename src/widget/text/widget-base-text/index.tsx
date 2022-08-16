import {
  FC
} from 'react'
import { IAnyObject } from '@src/types'
import { getStyles } from '@utils/tools'
import './index.scss'


interface IBaseTextProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
  options: any;
}

const BaseText: FC<IBaseTextProps> = ({
  data = {},
  field = 'value',
  options
}) => {
  return (
    <div
      style={getStyles(options)}
      className="app-element app-element__basetext animated">
      {data && data[field] ? data[field] : '文本框'}
    </div>
  )
}
export default BaseText 