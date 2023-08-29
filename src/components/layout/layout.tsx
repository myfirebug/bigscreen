import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface ILayout extends HtmlHTMLAttributes<HTMLDivElement> {
  paddingTop?: number | string;
  mainMinHeight?: string | number;
  Header?: ReactNode;
  Footer?: ReactNode;
  Sidder?: ReactNode;
  children: ReactNode;
}

const Layout: FC<ILayout> = ({
  Header,
  Footer,
  Sidder,
  paddingTop,
  mainMinHeight,
  className,
  children,
}) => {
  return (
    <div className="cms-layout" style={{ paddingTop: paddingTop }}>
      {Header}
      <div
        className={`cms-layout__main ${className || ""}`}
        style={{ minHeight: mainMinHeight }}
      >
        {Sidder}
        {children}
      </div>
      {Footer}
    </div>
  );
};

export default Layout;
