import React, {
  FC, useCallback, useEffect
} from 'react'
import { message, Tooltip } from 'antd'
import {
  SaveOutlined,
  EyeOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ArrowUpOutlined,
  CloseOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  FolderOutlined,
  FolderAddOutlined,
  DeleteOutlined,
  CopyOutlined
} from '@ant-design/icons'
// 配置文件
import { widgetConfigure } from '@src/widget/tools'
// 获取组件分类
import { componentsClassify } from '@src/widget'
import { guid } from '@src/utils/tools'
import './index.scss'
import { IPage, IWidget } from '@src/store/actionType'
import {
  useHistory
} from 'react-router-dom'

interface IDesignHeaderProps {
  addLargeScreenElement: (data: any) => void;
  pastPage: IPage[];
  futurePage: IPage[];
  currentWidgetId: string;
  currentWidget: IWidget;
  currentPageId: string;
  undoLargeScreen: () => void;
  redoLargeScreen: () => void;
  modifyLargeScreenElement: (id: string, data: IWidget, groupId?: string) => void;
  delLargeScreenElement: () => void;
  copyLargeScreenElement: () => void;
  currentWidgetGroupId: string;
  group: () => void;
  cancelGroup: () => void;
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
  cancelGroup
}) => {
  const history = useHistory()
  // 向页面添加组件
  const addElement = (code: string) => {
    if (!currentPageId) {
      message.error('请先添加页面哦')
      return
    }
    const index = widgetConfigure.findIndex((item: any) => item.code === code)
    if (index !== -1) {
      addLargeScreenElement({
        id: guid(),
        ...widgetConfigure[index]
      })
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
  const delHandler = useCallback(() => {
    if (currentWidgetId && !currentWidgetId.includes(',')) {
      delLargeScreenElement()
      message.success('删除成功')
    }
  }, [currentWidgetId])

  // 复制
  const copyHandler = useCallback(() => {
    if (currentWidgetId && !currentWidgetId.includes(',')) {
      copyLargeScreenElement()
      message.success('复制成功')
    }
  }, [currentWidgetId])

  // 分组
  const groupHandler = useCallback(() => {
    if (currentWidgetId && currentWidgetId.includes(',')) {
      group()
      message.success('分组成功')
    }
  }, [currentWidgetId])

  // 取消分组
  const cancelGroupHandler = useCallback(() => {
    if (currentWidgetId && !currentWidgetId.includes(',')) {
      cancelGroup()
      message.success('取消分组成功')
    }
  }, [currentWidgetId])

  // 移动上移下移左移右移
  const moveHander = useCallback((field: 'top' | 'left' | 'bottom' | 'right') => {
    if (currentWidgetId) {
      const newCurrentWidget = JSON.parse(JSON.stringify(currentWidget))
      switch (field) {
        case 'top':
          newCurrentWidget.coordinateValue.top = newCurrentWidget.coordinateValue.top - 10
          break
        case 'left':
          newCurrentWidget.coordinateValue.left = newCurrentWidget.coordinateValue.left - 10
          break
        case 'bottom': newCurrentWidget.coordinateValue.top = newCurrentWidget.coordinateValue.top + 10
          break
        default:
          newCurrentWidget.coordinateValue.left = newCurrentWidget.coordinateValue.left + 10
      }
      modifyLargeScreenElement(currentWidgetId, newCurrentWidget)
    }
  }, [currentWidgetId, currentWidget, modifyLargeScreenElement])

  useEffect(() => {
    const keyupHander = (e: any) => {
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
          // 删除
          case 46:
            delHandler()
            break
          default:
        }
      }
    }
    document.addEventListener('keyup', keyupHander)

    return () => {
      document.removeEventListener('keyup', keyupHander)
    }
  }, [undoHander, redoHandler, moveHander, delHandler, copyHandler, currentWidgetId])

  return (
    <div className='app-screen-disign__header'>
      {/* elements start */}
      <ul className="app-screen-disign__header--left">
        {
          componentsClassify.map((item: any, index: number) => (
            <li
              className={`${!currentPageId ? 'is-disabled' : ''}`}
              onClick={() => {
                if (item.widgetName) {
                  addElement(item.widgetName)
                }
              }}
              key={item.type}>
              {item.icon}
              <p>{item.name}</p>
              {
                item.data ? <div className="elements"></div> : ''
              }
            </li>
          ))
        }
      </ul>
      {/* elements end */}
      <div className='app-screen-disign__header--center'>
        <ul className='shortcuts-group'>
          <li
            onClick={groupHandler}
            className={`${currentWidgetGroupId || !currentWidgetId.includes(',') ? 'is-disabled' : ''}`}>
            <Tooltip title="分组" placement="bottom">
              <FolderAddOutlined />
              <p>分组</p>
            </Tooltip>
          </li>
          <li
            onClick={cancelGroupHandler}
            className={`${currentWidgetGroupId && currentWidgetGroupId === currentWidgetId ? '' : 'is-disabled'}`}>
            <Tooltip title="拆分" placement="bottom">
              <FolderOutlined />
              <p>拆分</p>
            </Tooltip>
          </li>
        </ul>
        <ul className='shortcuts-group'>
          <li
            onClick={copyHandler}
            className={`${currentWidgetId && !currentWidgetId.includes(',') ? '' : 'is-disabled'}`}>
            <Tooltip title="复制" placement="bottom">
              <CopyOutlined />
              <p>复制</p>
            </Tooltip>
          </li>
          <li
            onClick={delHandler}
            className={`${currentWidgetId && !currentWidgetId.includes(',') ? '' : 'is-disabled'}`}>
            <Tooltip title="删除(ctrl+delete)" placement="bottom">
              <DeleteOutlined />
              <p>删除</p>
            </Tooltip>
          </li>
        </ul>
        <ul className='shortcuts-group'>
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
        </ul>
        <ul className='shortcuts-group'>
          <li
            onClick={() => moveHander('top')}
            className={`${!currentWidgetId || currentWidgetId.includes(',') ? 'is-disabled' : ''}`}>
            <Tooltip title="上移(ctrl+↑)" placement="bottom">
              <ArrowUpOutlined />
              <p>上移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('bottom')}
            className={`${!currentWidgetId || currentWidgetId.includes(',') ? 'is-disabled' : ''}`}>
            <Tooltip title="下移(ctrl+↓)" placement="bottom">
              <ArrowDownOutlined />
              <p>下移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('left')}
            className={`${!currentWidgetId || currentWidgetId.includes(',') ? 'is-disabled' : ''}`}>
            <Tooltip title="左移(ctrl+←)" placement="bottom">
              <ArrowLeftOutlined />
              <p>左移</p>
            </Tooltip>
          </li>
          <li
            onClick={() => moveHander('right')}
            className={`${!currentWidgetId || currentWidgetId.includes(',') ? 'is-disabled' : ''}`}>
            <Tooltip title="右移(ctrl+→)" placement="bottom">
              <ArrowRightOutlined />
              <p>右移</p>
            </Tooltip>
          </li>
        </ul>
        <ul className='shortcuts-group'>
          <li className={`${!currentPageId ? 'is-disabled' : ''}`}>
            <Tooltip title="保存(ctrl+s)" placement="bottom">
              <SaveOutlined />
              <p>保存</p>
            </Tooltip>
          </li>
          <li className={`${!currentPageId ? 'is-disabled' : ''}`}>
            <Tooltip title="预览(ctrl+p)" placement="bottom">
              <EyeOutlined />
              <p>预览</p>
            </Tooltip>
          </li>
        </ul>
      </div>
      <ul className="app-screen-disign__header--right">
        <li onClick={() => history.goBack()}><CloseOutlined /></li>
      </ul>
    </div>
  )
}

export default DesignHeader