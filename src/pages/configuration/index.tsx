import React, { FC, useEffect, useState, useRef } from 'react'
import { ALL_STATE, IPage, IScreen, IWidget } from '@store/actionType'
import { connect } from 'react-redux'
import { Slider } from 'antd'
import {
  getLargeScreenPages,
  addLargeScreenPage,
  delLargeScreenPage,
  modifyLargeScreenPage,
  addLargeScreenElement,
  delLargeScreenElement,
  modifyLargeScreenElement,
  copyLargeScreenElement,
  undoLargeScreen,
  redoLargeScreen,
  modifyScreen,
  changeLargeScreenPage,
  changeLargeScreenElement,
  showOrHideLargeScreenElement,
  group,
  cancelGroup
} from '@store/actions/largeScreen'

// 头部
import DesignHeader from './components/header'
// 主题左边
import DesignBodyLeft from './components/left'
// 主题右边
import DesignBodyRight from './components/right'
// 尺子
import Ruler from './components/ruler'
// 拖动区域
import DesignBodyCenter from './components/center'

import './index.scss'

interface IDisignProps {
  modifyScreen: (datas: any) => void
  screen: IScreen
  pages: IPage[]
  addLargeScreenPage: (data: IPage, callback?: Function) => void
  delLargeScreenPage: (id: string, callback?: Function) => void
  modifyLargeScreenPage: (id: string, data: IPage, callback?: Function) => void
  changeLargeScreenPage: (id: string, callback?: Function) => void
  addLargeScreenElement: (data: any) => void
  modifyLargeScreenElement: (id: string, data: IWidget) => void
  changeLargeScreenElement: (id: string, groupId?: string) => void
  showOrHideLargeScreenElement: (id: string, groupId?: string) => void
  delLargeScreenElement: () => void
  copyLargeScreenElement: () => void
  group: () => void
  cancelGroup: () => void
  currentPage: IPage
  currentWidgetId: string
  currentWidget: IWidget
  pastPage: IPage[]
  futurePage: IPage[]
  undoLargeScreen: () => void
  redoLargeScreen: () => void
  currentWidgetGroupId: string
}

