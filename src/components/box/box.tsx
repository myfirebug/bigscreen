/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactNode } from "react";
import "./index.scss";
interface IBox {
  title: string;
  children: ReactNode;
}

const Box: FC<IBox> = ({ title, children }) => {
  return (
    <div className="cms-box">
      <div className="cms-box__header">
        <div className="title">{title}</div>
        <div className=""></div>
      </div>
      <div className="cms-box__body">{children}</div>
    </div>
  );
};

export default Box;
