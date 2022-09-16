/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-15 00:00:51
 * @FilePath: \bigscreen\src\service\config.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { IAnyObject } from '@src/types'

interface IConfig {
  [propName: string]: IAnyObject
}

const config: IConfig = {
  // 开发
  development: {
    default: 'http://172.19.20.12:9905',
    geo: 'http://geo.datav.aliyun.com/areas_v3/bound/',
    local: window.location.href.split('#')[0]
  },
  // 测试
  test: {
    default: 'http://172.19.20.12:9905',
    geo: 'http://geo.datav.aliyun.com/areas_v3/bound/',
    local: 'http://geo.datav.aliyun.com/'
  },
  // 正式
  production: {
    default: 'http://192.168.200.7:9905',
    geo: 'http://geo.datav.aliyun.com/areas_v3/bound/',
    local: 'https://myfirebug.github.io'
  }
}

export default config
