import React, { memo } from "react";
import "../../index.scss";
import Rule from "./components/rule";

interface IMain {}

const Main = memo((props: IMain) => {
  return (
    <div className="cms-configuration__content">
      <Rule />
    </div>
  );
});

export default Main;
