/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-10 20:59:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 20:22:31
 * @FilePath: \bigscreen\src\mock\index.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import Mock from 'mockjs'
// 登录模块
import * as login from './modules/login'
// 模拟数据接口
import * as configuration from './modules/configuration'
// 简报数据接口
import * as report from './modules/report'

create(login)
create(configuration)
create(report)
/**
 * 根据模块创建接口
 * @param mod m模块
 */
function create(mod: any) {
  for (let key in mod) {
    Mock.mock(RegExp(mod[key].url + '*'), mod[key].method, (options) => {
      const body = JSON.parse(options.body)
      const { url, data } = mod[key]
      // 这里判断登录是username:admin,password:123456,才可以判断
      if (
        url === '/login' &&
        (body.username !== 'admin' || body.password !== '123456')
      ) {
        return {
          ...data,
          code: 400,
          data: null,
          message: '用户名或密码错误'
        }
      }

      return {
        ...data,
        data: {
          ...data.data,
          ...body
        }
      }
    })
  }
}

export default Mock
