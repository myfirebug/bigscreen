/*
 * @Author: hejp
 * @Date: 2022-08-10 10:01:56
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-17 11:11:09
 */
// 组配置
import group from './group'
// text配置
import text from './text/main'
// image配置
import image from './image'
// line配置
import line from './line'
// bar配置
import bar from './bar'
// pie配置
import pie from './pie'
// radar配置
import radar from './radar'
// funnel配置
import funnel from './funnel'
// scatter配置
import scatter from './scatter'
// table配置
import table from './table'
// form配置
import form from './form/main'
// emap配置
import emap from './emap/main'

const widgetTypesConfiguration: any = {
  group,
  ...text,
  image,
  line,
  bar,
  pie,
  radar,
  funnel,
  scatter,
  table,
  ...form,
  ...emap
}

export default widgetTypesConfiguration
