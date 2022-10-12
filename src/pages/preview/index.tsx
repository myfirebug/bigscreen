/*
 * @Description: 页面预览描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-08-26 21:26:44
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-12 16:34:01
 * @FilePath: \bigscreen\src\pages\preview\index.tsx
 * Copyright (c) 2022 by hejp email: 378540660@qq.com, All Rights Reserved.
 */
import { FC, useRef, useState, useEffect } from 'react'
import { ALL_STATE, IPage, IScreen, IWidget } from '@store/actionType'
import { connect } from 'react-redux'
import { modifyLargeScreenElement } from '@store/actions/largeScreen'
// 所有组件地址
import components from '@src/widget'
// 接口
import Request from '@src/components/request'
import './index.scss'

interface IPreviewProps {
  currentPage: IPage
  screen: IScreen
  modifyLargeScreenElement: (id: string, groupId: string, data: IWidget) => void
}

const Preview: FC<IPreviewProps> = ({
  currentPage,
  screen,
  modifyLargeScreenElement
}) => {
  const elementsWrapper = useRef<HTMLDivElement>(null)
  // 获取放大缩小比例
  const [cale, setCale] = useState(0)

  const [elementsWrapperAttr, setElementsWrapperAttr] = useState<any>({})

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
  // 渲染组件
  const renderWidgets = (
    widgets: IWidget[],
    groupConfig?: any,
    group?: IWidget
  ) => {
    return (
      <>
        {widgets.map((item: any, index: number) => {
          // 说明有group组件
          if (item.widgets) {
            const Widget = components[item.code] || components[item.type]
            if (Widget) {
              let params = {}
              for (let i = 0; i < currentPage.widgets.length; i++) {
                if (currentPage.widgets[i].linkageIds.includes(item.id)) {
                  params = {
                    ...params,
                    ...currentPage.widgets[i].dataValue.params
                  }
                }
              }
              return (
                <div
                  key={item.id}
                  className='app-widget__item'
                  style={{
                    position: 'absolute',
                    width: item.coordinateValue.width,
                    height: item.coordinateValue.height,
                    left: item.coordinateValue.left,
                    top: item.coordinateValue.top
                  }}>
                  <Request
                    isPlaceholder={false}
                    method={item.dataValue.method}
                    url={item.dataValue.url}
                    params={JSON.stringify(
                      {
                        ...item.dataValue.params,
                        ...params
                      } || {}
                    )}
                    render={(data, success) => {
                      return (
                        <>
                          <Widget
                            options={{
                              ...item.configureValue,
                              ...item.coordinateValue
                            }}>
                            {renderWidgets(
                              item.widgets,
                              {
                                ...item,
                                dataValue: {
                                  ...item.dataValue,
                                  mock: item.dataValue.useInterface
                                    ? data
                                    : item.dataValue.mock
                                },
                                success,
                                parentParams: {
                                  ...item.dataValue.params,
                                  ...params
                                }
                              },
                              item
                            )}
                          </Widget>
                        </>
                      )
                    }}></Request>
                </div>
              )
            }
          } else {
            // 没有group组件
            const Widget = components[item.code] || components[item.type]
            if (Widget) {
              let params = {}
              for (let i = 0; i < currentPage.widgets.length; i++) {
                if (currentPage.widgets[i].linkageIds.includes(item.id)) {
                  params = {
                    ...params,
                    ...currentPage.widgets[i].dataValue.params
                  }
                }
              }
              return (
                <div
                  key={item.id}
                  className='app-widget__item'
                  style={{
                    position: 'absolute',
                    width: item.coordinateValue.width,
                    height: item.coordinateValue.height,
                    left: item.coordinateValue.left,
                    top: item.coordinateValue.top
                  }}>
                  <Request
                    isPlaceholder={true}
                    method={
                      item.dataValue.useInterface ? '' : item.dataValue.method
                    }
                    url={
                      item.dataValue.useInterface
                        ? ''
                        : groupConfig && groupConfig.dataValue.useInterface
                        ? groupConfig.success
                          ? item.dataValue.url
                          : ''
                        : item.dataValue.url
                    }
                    params={JSON.stringify(
                      Object.assign(
                        { ...item.dataValue.params },
                        groupConfig && groupConfig.parentParams
                          ? groupConfig.parentParams
                          : {},
                        params
                      ) || {}
                    )}
                    render={(data, success) => {
                      // 确定数据
                      let datas: any = null
                      if (
                        item.dataValue.useInterface &&
                        groupConfig &&
                        groupConfig.dataValue
                      ) {
                        datas = groupConfig.dataValue.mock
                      } else {
                        datas =
                          item.dataValue.dataType === 'mock'
                            ? item.dataValue.mock
                            : success
                            ? data
                            : null
                      }
                      return (
                        <Widget
                          modifyLargeScreenElement={modifyLargeScreenElement}
                          parentWidget={group}
                          paramName={item.dataValue.paramName}
                          paramValue={
                            groupConfig &&
                            groupConfig.parentParams &&
                            item.dataValue.paramName
                              ? groupConfig.parentParams[
                                  item.dataValue.paramName
                                ]
                              : ''
                          }
                          className={`${item.configureValue.animateName}`}
                          field={item.dataValue.field}
                          data={datas}
                          options={{
                            ...item.configureValue,
                            ...item.coordinateValue
                          }}
                        />
                      )
                    }}></Request>
                </div>
              )
            }
          }
        })}
      </>
    )
  }

  return (
    <div className='app-preview' ref={elementsWrapper}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
            background: url(${screen.backgroundImage}) no-repeat ${screen.backgroundColor}  0% 0% / 100% 100%
          }`
        }}></style>
      <div
        className='app-preview__container'
        style={{
          width: screen.width,
          height: screen.height,
          transform: `scale(${cale})`,
          transformOrigin: '0 0'
        }}>
        {currentPage && currentPage.widgets
          ? renderWidgets(currentPage.widgets)
          : null}
      </div>
    </div>
  )
}

// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => {
  return {
    currentPage: state.largeScreen.currentPage,
    screen: state.largeScreen.screen
  }
}

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  modifyLargeScreenElement
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
