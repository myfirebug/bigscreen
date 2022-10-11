/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 21:40:17
 * @FilePath: \bigscreen\src\components\pop-confirm\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, ReactNode } from 'react'
import { message, Popconfirm } from 'antd'
import Ajax from '@src/service'
import { IAnyObject } from '@src/types'

interface IPopConfirmProps {
  // 请求接口，这里查找的@src/service
  requestName: string
  // 文本
  text?: string
  // 刷新表格
  reload?: () => void
  // 其他参数
  params?: IAnyObject
  // 回调方法
  callback?: Function
  children?: ReactNode
}

const PopConfirm: FC<IPopConfirmProps> = ({
  text,
  requestName,
  reload,
  params,
  callback,
  children
}) => {
  const onConfirm = () => {
    // 判断是否有该接口
    if (!Ajax[requestName]) {
      message.error('该接口不存在，请检查')
      return false
    }
    Ajax[requestName](params).then((res) => {
      if (res) {
        message.success(`${text}成功`)
        reload && reload()
        callback && callback()
      }
    })
  }
  return (
    <Popconfirm
      key='popconfirm'
      title={`确认${text}吗?`}
      okText='是'
      cancelText='否'
      onConfirm={onConfirm}>
      <span className='link'>{children ? children : text}</span>
    </Popconfirm>
  )
}

export default PopConfirm
