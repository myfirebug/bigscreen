/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 11:51:22
 * @FilePath: \bigscreen\src\pages\login\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ALL_STATE } from '@store/actionType'
import './index.scss'
import { userinfo } from '@src/store/actions/userinfo'
import Ajax from '@src/service'
import { IAnyObject } from '@src/types/index'

interface ILoginProps {
  saveUserInfo: (data: IAnyObject) => void
  userinfo: IAnyObject
}

const Login: FC<ILoginProps> = ({ saveUserInfo, userinfo }) => {
  // history实例
  let history = useHistory()
  // 获取form实例
  const [loginForm] = Form.useForm()
  // 登录
  const onFinish = (values: any) => {
    Ajax.login(values).then((res) => {
      if (res) {
        saveUserInfo(res)
        // session.setItem('token', values.username + values.password)
        history.replace('/frame/home')
      }
    })
  }
  return (
    <div className='app-login'>
      <div className='app-login__form'>
        <div className='header'>
          <div className='logo'></div>
          <h2 className='title'>大屏管理系统</h2>
        </div>
        <div className='body'>
          <Form
            name='basic-login'
            form={loginForm}
            initialValues={{ remember: true, agreement: true }}
            onFinish={onFinish}
            autoComplete='off'>
            <Form.Item
              name='username'
              rules={[{ required: true, message: '请输入用户名' }]}>
              <Input
                size='large'
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='账户'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password
                size='large'
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='密码'
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' block size='large'>
                登录
              </Button>
            </Form.Item>
            <Form.Item name='agreement' valuePropName='checked'>
              <Checkbox className='agreement'>
                已阅读并同意<span>《用户使用协议》</span>及
                <span>《用户隐私协议》</span>
              </Checkbox>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => ({
  counter: state.counter,
  userinfo: state.userinfo
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  saveUserInfo: userinfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
