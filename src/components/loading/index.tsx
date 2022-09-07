/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-07 17:12:10
 * @FilePath: \bigscreen\src\components\loading\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from 'react'
import { Spin } from 'antd'

interface ILoadingProps {
  text?: string
}

const Loaindg: FC<ILoadingProps> = ({ text }) => {
  return (
    <>
      <div
        className='bg-loading'
        style={{
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
    </>
  )
}

export default Loaindg
