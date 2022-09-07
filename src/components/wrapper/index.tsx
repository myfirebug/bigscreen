/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-07 09:33:32
 * @FilePath: \bigscreen\src\components\wrapper\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, ReactNode, HTMLAttributes } from 'react'
import { Spin, Empty } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import './index.scss'

interface IWrapperProps extends HTMLAttributes<HTMLDivElement> {
  loading: boolean
  error: boolean
  nodata: boolean
  children: ReactNode
}

const Wrapper: FC<IWrapperProps> = ({ loading, error, nodata, children }) => {
  return (
    <div className='app-wrapper'>
      {loading && (
        <div className='app-wrapper__loading'>
          <Spin />
        </div>
      )}
      {error && !loading && (
        <div className='app-wrapper__error'>
          <CloseCircleOutlined />
          <p
            style={{
              color: '#00000040',
              margin: '0'
            }}>
            加载失败
          </p>
        </div>
      )}
      {!loading && !error && nodata && (
        <div className='app-wrapper__nodata'>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
      {!loading && !error && !nodata && children}
    </div>
  )
}

export default Wrapper
