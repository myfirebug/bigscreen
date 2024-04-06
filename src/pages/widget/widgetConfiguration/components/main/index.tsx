import React, { memo } from "react";
import { Empty } from "antd";
import Rule from "./components/rule";
import { useWidget } from "../../widgetContext";
import WidgetMain from "../widgetMain";
import "../../index.scss";

interface IMain {}

const Main = memo((props: IMain) => {
  const widget = useWidget()?.widget;
  const selectedElementId = useWidget()?.selectedElementId as string;
  return (
    <div className="cms-configuration__content">
      <div className="cms-configuration__content--wrap">
        <Rule />
        <div className="cms-configuration__content--view">
          {widget ? (
            <WidgetMain widget={widget} selectedElementId={selectedElementId} />
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </div>
    </div>
  );
});

export default Main;
