import {
  LineChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
  FontSizeOutlined,
  FileImageOutlined,
  LinkOutlined,
  ClockCircleOutlined,
  TableOutlined
} from '@ant-design/icons'
import './index.scss'

// 组件分类
export const componentsClassify: any[] = [{
  type: 'text',
  icon: <FontSizeOutlined />,
  name: '文本',
  widgetName: 'widget-text'
},
{
  type: 'image',
  icon: <FileImageOutlined />,
  name: '图片',
  widgetName: 'widget-image'
},
{
  type: 'link',
  icon: <LinkOutlined />,
  name: '链接',
  widgetName: 'widget-link'
},
{
  type: 'date',
  icon: <ClockCircleOutlined />,
  name: '当前时间',
  widgetName: 'widget-date'
},
{
  type: 'table',
  icon: <TableOutlined />,
  name: '表格',
  widgetName: 'widget-table'
},
{
  type: 'line',
  icon: <LineChartOutlined />,
  name: '折线图',
  datas: [{
    src: '',
    widgetName: 'widget-base-line',
    name: '基础折线图'
  }]
},
{
  type: 'bar',
  icon: <BarChartOutlined />,
  name: '柱状图',
  datas: []
},
{
  type: 'pie',
  icon: <PieChartOutlined />,
  name: '饼图',
  datas: []
},
{
  type: 'radar',
  icon: <RadarChartOutlined />,
  name: '雷达图',
  datas: []
}]

// 所有组件地址
const components: any = {
  // 文本框
  'widget-text': require('./text').default,
  // 组
  'widget-group': require('./group').default,
  // 基础折线图
  'widget-base-line': require('./line/base-line').default
}

export default components