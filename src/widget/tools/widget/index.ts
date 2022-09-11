/*
 * 所有组件默认配置的集合
 * @Author: hejp
 * @Date: 2022-08-10 10:21:13
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-17 11:09:30
 */
import text from './text/main'
import widgetGroup from './widget-group'
import widgetImage from './widget-image'
// 折线图
import line from './line/main'
// 柱状图
import bar from './bar/main'
// 饼图
import pie from './pie/main'
// 雷达图
import radar from './radar/main'
// 漏斗图
import funnel from './funnel/main'
// 散点图
import scatter from './scatter/main'
// 表格
import table from './table/main'
// 表单
import form from './form/main'
// echart地图
import emap from './emap/main'

const widgetConfiguration: any = {
  ...text,
  widgetGroup,
  widgetImage,
  ...line,
  ...bar,
  ...pie,
  ...radar,
  ...funnel,
  ...scatter,
  ...table,
  ...form,
  ...emap
}

export default widgetConfiguration
