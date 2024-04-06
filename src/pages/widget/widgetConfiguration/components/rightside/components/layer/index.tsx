import React, { FC, useCallback } from "react";
import Box from "../../../box";
import { useWidget } from "../../../../widgetContext";
import TreeNode from "./treeNode";
import { Empty } from "antd";
import "./index.scss";

interface ILayer {
  onClose: () => void;
}

const Layer: FC<ILayer> = ({ onClose }) => {
  const widget = useWidget()?.widget;
  const selectedElementId = useWidget()?.selectedElementId as string;
  const clickHandler = useCallback((e: any) => {
    const parent = e.target.offsetParent;
    if (parent.classList.contains("is-active")) {
      parent.classList.remove("is-active");
    } else {
      parent.classList.add("is-active");
    }
  }, []);
  return (
    <Box className="cms-layer" title="图层" onClose={onClose}>
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
              <li className="cms-layer__item">
                <div
                  className="cms-layer__item--name"
                  style={{ paddingLeft: "20px" }}
                  onClick={clickHandler}
                >
                  <span className="jt"></span>
                  <span className="cms-icon">&#xeb04;</span>header
                </div>
                <TreeNode
                  datas={widget?.data.header || []}
                  level={3}
                  onClick={clickHandler}
                  selectedElementId={selectedElementId}
                />
              </li>
              <li className="cms-layer__item">
                <div
                  className="cms-layer__item--name"
                  style={{ paddingLeft: "20px" }}
                  onClick={clickHandler}
                >
                  <span className="jt"></span>
                  <span className="cms-icon">&#xeb04;</span>body
                </div>
                <TreeNode
                  datas={widget?.data.body || []}
                  level={3}
                  onClick={clickHandler}
                  selectedElementId={selectedElementId}
                />
              </li>
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
