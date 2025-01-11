import React, { FC } from "react";
import Box from "../../../box";
import "./index.scss";
import { Form, Slider } from "antd";
import { useWidget } from "../../../../widgetContext";

interface ILaout {
  onClose: () => void;
  show: boolean;
}

const Layout: FC<ILaout> = ({ onClose, show }) => {
  const widget = useWidget();
  console.log(widget?.min, widget?.max, "4445454");
  return (
    <Box
      className={`cms-configuration__rightside--layout ${show && "is-show"}`}
      title="布局"
      onClose={onClose}
    >
      <Form labelCol={{ flex: "110px" }} labelAlign="left">
        <Form.Item
          label="主轴尺寸"
          name="styleFlexBasis"
          rules={[{ required: true }]}
        >
          <Slider
            min={widget?.min || 0}
            max={widget?.max || 1}
            value={0}
            step={0.01}
            tooltip={{
              formatter: (value) => {
                return ((value as number) * 100).toFixed(2) + "%";
              },
            }}
          />
        </Form.Item>
      </Form>
    </Box>
  );
};

export default Layout;
