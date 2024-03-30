import React, { memo, useCallback, useEffect, useState } from "react";
import "../../index.scss";
import Element from "./components/element";
import Layout from "./components/layout";
import { useWidget } from "../../widgetContext";

interface ILeftside {}

const Leftside = memo((props: ILeftside) => {
  const widget = useWidget()?.widget;
  const [current, setCurrent] = useState("element");
  const [tabs, setTabs] = useState([
    {
      icon: "&#xe652;",
      name: "组件",
      type: "element",
      show: true,
    },
    {
      icon: "&#xe7df;",
      name: "布局容器",
      type: "layout",
      show: true,
    },
  ]);

  const onClose = useCallback(() => {
    setCurrent("");
  }, []);

  useEffect(() => {
    if (widget && current === "layout") {
      setCurrent("element");
      setTabs((state) => {
        return state.map((item) => ({
          ...item,
          show: item.type === "layout" ? false : true,
        }));
      });
    }
  }, [widget, current, setTabs]);
  return (
    <div className="cms-configuration__leftside">
      <ul className="cms-configuration__leftside--tabs">
        {tabs.map((item, index) => (
          <li
            style={{ display: item.show ? "flex" : "none" }}
            className={`cms-configuration__leftside--tabitem ${
              current === item.type && "is-active"
            }`}
            key={index}
            onClick={() => setCurrent(item.type)}
          >
            <span
              className="cms-icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            ></span>
            <span className="name">{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="cms-configuration__leftside--tabcontent">
        {current === "element" && <Element onClose={onClose} />}
        {current === "layout" && <Layout onClose={onClose} />}
      </div>
    </div>
  );
});

export default Leftside;
