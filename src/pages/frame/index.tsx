import {
  FC, useEffect, useMemo
} from 'react'
import { ALL_STATE, IRouter, IMenu, IBreadCrumbsItem } from '@store/actionType'
import { connect } from 'react-redux'
import { getMenu } from '@src/store/actions/authorization'
import {
  LogoutOutlined
} from '@ant-design/icons'
import { Modal } from 'antd'
import { useHistory, RouteProps } from 'react-router-dom'
import Routers from './components/routers'
import BreadCrumbs from './components/bread-crumbs'
import CustomMenu from './components/menu'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import './index.scss'


interface IFrameProps extends RouteProps {
  routers: IRouter[];
  getMenu: (menu?: IMenu[]) => void;
  menu: IMenu[];
  breadCrumbs: IBreadCrumbsItem[];
}

const Frame: FC<IFrameProps> = ({
  routers,
  getMenu,
  menu,
  breadCrumbs,
  ...rest
}) => {
  const history = useHistory()
  console.log(rest.location?.pathname, 'rest.location?.pathname')
  // 判断全屏的路由
  const isFullscreen = useMemo(() => {
    const map = ['/frame/configuration']
    if (map.includes(rest.location?.pathname as string)) {
      return true
    }
    return false
  }, [rest.location?.pathname])

  useEffect(() => {
    if (!menu.length) {
      getMenu()
    }
  }, [getMenu, menu])

  // 退出登录
  const loginOut = () => {
    Modal.confirm({
      title: '确定要退出吗?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk() {
        window.sessionStorage.clear()
        history.replace('/login')
      }
    })

  }
  return (
    <div className="app-screen-layout" style={{
      paddingTop: isFullscreen ? 0 : 50
    }}>
      {
        !isFullscreen ?
          <>
            <header className="app-screen-layout__header">
              <div className="left">
                <div className="logo"></div>
                <div className="sitename">大屏后台管理系统</div>
              </div>
              <div className="center"></div>
              <div className="right">
                <div className='operation'>
                  <span className='avatar'>
                    <img src="" alt="头像" />
                  </span>
                  <span className='username'>欢迎xxxx</span>
                  <LogoutOutlined
                    className='exit'
                    style={{ fontSize: 20 }}
                    onClick={loginOut}
                  />
                </div>
              </div>
            </header>
            <section className="app-screen-layout__body">
              <div className="app-screen-layout__left">
                <CustomMenu
                  menu={menu}
                  routers={routers}
                  currPageTabKey={rest.location?.pathname as string} />
              </div>
              <div className="app-screen-layout__right">
                <BreadCrumbs
                  currPageTabKey={rest.location?.pathname as string}
                  breadCrumbs={breadCrumbs} />
                <div className="app-screen-layout__main">
                  <Routers routers={routers} />
                </div>
              </div>
            </section>
          </> : <Routers routers={routers} />
      }

    </div>
  )
}

// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => ({
  routers: state.authorization.routers,
  menu: state.authorization.menu,
  breadCrumbs: state.authorization.breadCrumbs
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  getMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame)