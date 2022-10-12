import { ModifyAction } from '../actions/largeScreen'
import { guid } from '@src/utils/tools'
import {
  LARGE_SCREEN,
  ADD_LARGESCREEN_PAGE,
  DEL_LARGESCREEN_PAGE,
  MODIFY_LARGESCREEN_PAGE,
  CHANGE_LARGESCREEN_PAGE,
  ADD_LARGESCREEN_ELEMENT,
  DEL_LARGESCREEN_ELEMENT,
  MODIFY_LARGESCREEN_ELEMENT,
  CHANGE_LARGESCREEN_ELEMENET,
  COPY_LARGESCREEN_ELEMENET,
  UNDO_LARGESCREEN,
  REDO_LARGESCREEN,
  LARGESCREEN_STATE,
  SHOWORHIDE_LARGESCREEN_ELEMENT,
  MODIFY_SCREEN,
  GROUP,
  CANCEL_GROUP,
  IPage,
  IWidget,
  UP_LARGESCREEN_ELEMENT,
  DOWN_LARGESCREEN_ELEMENT,
  TOP_LARGESCREEN_ELEMENT,
  BOTTOM_LARGESCREEN_ELEMENT
} from '../actionType'
// 配置文件
import configuration from '@src/widget/tools/main'

const { widgetConfiguration } = configuration

/**
 * 找到所有组件的坐标
 * @param datas 组件列表
 * @returns
 */
function getCoordinates(datas: IWidget[]) {
  let result: {
    left: number[]
    top: number[]
    right: number[]
    bottom: number[]
  } = {
    left: [],
    top: [],
    right: [],
    bottom: []
  }
  datas.forEach((item) => {
    result.left.push(item.coordinateValue.left)
    result.top.push(item.coordinateValue.top)
    result.bottom.push(item.coordinateValue.top + item.coordinateValue.height)
    result.right.push(item.coordinateValue.left + item.coordinateValue.width)
  })

  return result
}

/**
 *
 * @param index 当前下标
 * @param type 类型
 * @returns 替换的下标
 */
function getReplaceIndex(
  index: number,
  type: 'up' | 'down' | 'top' | 'bottom',
  len: number
) {
  let replaceIndex = 0
  switch (type) {
    case 'up':
      replaceIndex = index - 1
      break
    case 'down':
      replaceIndex = index + 1
      break
    case 'top':
      replaceIndex = 0
      break
    default:
      replaceIndex = len - 1
      break
  }
  return replaceIndex
}

/**
 * 上移，下移，置顶，置底
 * @param copy 数据
 * @param type  类型
 * @returns 新数据
 */
function upDownTopLeft(
  copy: LARGESCREEN_STATE,
  type: 'up' | 'down' | 'top' | 'bottom'
) {
  const currentPage: IPage = copy.currentPage
  // 找组下标
  const groupIndex = currentPage.widgets.findIndex(
    (item) => item.id === copy.currentWidgetGroupId
  )
  // 如果有分组，则找分组下面的widget
  if (groupIndex !== -1 && copy.currentWidgetGroupId !== copy.currentWidgetId) {
    const index = currentPage.widgets[groupIndex].widgets.findIndex(
      (item) => item.id === copy.currentWidgetId
    )
    if (index !== -1) {
      const replaceIndex: number = getReplaceIndex(
        index,
        type,
        currentPage.widgets[groupIndex].widgets.length
      )
      const temp = currentPage.widgets[groupIndex].widgets[index]
      currentPage.widgets[groupIndex].widgets[index] =
        currentPage.widgets[groupIndex].widgets[replaceIndex]
      currentPage.widgets[groupIndex].widgets[replaceIndex] = temp
    }
  } else {
    const index = currentPage.widgets.findIndex(
      (item) => item.id === copy.currentWidgetId
    )
    if (index !== -1) {
      const replaceIndex: number = getReplaceIndex(
        index,
        type,
        currentPage.widgets.length
      )
      const temp = currentPage.widgets[index]
      currentPage.widgets[index] = currentPage.widgets[replaceIndex]
      currentPage.widgets[replaceIndex] = temp
    }
  }
  return copy
}

// 处理并返回 state
const initialState = {
  pages: [],
  pastPage: [],
  futurePage: [],
  currentPage: {} as IPage,
  currentWidgetId: '',
  currentWidget: {} as IWidget,
  screen: {
    projectName: '',
    width: 1366,
    height: 768,
    backgroundColor: '#090548',
    title: '大屏',
    description: '描述',
    auxiliaryBorderColor: '#1890ff',
    showAuxiliary: false,
    backgroundImage: '',
    horizontalNumber: 4,
    verticalNumber: 3,
    interval: 10
  },
  currentWidgetGroupId: ''
}

