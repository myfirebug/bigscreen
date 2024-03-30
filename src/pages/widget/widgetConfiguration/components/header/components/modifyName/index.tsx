import React, { FC } from "react";
import {
  Modal,
  ModalProps,
  Form,
  type FormProps,
  Input,
  Button,
  message,
} from "antd";
import { useWidget, useWidgetDispatch } from "../../../../widgetContext";

interface IModifyName extends ModalProps {
  onClose: () => void;
}

type FieldType = {
  name: string;
};

const ModifyName: FC<IModifyName> = (props) => {
  const widget = useWidget()?.widget;
  const dispatch = useWidgetDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch({
      type: "MODIFY_WIDGET_NAME",
      data: values.name,
    });
    message.success("修改成功");
    props.onClose();
  };
  return (
    <Modal {...props} footer={null} destroyOnClose>
      <Form
        initialValues={{ name: widget?.name || "" }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: "请输入微件名称" }]}
        >
          <Input placeholder="请输入微件名称" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            保存
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModifyName;
