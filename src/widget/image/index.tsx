import {
  FC,
  HTMLAttributes
} from 'react'
import { IAnyObject } from '@src/types'
import './index.scss'
import { PictureOutlined } from '@ant-design/icons'


interface IImageProps extends HTMLAttributes<HTMLImageElement> {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
}

const Image: FC<IImageProps> = ({
  data = {},
  field = 'imgSrc',
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`app-element app-element__image ${className || ''}`} {...rest}>
      {
        data && data[field] ?
          <img src={data[field]} alt="" /> :
          <PictureOutlined />
      }
    </div>
  )
}
export default Image