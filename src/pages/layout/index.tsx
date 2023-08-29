import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const CurrentLayout = memo(() => {
  return <Outlet />;
});

export default CurrentLayout;
