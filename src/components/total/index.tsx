import React from "react";
import { Col, Skeleton } from "antd";
import "./index.scss";

interface ITotal {
  datas: any[];
  loading: boolean;
  cardNum?: number;
}

const Total: React.FC<ITotal> = ({ datas, loading, cardNum = 4 }) => (
  <>
    {loading
      ? Array(cardNum)
          .fill(0)
          .map((item, index) => (
            <Col span={24 / cardNum} key={index}>
              <div className="cms-components__card">
                <Skeleton active title={false} />
              </div>
            </Col>
          ))
      : ""}
    {datas.map((item, index) => (
      <Col span={24 / cardNum} key={index}>
        <div className="cms-components__card">
          <div className="name">{item.name}</div>
          <div className="total">
            <b>{item.total}</b>
            {item.unit}
          </div>
          <div className="bg-font">{item.bgFont}</div>
        </div>
      </Col>
    ))}
  </>
);

export default Total;
