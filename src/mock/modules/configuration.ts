/*
 * @Description: 模拟接口数据
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-11 19:49:25
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 20:47:34
 * @FilePath: \bigscreen\src\mock\modules\configuration.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import Mock from 'mockjs'
export const configuration = {
  url: '/configuration',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      value: '@csentence(5)',
      'series|2': [
        {
          seriesName: '@ctitle(3)',
          'data|6': [
            {
              name: '@region',
              'value|1-300': 100
            }
          ]
        }
      ],
      'radio|2-4': [{ label: '@increment', value: '@county' }]
    })
  },
  message: '成功'
}
