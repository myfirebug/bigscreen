/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-09-16 20:13:46
 * @FilePath: \bigscreen\src\service\index.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { get, post, IResult } from './fetch'
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
  // 刷新token
  refreshToken(params) {
    return post({
      url: 'oauth-service/user/refresh',
      data: params,
      loading: true,
      servicePrefix: 'default'
    })
  },
  // 获取菜单树
  getMenus(params) {
    return get({
      params: params,
      url: '/cloud-service/cloudresource/tree/left',
      loading: true,
      servicePrefix: 'default'
    })
  }
}

export default api
