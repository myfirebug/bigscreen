/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Theme } from "@src/components";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { clearToken } from "@src/store/actions/token";
import { setUserInfo } from "@src/store/actions/userInfo";
import "./index.scss";
import { connect } from "react-redux";
import { ALL_STATE } from "@src/store/actionType";
import { IuserInfo } from "@src/service";
import { useInfo } from "@src/core/hook";
interface IHeader {
  clearToken: () => void;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo: (data: IuserInfo) => void;
  userInfo: IuserInfo;
}

const Header: FC<IHeader> = ({
  collapsed,
  setCollapsed,
  clearToken,
  setUserInfo,
  userInfo,
}) => {
  const { getUserInfo } = useInfo();
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, [getUserInfo, setUserInfo]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={clearToken}>
          <LoginOutlined />
          退出登录
        </div>
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
              <div className="cms-avatar">
                <img src={userInfo.avatar} alt="" />
              </div>
              <span className="user-name">欢迎{userInfo.username}</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  userInfo: state.userInfo,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  clearToken: clearToken,
  setUserInfo: setUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
