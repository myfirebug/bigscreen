import React, { useCallback } from "react";
import { Idata } from "@src/service";
import DragLine from "@src/components/drag/dragLine";
import "./index.scss";
interface ITreeNode {
  // 传递的数据
  datas: Idata[];
  // 数据类型view：视图，modify：修改
  type: "view" | "modify";
  selectedElementId: string;
  onMouseUp: (
    e: MouseEvent,
    node: HTMLDivElement,
    direction: "vertical" | "horizontal"
  ) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, item: Idata) => void;
  clickHandler: (id: string) => void;
  // 父级ID
  pid?: string | number;
  // 最小值
  min?: number;
}

const TreeNode: React.FC<ITreeNode> = ({
  datas,
  type,
  pid,
  min = 20,
  onMouseUp,
  onDrop,
  selectedElementId,
  clickHandler,
}) => {
  const renderElement = (item: Idata) => {
    return (
      <>
        {item.element ? (
          <>
            {type === "modify" ? (
              <div
                className={`cms-widget-main__auxiliaryline ${
                  selectedElementId === item.id ? "is-selected" : ""
                }`}
                onClick={() => clickHandler(item.id)}
              >
                {item.element}
              </div>
            ) : (
              item.element
            )}
          </>
        ) : (
          <div className="cms-widget-main__auxiliaryline">
            <div
              className="no-data"
              onDrop={(e) => onDrop(e, item)}
              onDragOver={onDragOver}
            ></div>
          </div>
        )}
      </>
    );
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback(
    (
      e: MouseEvent,
      node: HTMLDivElement,
      direction: "vertical" | "horizontal"
    ) => {
      const parent = node.parentNode as HTMLDivElement;
      const id = parent.dataset.id;
      const nextid = parent.dataset.nextid;
      const leftElement = document.querySelector(
        `[data-id='${id}']`
      ) as HTMLDivElement;
      const rightElement = document.querySelector(
        `[data-id='${nextid}']`
      ) as HTMLDivElement;

      const pObj = (
        parent.parentNode as HTMLDivElement
      ).getBoundingClientRect();

      const lObj = leftElement.getBoundingClientRect();
      const rObj = rightElement.getBoundingClientRect();

      switch (direction) {
        case "horizontal": {
          const dragOffset = node.getBoundingClientRect().left - e.clientX;
          const newLeftChildWidth = lObj.width - dragOffset;
          const newRightChildWidth = rObj.width + dragOffset;
          if (newLeftChildWidth > min && newRightChildWidth > min) {
            leftElement.style.flexBasis =
              (newLeftChildWidth / pObj.width) * 100 + "%";
            rightElement.style.flexBasis =
              (newRightChildWidth / pObj.width) * 100 + "%";
          }
          return;
        }
        default: {
          const dragOffset = node.getBoundingClientRect().top - e.clientY;
          const newLeftChildHeight = lObj.height - dragOffset;
          const newRightChildHeight = rObj.height + dragOffset;
          if (newLeftChildHeight > min && newRightChildHeight > min) {
            leftElement.style.flexBasis =
              (newLeftChildHeight / pObj.height) * 100 + "%";
            rightElement.style.flexBasis =
              (newRightChildHeight / pObj.height) * 100 + "%";
          }
        }
      }
    },
    [min]
  );
  return (
    <>
      {datas.map((item, index) => (
        <div
          className={`cms-widget-main__${item.type}`}
          key={item.id}
          data-type={item.type}
          data-id={item.id}
          data-pid={pid}
          data-nextid={datas[index + 1] ? datas[index + 1].id : ""}
          style={{
            ...item.configuration.layout,
          }}
        >
          {item.children && item.children.length ? (
            <TreeNode
              datas={item.children}
              type={type}
              pid={item.id}
              onMouseUp={onMouseUp}
              onDrop={onDrop}
              selectedElementId={selectedElementId}
              clickHandler={clickHandler}
            />
          ) : (
            renderElement(item)
          )}
          {index < datas.length - 1 ? (
            <DragLine
              onMouseMove={onMouseMove}
              direction={
                item.type === "row" ||
                (item.type === "col" && item.children?.length)
                  ? "vertical"
                  : "horizontal"
              }
              onMouseUp={onMouseUp}
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default TreeNode;
