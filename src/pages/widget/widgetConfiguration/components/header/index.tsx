import React, { memo, useState } from "react";
import { Theme } from "@src/components";
import ModifyName from "./components/modifyName";
import { useWidget } from "../../widgetContext";
import "../../index.scss";

interface IHeader {}

const Header = memo((props: IHeader) => {
  const [isModalNameOpen, setIsModalNameOpen] = useState(false);
  const widget = useWidget();
  return (
    <div className="cms-configuration__header">
      <div className="cms-configuration__header--left">
        <span className="cms-icon type">&#xe625;</span>{" "}
        {widget?.widget?.name || "未命名微件"}
        {widget?.widget && (
          <span
            className="cms-icon edit"
            onClick={() => setIsModalNameOpen(true)}
          >
            &#xec88;
          </span>
        )}
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
        title="修改微件名称"
        onCancel={() => setIsModalNameOpen(false)}
        onClose={() => setIsModalNameOpen(false)}
      />
    </div>
  );
});

export default Header;
