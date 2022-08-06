import {
  FC
} from 'react'
import { Spin } from 'antd'

interface ILoadingProps {
  text?: string;
}

const Loaindg: FC<ILoadingProps> = ({
  text
}) => {
  return (
    <div className="bg-loading" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    }}>
      <Spin tip={text || '资源加载中...'} />
    </div>
  )
}

export default Loaindg