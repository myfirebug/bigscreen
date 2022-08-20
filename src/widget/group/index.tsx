/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-08-20 16:07:16
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-08-20 21:46:11
 * @FilePath: \bigscreen\src\widget\group\index.tsx
 * Copyright (c) 2022 by hejp email: 378540660@qq.com, All Rights Reserved.
 */
import { FC, HTMLAttributes, ReactNode } from 'react'
import './index.scss'
import { getStyles } from '@utils/tools'

interface IGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: any
  children: ReactNode
}
const Group: FC<IGroupProps> = ({ options, children }) => {
  return (
    <div
      style={getStyles(options)}
      className='app-element app-element__group animated'>
      {children}
    </div>
  )
}
export default Group
