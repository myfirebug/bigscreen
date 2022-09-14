import { FC, MouseEvent, useCallback, useEffect, useMemo } from 'react'
import { message, Tooltip, Modal } from 'antd'
import {
  CloseOutlined,
  PictureOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
// 配置文件
import configuration from '@src/widget/tools/main'
// 获取组件分类
import { componentsClassify } from '@src/widget'
// CreatePortal
import CreatePortal from '@components/create-portal'
import { guid } from '@src/utils/tools'
import './index.scss'
import { IPage, IWidget } from '@src/store/actionType'
import { useHistory } from 'react-router-dom'

// 微件配置文件
const { widgetConfiguration } = configuration

interface IDesignHeaderProps {
  addLargeScreenElement: (data: any) => void
  pastPage: IPage[]
  futurePage: IPage[]
  currentWidgetId: string
  currentWidget: IWidget
  currentPageId: string
  undoLargeScreen: () => void
  redoLargeScreen: () => void
  modifyLargeScreenElement: (id: string, groupId: string, data: IWidget) => void
  delLargeScreenElement: () => void
  copyLargeScreenElement: () => void
  currentWidgetGroupId: string
  group: () => void
  currentPage: IPage
  cancelGroup: () => void
  topLargescreenElement: () => void
  bottomLargescreenElement: () => void
  upLargescreenElement: () => void
  downLargescreenElement: () => void
}

const DesignHeader: FC<IDesignHeaderProps> = ({
  addLargeScreenElement,
  currentPageId,
  pastPage,
  futurePage,
  currentWidgetId,
  currentWidget,
  undoLargeScreen,
  redoLargeScreen,
  modifyLargeScreenElement,
  currentWidgetGroupId,
  delLargeScreenElement,
  copyLargeScreenElement,
  group,
  cancelGroup,
  currentPage,
  topLargescreenElement,
  bottomLargescreenElement,
  upLargescreenElement,
  downLargescreenElement
}) => {
  const history = useHistory()
  // 向页面添加组件
  const addElement = (code: string) => {
    if (!currentPageId) {
      message.error('请先添加页面哦')
      return
    }
    if (widgetConfiguration[code]) {
      addLargeScreenElement({
        id: guid(),
        linkageIds: '',
        ...widgetConfiguration[code]
      })
    } else {
      message.info('该组件正在开发中...')
    }
  }
  // 撤销
  const undoHander = useCallback(() => {
    if (pastPage.length) {
      undoLargeScreen()
    }
  }, [pastPage.length, undoLargeScreen])
  // 恢复
  const redoHandler = useCallback(() => {
    if (futurePage.length) {
      redoLargeScreen()
    }
  }, [futurePage.length, redoLargeScreen])

  // 删除
  const delHandler = useCallback(
    (e: MouseEvent) => {
      if (currentWidgetId && !currentWidgetId.includes(',')) {
        delLargeScreenElement()
        message.success('删除成功')
      }
    },
    [currentWidgetId]
  )

  // 复制
  const copyHandler = useCallback(
    (e: MouseEvent) => {
      if (currentWidgetId && !currentWidgetId.includes(',')) {
        copyLargeScreenElement()
        message.success('复制成功')
      }
    },
    [currentWidgetId]
  )

  // 分组
  const groupHandler = useCallback(
    (e: MouseEvent) => {
      if (currentWidgetId && currentWidgetId.includes(',')) {
        group()
        message.success('分组成功')
      }
    },
    [currentWidgetId]
  )

  // 取消分组
  const cancelGroupHandler = useCallback(
    (e: MouseEvent) => {
      if (currentWidgetId && currentWidgetGroupId === currentWidgetId) {
        cancelGroup()
        message.success('取消分组成功')
      }
    },
    [currentWidgetId]
  )

  // 移动上移下移左移右移
  const moveHander = useCallback(
    (field: 'top' | 'left' | 'bottom' | 'right') => {
      if (currentWidgetId) {
        const newCurrentWidget = JSON.parse(JSON.stringify(currentWidget))
        switch (field) {
          case 'top':
            newCurrentWidget.coordinateValue.top =
              newCurrentWidget.coordinateValue.top - 1
            break
          case 'left':
            newCurrentWidget.coordinateValue.left =
              newCurrentWidget.coordinateValue.left - 1
            break
          case 'bottom':
            newCurrentWidget.coordinateValue.top =
              newCurrentWidget.coordinateValue.top + 1
            break
          default:
            newCurrentWidget.coordinateValue.left =
              newCurrentWidget.coordinateValue.left + 1
        }
        modifyLargeScreenElement(
          currentWidgetId,
          currentWidgetGroupId,
          newCurrentWidget
        )
      }
    },
    [currentWidgetId, currentWidget, modifyLargeScreenElement]
  )

  // 确认框
  const showConfirm = (message: string, callback: Function) => {
    Modal.confirm({
      title: `您确定要${message}?`,
      icon: <ExclamationCircleOutlined />,
      content: '温馨提示',
      onOk() {
        callback && callback()
      }
    })
  }

  useEffect(() => {
    const keyupHander = (e: any) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.ctrlKey) {
        switch (e.keyCode) {
          case 90:
            if (e.altKey) {
              // 恢复
              redoHandler()
            } else {
              // 撤销
              undoHander()
            }
            break
          // 左移
          case 37:
            moveHander('left')
            break
          // 上移
          case 38:
            moveHander('top')
            break
          // 右移
          case 39:
            moveHander('right')
            break
          // 下移
          case 40:
            moveHander('bottom')
            break
          default:
        }
      } else {
        switch (e.keyCode) {
          // 删除
          case 46:
            showConfirm('删除', delHandler)
            break
          default:
        }
      }
    }
    document.addEventListener('keyup', keyupHander)

    return () => {
      document.removeEventListener('keyup', keyupHander)
    }
  }, [
    undoHander,
    redoHandler,
    moveHander,
    delHandler,
    copyHandler,
    currentWidgetId,
    showConfirm
  ])

  // 上移一层
  const isUp = useMemo(() => {
    let flag = false
    if (!currentPage.widgets) {
      return flag
    }
    // 找组下标
    const groupIndex = currentPage.widgets.findIndex(
      (item) => item.id === currentWidgetGroupId
    )
    // 如果有分组，则找分组下面的widget
    if (groupIndex !== -1 && currentWidgetGroupId !== currentWidgetId) {
      if (
        currentPage.widgets[groupIndex].widgets.findIndex(
          (item) => item.id === currentWidgetId
        ) > 0
      ) {
        return true
      }
    } else if (
      currentPage.widgets.findIndex((item) => item.id === currentWidgetId) > 0
    ) {
      return true
    }

    return flag
  }, [currentPage, currentWidgetGroupId, currentWidgetId])

  // 上移一层
  const isDown = useMemo(() => {
    let flag = false
    if (!currentPage.widgets) {
      return flag
    }
    // 找组下标
    const groupIndex = currentPage.widgets.findIndex(
      (item) => item.id === currentWidgetGroupId
    )
    // 如果有分组，则找分组下面的widget
    if (groupIndex !== -1 && currentWidgetGroupId !== currentWidgetId) {
      if (
        currentPage.widgets[groupIndex].widgets.findIndex(
          (item) => item.id === currentWidgetId
        ) !=
        currentPage.widgets[groupIndex].widgets.length - 1
      ) {
        return true
      }
    } else if (
      currentPage.widgets.findIndex((item) => item.id === currentWidgetId) !==
      currentPage.widgets.length - 1
    ) {
      return true
    }

    return flag
  }, [currentPage, currentWidgetGroupId, currentWidgetId])

  return (
    <div className='app-screen-disign__header'>
      <CreatePortal>
        <ul className='app-content-menu' id='js-content-menu'>
          <li
            onClick={copyHandler}
            className={`app-content-menu__item ${
              currentWidgetId && !currentWidgetId.includes(',')
                ? ''
                : 'is-disabled'
            }`}>
            <span className='app-icon'>&#xe7bc;</span>
            <span className='name'>复制图层</span>
          </li>
          <li
            onClick={() => showConfirm('删除', delHandler)}
            className={`app-content-menu__item is-border ${
              currentWidgetId && !currentWidgetId.includes(',')
                ? ''
                : 'is-disabled'
            }`}>
            <span className='app-icon'>&#xe7c3;</span>
            <span className='name'>删除图层</span>
          </li>
          <li
            onClick={() => {
              isUp && upLargescreenElement()
            }}
            className={`app-content-menu__item ${!isUp ? 'is-disabled' : ''}`}>
            <span className='app-icon'>&#xe7ef;</span>
            <span className='name'>上移一层</span>
          </li>
          <li
            onClick={() => {
              isDown && downLargescreenElement()
            }}
            className={`app-content-menu__item ${
              !isDown ? 'is-disabled' : ''
            }`}>
            <span className='app-icon'>&#xe7f1;</span>
            <span className='name'>下移一层</span>
          </li>

          <li
            onClick={() => {
              isUp && topLargescreenElement()
            }}
            className={`app-content-menu__item ${!isUp ? 'is-disabled' : ''}`}>
            <span className='app-icon'>&#xe786;</span>
            <span className='name'>置顶图层</span>
          </li>

          <li
            onClick={() => {
              isDown && bottomLargescreenElement()
            }}
            className={`app-content-menu__item is-border ${
              !isDown ? 'is-disabled' : ''
            }`}>
            <span className='app-icon'>&#xe742;</span>
            <span className='name'>置底图层</span>
          </li>
          <li
            onClick={groupHandler}
            className={`app-content-menu__item  ${
              currentWidgetGroupId || !currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <span className='app-icon'>&#xe83f;</span>
            <span className='name'>分组</span>
          </li>
          <li
            onClick={cancelGroupHandler}
            className={`app-content-menu__item  ${
              currentWidgetGroupId && currentWidgetGroupId === currentWidgetId
                ? ''
                : 'is-disabled'
            }`}>
            <span className='app-icon'>&#xe632;</span>
            <span className='name'>拆分</span>
          </li>
        </ul>
      </CreatePortal>
      {/* elements start */}
      <ul className='app-screen-disign__header--left'>
        {componentsClassify.map((item: any, index: number) => (
          <li
            className={`${!currentPageId ? 'is-disabled' : ''}`}
            onClick={() => {
              if (!item.datas) {
                addElement(item.widgetName)
              }
            }}
            key={item.type}>
            <span
              className='app-icon'
              dangerouslySetInnerHTML={{
                __html: item.icon
              }}></span>
            <p>{item.name}</p>
            {item.datas && item.datas.length ? (
              <div className='elements'>
                {item.datas.map((subItem: any, subIndex: string) => (
                  <div
                    onClick={() => {
                      if (subItem.widgetName) {
                        if (
                          (item.type === 'form' && currentWidgetGroupId) ||
                          item.type !== 'form'
                        ) {
                          addElement(subItem.widgetName)
                        }
                      }
                    }}
                    key={subIndex}>
                    <div className='img'>
                      {subItem.src ? (
                        <img src={subItem.src} />
                      ) : (
                        <PictureOutlined />
                      )}
                    </div>
                    <div className='name' title={subItem.name}>
                      {subItem.name}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
      {/* elements end */}
      <div className='app-screen-disign__header--center'>
        <ul className='shortcuts-group'>
          <li
            onClick={groupHandler}
            className={`${
              currentWidgetGroupId || !currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <Tooltip title='分组' placement='bottom'>
              <span className='app-icon'>&#xe83f;</span>
              <p>分组</p>
            </Tooltip>
          </li>
          <li
            onClick={cancelGroupHandler}
            className={`${
              currentWidgetGroupId && currentWidgetGroupId === currentWidgetId
                ? ''
                : 'is-disabled'
            }`}>
            <Tooltip title='拆分' placement='bottom'>
              <span className='app-icon'>&#xe632;</span>
              <p>拆分</p>
            </Tooltip>
          </li>
        </ul>
        <ul className='shortcuts-group'>
          <li
            onClick={copyHandler}
            className={`${
              currentWidgetId && !currentWidgetId.includes(',')
                ? ''
                : 'is-disabled'
            }`}>
            <Tooltip title='复制' placement='bottom'>
              <span className='app-icon'>&#xe7bc;</span>
              <p>复制</p>
            </Tooltip>
          </li>
          <li
            onClick={() => showConfirm('删除', delHandler)}
            className={`${
              currentWidgetId && !currentWidgetId.includes(',')
                ? ''
                : 'is-disabled'
            }`}>
            <Tooltip title='删除(delete)' placement='bottom'>
              <span className='app-icon'>&#xe7c3;</span>
              <p>删除</p>
            </Tooltip>
          </li>
        </ul>
        {/* <ul className='shortcuts-group'>
          <li
            onClick={undoHander}
            className={`${!pastPage.length ? 'is-disabled' : ''}`}>
            <Tooltip title="撤销(ctrl+z)" placement="bottom">
              <RotateLeftOutlined />
              <p>撤销</p>
            </Tooltip>
          </li>
          <li
            onClick={redoHandler}
            className={`${!futurePage.length ? 'is-disabled' : ''}`}>
            <Tooltip title="恢复(ctrl+alt+z)" placement="bottom">
              <RotateRightOutlined />
              <p>恢复</p>
            </Tooltip>
          </li>
        </ul> */}
        <ul className='shortcuts-group'>
          <li
            onClick={() => moveHander('top')}
            className={`${
              !currentWidgetId || currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <Tooltip title='上移(ctrl+↑)' placement='bottom'>
              <span className='app-icon'>&#xe7ef;</span>
              <p>上移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('bottom')}
            className={`${
              !currentWidgetId || currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <Tooltip title='下移(ctrl+↓)' placement='bottom'>
              <span className='app-icon'>&#xe7f1;</span>
              <p>下移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('left')}
            className={`${
              !currentWidgetId || currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <Tooltip title='左移(ctrl+←)' placement='bottom'>
              <span className='app-icon'>&#xe7f0;</span>
              <p>左移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('right')}
            className={`${
              !currentWidgetId || currentWidgetId.includes(',')
                ? 'is-disabled'
                : ''
            }`}>
            <Tooltip title='右移(ctrl+→)' placement='bottom'>
              <span className='app-icon'>&#xe7ee;</span>
              <p>右移</p>
            </Tooltip>
          </li>
        </ul>
        <ul className='shortcuts-group'>
          <li className={`${!currentPageId ? 'is-disabled' : ''}`}>
            <Tooltip title='保存(ctrl+s)' placement='bottom'>
              <span className='app-icon'>&#xe791;</span>
              <p>保存</p>
            </Tooltip>
          </li>
          <li
            onClick={() => {
              if (currentPageId) {
                history.push(`/frame/preview?pageId=${currentPageId}`)
              }
            }}
            className={`${!currentPageId ? 'is-disabled' : ''}`}>
            <Tooltip title='预览(ctrl+p)' placement='bottom'>
              <span className='app-icon'>&#xe78f;</span>
              <p>预览</p>
            </Tooltip>
          </li>
        </ul>
      </div>
      <ul className='app-screen-disign__header--right'>
        <li onClick={() => history.goBack()}>
          <CloseOutlined />
        </li>
      </ul>
    </div>
  )
}

export default DesignHeader
