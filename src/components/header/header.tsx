/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Theme } from "@src/components";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import "./index.scss";
interface IHeader {}

const Header: FC<IHeader> = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
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
          <MenuUnfoldOutlined /> <MenuFoldOutlined />
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
