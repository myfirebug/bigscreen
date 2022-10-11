/*
 * @Description: userinfo reducers
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-11 11:24:07
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-11 11:34:00
 * @FilePath: \bigscreen\src\store\reducers\userinfo.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { ModifyAction } from '../actions/userinfo'
import { USERINFO } from '../actionType'
import { IAnyObject } from '@src/types/index'

// 处理并返回 state

export const userinfo = (
  state: IAnyObject = {},
  action: ModifyAction
): IAnyObject => {
  switch (action.type) {
    case USERINFO:
      return action.data
    default:
      return state
  }
}
