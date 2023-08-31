/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Theme } from "@src/components";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import "./index.scss";
interface IHeader {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeader> = ({ collapsed, setCollapsed }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <LoginOutlined />
          退出登录
        </a>
      ),
    },
  ];
  return (
    <div className="cms-header">
      <div className="cms-header__left">
        <div className="cms-icon">&#xe605;</div>
        <h1 className="title">大屏管理系统</h1>
      </div>
      <div className="cms-header__right">
        <div className="cms-header__right--left">
          <span onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </div>
        <div className="cms-header__right--right">
          <Theme />
          <Dropdown menu={{ items }}>
            <div className="user">
              <div className="cms-avatar"></div>
              <span className="user-name">欢迎admin</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
