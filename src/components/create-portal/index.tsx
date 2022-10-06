/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-07 20:16:24
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-06 21:12:19
 * @FilePath: \bigscreen\src\components\create-portal\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, ReactNode, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

interface CreatePortalProps {
  children: ReactNode
}

const CreatePortal: FC<CreatePortalProps> = ({ children }) => {
  let el = useRef(document.createElement('div'))
  useEffect(() => {
    document.body.appendChild(el.current)
    return () => {
      document.body.removeChild(el.current)
    }
  }, [el])
  return ReactDOM.createPortal(children, el.current)
}

export default CreatePortal
