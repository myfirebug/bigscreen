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
    src: require('../assets/image/configuration/line/widgetBaseLine.png'),
    widgetName: 'widgetBaseLine',
    name: '基础折线图'
  }, {
    src: require('../assets/image/configuration/line/widgetBaseSmoothLine.png'),
    widgetName: 'widgetBaseSmoothLine',
    name: '基础平滑折线图'
  }, {
    src: require('../assets/image/configuration/line/widgetBaseAreaLine.png'),
    widgetName: 'widgetBaseAreaLine',
    name: '基础面积图'
  }, {
    src: require('../assets/image/configuration/line/widgetBaseLengthwaysLine.png'),
    widgetName: 'widgetBaseLengthwaysLine',
    name: '基础纵向折线图'
  }]
},
{
  type: 'bar',
  icon: <BarChartOutlined />,
  name: '柱状图',
  datas: [{
    src: require('../assets/image/configuration/bar/widgetBaseBar.png'),
    widgetName: 'widgetBaseBar',
    name: '基础柱状图'
  },
  {
    src: require('../assets/image/configuration/bar/widgetBackgroudBar.png'),
    widgetName: 'widgetBackgroudBar',
    name: '带背景色的柱状图'
  },
  {
    src: require('../assets/image/configuration/bar/widgetAlignmentBar.png'),
    widgetName: 'widgetAlignmentBar',
    name: '坐标轴刻度与标签对齐'
  },
  {
    src: require('../assets/image/configuration/bar/widgetRadiusBar.png'),
    widgetName: 'widgetRadiusBar',
    name: '圆角柱状图'
  },
  {
    src: require('../assets/image/configuration/bar/widgetLengthwaysBar.png'),
    widgetName: 'widgetLengthwaysBar',
    name: '纵向柱状图'
  },
  {
    src: require('../assets/image/configuration/bar/widgetStackBar.png'),
    widgetName: 'widgetStackBar',
    name: '堆积柱状图'
  }]

},
{
  type: 'pie',
  icon: <PieChartOutlined />,
  name: '饼图',
  datas: [
    {
      src: require('../assets/image/configuration/pie/widgetBasePie.png'),
      widgetName: 'widgetBasePie',
      name: '基础饼图'
    },
    {
      src: require('../assets/image/configuration/pie/widgetAnnulusPie.png'),
      widgetName: 'widgetAnnulusPie',
      name: '圆环饼图'
    },
    {
      src: require('../assets/image/configuration/pie/widgetRosetypePie.png'),
      widgetName: 'widgetRosetypePie',
      name: '南丁格尔图'
    }
  ]
},
{
  type: 'radar',
  icon: <RadarChartOutlined />,
  name: '雷达图',
  datas: [
    {
      src: require('../assets/image/configuration/radar/widgetBaseRadar.png'),
      widgetName: 'widgetBaseRadar',
      name: '基础雷达图'
    },
    {
      src: require('../assets/image/configuration/radar/widgetCircleRadar.png'),
      widgetName: 'widgetCircleRadar',
      name: '圆形雷达图'
    }
  ]
},
{
  type: 'funnel',
  icon: <RadarChartOutlined />,
  name: '漏斗图',
  datas: [
    {
      src: require('../assets/image/configuration/funnel/widgetBaseFunnel.png'),
      widgetName: 'widgetBaseFunnel',
      name: '基础漏斗图'
    }
  ]
}]

// 所有组件地址
const components: any = {
  // 文本框
  text: require('./text').default,
  // 组
  group: require('./group').default,
  // 折线图
  line: require('./line').default,
  // 柱状图
  bar: require('./bar').default,
  // 饼图
  pie: require('./pie').default,
  // 雷达图
  radar: require('./radar').default,
  // 漏斗图
  funnel: require('./funnel').default
}

export default components