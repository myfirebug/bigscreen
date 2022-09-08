/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-08 12:41:00
 * @FilePath: \bigscreen\src\pages\configuration\components\add-or-edit-page\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import React, { FC, useEffect } from 'react'
import { Button, Form, Input, message } from 'antd'
import { IPage } from '@src/store/actionType'
import { guid } from '@src/utils/tools'
import { useForm } from 'antd/lib/form/Form'

interface IAddOrEditPageProps {
  setModal: React.Dispatch<any>
  addLargeScreenPage: (data: IPage, callback?: Function) => void
  modifyLargeScreenPage: (id: string, data: IPage, callback?: Function) => void
  details: any
}

const AddOrEditPage: FC<IAddOrEditPageProps> = ({
  setModal,
  addLargeScreenPage,
  modifyLargeScreenPage,
  details
}) => {
  const [form] = useForm()
  // 编辑时回填表单数据
  useEffect(() => {
    if (details.name) {
      form.setFieldsValue({
        name: details.name
      })
    }
  }, [details.name, form])

  // 成功回调函数
  const successHandler = (msg: string) => {
    message.success(msg)
    setModal((state: any) => ({
      ...state,
      visible: false
    }))
  }
  // 保存
  const onFinish = (values: any) => {
    const params = {
      ...values,
      id: details.id || guid(),
      widgets: details.widgets || []
    }
    // 编辑
    if (details.id) {
      modifyLargeScreenPage(details.id, params, () => {
        successHandler('编辑成功')
      })
    } else {
      // 新增
      addLargeScreenPage(params, () => {
        successHandler('新增成功')
      })
    }
  }

  return (
    <Form name='basic' onFinish={onFinish} autoComplete='off' form={form}>
      <Form.Item
        name='name'
        rules={[{ required: true, message: '请输入页面名称' }]}>
        <Input placeholder='请输入页面名称' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' block htmlType='submit'>
          保存
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddOrEditPage
