import React, { memo, useState } from "react";
import { Theme } from "@src/components";
import ModifyName from "./components/modifyName";
import "../../index.scss";

interface IHeader {}

const Header = memo((props: IHeader) => {
  const [isModalNameOpen, setIsModalNameOpen] = useState(false);
  return (
    <div className="cms-configuration__header">
      <div className="cms-configuration__header--left">
        <span className="cms-icon type">&#xe625;</span> 未命名微件
        <span
          className="cms-icon edit"
          onClick={() => setIsModalNameOpen(true)}
        >
          &#xec88;
        </span>
      </div>
      <div className="cms-configuration__header--right">
        <Theme />
        <div className="preview">
          <i className="cms-icon">&#xe668;</i>预览
        </div>
        <div className="publish">
          <i className="cms-icon">&#xe620;</i>发布
        </div>
        <div className="preview">
          <i className="cms-icon">&#xe720;</i>返回
        </div>
      </div>
      <ModifyName
        open={isModalNameOpen}
        a={1}
        title="修改微件名称"
        onCancel={() => setIsModalNameOpen(false)}
      />
    </div>
  );
});

export default Header;
