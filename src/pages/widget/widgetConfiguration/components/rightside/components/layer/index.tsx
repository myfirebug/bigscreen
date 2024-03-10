import React, { FC } from "react";
import Box from "../../../box";
import "./index.scss";

interface ILayer {}

const Layer: FC<ILayer> = () => {
  return (
    <Box className="cms-layer" title="图层">
      123
    </Box>
  );
};

export default Layer;
