import React, { FC, useEffect, useMemo } from "react";
import Box from "../../../box";
import "./index.scss";
import { Form } from "antd";
import { DynamicForm } from "@src/components";
import { useWidget } from "@src/pages/widget/widgetConfiguration/widgetContext";
import compoents from "@src/elements/config/elements-type-configuration";

interface IElement {
  onClose: () => void;
  show: boolean;
}

const Element: FC<IElement> = ({ onClose, show }) => {
  const widget = useWidget();
  const getElementConfigAndDefaultValueById = useMemo(() => {
    let currentElementName = "";
    let defaultValue = {};
    if (widget?.selectedId && widget.widget?.elements) {
      const current = widget.widget?.elements.find(
        (item) => item.id === widget?.selectedId
      );
      if (current) {
        currentElementName = current.element;
        defaultValue = current.configureValue;
      }
    }
    return {
      configure: compoents[currentElementName]?.configure,
      defaultValue: defaultValue,
    };
  }, [widget]);

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(getElementConfigAndDefaultValueById.defaultValue);
  }, [getElementConfigAndDefaultValueById.defaultValue, form]);
  return (
    <Box
      className={`cms-configuration__rightside--element ${show && "is-show"}`}
      title="布局"
      onClose={onClose}
    >
      <Form labelCol={{ flex: "110px" }} labelAlign="left" form={form}>
        <DynamicForm
          datas={getElementConfigAndDefaultValueById.configure || []}
          form={form}
          callback={() => {}}
          field={""}
          isUpdate={false}
        />
      </Form>
    </Box>
  );
};

export default Element;
