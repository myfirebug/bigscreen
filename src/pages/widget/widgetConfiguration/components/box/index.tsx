import React, { FC, ReactNode } from "react";
import "./index.scss";
interface IBox {
  children: ReactNode;
  className: string;
  title: string;
}

const Box: FC<IBox> = ({ children, className, title }) => {
  return (
    <div className={`cms-side-box ${className && className}`}>
      <div className="cms-side-box__header">
        <div className="title">{title}</div>
        <div className="controls">
          <span className="close"></span>
        </div>
      </div>
      <div className="cms-side-box__body">{children}</div>
    </div>
  );
};

export default Box;
