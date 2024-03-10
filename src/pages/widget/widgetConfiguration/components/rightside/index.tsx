import React, { memo, useState } from "react";
import Layer from "./components/layer";
import "../../index.scss";

interface IRightside {}

const Rightside = memo((props: IRightside) => {
  const [current, setCurrent] = useState(0);
  const [tabs] = useState([
    {
      icon: "&#xe63c;",
      name: "图层管理",
    },
  ]);
  return (
    <div className="cms-configuration__rightside">
      <div className="cms-configuration__rightside--content">
        {current === 0 && <Layer />}
      </div>
      <ul className="cms-configuration__rightside--tabs">
        {tabs.map((item, index) => (
          <li
            onClick={() => setCurrent(index)}
            className={`cms-configuration__rightside--item ${
              current === index ? "is-active" : ""
            }`}
            key={index}
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
