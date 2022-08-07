import {
  FC,
  HTMLAttributes,
  useEffect
} from 'react'
import { IAnyObject } from '@src/types'
import './index.scss'
import { useRequest } from 'ahooks'
import axios from 'axios'


interface ITextProps extends HTMLAttributes<HTMLDivElement> {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
}

const Text: FC<ITextProps> = ({
  data = {
    value: '文本框'
  },
  field = 'value',
  className,
  children,
  ...rest
}) => {
  console.log(data, 'widget-text')
  return (
    <div
      className={`app-element app-element__text ${className || ''}`} {...rest}>
      {data && data[field] ? data[field] : '文本框'}
    </div>
  )
}
export default Text