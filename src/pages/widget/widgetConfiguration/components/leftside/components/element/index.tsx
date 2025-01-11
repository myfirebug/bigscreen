import React, { FC, useEffect } from "react";
import Box from "../../../box";
import { useComponents } from "@src/core/hook";
import { useWidgetDispatch } from "../../../../widgetContext";
import "./index.scss";
import { Empty, Skeleton } from "antd";

interface IElement {
  onClose: () => void;
}

const Element: FC<IElement> = ({ onClose }) => {
  const dispatch = useWidgetDispatch();
  const { types, getTypes, list, getList, listSearchHandler } = useComponents();

  useEffect(() => {
    getTypes();
    getList();
  }, [getTypes, getList]);
  return (
    <Box className="cms-element" title="组件" onClose={onClose}>
      {list.params.type.map((_, index) => {
        if (index === 0) {
          return (
            <div className="cms-element__level1" key={index}>
              {(types.datas.filter((item) => item.level === 1) || []).map(
                (item) => (
                  <div
                    key={item.id}
                    className={`item ${item.id === _ ? "is-active" : ""}`}
                    onClick={() => listSearchHandler("type", item.id, index)}
                  >
                    {item.name}
                  </div>
                )
              )}
            </div>
          );
        } else if (
          list.params.type[index - 1] &&
          types.datas.filter(
            (item) => item.pid && item.pid === list.params.type[index - 1]
          )?.length
        ) {
          return (
            <div className="cms-element__level2" key={index}>
              {(
                types.datas.filter(
                  (item) => item.pid === list.params.type[index - 1]
                ) || []
              ).map((item) => (
                <div
                  key={item.id}
                  className={`item ${item.id === _ ? "is-active" : ""}`}
                  onClick={() => listSearchHandler("type", item.id, index)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
      <div className="cms-element__content">
        {list.loading ? (
          <Skeleton active />
        ) : list.searchDatas.length ? (
          list.searchDatas.map((item) => (
            <div
              className="item"
              key={item.id}
              draggable
              onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                e.dataTransfer.effectAllowed = "move";
                dispatch({
                  type: "MODIFY_TEMPORARILY_ELEMENT_NAME",
                  name: item.element,
                });
              }}
            >
              <div className="picture">
                <img src={item.images} alt="" />
              </div>
              <div className="name">{item.name}</div>
            </div>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </Box>
  );
};

export default Element;