const Disign: FC<IDisignProps> = ({
  modifyScreen,
  screen,
  pages,
  addLargeScreenPage,
  delLargeScreenPage,
  modifyLargeScreenPage,
  changeLargeScreenPage,
  addLargeScreenElement,
  currentPage,
  currentWidgetId,
  currentWidget,
  modifyLargeScreenElement,
  pastPage,
  futurePage,
  undoLargeScreen,
  redoLargeScreen,
  changeLargeScreenElement,
  currentWidgetGroupId,
  delLargeScreenElement,
  copyLargeScreenElement,
  group,
  cancelGroup,
  showOrHideLargeScreenElement
}) => {
  // 获取装组件的盒子，这里需要获取他的宽度
  const elementsWrapper = useRef<HTMLDivElement>(null)
  const [elementsWrapperAttr, setElementsWrapperAttr] = useState<any>({})
  // 获取放大缩小比例
  const [cale, setCale] = useState(0)
  // 显示隐藏左侧
  const [leftFlag, setLeftFlag] = useState(true)
  // 显示隐藏右侧
  const [rightFlag, setRightFlag] = useState(true)

  // 这里主要设置默认的缩放比例
  useEffect(() => {
    if (elementsWrapperAttr.width && screen.width) {
      setCale(
        Number((elementsWrapperAttr.width / Number(screen.width)).toFixed(4))
      )
    }
  }, [screen.width, elementsWrapperAttr.width])

  // 获取elementsWrapper的宽度
  useEffect(() => {
    const resizeHander = () => {
      setElementsWrapperAttr({
        width: elementsWrapper.current?.offsetWidth
      })
    }
    resizeHander()
    // 绑定resize事件
    window.addEventListener('resize', resizeHander)

    return () => {
      // 清除resize事件
      window.removeEventListener('resize', resizeHander)
    }
  }, [elementsWrapper.current])

  // 取消选中元素或者组
  const cancelSelectedElementHander = (e: any) => {
    if (currentWidgetId) {
      changeLargeScreenElement('')
    }
  }
  return (
    <div className='app-screen-disign'>
      {/* 头部 */}
      <DesignHeader
        undoLargeScreen={undoLargeScreen}
        redoLargeScreen={redoLargeScreen}
        addLargeScreenElement={addLargeScreenElement}
        currentPageId={currentPage.id}
        pastPage={pastPage}
        futurePage={futurePage}
        currentWidgetId={currentWidgetId}
        modifyLargeScreenElement={modifyLargeScreenElement}
        delLargeScreenElement={delLargeScreenElement}
        copyLargeScreenElement={copyLargeScreenElement}
        currentWidgetGroupId={currentWidgetGroupId}
        group={group}
        cancelGroup={cancelGroup}
        currentWidget={currentWidget}
      />
      {/* 内容区 */}
      <div className='app-screen-disign__body'>
        {/* 左边 */}
        <DesignBodyLeft
          setLeftFlag={setLeftFlag}
          leftFlag={leftFlag}
          pages={pages}
          addLargeScreenPage={addLargeScreenPage}
          delLargeScreenPage={delLargeScreenPage}
          modifyLargeScreenPage={modifyLargeScreenPage}
          currentPageId={currentPage.id}
          changeLargeScreenPage={changeLargeScreenPage}
        />
        <div
          style={{
            paddingLeft: leftFlag ? 200 : 0,
            paddingRight: rightFlag && pages.length ? 400 : 0
          }}
          className='app-screen-disign__body--center'>
          <div className='body' ref={elementsWrapper}>
            <div className='elements-wrap'>
              <Ruler />
              <div
                onClick={cancelSelectedElementHander}
                className='elements-wrap-canvas'
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 66,
                  top: 66,
                  width: screen.width,
                  height: screen.height,
                  transform: `scale(${cale})`,
                  transformOrigin: '0 0',
                  background: `url(${screen.backgroundImage}) no-repeat ${screen.backgroundColor}  0% 0% / 100% 100%`
                }}>
                <DesignBodyCenter
                  currentPage={currentPage}
                  currentWidgetId={currentWidgetId}
                  cale={cale}
                  screen={screen}
                  currentWidgetGroupId={currentWidgetGroupId}
                  changeLargeScreenElement={changeLargeScreenElement}
                  currentWidget={currentWidget}
                  modifyLargeScreenElement={modifyLargeScreenElement}
                />
              </div>
            </div>
          </div>
          <div className='footer'>
            <span>缩放比例：</span>
            <Slider
              style={{
                width: 300
              }}
              min={5}
              max={100}
              tipFormatter={(value) => `${value}%`}
              onChange={(value) => setCale(value / 100)}
              value={cale * 100}
            />
          </div>
        </div>
        {/* 右边 */}
        {pages.length ? (
          <DesignBodyRight
            rightFlag={rightFlag}
            setRightFlag={setRightFlag}
            screen={screen}
            currentPage={currentPage}
            modifyLargeScreenElement={modifyLargeScreenElement}
            modifyScreen={modifyScreen}
            currentWidget={currentWidget}
            showOrHideLargeScreenElement={showOrHideLargeScreenElement}
            changeLargeScreenElement={changeLargeScreenElement}
            currentWidgetGroupId={currentWidgetGroupId}
            currentWidgetId={currentWidgetId}
          />
        ) : null}
      </div>
    </div>
  )
}

// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => {
  return {
    pages: state.largeScreen.pages,
    pastPage: state.largeScreen.pastPage,
    futurePage: state.largeScreen.futurePage,
    currentPage: state.largeScreen.currentPage,
    currentWidgetId: state.largeScreen.currentWidgetId,
    screen: state.largeScreen.screen,
    currentWidget: state.largeScreen.currentWidget,
    currentWidgetGroupId: state.largeScreen.currentWidgetGroupId
  }
}

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  getLargeScreenPages,
  addLargeScreenPage,
  delLargeScreenPage,
  modifyLargeScreenPage,
  addLargeScreenElement,
  delLargeScreenElement,
  modifyLargeScreenElement,
  undoLargeScreen,
  redoLargeScreen,
  modifyScreen,
  changeLargeScreenPage,
  changeLargeScreenElement,
  copyLargeScreenElement,
  group,
  cancelGroup,
  showOrHideLargeScreenElement
}

export default connect(mapStateToProps, mapDispatchToProps)(Disign)
