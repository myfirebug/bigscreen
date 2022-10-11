/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-10 22:23:39
 * @FilePath: \bigscreen\src\App.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, Suspense, lazy } from 'react'
import Loading from '@src/components/loading'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
// 私有路由
import ComPrivateRoute from '@src/components/private-route'

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {/*登录*/}
          <Route
            path='/login'
            component={lazy(
              () => import(/*webpackChunkName:"login"*/ '@pages/login/index')
            )}
          />
          {/*有头部的框架*/}
          <ComPrivateRoute
            isPrivate={true}
            path='/frame'
            title='框架'
            component={lazy(
              () => import(/*webpackChunkName:"frame"*/ '@pages/frame')
            )}
          />
          <Redirect path='*' exact to='/login' />
        </Switch>
      </Router>
      {/* 接口loading */}
      <div id='js_loading'>
        <Spin tip='loading' />
      </div>
    </Suspense>
  )
}

export default App
