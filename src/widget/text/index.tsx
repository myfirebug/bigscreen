import {
  FC,
  HTMLAttributes
} from 'react'
import { IAnyObject } from '@src/types'
import './index.scss'

interface IWidgetConfigProps {
  flag: boolean,
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
  // 类型
  dataType: 'mock' | 'dynamic';
  // 类型
  method: 'get' | 'post',
  // 接口地址
  url: string;
  // 接口参数
  params: IAnyObject
}

interface ITextProps extends HTMLAttributes<HTMLDivElement> {
  config: IWidgetConfigProps;
}

const Text: FC<ITextProps> = ({
  config = {
    flag: false,
    data: {
      value: '文本框'
    },
    field: 'value',
    dataType: 'mock',
    method: 'get',
    url: '',
    params: {}
  },
  className,
  children,
  ...rest
}) => {
  console.log(config)
  return (
    <div
      className={`app-element app-element__text ${className || ''}`} {...rest}>
      {config.data && config.data[config.field] ? config.data[config.field] : '文本框'}
    </div>
  )
}
export default Text