import React, { FC, MouseEvent, useEffect, useMemo, useState } from 'react'
import './index.scss'
import {
  Tabs,
  Form,
  Input,
  InputNumber,
  FormInstance,
  Row,
  Col,
  Select,
  Collapse,
  Switch,
  Slider,
  Button
} from 'antd'
import { ChromePicker } from 'react-color'
import { IPage, IScreen, IWidget } from '@src/store/actionType'
import Wrapper from '@src/components/wrapper'
import {
  LeftOutlined,
  RightOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FolderOutlined,
  FolderOpenOutlined
} from '@ant-design/icons'
import { contentMenuHandler } from '@utils/tools'
// 配置文件
import configuration from '@src/widget/tools/main'
// JSON编辑器
import JsonEditor from '@src/components/json-editor'
// 微件配置文件
const { widgetTypesConfiguration, widgetConfiguration, baseConfiguration } =
  configuration

const { TextArea } = Input
const { TabPane } = Tabs
const { Option } = Select
const { Panel } = Collapse

interface IDesignBodyRightProps {
  screen: IScreen
  modifyScreen: (datas: any) => void
  currentWidgetId: string
  currentWidget: IWidget
  modifyLargeScreenElement: (id: string, groupId: string, data: IWidget) => void
  currentPage: IPage
  setRightFlag: React.Dispatch<React.SetStateAction<boolean>>
  rightFlag: Boolean
  currentWidgetGroupId: string
  showOrHideLargeScreenElement: (id: string, groupId?: string) => void
  changeLargeScreenElement: (id: string, groupId?: string) => void
}

