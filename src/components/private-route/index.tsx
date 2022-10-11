/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 11:54:45
 * @FilePath: \bigscreen\src\components\private-route\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import session from '@src/utils/session-storage'
import { memo, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ALL_STATE } from '@store/actionType'
import { IAnyObject } from '@src/types/index'
interface IPrivateRoute {
  component: any
  title: string
  isPrivate: boolean
  [propName: string]: any
  userinfo: IAnyObject
}
const PrivateRoute = memo(
  ({
    // eslint-disable-next-line react/prop-types
    component: Component,
    title,
    isPrivate,
    userinfo,
    ...rest
  }: IPrivateRoute) => {
    // 处理标题
    useEffect(() => {
      document.title = title
    }, [title])
    return (
      <Route
        {...rest}
        render={() => {
          if (isPrivate) {
            return userinfo.token ? (
              <Component {...rest} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login'
                }}
              />
            )
          } else {
            return <Component {...rest} />
          }
        }}
      />
    )
  }
)

// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => ({
  userinfo: state.userinfo
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
