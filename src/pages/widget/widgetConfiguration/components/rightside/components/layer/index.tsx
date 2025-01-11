import React, { FC, useCallback } from "react";
import Box from "../../../box";
import { useWidget, useWidgetDispatch } from "../../../../widgetContext";
import TreeNode from "./treeNode";
import { Empty } from "antd";
import "./index.scss";

interface ILayer {
  onClose: () => void;
  show: boolean;
}

const Layer: FC<ILayer> = ({ onClose, show }) => {
  const widget = useWidget()?.widget;
  const selectId = useWidget()?.selectedId;
  const selectedId = useWidget()?.selectedId as string;
  const dispatch = useWidgetDispatch();
  const clickHandler = useCallback(
    (e: any) => {
      const parent = e.target.offsetParent;
      const pid = e.target.dataset.pid as string;
      const id = e.target.dataset.id as string;
      const type = e.target.dataset.type;
      const direction = e.target.dataset.direction;
      const nextid = e.target.dataset.nextid as string;
      if (selectId !== id && id) {
        dispatch({
          type: "SELECT",
          data: {
            direction: direction,
            parent: {
              id: pid,
            },
            current: {
              id: id,
              type: type,
            },
            next: {
              id: nextid,
            },
          },
        });
      }
      if (e.target.className === "jt") {
        if (parent.classList.contains("is-active")) {
          parent.classList.remove("is-active");
        } else {
          parent.classList.add("is-active");
        }
      }
    },
    [dispatch, selectId]
  );
  return (
    <Box
      className={`cms-layer ${show && "is-show"}`}
      title="图层"
      onClose={onClose}
    >
      {widget ? (
        <ul className="cms-layer__list">
          <li className="cms-layer__item">
            <div
              className="cms-layer__item--name is-widget"
              onClick={clickHandler}
            >
              <span className="jt"></span>
              <span className="cms-icon">&#xe625;</span>
              {widget?.name}
            </div>
            <ul className="cms-layer__list">
              {widget.layout?.map((item) => (
                <li className="cms-layer__item" key={item.id}>
                  <div
                    className={`cms-layer__item--name ${
                      item.id === selectedId ? "is-selected" : ""
                    }`}
                    style={{ paddingLeft: "30px" }}
                    onClick={clickHandler}
                    data-id={item.id}
                    data-type={item.type}
                  >
                    <span className="jt"></span>
                    <span
                      className="cms-icon"
                      dangerouslySetInnerHTML={{
                        __html:
                          item.type === "header" ? "&#xec89;" : "&#xeb04;",
                      }}
                    ></span>
                    {item.type}
                  </div>
                  <TreeNode
                    datas={item.children}
                    level={3}
                    onClick={clickHandler}
                    selectedId={selectedId}
                    elements={widget.elements}
                    pid={item.id}
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Box>
  );
};

export default Layer;
