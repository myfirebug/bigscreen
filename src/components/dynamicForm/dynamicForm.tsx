import { Collapse, Form, FormInstance } from "antd";
import React, { FC } from "react";
import BaseForm from "../baseForm/baseForm";

const { Panel } = Collapse;

interface IDynamicForm {
  datas: any;
  form: FormInstance<any>;
  callback: Function;
  field: string;
  isUpdate: boolean;
}

// 判断数据是Array 或者 object
const judgeType = (data: any, type: string) => {
  return Object.prototype.toString.call(data) === type;
};

const DynamicForm: FC<IDynamicForm> = ({
  datas,
  form,
  callback,
  field,
  isUpdate = true,
}) => {
  return datas.map((item: any, index: number) => {
    if (judgeType(item, "[object Object]")) {
      const relationFields =
        item.relationFields !== undefined ? item.relationFields.split(",") : [];
      return (
        <div key={index}>
          {!relationFields.length ? (
            <BaseForm
              item={item}
              form={form}
              callback={callback}
              field={field}
              isUpdate={isUpdate}
            />
          ) : (
            <Form.Item noStyle shouldUpdate>
              {({ getFieldValue }) => {
                if (
                  relationFields.every((subItem: string) =>
                    item.relationValues.includes(String(getFieldValue(subItem)))
                  )
                ) {
                  return (
                    <BaseForm
                      item={item}
                      form={form}
                      callback={callback}
                      field={field}
                      isUpdate={isUpdate}
                    />
                  );
                }
              }}
            </Form.Item>
          )}
        </div>
      );
    }
    if (judgeType(item, "[object Array]")) {
      return (
        <div key={index}>
          {item.map((subItem: any, subIndex: number) => {
            const relationFields =
              subItem.relationFields !== undefined
                ? subItem.relationFields.split(",")
                : [];
            return (
              <Collapse key={subIndex} size="small">
                {subItem.relationFields === undefined ? (
                  <Panel header={subItem.name} key={subItem + subIndex}>
                    <DynamicForm
                      datas={subItem.list}
                      form={form}
                      callback={callback}
                      field={field}
                      isUpdate={isUpdate}
                    />
                  </Panel>
                ) : (
                  <Form.Item noStyle shouldUpdate>
                    {({ getFieldValue }) => {
                      if (
                        relationFields.every((subbItem: string) =>
                          subItem.relationValues.includes(
                            String(getFieldValue(subbItem))
                          )
                        )
                      ) {
                        return (
                          <Collapse key={subIndex} size="small">
                            <Panel
                              header={subItem.name}
                              key={subItem + subIndex}
                            >
                              <DynamicForm
                                datas={subItem.list}
                                form={form}
                                callback={callback}
                                field={field}
                                isUpdate={isUpdate}
                              />
                            </Panel>
                          </Collapse>
                        );
                      }
                    }}
                  </Form.Item>
                )}
              </Collapse>
            );
          })}
        </div>
      );
    }
    return null;
  });
};

export default DynamicForm;
