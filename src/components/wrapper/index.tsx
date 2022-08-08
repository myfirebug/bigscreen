import {
  FC, ReactNode
} from 'react'
import { Spin, Empty } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import './index.scss'

interface IWrapperProps {
  loading: boolean;
  error: boolean;
  nodata: boolean;
  children: ReactNode
}

const Wrapper: FC<IWrapperProps> = ({
  loading,
  error,
  nodata,
  children
}) => {
  return (
    <div className="app-wrapper">
      {
        loading && <div className='app-wrapper__loading'>
          <Spin tip="loading..." />
        </div>
      }
      {
        error && !loading && <div className='app-wrapper__error'>
          <CloseCircleOutlined />
          <p style={{
            color: '#00000040',
            margin: '0'
          }}>加载失败</p>
        </div>
      }
      {
        !loading && !error && nodata && <div className="app-wrapper__nodata">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      }
      {
        !loading && !error && !nodata && children
      }
    </div>
  )
}

export default Wrapper