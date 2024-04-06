import { useWidgetDispatch } from "@src/pages/widget/widgetConfiguration/widgetContext";
import { Idata } from "@src/service";
import React, { FC } from "react";

interface ITreeNode {
  // 传递的数据
  datas: Idata[];
  level: number;
  onClick: (e: any) => void;
  selectedElementId: string;
}

const TreeNode: FC<ITreeNode> = ({
  datas,
  level,
  onClick,
  selectedElementId,
}) => {
  const dispatch = useWidgetDispatch();
  return (
    <ul className="cms-layer__list">
      {datas.map((item) => (
        <li className="cms-layer__item" key={item.id}>
          <div
            className={`cms-layer__item--name ${
              item.id === selectedElementId ? "is-selected" : ""
            }`}
            style={{
              paddingLeft: `${level * 10 + (!item.children.length ? 7 : 0)}px`,
            }}
            onClick={(e) => {
              item.children.length && onClick(e);
              item.element &&
                dispatch({
                  type: "SELECT_ELEMENT",
                  id: item.id,
                });
            }}
          >
            {item.children.length ? (
              <>
                <span className="jt"></span>
                {item.type === "row" ? (
                  <span className="cms-icon">&#xec89;</span>
                ) : (
                  <span className="cms-icon">&#xeb04;</span>
                )}
              </>
            ) : (
              <>
                {item.element ? (
                  <span className="cms-icon">&#xe640;</span>
                ) : (
                  <span className="cms-icon">&#xe67b;</span>
                )}
              </>
            )}

            {!item.element
              ? item.children.length
                ? item.type === "row"
                  ? "多行容器"
                  : "多列容器"
                : "格子"
              : item.element}
          </div>
          {item.children && item.children.length ? (
            <TreeNode
              datas={item.children}
              level={level + 1}
              onClick={onClick}
              selectedElementId={selectedElementId}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default TreeNode;
