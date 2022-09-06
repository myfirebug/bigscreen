/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-06 18:08:20
 * @FilePath: \bigscreen\src\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import App from './App'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './store/index'
import '@ant-design/pro-table/dist/table.css'
// import 'default-passive-events'
// 国际化
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.min.css'
import './index.scss'
moment.locale('zh-cn')
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
