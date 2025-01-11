import React, {
  memo,
  useCallback,
  useState,
  createElement,
  useEffect,
} from "react";
import Layer from "./components/layer";
import Widget from "./components/widget";
import Layout from "./components/layout";
import Element from "./components/element";
import { useWidget } from "../../widgetContext";
import "../../index.scss";

interface IRightside {}

const Rightside = memo((props: IRightside) => {
  const widget = useWidget();
  const [current, setCurrent] = useState("layer");
  const [tabs, setTabs] = useState([
    {
      icon: "&#xe63c;",
      name: "图层管理",
      show: true,
      type: "layer",
      element: Layer,
    },
    {
      icon: "&#xe625;",
      name: "微件配置",
      show: true,
      type: "widget",
      element: Widget,
    },
    {
      icon: "&#xe652;",
      name: "组件配置",
      show: true,
      type: "element",
      element: Element,
    },
    {
      icon: "&#xe7df;",
      name: "布局容器",
      show: true,
      type: "layout",
      element: Layout,
    },
  ]);

  useEffect(() => {
    if (!widget?.widget) {
      setTabs((state) =>
        state.map((item, index) => ({
          ...item,
          show: index === 0 ? true : false,
        }))
      );
    } else {
      let showTabItemTypes: string[] = [];
      switch (widget?.selectedType) {
        case "widget":
          showTabItemTypes = ["layer", "widget"];
          break;
        case "element":
          showTabItemTypes = ["layer", "widget", "element"];
          break;
        default:
          showTabItemTypes = ["layer", "widget", "layout"];
      }
      setCurrent("layer");
      setTabs((state) =>
        state.map((item) => ({
          ...item,
          show: showTabItemTypes.includes(item.type) ? true : false,
        }))
      );
    }
  }, [widget?.widget, widget?.selectedType]);

  const onClose = useCallback(() => {
    setCurrent("");
  }, []);

  return (
    <div className="cms-configuration__rightside">
      <div className="cms-configuration__rightside--content">
        {tabs.map((item) => {
          return createElement(item.element, {
            onClose: onClose,
            key: item.type,
            show: current === item.type,
          });
        })}
      </div>
      <ul className="cms-configuration__rightside--tabs">
        {tabs.map((item, index) => (
          <li
            onClick={() => setCurrent(item.type)}
            className={`cms-configuration__rightside--item ${
              current === item.type ? "is-active" : ""
            }`}
            key={index}
            style={{ display: item.show ? "flex" : "none" }}
          >
            <span
              className="cms-icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            ></span>
            <span className="name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Rightside;
