/*
 * @Description: 大屏列表接口配置
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-11 08:53:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 21:30:30
 * @FilePath: \bigscreen\src\mock\modules\report.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
/*eslint-disable*/
import Mock from 'mockjs'
// 列表
export const report = {
  url: '/report',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'data|8': [
        {
          pages: [],
          id: '@id',
          auxiliaryBorderColor: '#1890ff',
          backgroundColor: '#090548',
          backgroundImage: '',
          description: '@cparagraph',
          height: 768,
          horizontalNumber: 4,
          interval: 10,
          projectName: '',
          showAuxiliary: true,
          title: '@csentence(10)',
          verticalNumber: 3,
          width: 1366,
          createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
        }
      ],
      total: 3
    }),
    message: '成功'
  }
}
// 删除
export const reportDelete = {
  url: '/report-delete',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: null,
    message: '删除成功'
  }
}
