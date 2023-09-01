import React, { FC } from "react";
import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { connect } from "react-redux";
import { ALL_STATE } from "@src/store/actionType";
import { IThemeName } from "@src/core/theme";

interface ISidder {
  collapsed: boolean;
  currentTheme: IThemeName;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Sidder: FC<ISidder> = ({ collapsed, currentTheme }) => {
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
