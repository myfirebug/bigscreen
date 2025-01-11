import React, { useCallback } from "react";
import { Idata, IdataTypes, IwidgetsItem } from "@src/service";
import { DIRECTION } from "@src/core/types/constant";
import TreeNode from "@src/components/treeNode";
import { getStyles } from "@src/utils";
import { useWidgetDispatch } from "../../widgetContext";
import "./index.scss";

interface IWidgetMain {
  widget: IwidgetsItem;
  selectedId: string;
}

const WidgetMain: React.FC<IWidgetMain> = ({ widget, selectedId }) => {
  const dispatch = useWidgetDispatch();

  const onMouseUp = useCallback(
    (e: MouseEvent, node: HTMLDivElement, direction: DIRECTION) => {
      const parent = node.parentNode as HTMLDivElement;
      const pid = parent.dataset.pid as string;
      const id = parent.dataset.id as string;
      const nextid = parent.dataset.nextid as string;
      const type = parent.dataset.type as IdataTypes;
      const leftElement = document.querySelector(
        `[data-id='${id}']`
      ) as HTMLDivElement;
      const rightElement = document.querySelector(
        `[data-id='${nextid}']`
      ) as HTMLDivElement;

      dispatch({
        type: "MODIFY_LAYOUT",
        data: {
          direction,
          parent: {
            id: pid,
          },
          current: {
            id: id,
            type: type,
            configuration: {
              styleFlexBasis: leftElement.style.flexBasis,
            },
          },
          next: {
            id: nextid,
            configuration: {
              styleFlexBasis: rightElement.style.flexBasis,
            },
          },
        },
      });
    },
    [dispatch]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, item: Idata) => {
      dispatch({
        type: "MODIFY_ELEMENT_NAME",
        id: item.id,
      });
    },
    [dispatch]
  );

  const onClick = useCallback(
    (e: any) => {
      const parent = e.target?.offsetParent;
      const pid = parent.dataset.pid as string;
      const id = parent.dataset.id as string;
      const direction = parent.dataset.direction;
      const nextid = parent.dataset.nextid as string;
      if (selectedId !== id) {
        dispatch({
          type: "SELECT",
          data: {
            direction: direction,
            parent: {
              id: pid,
            },
            current: {
              id: id,
              type: "element",
            },
            next: {
              id: nextid,
            },
          },
        });
      }
    },
    [selectedId, dispatch]
  );

  return (
    <div
      className="cms-widget-main"
      style={{ ...getStyles(widget.configuration.configureValue) }}
    >
      {widget.layout?.map((item) => (
        <div
          key={item.id}
          className={
            item.type === "header"
              ? "cms-widget-main__header"
              : "cms-widget-main__body"
          }
          data-id={item.id}
        >
          <TreeNode
            datas={item.children}
            type="modify"
            onMouseUp={onMouseUp}
            onDrop={onDrop}
            selectedId={selectedId}
            onClick={onClick}
            elements={widget.elements}
            pid={item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default WidgetMain;
