import {
  FC
} from 'react'
import { IAnyObject } from '@src/types'
import { getStyles } from '@utils/tools'
import './index.scss'
import { PictureOutlined } from '@ant-design/icons'


interface IImageProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
  options: any;

}

const Image: FC<IImageProps> = ({
  data = {},
  options,
  field = 'imgSrc'
}) => {
  return (
    <div
      style={getStyles(options)}
      className="app-element app-element__image animated">
      {
        data && data[field] ?
          <img src={data[field]} alt="" /> :
          <PictureOutlined />
      }
    </div>
  )
}
export default Image