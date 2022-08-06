import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import App from './App'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './store/index'
import '@ant-design/pro-table/dist/table.css'
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
  </Provider>, document.getElementById('root'))
