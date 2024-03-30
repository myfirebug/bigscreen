import React, { FC } from "react";
import Box from "../../../box";
import "./index.scss";

interface ILayer {
  onClose: () => void;
}

const Layer: FC<ILayer> = ({ onClose }) => {
  return (
    <Box className="cms-layer" title="图层" onClose={onClose}>
      123
    </Box>
  );
};

export default Layer;
