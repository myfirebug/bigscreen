import React, { FC } from "react";
import { Menu, MenuProps } from "antd";
import "./index.scss";
import { connect } from "react-redux";
import { ALL_STATE } from "@src/store/actionType";
import { IThemeName } from "@src/core/theme";
import routerDatas, { IRoute } from "@src/router/routes";

interface ISidder {
  collapsed: boolean;
  currentTheme: IThemeName;
}

type MenuItem = Required<MenuProps>["items"][number];

const Sidder: FC<ISidder> = ({ collapsed, currentTheme }) => {
  const recursionTree = (tree: IRoute[]): any => {
    return tree
      .filter((item) => item.meta.menu)
      .map((item) => ({
        key: item.path,
        label: item.title,
        icon: (
          <span
            className="cms-icon"
            style={{ fontSize: "18px" }}
            dangerouslySetInnerHTML={{
              __html: item.icon as string,
            }}
          ></span>
        ),
        children: Array.isArray(item.children)
          ? recursionTree(item.children)
          : null,
      }));
  };

  const items: MenuItem[] = recursionTree(routerDatas[0].children as IRoute[]);

  return (
    <div className="cms-sidder">
      <Menu
        className="cms-menu"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme={currentTheme.includes("_dark") ? "dark" : "light"}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  currentTheme: state.currentTheme,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidder);
