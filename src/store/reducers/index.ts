import { combineReducers } from 'redux'
import { authorization } from './authorization'
import { counter } from './counter'
import { largeScreen } from './largeScreen'
import { userinfo } from './userinfo'
export default combineReducers({
  counter,
  authorization,
  largeScreen,
  userinfo
})
