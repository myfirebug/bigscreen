import React, { memo } from "react";
import "../../index.scss";
import Rule from "./components/rule";
import DragLine from "@src/components/drag/dragLine";

interface IMain {}

const Main = memo((props: IMain) => {
  return (
    <div className="cms-configuration__content">
      <div className="cms-configuration__content--wrap">
        <Rule />
        <div className="cms-configuration__content--view">
          <DragLine
            onMouseMove={function (
              e: MouseEvent,
              node: HTMLDivElement
            ): void {}}
            onMouseUp={function (e: MouseEvent, node: HTMLDivElement): void {
              console.log(e, node);
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default Main;
