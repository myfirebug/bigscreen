import React, { FC, useEffect } from "react";
import { Form } from "antd";
import { DynamicForm } from "@src/components";
import compoents from "@src/elements/config/base-configuration";
import { useWidget } from "@src/pages/widget/widgetConfiguration/widgetContext";
import Box from "../../../box";
import "./index.scss";

interface ILayer {
  onClose: () => void;
  show: boolean;
}

const Layer: FC<ILayer> = ({ onClose, show }) => {
  const [form] = Form.useForm();
  const widget = useWidget();

  console.log(compoents.widget, "compoents.widget");

  useEffect(() => {
    form.setFieldsValue(widget?.widget?.configuration.configureValue);
  }, [widget?.widget?.configuration.configureValue, form]);
  return (
    <Box
      className={`cms-widget ${show && "is-show"}`}
      title="图层"
      onClose={onClose}
    >
      <Form labelCol={{ flex: "110px" }} labelAlign="left" form={form}>
        <DynamicForm
          datas={compoents.widget.configure || []}
          form={form}
          callback={() => {}}
          field={""}
          isUpdate={false}
        />
      </Form>
    </Box>
  );
};

export default Layer;