const DesignBodyRight: FC<IDesignBodyRightProps> = ({
  screen,
  modifyScreen,
  currentWidgetId,
  currentWidget,
  modifyLargeScreenElement,
  currentPage,
  setRightFlag,
  rightFlag,
  currentWidgetGroupId,
  showOrHideLargeScreenElement,
  changeLargeScreenElement
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
  // 联动
  const [linkageForm] = Form.useForm()

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
    if (currentWidget.linkageIds) {
      linkageForm.setFieldsValue(currentWidget.linkageIds.split(','))
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
  const onChangeHandler = (
    callback: Function,
    name: string,
    value: any,
    field: string
  ) => {
    if (!field) {
      callback &&
        callback({
          [name]: value
        })
    } else {
      const newCurrentWidget = JSON.parse(JSON.stringify(currentWidget))
      newCurrentWidget[field][name] = value
      callback &&
        callback(currentWidgetId, currentWidgetGroupId, newCurrentWidget)
    }
  }

  /**
   * 基础表单
   * @param item 单个配置项
   * @param form 表单实例
   * @param callback 返回方法
   * @param field 字段名
   * @param isUpdate 是否change更新
   * @returns
   */
  const baseForm = (
    item: any,
    form: FormInstance<any>,
    callback: Function,
    field: string,
    isUpdate: boolean = true
  ) => {
    return (
      <>
        {item.componentName === 'Input' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Input
              allowClear
              disabled={item.disabled}
              onBlur={(e) =>
                isUpdate &&
                onChangeHandler(callback, item.name, e.target.value, field)
              }
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'InputNumber' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <InputNumber
              disabled={item.disabled}
              min={item.min}
              max={item.max}
              onBlur={(e) =>
                isUpdate &&
                onChangeHandler(
                  callback,
                  item.name,
                  e.target.value ? Number(e.target.value) : 0,
                  field
                )
              }
              style={{ width: '100%' }}
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'TextArea' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <TextArea
              allowClear
              disabled={item.disabled}
              onBlur={(e) =>
                isUpdate &&
                onChangeHandler(callback, item.name, e.target.value, field)
              }
              rows={8}
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'Switch' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            valuePropName='checked'
            rules={[{ required: item.require }]}>
            <Switch
              disabled={
                item.disabled ||
                (item.name === 'useInterface' && !currentWidgetGroupId)
              }
              onChange={(value) =>
                isUpdate && onChangeHandler(callback, item.name, value, field)
              }
            />
          </Form.Item>
        )}
        {item.componentName === 'Slider' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Slider
              min={item.min || 0}
              max={item.max || 100}
              disabled={item.disabled}
              onAfterChange={(value) =>
                isUpdate && onChangeHandler(callback, item.name, value, field)
              }
            />
          </Form.Item>
        )}
        {item.componentName === 'Select' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Select
              allowClear
              disabled={item.disabled}
              onChange={(value: string) =>
                isUpdate && onChangeHandler(callback, item.name, value, field)
              }
              placeholder={item.placeholder}>
              {item.options.map((item: any) => (
                <Option key={item.code} value={item.code}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
        {item.componentName === 'SketchPicker' && (
          <Form.Item label={item.label}>
            <Row>
              <Col span={12}>
                <Form.Item
                  noStyle
                  name={item.name}
                  tooltip={item.tooltip}
                  rules={[{ required: item.require }]}>
                  <Input
                    allowClear
                    disabled={item.disabled}
                    onBlur={(e) =>
                      isUpdate &&
                      onChangeHandler(
                        callback,
                        item.name,
                        e.target.value,
                        field
                      )
                    }
                    placeholder={item.placeholder}
                  />
                </Form.Item>
              </Col>
              <Col span={11} offset={1}>
                <Form.Item shouldUpdate noStyle>
                  {() => (
                    <div
                      className='color-wrapper'
                      style={{
                        background: form.getFieldValue(item.name),
                        width: '100%'
                      }}>
                      获取颜色
                      <div className='color'>
                        <ChromePicker
                          color={form.getFieldValue(item.name)}
                          onChangeComplete={(e) => {
                            form.setFieldsValue({
                              [item.name]: `rgba(${e.rgb.r},${e.rgb.g},${e.rgb.b},${e.rgb.a})`
                            })
                            isUpdate
                              ? onChangeHandler(
                                  callback,
                                  item.name,
                                  `rgba(${e.rgb.r},${e.rgb.g},${e.rgb.b},${e.rgb.a})`,
                                  field
                                )
                              : form.setFieldValue(
                                  item.name,
                                  `rgba(${e.rgb.r},${e.rgb.g},${e.rgb.b},${e.rgb.a})`
                                )
                          }}
                        />
                      </div>
                    </div>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        )}
        {item.componentName === 'JsonEdit' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Form.Item shouldUpdate noStyle>
              <JsonEditor
                value={form.getFieldValue(item.name)}
                onChange={(e) =>
                  isUpdate
                    ? onChangeHandler(callback, item.name, e, field)
                    : form.setFieldValue(item.name, e)
                }
              />
            </Form.Item>
          </Form.Item>
        )}
      </>
    )
  }

  /**
   * 动态渲染表单
   * @param datas 数据
   * @param form 表单实例
   * @param callback 返回函数
   * @param field 字段名
   * @param isUpdate 是否change更新
   * @returns
   */
  const renderDynamicForm = (
    datas: any,
    form: FormInstance<any>,
    callback: Function,
    field: string,
    isUpdate: boolean = true
  ) => {
    return datas.map((item: any, index: number) => {
      if (judgeType(item, '[object Object]')) {
        const relationFields =
          item.relationFields !== undefined
            ? item.relationFields.split(',')
            : []
        return (
          <div key={index}>
            {!relationFields.length ? (
              baseForm(item, form, callback, field, isUpdate)
            ) : (
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) => {
                  if (
                    relationFields.every((subItem: string) =>
                      item.relationValues.includes(
                        String(getFieldValue(subItem))
                      )
                    )
                  ) {
                    return baseForm(item, form, callback, field, isUpdate)
                  }
                }}
              </Form.Item>
            )}
          </div>
        )
      }
      if (judgeType(item, '[object Array]')) {
        return (
          <div key={index}>
            {item.map((subItem: any, subIndex: number) => {
              const relationFields =
                subItem.relationFields !== undefined
                  ? subItem.relationFields.split(',')
                  : []
              return (
                <Collapse key={subIndex}>
                  {subItem.relationFields === undefined ? (
                    <Panel header={subItem.name} key={subItem + subIndex}>
                      {renderDynamicForm(
                        subItem.list,
                        form,
                        callback,
                        field,
                        isUpdate
                      )}
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
                            <Collapse key={subIndex}>
                              <Panel
                                header={subItem.name}
                                key={subItem + subIndex}>
                                {renderDynamicForm(
                                  subItem.list,
                                  form,
                                  callback,
                                  field,
                                  isUpdate
                                )}
                              </Panel>
                            </Collapse>
                          )
                        }
                      }}
                    </Form.Item>
                  )}
                </Collapse>
              )
            })}
          </div>
        )
      }
    })
  }

  // 保存数据
  const saveData = (values: any) => {
    const newCurrentWidget = JSON.parse(JSON.stringify(currentWidget))
    newCurrentWidget.dataValue = values
    // 如果没有说明该组件有问题
    if (!widgetConfiguration[newCurrentWidget.code]) {
      return
    }
    newCurrentWidget.dataValue = {
      ...widgetConfiguration[newCurrentWidget.code].dataValue,
      ...values
    }
    modifyLargeScreenElement(
      currentWidgetId,
      currentWidgetGroupId,
      newCurrentWidget
    )
  }

  // 切换元素
  const changeElement = (e: MouseEvent, id: string, groupId?: string) => {
    e.stopPropagation()
    e.preventDefault()
    document
      .querySelector('#js-content-menu')
      ?.setAttribute('style', 'display: none')
    if (id !== currentWidgetId) {
      changeLargeScreenElement(id, groupId)
    }
  }

  // 修改元素
  const modifyElement = (e: MouseEvent, id: string, groupId?: string) => {
    e.stopPropagation()
    e.preventDefault()
    showOrHideLargeScreenElement(id, groupId)
  }

  // 组件树
  const renderWidgetsTree = (datas: IWidget[], groudId?: string) => {
    return datas.map((item) => {
      if (item.widgets) {
        return (
          <div className='app-screen-disign__layer' key={item.id}>
            <div
              onContextMenu={(e) => {
                changeElement(e, item.id, item.id)
                contentMenuHandler(e)
              }}
              onClick={(e) => changeElement(e, item.id, item.id)}
              className={`header ${
                item.id === currentWidgetId ? 'is-active' : ''
              }`}>
              <span onClick={(e) => modifyElement(e, item.id)} className='show'>
                {item.configureValue.styleDisplay === 'block' ? (
                  <EyeOutlined />
                ) : (
                  <EyeInvisibleOutlined />
                )}
              </span>
              <span className='file'>
                <FolderOpenOutlined />
              </span>
              <span className='label'>{item.label}</span>
            </div>
            {renderWidgetsTree(item.widgets, item.id)}
          </div>
        )
      } else {
        return (
          <div key={item.id} className='app-screen-disign__layer--item'>
            <div
              onContextMenu={(e) => {
                changeElement(e, item.id, groudId)
                contentMenuHandler(e)
              }}
              onClick={(e) => changeElement(e, item.id, groudId)}
              className={`header ${
                item.id === currentWidgetId ? 'is-active' : ''
              }`}>
              <span
                onClick={(e) => modifyElement(e, item.id, groudId)}
                className='show'>
                {item.configureValue.styleDisplay === 'block' ? (
                  <EyeOutlined />
                ) : (
                  <EyeInvisibleOutlined />
                )}
              </span>
              <span className='file'>
                <FolderOutlined />
              </span>
              <span className='label'>{item.label}</span>
            </div>
          </div>
        )
      }
    })
  }

  // 获取接口字段数据
  const getParamsData: any[] = useMemo(() => {
    let result: any[] = []
    if (currentWidgetGroupId) {
      const index = currentPage.widgets.findIndex(
        (item) => item.id === currentWidgetGroupId
      )
      if (
        index !== -1 &&
        currentPage.widgets[index].dataValue &&
        currentPage.widgets[index].dataValue.params
      ) {
        for (let field in currentPage.widgets[index].dataValue.params) {
          result.push(field)
        }
      }
    }
    console.log(result)
    return result
  }, [currentWidgetGroupId, currentPage])

  useEffect(() => {
    setKey('1')
  }, [currentWidgetId])

  // 判断是否显示联动组件
  const isShowLinkageForm = useMemo(() => {
    let flag = false

    if (!currentPage.widgets) {
      return flag
    }

    if (currentWidgetId === currentWidgetGroupId) {
      const index = currentPage.widgets.findIndex(
        (item) => item.id === currentWidgetGroupId
      )
      if (
        index !== -1 &&
        currentPage.widgets[index].widgets.some((item) => item.type === 'form')
      ) {
        return true
      }
    }

    return flag
  }, [currentPage, currentWidgetId, currentWidgetGroupId])

  return (
    <div
      className='app-screen-disign__body--right'
      style={{
        right: rightFlag ? 0 : -400
      }}>
      <div onClick={() => setRightFlag(!rightFlag)} className='operation'>
        {rightFlag ? <LeftOutlined /> : <RightOutlined />}
      </div>
      <Tabs
        className='custom-tabs'
        activeKey={key}
        onChange={(key) => setKey(key)}
        destroyInactiveTabPane>
        <TabPane tab='图层管理' key='1' style={{ position: 'relative' }}>
          <Wrapper
            loading={false}
            error={false}
            nodata={Boolean(
              currentPage && currentPage.widgets && !currentPage.widgets.length
            )}>
            <div className='app-screen-disign__layer'>
              {renderWidgetsTree(currentPage.widgets || [])}
            </div>
          </Wrapper>
        </TabPane>
        <TabPane tab='项目配置' key='2'>
          <Form
            preserve
            form={pageForm}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            autoComplete='off'
            labelAlign='left'
            initialValues={screen}
            // onValuesChange={(changedValues, allValues) => modifyScreen(allValues)}
          >
            {renderDynamicForm(
              baseConfiguration.page.configure || [],
              pageForm,
              modifyScreen,
              ''
            )}
          </Form>
        </TabPane>
        {currentWidgetId && !currentWidgetId.includes(',') && (
          <>
            <TabPane tab='配置' key='3'>
              <Form
                form={configureForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete='off'
                labelAlign='left'>
                {widgetTypesConfiguration[currentWidget.code]
                  ? renderDynamicForm(
                      widgetTypesConfiguration[currentWidget.code].configure ||
                        [],
                      configureForm,
                      modifyLargeScreenElement,
                      'configureValue',
                      true
                    )
                  : widgetTypesConfiguration[currentWidget.type]
                  ? renderDynamicForm(
                      widgetTypesConfiguration[currentWidget.type].configure ||
                        [],
                      configureForm,
                      modifyLargeScreenElement,
                      'configureValue',
                      true
                    )
                  : null}
              </Form>
            </TabPane>
            {/* 判断是否显示数据选项卡 */}
            {(widgetTypesConfiguration[currentWidget.code] &&
              widgetTypesConfiguration[currentWidget.code].data) ||
            (widgetTypesConfiguration[currentWidget.type] &&
              widgetTypesConfiguration[currentWidget.type].data) ? (
              <TabPane tab='数据' key='4'>
                <Form
                  preserve
                  form={dataForm}
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  autoComplete='off'
                  labelAlign='left'
                  onFinish={saveData}>
                  {widgetTypesConfiguration[currentWidget.code]
                    ? renderDynamicForm(
                        widgetTypesConfiguration[currentWidget.code].data || [],
                        dataForm,
                        modifyLargeScreenElement,
                        'dataValue',
                        false
                      )
                    : widgetTypesConfiguration[currentWidget.type]
                    ? renderDynamicForm(
                        widgetTypesConfiguration[currentWidget.type].data || [],
                        dataForm,
                        modifyLargeScreenElement,
                        'dataValue',
                        false
                      )
                    : null}
                  {currentWidget.type === 'form' ? (
                    <Form.Item
                      label='接口字段'
                      name='paramName'
                      tooltip='从组组件的参数中选择'>
                      <Select placeholder='请选择'>
                        {getParamsData.map((item) => (
                          <Option key={item}>{item}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  ) : null}
                  <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type='primary' htmlType='submit' block>
                      保存
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            ) : null}
            <TabPane tab='坐标' key='5'>
              <Form
                preserve
                form={dynamicForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete='off'
                labelAlign='left'>
                {renderDynamicForm(
                  baseConfiguration.coordinate.configure || [],
                  dynamicForm,
                  modifyLargeScreenElement,
                  'coordinateValue',
                  true
                )}
              </Form>
            </TabPane>
          </>
        )}
        {isShowLinkageForm ? (
          <TabPane tab='联动' key='6'>
            <Form
              form={linkageForm}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              autoComplete='off'
              labelAlign='left'>
              <Form.Item label='联动组件' name='linkageIds'>
                <Select
                  onChange={(e: any) =>
                    modifyLargeScreenElement(
                      currentWidgetId,
                      currentWidgetGroupId,
                      {
                        ...currentWidget,
                        linkageIds: e.join(',')
                      }
                    )
                  }
                  mode='multiple'
                  placeholder='请选择联动组件'>
                  {currentPage && currentPage.widgets
                    ? currentPage.widgets.map((item) => {
                        if (item.id !== currentWidgetGroupId) {
                          return (
                            <Option key={item.id} value={item.id}>
                              {item.label}
                            </Option>
                          )
                        }
                      })
                    : null}
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
        ) : null}
      </Tabs>
    </div>
  )
}
export default DesignBodyRight
