import {
  FC,
  HTMLAttributes,
  useEffect,
  useState
} from 'react'
import { IAnyObject } from '@src/types'
import DigitalScrollItem from './components/item'
import './index.scss'


interface IDigitalScrollProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
  options: any;
}

const DigitalScroll: FC<IDigitalScrollProps> = ({
  data = {},
  field = 'value',
  options
}) => {
  const [arr, setArr] = useState<any[]>([0])
  useEffect(() => {
    if (data && data[field] && !isNaN(data[field])) {
      setArr(String(data[field]).split(''))
    }
  }, [data, field])
  return (
    <div
      style={{
        width: options.width,
        height: options.height
      }}
      className="app-element app-element__digitalscroll">
      {
        arr.map((item, idx) => (
          <DigitalScrollItem
            key={idx}
            options={options}
            value={item}></DigitalScrollItem>
        ))
      }

    </div>
  )
}
export default DigitalScroll 