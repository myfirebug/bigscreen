import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { fmtDate } from "@src/utils";
import { Empty, Skeleton } from "antd";
import "./index.scss";
interface IList {
  children: ReactNode;
  loading: boolean;
  datas: any[];
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

  console.log(datas, "datas");
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
              <div className="createtime">
                创建时间：{fmtDate(item.createTime, "yyyy-MM-dd hh:mm:ss")}
              </div>
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
