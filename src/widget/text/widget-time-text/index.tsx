import {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import './index.scss'
import { fmtDate } from '@src/utils/tools'


interface ITimeTextProps extends HTMLAttributes<HTMLDivElement> {
  style: any;
}

const TimeText: FC<ITimeTextProps> = ({
  className,
  style,
  ...rest
}) => {
  const timer = useRef<any>(null)
  // 初始化时间
  const [text, setText] = useState(() => {
    return fmtDate(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
  })
  // 获取时间
  const getText = useCallback(() => {
    setText(fmtDate(new Date().getTime(), style.fmtDate || 'yyyy-MM-dd hh:mm:ss'))
  }, [style.fmtDate])

  useEffect(() => {
    timer.current = setInterval(getText, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [timer, getText])
  return (
    <div
      className="app-element app-element__timetext" style={style} {...rest}>
      {text}
    </div>
  )
}
export default TimeText 