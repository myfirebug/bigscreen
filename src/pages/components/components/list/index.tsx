import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import "./index.scss";
import { IComponentsItem } from "@src/service";
import { Empty, Skeleton } from "antd";
interface IList {
  children: ReactNode;
  loading: boolean;
  datas: IComponentsItem[];
}

const List: FC<IList> = ({ children, datas, loading }) => {
  const [cel, setCel] = useState(() => {
    return Math.floor(window.innerWidth / 280);
  });
  const sizeHandler = useCallback(() => {
    const windowWidth = window.innerWidth;
    setCel(Math.floor(windowWidth / 280));
  }, []);
  useEffect(() => {
    sizeHandler();
    window.addEventListener("resize", sizeHandler);
    return () => {
      window.removeEventListener("resize", sizeHandler);
    };
  }, [sizeHandler]);
  return (
    <div className="cms-components__list">
      {children && <div className="cms-selector">{children}</div>}
      <div className="cms-components__list--body">
        {loading ? (
          <Skeleton active />
        ) : datas.length ? (
          datas.map((item, index) => (
            <div
              key={index}
              className="cms-components__item"
              style={{ width: `calc(100% / ${cel} - 20px)` }}
            >
              <div className="picture">
                <img src={item.images} alt="" />
              </div>
              <div className="name">{item.name}</div>
              <div className="type">
                类型：{item.level2Type || item.level1Type}
              </div>
              <div className="type">使用次数：{item.count}次</div>
              <div className="createtime">创建时间：{item.createTime}</div>
            </div>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  );
};

export default List;
