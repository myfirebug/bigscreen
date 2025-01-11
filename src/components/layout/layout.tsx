import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";
import "./index.scss";
interface ILayout extends HtmlHTMLAttributes<HTMLDivElement> {
  Header?: ReactNode;
  Footer?: ReactNode;
  Sidder?: ReactNode;
  children: ReactNode;
}

const Layout: FC<ILayout> = ({
  Header,
  Footer,
  Sidder,
  className,
  children,
  style,
}) => {
  return (
    <div className={`cms-layout ${className || ""}`}>
      {Header}
      <div className="cms-layout__main" style={style}>
        {Sidder}
        <div className="cms-content">{children}</div>
      </div>
      {Footer}
    </div>
  );
};

export default Layout;
