import React, { memo, useState } from "react";
import "../../index.scss";
import Element from "./components/element";

interface ILeftside {}

const Leftside = memo((props: ILeftside) => {
  const [current, setCurrent] = useState(0);
  const [tabs] = useState([
    {
      icon: "&#xe652;",
      name: "组件",
    },
  ]);
  return (
    <div className="cms-configuration__leftside">
      <ul className="cms-configuration__leftside--tabs">
        {tabs.map((item, index) => (
          <li
            className={`cms-configuration__leftside--tabitem ${
              current === index && "is-active"
            }`}
            key={index}
            onClick={() => setCurrent(index)}
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
        {current === 0 && <Element />}
      </div>
    </div>
  );
});

export default Leftside;
