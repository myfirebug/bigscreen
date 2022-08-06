import React, {
  memo,
  useState,
  useEffect
} from 'react'
import { Menu } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import { IMenu, IRouter } from '@store/actionType'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import session from '@src/utils/session-storage'

const { SubMenu } = Menu

interface ICustomMenuProps {
  menu: IMenu[];
  routers: IRouter[];
  currPageTabKey: string;
}

const CustomMenu = memo((props: ICustomMenuProps) => {
  const {
    menu,
    routers,
    currPageTabKey
  } = props
  let history = useHistory()
  // 获取当前选中的路由
  const [current, setCurrent] = useState('/home')
  // 展开收起菜单
  const [collapsed, setCollapsed] = useState(() => {
    return Boolean(session.getItem('collapsed'))
  })
  // 所有一级菜单
  const rootSubmenuKeys: string[] = [];
  // 打开的菜单
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    session.setItem('collapsed', collapsed)
  }, [collapsed])

  // 获取首次选中的某个菜单
  useEffect(() => {
    const href = currPageTabKey
    if (routers.some(item => item.path === href)) {
      const routerSplit = href.split('/')
      const currentOpenKeys: string[] = []
      routerSplit.pop()
      if (routerSplit.length >= 1) {
        for (let i = 1; i < routerSplit.length; i++) {
          currentOpenKeys.push(routerSplit.slice(0, i + 1).join('/'))
        }
        setOpenKeys(currentOpenKeys)
      }
    }

    setCurrent(href)
  }, [currPageTabKey])

  // 动态生存菜单
  const getMenuNodes = (menuList: any) => {
    return menuList.map((item: any) => {
      if (item.subResource && item.subResource.some((subItem: any) => subItem.isMemu === 1)) {
        if (item.resUrl && item.resUrl.split('/').length === 1) {
          rootSubmenuKeys.push(item.resUrl)
        }
        return (
          <SubMenu
            title={item.resTitle}
            icon={
              item.resIcon ?
                <span className='bg-icon' dangerouslySetInnerHTML={{ __html: `&#x${item.resIcon}` }} />
                : null
            }
            key={item.resUrl}
          >
            {
              getMenuNodes(item.subResource)
            }
          </SubMenu>
        );
      }
      if (item.components) {
        return (
          <Menu.Item
            title={item.resTitle}
            icon={
              item.resIcon ?
                <span className='bg-icon' dangerouslySetInnerHTML={{ __html: `&#x${item.resIcon}` }} />
                : null
            }
            key={item.resUrl}>
            <Link to={item.resUrl}>{item.resTitle}</Link>
          </Menu.Item>
        );
      }
    });
  }

  // 选择中菜单这里用于跳转
  const menuClickHandler = (key: string) => {
    setCurrent(key)
  }

  // 展开收起菜单时
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className={`bg-menus ${collapsed ? 'is-close' : ''}`}>
      <div
        className='switch'
        onClick={() => {
          setCollapsed(!collapsed)
        }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </div>
      <Menu
        inlineCollapsed={Boolean(collapsed)}
        selectedKeys={[current]}
        onClick={(e: any) => menuClickHandler(e.key)}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        theme="dark"
      >
        {getMenuNodes(menu.filter(item => item.flag))}
      </Menu>
    </div>
  )
})

export default CustomMenu