export const largeScreen = (
  state: LARGESCREEN_STATE = initialState,
  action: ModifyAction
): LARGESCREEN_STATE => {
  const copy: LARGESCREEN_STATE = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case LARGE_SCREEN:
      if (action.data) {
        return {
          ...copy,
          ...action.data,
          currentPage: action.data.pages ? action.data.pages[0] : {}
        }
      } else {
        return initialState
      }
    case MODIFY_SCREEN:
      return {
        ...copy,
        screen: {
          ...copy.screen,
          ...action.datas
        }
      }

    // 新增页面
    case ADD_LARGESCREEN_PAGE:
      if (copy.currentPage) {
        const index = copy.pages.findIndex(
          (item) => item.id === copy.currentPage.id
        )
        if (index !== -1) {
          copy.pages[index] = copy.currentPage
        }
      }

      return {
        ...copy,
        pages: [...copy.pages, action.data],
        currentPage: action.data,
        pastPage: [],
        futurePage: [],
        currentWidgetId: ''
      }
    // 删除页面
    case DEL_LARGESCREEN_PAGE:
      return {
        ...copy,
        pages: copy.pages.filter((item) => item.id !== action.id)
      }
    // 修改页面
    case MODIFY_LARGESCREEN_PAGE:
      return {
        ...copy,
        pages: copy.pages.map((item) => {
          if (item.id === action.id) {
            return {
              ...action.data
            }
          }
          return item
        })
      }
    // 切换页面
    case CHANGE_LARGESCREEN_PAGE: {
      // 保存上一页数据到pages里
      const prevPageIndex = copy.pages.findIndex(
        (item) => item.id === copy.currentPage.id
      )
      if (prevPageIndex !== -1) {
        copy.pages[prevPageIndex] = copy.currentPage
      }
      // 这里首页判断当前currentPage在pages里的下标，然后替换数据
      const currentPageIndex = copy.pages.findIndex(
        (item) => item.id === action.id
      )
      if (currentPageIndex !== -1) {
        copy.currentPage = {
          ...copy.pages[currentPageIndex]
        }
      }
      return {
        ...copy,
        pastPage: [],
        futurePage: [],
        currentWidgetId: ''
      }
    }
    // 添加元素
    case ADD_LARGESCREEN_ELEMENT: {
      const currentPage: IPage = copy.currentPage
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === copy.currentWidgetGroupId
      )
      // 如果存在分组，直接添加到分组里面
      if (groupIndex !== -1) {
        currentPage.widgets[groupIndex].widgets = [
          ...currentPage.widgets[groupIndex].widgets,
          action.data
        ]
      } else {
        currentPage.widgets = [...currentPage.widgets, action.data]
      }
      return {
        ...copy,
        // pastPage: [...copy.pastPage, currentPage],
        currentPage: currentPage,
        currentWidgetId: action.data.id,
        currentWidget: action.data
      }
    }
    // 删除元素
    case DEL_LARGESCREEN_ELEMENT: {
      const currentPage: IPage = copy.currentPage
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === copy.currentWidgetGroupId
      )
      // 如果存在分组
      if (
        groupIndex !== -1 &&
        copy.currentWidgetGroupId !== copy.currentWidgetId
      ) {
        // 如果group里只有一个组件，那么就删除group组件
        if (currentPage.widgets[groupIndex].widgets.length === 1) {
          currentPage.widgets = currentPage.widgets.filter(
            (item) => item.id !== copy.currentWidgetGroupId
          )
        } else {
          // 否则删除group里的子组件
          currentPage.widgets[groupIndex].widgets = currentPage.widgets[
            groupIndex
          ].widgets.filter((item) => item.id !== copy.currentWidgetId)
        }
      } else {
        currentPage.widgets = currentPage.widgets.filter(
          (item) => item.id !== copy.currentWidgetId
        )
      }

      copy.currentWidgetId = ''
      copy.currentWidgetGroupId = ''
      copy.currentWidget = {} as IWidget

      return {
        ...copy
        // pastPage: [...copy.pastPage, currentPage]
      }
    }
    // 显示隐藏组件
    case SHOWORHIDE_LARGESCREEN_ELEMENT: {
      const currentPage: IPage = copy.currentPage
      // 找组下标
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === action.groupId
      )

      if (groupIndex !== -1) {
        currentPage.widgets[groupIndex].widgets = currentPage.widgets[
          groupIndex
        ].widgets.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              configureValue: {
                ...item.configureValue,
                styleDisplay:
                  item.configureValue.styleDisplay === 'block'
                    ? 'none'
                    : 'block'
              }
            }
          }
          return item
        })
      } else {
        // 如果没有分组，则找分当前页下面的widget
        currentPage.widgets = currentPage.widgets.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              configureValue: {
                ...item.configureValue,
                styleDisplay:
                  item.configureValue.styleDisplay === 'block'
                    ? 'none'
                    : 'block'
              }
            }
          }
          return item
        })
      }
      return copy
    }
    // 修改元素，注意里只有子级组件才传groupId哈
    case MODIFY_LARGESCREEN_ELEMENT: {
      const currentPage: IPage = copy.currentPage
      // 找组下标
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === action.groupId
      )
      // 如果有分组，则找分组下面的widget
      if (groupIndex !== -1 && action.groupId !== action.id) {
        // console.log(currentPage.widgets[groupIndex].widgets);
        currentPage.widgets[groupIndex].widgets = currentPage.widgets[
          groupIndex
        ].widgets.map((item) => {
          if (item.id === action.id) {
            return {
              ...action.data
            }
          }
          return item
        })
      } else {
        // 如果没有分组，则找分当前页下面的widget
        currentPage.widgets = currentPage.widgets.map((item) => {
          if (item.id === action.id) {
            return {
              ...action.data
            }
          }
          return item
        })
      }
      return {
        ...copy,
        // pastPage: [...copy.pastPage, currentPage],
        currentPage: currentPage,
        currentWidget: action.data,
        currentWidgetId: action.id,
        currentWidgetGroupId: action.groupId
      }
    }
    // 切换元素
    case CHANGE_LARGESCREEN_ELEMENET: {
      // 当前页信息
      const currentPage: IPage = copy.currentPage
      // 传入组ID
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === action.groupId
      )
      // 如果有分组，则找分组下面的widget
      if (groupIndex !== -1 && action.groupId !== action.id) {
        const index = currentPage.widgets[groupIndex].widgets.findIndex(
          (item) => item.id === action.id
        )
        if (index !== -1) {
          copy.currentWidget = {
            ...currentPage.widgets[groupIndex].widgets[index]
          }
        }
      } else {
        // 如果没有分组，则找分当前页下面的widget
        const index = currentPage.widgets.findIndex(
          (item) => item.id === action.id
        )
        if (index !== -1) {
          copy.currentWidget = {
            ...currentPage.widgets[index]
          }
        }
      }

      return {
        ...copy,
        // pastPage: [...copy.pastPage, currentPage],
        currentWidgetId: action.id,
        currentWidgetGroupId: action.groupId || ''
      }
    }
    // 复制
    case COPY_LARGESCREEN_ELEMENET: {
      const currentPage: IPage = copy.currentPage
      const groupIndex = currentPage.widgets.findIndex(
        (item) => item.id === copy.currentWidgetGroupId
      )
      const copyElementId: string = guid()
      // 如果存在分组
      if (
        groupIndex !== -1 &&
        copy.currentWidgetGroupId !== copy.currentWidgetId
      ) {
        const index = currentPage.widgets[groupIndex].widgets.findIndex(
          (item) => item.id === copy.currentWidgetId
        )
        // 复制的是group里的某一个组件
        if (index !== -1) {
          const oldElement: IWidget = JSON.parse(
            JSON.stringify(currentPage.widgets[groupIndex].widgets[index])
          )
          const copyElement = {
            ...oldElement,
            id: copyElementId,
            label: `[复制]${oldElement.label}`
          }
          currentPage.widgets[groupIndex].widgets.splice(
            index + 1,
            0,
            copyElement
          )
          copy.currentWidgetId = copyElementId
          copy.currentWidget = {
            ...copyElement
          }
        }
      } else {
        let copyElement: IWidget = {} as IWidget
        const index = currentPage.widgets.findIndex(
          (item) => item.id === copy.currentWidgetId
        )
        if (index !== -1) {
          const oldElement: IWidget = JSON.parse(
            JSON.stringify(currentPage.widgets[index])
          )
          // 说明复制的是group组件包含里面的子组件，这时需要把子组件的Id都给重置一次，不然在选择group里的子组件时，会有多个存在
          if (copy.currentWidgetGroupId === copy.currentWidgetId) {
            copy.currentWidgetGroupId = copyElementId
            copyElement = {
              ...oldElement,
              id: copyElementId,
              label: `[复制]${oldElement.label}`,
              widgets: oldElement.widgets.map((item) => ({
                ...item,
                id: guid()
              }))
            }
          } else {
            copyElement = {
              ...oldElement,
              id: copyElementId,
              label: `[复制]${oldElement.label}`
            }
          }

          currentPage.widgets.splice(index + 1, 0, copyElement)
          copy.currentWidgetId = copyElementId
          copy.currentWidget = copyElement
        }
      }

      return {
        ...copy
        // pastPage: [...copy.pastPage, currentPage]
      }
    }
    // 撤销
    case UNDO_LARGESCREEN: {
      let pastPage: IPage[] = [...state.pastPage]
      let futurePage: IPage[] = [...state.futurePage]
      if (pastPage.length) {
        let last: IPage = pastPage.pop() as IPage
        futurePage.unshift({ ...copy.currentPage })
        return {
          ...copy,
          pastPage: pastPage,
          futurePage: futurePage,
          currentPage: last,
          currentWidgetId: '',
          currentWidget: {} as IWidget
        }
      }
      return {
        ...copy
      }
    }
    // 恢复
    case REDO_LARGESCREEN: {
      let pastPage: IPage[] = [...state.pastPage]
      let futurePage: IPage[] = [...state.futurePage]
      if (futurePage.length) {
        let first: IPage = futurePage.shift() as IPage
        pastPage.push({ ...copy.currentPage })
        return {
          ...copy,
          pastPage: pastPage,
          futurePage: futurePage,
          currentPage: first,
          currentWidgetId: '',
          currentWidget: {} as IWidget
        }
      }
      return {
        ...copy
      }
    }
    // 分组
    case GROUP: {
      let subWidgets = []
      const currentPage: IPage = copy.currentPage
      const groupId = guid()

      subWidgets = currentPage.widgets.filter((item) =>
        copy.currentWidgetId.includes(item.id)
      )

      const coordinates = getCoordinates(subWidgets)
      // 找到选中的组件
      const groupsElements = {
        ...widgetConfiguration.widgetGroup,
        id: groupId,
        linkageIds: '',
        widgets: subWidgets.map((item) => ({
          ...item,
          dataValue: {
            ...item.dataValue,
            useInterface: true
          },
          coordinateValue: {
            ...item.coordinateValue,
            left: item.coordinateValue.left - Math.min(...coordinates.left),
            top: item.coordinateValue.top - Math.min(...coordinates.top)
          }
        })),
        coordinateValue: {
          left: Math.min(...coordinates.left),
          top: Math.min(...coordinates.top),
          width: Math.max(...coordinates.right) - Math.min(...coordinates.left),
          height: Math.max(...coordinates.bottom) - Math.min(...coordinates.top)
        }
      }

      // 删除原有的组件
      currentPage.widgets = currentPage.widgets.filter(
        (item) => !copy.currentWidgetId.includes(item.id)
      )

      currentPage.widgets.push(groupsElements)
      return {
        ...copy,
        currentWidgetId: groupId,
        currentWidgetGroupId: groupId,
        currentWidget: groupsElements
      }
    }
    // 取消分组
    case CANCEL_GROUP: {
      const currentPage: IPage = copy.currentPage
      const index = currentPage.widgets.findIndex(
        (item) => item.id === copy.currentWidgetId
      )
      if (index !== -1 && copy.currentWidgetGroupId === copy.currentWidgetId) {
        // 这里需要去掉所有type为form有组件
        currentPage.widgets[index].widgets = currentPage.widgets[
          index
        ].widgets.filter((item) => item.type !== 'form')

        // 清空关联的组件ID信息
        currentPage.widgets[index].linkageIds = ''

        // 找到当前组下的所有组件，并且将当前组件的left,top与组的left,top相加
        const insertWidgets: IWidget[] = currentPage.widgets[index].widgets.map(
          (item) => ({
            ...item,
            dataValue: {
              ...item.dataValue,
              useInterface: false
            },
            coordinateValue: {
              ...item.coordinateValue,
              left:
                currentPage.widgets[index].coordinateValue.left +
                item.coordinateValue.left,
              top:
                currentPage.widgets[index].coordinateValue.top +
                item.coordinateValue.top
            }
          })
        )
        currentPage.widgets.splice(index, 1, ...insertWidgets)
      }
      return {
        ...copy,
        currentWidget: {} as IWidget,
        currentWidgetGroupId: '',
        currentWidgetId: ''
      }
    }

    case UP_LARGESCREEN_ELEMENT: {
      return upDownTopLeft(copy, 'up')
    }

    case DOWN_LARGESCREEN_ELEMENT: {
      return upDownTopLeft(copy, 'down')
    }

    case TOP_LARGESCREEN_ELEMENT: {
      return upDownTopLeft(copy, 'top')
    }

    case BOTTOM_LARGESCREEN_ELEMENT: {
      return upDownTopLeft(copy, 'bottom')
    }
    default:
      return state
  }
}
