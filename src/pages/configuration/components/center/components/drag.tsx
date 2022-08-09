import {
  FC, ReactNode
} from 'react'
import { Rnd } from 'react-rnd'
import { IWidget } from '@src/store/actionType'

interface IDragProps {
  item: any;
  currentWidgetId: string;
  currentWidget: IWidget;
  cale: number;
  modifyLargeScreenElement: (id: string, data: IWidget) => void;
  children: ReactNode;
  className: string;
}

const Drag: FC<IDragProps> = ({
  item,
  currentWidgetId,
  cale,
  currentWidget,
  modifyLargeScreenElement,
  children,
  className
}) => {

  // 移动时
  const dragStopHandle = (e: any, d: any) => {
    modifyLargeScreenElement(currentWidgetId, {
      ...currentWidget,
      coordinateValue: {
        ...currentWidget.coordinateValue,
        left: Number(d.lastX.toFixed(2)),
        top: Number(d.lastY.toFixed(2))
      }
    })
  }

  // 改变盒子的比例时
  const resizeHandle = (e: any, direction: any, ref: any, delta: any, position: any) => {
    modifyLargeScreenElement(currentWidgetId, {
      ...currentWidget,
      coordinateValue: {
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        left: Number(position.x.toFixed(2)),
        top: Number(position.y.toFixed(2))
      }
    })
  }

  return (
    <Rnd
      style={{
        display: item.configureValue.display
      }}
      className={item.id !== currentWidgetId ? `react-draggable-disabled ${className}` : className}
      default={{
        x: item.coordinateValue.left,
        y: item.coordinateValue.top,
        width: item.coordinateValue.width,
        height: item.coordinateValue.height
      }}
      position={{
        x: item.coordinateValue.left,
        y: item.coordinateValue.top
      }}
      resizeHandleWrapperClass="handle"
      resizeHandleWrapperStyle={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        border: 'dashed 2px #fff'
      }}
      resizeHandleStyles={{
        bottom: {
          width: 20,
          height: 20,
          background: '#fff',
          borderRadius: 10,
          left: '50%',
          bottom: -10,
          marginLeft: -10
        },
        bottomLeft: {
          background: '#fff',
          borderRadius: 10
        },
        bottomRight: {
          background: '#fff',
          borderRadius: 10
        },
        left: {
          width: 20,
          height: 20,
          background: '#fff',
          borderRadius: 10,
          top: '50%',
          left: -10,
          marginTop: -10
        },
        right: {
          width: 20,
          height: 20,
          background: '#fff',
          borderRadius: 10,
          top: '50%',
          right: -10,
          marginTop: -10
        },
        top: {
          width: 20,
          height: 20,
          background: '#fff',
          borderRadius: 10,
          left: '50%',
          top: -10,
          marginLeft: -10
        },
        topLeft: {
          background: '#fff',
          borderRadius: 10
        },
        topRight: {
          background: '#fff',
          borderRadius: 10
        }
      }}
      size={{
        width: item.coordinateValue.width,
        height: item.coordinateValue.height
      }}
      key={item.id}
      scale={cale}
      disableDragging={item.id !== currentWidgetId}
      onDragStop={dragStopHandle}
      onResizeStop={resizeHandle}
      bounds="parent"
    >
      {children}
    </Rnd>
  )
}

export default Drag