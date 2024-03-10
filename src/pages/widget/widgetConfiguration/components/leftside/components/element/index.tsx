import React, { FC } from "react";
import Box from "../../../box";
import "./index.scss";

interface ILayer {}

const Layer: FC<ILayer> = () => {
  return (
    <Box className="cms-element" title="组件">
      <div className="cms-element__level1">
        <div className="cms-icon is-active">&#xe7b0;</div>
        <div className="cms-icon">&#xe7f7;</div>
      </div>
      <div className="cms-element__level2">
        <div className="item">全部</div>
        <div className="item is-active">柱状图</div>
        <div className="item">拆线图</div>
      </div>
      <div className="cms-element__content">
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
        <div className="item">
          <div className="picture">
            <img
              src="https://img1.baidu.com/it/u=1068872213,1997360364&fm=253&fmt=auto&app=138&f=JPEG?w=714&h=500"
              alt=""
            />
          </div>
          <div className="name">折线图</div>
        </div>
      </div>
    </Box>
  );
};

export default Layer;
