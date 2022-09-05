import { FC } from 'react'
import { Button } from 'antd'
import { IPage, IWidget } from '@store/actionType'
// 所有组件地址
import components from '@src/widget'
// 接口
import Request from '@src/components/request'
// 拖动组件
import Drag from './components/drag'
// grid组件
import Grid from './components/grid'
// 屏幕辅助线
import Auxiliary from './components/auxiliary'

interface IDesignBodyCenterProps {
  currentPage: IPage
  currentWidgetId: string
  currentWidget: IWidget
  cale: number
  modifyLargeScreenElement: (id: string, data: IWidget) => void
  changeLargeScreenElement: (id: string, groupId?: string) => void
  screen: any
  currentWidgetGroupId: string
}

const DesignBodyCenter: FC<IDesignBodyCenterProps> = ({
  currentPage,
  currentWidgetId,
  modifyLargeScreenElement,
  changeLargeScreenElement,
  currentWidget,
  cale,
  screen,
  currentWidgetGroupId
}) => {
  // 渲染组件
  const renderWidgets = (widgets: IWidget[], groupConfig?: any) => {
    return (
      <>
        {widgets.map((item: any, index: number) => {
          // 说明有group组件
          if (item.widgets) {
            const Widget = components[item.code] || components[item.type]
            if (Widget) {
              return (
                <Drag
                  item={item}
                  currentWidgetId={currentWidgetId}
                  currentWidget={currentWidget}
                  cale={cale}
                  modifyLargeScreenElement={modifyLargeScreenElement}
                  key={item.id}
                  className='react-draggable-group'>
                  <div
                    onClick={(e: any) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (item.id !== currentWidgetId) {
                        changeLargeScreenElement(item.id, item.id)
                      }
                    }}
                    className={`app-widget__item ${
                      currentWidgetId.includes(item.id) ? 'is-active' : ''
                    }`}>
                    <div className='mask'>
                      {/* 辅助线 */}
                      <div className='line-top'></div>
                      <div className='line-left'></div>
                      {/* 坐标值 */}
                      <div className='label'>
                        {item.coordinateValue.left},{item.coordinateValue.top}
                      </div>
                    </div>
                    <Request
                      isPlaceholder={true}
                      method={item.dataValue.method}
                      url={item.dataValue.url}
                      params={JSON.stringify(item.dataValue.params || {})}
                      render={(data, success, setP) => {
                        return (
                          <>
                            <Widget
                              options={{
                                ...item.configureValue,
                                ...item.coordinateValue
                              }}
                              className={
                                item.id === currentWidgetGroupId
                                  ? 'is-active'
                                  : ''
                              }>
                              {renderWidgets(item.widgets, {
                                ...item,
                                dataValue: {
                                  ...item.dataValue,
                                  mock: item.dataValue.useInterface
                                    ? data
                                    : item.dataValue.mock
                                },
                                success,
                                setParams: setP
                              })}
                            </Widget>
                          </>
                        )
                      }}></Request>
                  </div>
                </Drag>
              )
            }
          } else {
            // 没有group组件
            const Widget = components[item.code] || components[item.type]
            if (Widget) {
              return (
                <Drag
                  item={item}
                  currentWidgetId={currentWidgetId}
                  currentWidget={currentWidget}
                  cale={cale}
                  modifyLargeScreenElement={modifyLargeScreenElement}
                  key={item.id}
                  className=''>
                  <div
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (item.id !== currentWidgetId) {
                        if (
                          e.ctrlKey &&
                          !groupConfig &&
                          !currentWidgetGroupId
                        ) {
                          changeLargeScreenElement(
                            currentWidgetId
                              ? `${currentWidgetId},${item.id}`
                              : item.id
                          )
                        } else {
                          changeLargeScreenElement(item.id, groupConfig?.id)
                        }
                      }
                    }}
                    className={`app-widget__item ${
                      currentWidgetId.includes(item.id) ? 'is-active' : ''
                    }`}>
                    <div className='mask'>
                      {/* 辅助线 */}
                      <div className='line-top'></div>
                      <div className='line-left'></div>
                      {/* 坐标值 */}
                      <div className='label'>
                        {item.coordinateValue.left},{item.coordinateValue.top}
                      </div>
                    </div>
                    <Request
                      isPlaceholder={true}
                      method={
                        item.dataValue.useInterface ? '' : item.dataValue.method
                      }
                      url={
                        item.dataValue.useInterface
                          ? ''
                          : groupConfig &&
                            groupConfig.dataValue &&
                            groupConfig.dataValue.useInterface
                          ? groupConfig.success
                            ? item.dataValue.url
                            : ''
                          : item.dataValue.url
                      }
                      params={JSON.stringify(
                        {
                          ...item.dataValue.params,
                          ...groupConfig.dataValue.params
                        } || {}
                      )}
                      render={(data, success) => {
                        console.log(groupConfig, 'groupConfig')
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
                </Drag>
              )
            }
          }
        })}
      </>
    )
  }

  return (
    <>
      <Grid screen={screen} />
      <Auxiliary screen={screen} />
      {currentPage && currentPage.widgets
        ? renderWidgets(currentPage.widgets)
        : null}
    </>
  )
}

export default DesignBodyCenter
