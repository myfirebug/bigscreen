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
// 折线图集合
import line from './line'
import './index.scss'

// 组件分类
export const componentsClassify: any[] = [{
  type: 'text',
  icon: <FontSizeOutlined />,
  name: '文本',
  widgetName: 'widgetText'
},
{
  type: 'image',
  icon: <FileImageOutlined />,
  name: '图片'
},
{
  type: 'link',
  icon: <LinkOutlined />,
  name: '链接'
},
{
  type: 'date',
  icon: <ClockCircleOutlined />,
  name: '当前时间'
},
{
  type: 'table',
  icon: <TableOutlined />,
  name: '表格'
},
{
  type: 'line',
  icon: <LineChartOutlined />,
  name: '折线图',
  datas: [{
    src: '',
    widgetName: 'widgetBaseLine',
    name: '基础折线图'
  }, {
    src: '',
    widgetName: 'widgetBaseSmoothLine',
    name: '基础平滑折线图'
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
  'widgetText': require('./text').default,
  // 组
  'widgetGroup': require('./group').default,
  ...line
}

export default components