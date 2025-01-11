import React, { FC, useRef } from "react";
import "./index.scss";

interface IDragLine {
  direction?: "vertical" | "horizontal";
  onMouseMove: (
    e: MouseEvent,
    node: HTMLDivElement,
    direction: "vertical" | "horizontal"
  ) => void;
  onMouseUp: (
    e: MouseEvent,
    node: HTMLDivElement,
    direction: "vertical" | "horizontal"
  ) => void;
}

const DragLine: FC<IDragLine> = ({
  onMouseMove,
  onMouseUp,
  direction = "horizontal",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // 拖拽结束
  const mouseUp = (e: MouseEvent) => {
    document.body.classList.remove("dragging");
    onMouseUp && onMouseUp(e, ref.current as HTMLDivElement, direction);
    document.removeEventListener("mousemove", mouseMove, false);
    document.removeEventListener("mouseup", mouseUp, false);
  };

  // 拖拽中
  const mouseMove = (e: MouseEvent) => {
    onMouseMove && onMouseMove(e, ref.current as HTMLDivElement, direction);
  };

  // 开始拖拽
  const mouseDown = () => {
    document.body.classList.add("dragging");
    document.addEventListener("mousemove", mouseMove, false);
    document.addEventListener("mouseup", mouseUp, false);
  };
  return (
    <div
      ref={ref}
      className={`cms-drag-line is-${direction}`}
      onMouseDown={mouseDown}
    ></div>
  );
};

export default DragLine;
