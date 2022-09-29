/*
 * widget-text组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 16:13:40
 */
import baseConfiguration from '../base-configuration'
const { font, animate, data, box } = baseConfiguration

export default {
  code: 'widgetImage',
  type: 'image',
  label: '图片',
  // 配置项值
  configureValue: {
    display: 'block',
    ...animate.configureValue
  },
  // 坐标值
  coordinateValue: {
    left: 0,
    top: 0,
    width: 467,
    height: 346
  },
  // 数据值
  dataValue: {
    ...data.configureValue,
    field: 'imgSrc',
    mock: {
      imgSrc:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1115%2F092221102018%2F210922102018-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663126838&t=b28b080374fe1a14aae2eb2d99d5ab87'
    }
  }
}
