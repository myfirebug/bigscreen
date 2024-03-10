import React, { FC } from "react";
import { Modal, ModalProps } from "antd";

interface IModifyName extends ModalProps {
  a: number;
}

const ModifyName: FC<IModifyName> = (props) => {
  return <Modal {...props}></Modal>;
};

export default ModifyName;
