/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 20:16:08
 * @FilePath: \bigscreen\src\service\index.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { get, IResult, post } from './fetch'
import { IAnyObject } from '@src/types'
interface IApi {
  [propNames: string]: (params?: IAnyObject) => Promise<IResult>
}

const api: IApi = {
  // 获取echarts geo数据
  getGeo(params: any) {
    return get({
      url: `/geo/areas_v3/bound/${params.field}.json`,
      loading: true,
      servicePrefix: 'local'
    })
  },
  // 登录
  login(params: any) {
    return post({
      url: `/login`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 简报列表
  report(params: any) {
    return get({
      url: `/report`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  }
}

export default api
