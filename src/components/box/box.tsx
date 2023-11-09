/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import "./index.scss";
interface IBox {
  title: string;
}

const Box: FC<IBox> = ({ title }) => {
  return (
    <div className="cms-box">
      <div className="cms-box__header">
        <div className="title">{title}</div>
        <div className=""></div>
      </div>
      <div className="cms-box__body"></div>
    </div>
  );
};

export default Box;
