import React, {
  FC, useEffect, useState
} from 'react'
import './index.scss'
import { Tabs, Form, Input, InputNumber, FormInstance, Row, Col, Select, Collapse, Switch, Slider } from 'antd'
import { pageConfigure, coordinateConfigure } from '@src/widget/tools'
import { SketchPicker } from 'react-color'
import { IPage, IScreen, IWidget } from '@src/store/actionType'
import Wrapper from '@src/components/wrapper'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// JSON编辑器
import ReactJson from 'react-json-view'
import JsonEditor from '@src/components/json-editor'

const { TextArea } = Input
const { TabPane } = Tabs
const { Option } = Select
const { Panel } = Collapse

interface IDesignBodyRightProps {
  screen: IScreen;
  modifyScreen: (datas: any) => void;
  currentWidgetId: string;
  currentWidget: IWidget;
  modifyLargeScreenElement: (id: string, data: IWidget) => void;
  currentPage: IPage;
  setRightFlag: React.Dispatch<React.SetStateAction<boolean>>;
  rightFlag: Boolean;
}

const DesignBodyRight: FC<IDesignBodyRightProps> = ({
  screen,
  modifyScreen,
  currentWidgetId,
  currentWidget,
  modifyLargeScreenElement,
  currentPage,
  setRightFlag,
  rightFlag
}) => {
  const [key, setKey] = useState('1')
  // 配置from
  const [configureForm] = Form.useForm()
  // 页面from
  const [pageForm] = Form.useForm()
  // 坐标from
  const [dynamicForm] = Form.useForm()
  // 数据
  const [dataForm] = Form.useForm()

  useEffect(() => {
    if (currentWidget.configureValue) {
      configureForm.setFieldsValue(currentWidget.configureValue)
    }
    if (currentWidget.coordinateValue) {
      dynamicForm.setFieldsValue(currentWidget.coordinateValue)
    }
    if (currentWidget.dataValue) {
      dataForm.setFieldsValue(currentWidget.dataValue)
    }
  }, [currentWidget])
  // 判断数据是Array 或者 object
  const judgeType = (data: any, type: string) => {
    return Object.prototype.toString.call(data) == type
  }

  /**
   * 
   * @param callback 返回的方法
   * @param name 表单名
   * @param value 表单值
   * @param field 字段名
   */
  const onChangeHandler = (callback: Function, name: string, value: any, field: string) => {
    if (!field) {
      callback && callback({
        [name]: value
      })
    } else {
      const newCurrentWidget = JSON.parse(JSON.stringify(currentWidget))
      newCurrentWidget[field][name] = value
      callback && callback(currentWidgetId, {
        ...newCurrentWidget
      })
    }
  }

  /**
   * 动态渲染表单
   * @param datas 表格数据
   * @returns ReactNode
   */
  const renderDynamicForm = (
    datas: any,
    form: FormInstance<any>,
    callback: Function,
    field: string,
    isUpdate: boolean = true) => {
    return datas.map((item: any, index: number) => {
      if (judgeType(item, '[object Object]')) {
        return (
          <div key={index}>
            {
              item.type === 'Input' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <Input
                  allowClear
                  onBlur={e => isUpdate && onChangeHandler(callback, item.name, e.target.value, field)}
                  placeholder={item.placeholder} />
              </Form.Item>
            }
            {
              item.type === 'InputNumber' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <InputNumber
                  onBlur={e => isUpdate && onChangeHandler(callback, item.name, e.target.value ? Number(e.target.value) : 0, field)}
                  style={{ width: '100%' }}
                  placeholder={item.placeholder} />
              </Form.Item>
            }
            {
              item.type === 'TextArea' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <TextArea
                  allowClear
                  onBlur={e => isUpdate && onChangeHandler(callback, item.name, e.target.value, field)}
                  rows={8}
                  placeholder={item.placeholder} />
              </Form.Item>
            }
            {
              item.type === 'Switch' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                valuePropName="checked"
                rules={[{ required: item.require }]}
              >
                <Switch onChange={(value) => isUpdate && onChangeHandler(callback, item.name, value, field)} />
              </Form.Item>
            }
            {
              item.type === 'Slider' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <Slider onAfterChange={(value) => isUpdate && onChangeHandler(callback, item.name, value, field)} />
              </Form.Item>
            }
            {
              item.type === 'Select' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <Select
                  allowClear
                  onChange={(value: string) => isUpdate && onChangeHandler(callback, item.name, value, field)}
                  placeholder={item.placeholder}>
                  {
                    item.options.map((item: any) => (
                      <Option
                        key={item.code}
                        value={item.code}>
                        {item.name}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            }
            {
              item.type === 'SketchPicker' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item label={item.label}>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      noStyle
                      name={item.name}
                      rules={[{ required: item.require }]}
                    >
                      <Input
                        allowClear
                        onBlur={e => isUpdate && onChangeHandler(callback, item.name, e.target.value, field)}
                        placeholder={item.placeholder} />
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1}>
                    <Form.Item shouldUpdate noStyle>
                      {
                        () => (
                          <div className='color-wrapper' style={{
                            background: form.getFieldValue(item.name),
                            width: '100%'
                          }}>
                            获取颜色
                            <div className='color'>
                              <SketchPicker
                                color={form.getFieldValue(item.name)}
                                onChangeComplete={e => {
                                  form.setFieldsValue({
                                    [item.name]: e.hex
                                  })
                                  isUpdate && onChangeHandler(callback, item.name, e.hex, field)
                                }} />
                            </div>
                          </div>
                        )
                      }
                    </Form.Item>

                  </Col>
                </Row>
              </Form.Item>
            }
            {
              item.type === 'JsonEdit' && (item.relationField === undefined || currentWidget[field][item.relationField] === item.relationValue) &&
              <Form.Item
                label={item.label}
                name={item.name}
                rules={[{ required: item.require }]}
              >
                <Form.Item shouldUpdate noStyle>
                  <JsonEditor
                    value={form.getFieldValue(item.name)}
                    onChange={e => isUpdate && onChangeHandler(callback, item.name, e, field)} />
                </Form.Item>
              </Form.Item>
            }
          </div >
        )
      }
      if (judgeType(item, '[object Array]')) {
        return (
          <div key={index}>
            <Collapse accordion>
              {
                item.map((subItem: any, subIndex: number) => (
                  <Panel header={subItem.name} key={subIndex}>
                    {
                      renderDynamicForm(subItem.list, form, callback, field, isUpdate)
                    }
                  </Panel>
                ))
              }
            </Collapse>
          </div>
        )
      }
    })
  }

  useEffect(() => {
    if (currentWidgetId && !currentWidgetId.includes(',')) {
      setKey('2')
    } else {
      setKey('1')
    }
  }, [currentWidgetId])

  return (
    <div className='app-screen-disign__body--right' style={{
      right: rightFlag ? 0 : -400
    }}>
      <div
        onClick={() => setRightFlag(!rightFlag)}
        className="operation">
        {
          rightFlag ? <LeftOutlined /> : <RightOutlined />
        }
      </div>
      <Tabs
        className='custom-tabs'
        activeKey={key}
        onChange={key => setKey(key)}
        destroyInactiveTabPane>
        <TabPane tab="图层" key="5">
          <Wrapper
            loading={false}
            error={false}
            nodata={Boolean((currentPage && currentPage.widgets && !currentPage.widgets.length))}>
            <ul className="app-screen-disign__layer">
              {
                currentPage.widgets ? currentPage.widgets.map((item: any) => (
                  <li
                    key={item.id}
                    className="app-screen-disign__layer--item">{item.label}</li>
                )) : null
              }
            </ul>
          </Wrapper>
        </TabPane>
        <TabPane tab="项目配置" key="1">
          <Form
            form={pageForm}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            autoComplete="off"
            labelAlign="left"
            initialValues={screen}
          // onValuesChange={(changedValues, allValues) => modifyScreen(allValues)}
          >
            {
              renderDynamicForm(pageConfigure.configure || [], pageForm, modifyScreen, '')
            }
          </Form>
        </TabPane>
        {
          currentWidgetId && !currentWidgetId.includes(',') && <>
            <TabPane tab="配置" key="2">
              <Form
                form={configureForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete="off"
                labelAlign="left"
              >
                {
                  renderDynamicForm(
                    currentWidget.configure || [],
                    configureForm,
                    modifyLargeScreenElement,
                    'configureValue',
                    true
                  )
                }
              </Form>
            </TabPane>
            <TabPane tab="数据" key="3">
              <Form
                form={dataForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete="off"
                labelAlign="left"
              >
                {
                  renderDynamicForm(
                    currentWidget.data || [],
                    dataForm,
                    modifyLargeScreenElement,
                    'dataValue',
                    true
                  )
                }
              </Form>
            </TabPane>
            <TabPane tab="坐标" key="4">
              <Form
                form={dynamicForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete="off"
                labelAlign="left"
              // onValuesChange={(changedValues, allValues) => modifyLargeScreenElement(currentWidgetId, {
              //   ...currentWidget,
              //   coordinateValue: allValues
              // })}
              >
                {
                  renderDynamicForm(
                    coordinateConfigure.configure || [],
                    dynamicForm,
                    modifyLargeScreenElement,
                    'coordinateValue',
                    true
                  )
                }
              </Form>
            </TabPane>
          </>
        }
      </Tabs>
    </div>
  )
}
export default DesignBodyRight