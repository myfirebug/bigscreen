/*
 * @Description: 登录接口配置
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-11 08:53:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 20:47:53
 * @FilePath: \bigscreen\src\mock\modules\login.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
/*eslint-disable*/
import Mock from 'mockjs'

export const login = {
  url: '/login',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      email: '@email()',
      'age|20-80': 10,
      name: '@cword(3, 5)',
      describe: '@cparagraph(2)',
      token: '@guid',
      avatar: '@image(200x100)'
    }),
    message: '登录成功'
  }
}
