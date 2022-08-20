import { IAnyObject } from '@src/types'

interface IConfig {
  [propName: string]: IAnyObject
}

// 这里是后台接口前缀
export const config: IConfig = {
  development: {
    default: 'http://192.168.200.7:9900',
    localhost: '/',
    hjcLocalhost: 'http://192.168.200.7:9900',
    wjLocalhost: 'http://192.168.200.7:9900'
  },
  production: {
    default: 'http://yjyj.hkdata.com',
    localhost: '/',
    hjcLocalhost: 'http://yjyj.hkdata.com',
    wjLocalhost: 'http://yjyj.hkdata.com'
  }
}
