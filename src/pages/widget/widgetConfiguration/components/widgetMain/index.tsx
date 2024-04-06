import React, { useCallback } from "react";
import { Idata, IwidgetsItem } from "@src/service";
import TreeNode from "@src/components/treeNode";
import { useWidgetDispatch } from "../../widgetContext";
import "./index.scss";

interface IWidgetMain {
  widget: IwidgetsItem;
  selectedElementId: string;
}

const WidgetMain: React.FC<IWidgetMain> = ({ widget, selectedElementId }) => {
  const dispatch = useWidgetDispatch();

  const onMouseUp = useCallback(
    (
      e: MouseEvent,
      node: HTMLDivElement,
      direction: "vertical" | "horizontal",
      type: "header" | "body"
    ) => {
      const parent = node.parentNode as HTMLDivElement;
      const pid = parent.dataset.pid as string;
      const id = parent.dataset.id as string;
      const nextid = parent.dataset.nextid as string;
      const leftElement = document.querySelector(
        `[data-id='${id}']`
      ) as HTMLDivElement;
      const rightElement = document.querySelector(
        `[data-id='${nextid}']`
      ) as HTMLDivElement;

      dispatch({
        type: "MODIFY_LAYOUT",
        data: {
          type: type,
          pid: pid,
          current: {
            id: id,
            layout: {
              flexBasis: leftElement.style.flexBasis,
            },
          },
          next: {
            id: nextid,
            layout: {
              flexBasis: rightElement.style.flexBasis,
            },
          },
        },
      });
    },
    [dispatch]
  );

  const onDrop = useCallback(
    (
      e: React.DragEvent<HTMLDivElement>,
      item: Idata,
      type: "header" | "body"
    ) => {
      dispatch({
        type: "MODIFY_ELEMENT_NAME",
        id: item.id,
        useArea: type,
      });
    },
    [dispatch]
  );

  const clickHandler = useCallback(
    (id: string) => {
      dispatch({
        type: "SELECT_ELEMENT",
        id,
      });
    },
    [dispatch]
  );

  return (
    <div className="cms-widget-main">
      {widget.configuration?.header?.show ? (
        <div className="cms-widget-main__header">
          <TreeNode
            datas={widget.data.header || []}
            type="modify"
            onMouseUp={(
              e: MouseEvent,
              node: HTMLDivElement,
              direction: "vertical" | "horizontal"
            ) => onMouseUp(e, node, direction, "header")}
            onDrop={(e, item) => onDrop(e, item, "header")}
            selectedElementId={selectedElementId}
            clickHandler={clickHandler}
          />
        </div>
      ) : null}
      <div className="cms-widget-main__body">
        <TreeNode
          datas={widget.data.body || []}
          type="modify"
          onMouseUp={(
            e: MouseEvent,
            node: HTMLDivElement,
            direction: "vertical" | "horizontal"
          ) => onMouseUp(e, node, direction, "body")}
          onDrop={(e, item) => onDrop(e, item, "body")}
          selectedElementId={selectedElementId}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default WidgetMain;
