import React, { useCallback } from "react";
import { IComponentsItem, Idata } from "@src/service";
import { DIRECTION } from "@src/core/types/constant";
import DragLine from "@src/components/drag/dragLine";
import { getStyles } from "@src/utils";
import components from "@src/elements";
import "./index.scss";

console.log(components, "components");

function capitalizeFirstLetter(str: string) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

interface ITreeNode {
  // 传递的数据
  datas: Idata[];
  // 数据类型view：视图，modify：修改
  type: "view" | "modify";
  // 选中组件ID
  selectedId: string;
  // 鼠标移动结束时
  onMouseUp: (
    e: MouseEvent,
    node: HTMLDivElement,
    direction: DIRECTION
  ) => void;
  // 手动完成
  onDrop: (e: React.DragEvent<HTMLDivElement>, item: Idata) => void;
  // 点击事件（用于切换组件）
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  // 所有组件
  elements: IComponentsItem[];
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
  selectedId,
  onClick,
  elements,
}) => {
  const renderElement = (item: Idata) => {
    const element = elements.find((element) => element.id === item.id);
    return (
      <>
        {element ? (
          <>
            {type === "modify" ? (
              <div
                className={`cms-widget-main__auxiliaryline ${
                  selectedId === item.id ? "is-selected" : ""
                }`}
                onClick={onClick}
              >
                {components[capitalizeFirstLetter(element.element)]
                  ? React.createElement(
                      components[capitalizeFirstLetter(element.element)],
                      {
                        options: element.configureValue,
                      }
                    )
                  : null}
              </div>
            ) : (
              <>
                {components[capitalizeFirstLetter(element.element)]
                  ? React.createElement(
                      components[capitalizeFirstLetter(element.element)],
                      {
                        options: element.configureValue,
                      }
                    )
                  : null}
              </>
            )}
          </>
        ) : (
          <div
            className="cms-widget-main__auxiliaryline is-drop"
            onDrop={(e) => onDrop(e, item)}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
          >
            <div className="no-data"></div>
          </div>
        )}
      </>
    );
  };
  // 拖拽开始
  const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.dropEffect = "none";
  }, []);

  // 拖拽结束
  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  // 移出高亮样式
  const onDragLeave = useCallback((e: any) => {
    e.target.classList.remove("is-moveTo");
  }, []);

  // 添加高亮样式
  const onDragEnter = useCallback((e: any) => {
    e.target.classList.add("is-moveTo");
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent, node: HTMLDivElement, direction: DIRECTION) => {
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
              ((newLeftChildWidth / pObj.width) * 100).toFixed(2) + "%";
            rightElement.style.flexBasis =
              ((newRightChildWidth / pObj.width) * 100).toFixed(2) + "%";
          }
          return;
        }
        default: {
          const dragOffset = node.getBoundingClientRect().top - e.clientY;
          const newLeftChildHeight = lObj.height - dragOffset;
          const newRightChildHeight = rObj.height + dragOffset;
          if (newLeftChildHeight > min && newRightChildHeight > min) {
            leftElement.style.flexBasis =
              ((newLeftChildHeight / pObj.height) * 100).toFixed(2) + "%";
            rightElement.style.flexBasis =
              ((newRightChildHeight / pObj.height) * 100).toFixed(2) + "%";
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
          data-type={
            elements.find((element) => element.id === item.id)
              ? "element"
              : item.type
          }
          data-id={item.id}
          data-pid={pid}
          data-nextid={
            datas[index + 1]
              ? datas[index + 1].id
              : datas.length > 1
              ? datas[index - 1].id
              : ""
          }
          data-direction={
            item.type === "row" ||
            (item.type === "col" && item.children?.length)
              ? "vertical"
              : "horizontal"
          }
          style={{
            ...getStyles(item.configuration),
          }}
        >
          {item.children && item.children.length ? (
            <TreeNode
              datas={item.children}
              type={type}
              pid={item.id}
              onMouseUp={onMouseUp}
              onDrop={onDrop}
              selectedId={selectedId}
              onClick={onClick}
              elements={elements}
            />
          ) : (
            renderElement(item)
          )}
          {index < datas.length - 1 && type === "modify" ? (
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
