import { IComponentsItem, Idata } from "@src/service";
import { Tooltip } from "antd";
import React, { FC } from "react";

interface ITreeNode {
  // 传递的数据
  datas: Idata[];
  elements: IComponentsItem[];
  level: number;
  onClick: (e: any) => void;
  selectedId: string;
  pid: string;
}

const TreeNode: FC<ITreeNode> = ({
  datas,
  level,
  onClick,
  selectedId,
  elements,
  pid,
}) => {
  return (
    <ul className="cms-layer__list">
      {datas.map((item, index) => {
        const element = elements.find((element) => element.id === item.id);
        return (
          <li className="cms-layer__item" key={item.id}>
            <div
              data-type={!element ? item.type : "element"}
              data-pid={pid}
              data-nextid={
                datas[index + 1]
                  ? datas[index + 1].id
                  : datas.length > 1
                  ? datas[index - 1].id
                  : ""
              }
              data-id={item.id}
              data-direction={
                item.type === "row" ||
                (item.type === "col" && item.children?.length)
                  ? "vertical"
                  : "horizontal"
              }
              className={`cms-layer__item--name ${
                item.id === selectedId ? "is-selected" : ""
              }`}
              style={{
                paddingLeft: `${
                  level * 17 + (!item.children.length ? 3 : 0)
                }px`,
              }}
              onClick={onClick}
            >
              {item.children.length ? (
                <>
                  <span className="jt"></span>
                  <span
                    className="cms-icon"
                    dangerouslySetInnerHTML={{
                      __html: item.type === "row" ? "&#xec89;" : "&#xeb04;",
                    }}
                  ></span>
                </>
              ) : (
                <span
                  className="cms-icon"
                  dangerouslySetInnerHTML={{
                    __html: element ? "&#xe640;" : "&#xe67b;",
                  }}
                ></span>
              )}
              {!element
                ? item.children.length
                  ? item.type === "row"
                    ? "多列容器"
                    : "多行容器"
                  : "格子"
                : element.name}
              <div className="controls">
                {!element ? (
                  item.type === "row" ? (
                    <Tooltip title="添加列">
                      <span className="cms-icon">&#xec89;</span>
                    </Tooltip>
                  ) : (
                    <Tooltip title="添加行">
                      <span className="cms-icon">&#xeb04;</span>
                    </Tooltip>
                  )
                ) : null}
                <Tooltip
                  title={
                    element
                      ? "删除组件"
                      : item.type === "row"
                      ? "删除行"
                      : "删除列"
                  }
                >
                  <span className="cms-icon">&#xe7c3;</span>
                </Tooltip>
              </div>
            </div>
            {item.children && item.children.length ? (
              <TreeNode
                datas={item.children}
                level={level + 1}
                onClick={onClick}
                selectedId={selectedId}
                elements={elements}
                pid={item.id}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeNode;
