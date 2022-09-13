/*
 * widget-emap-base组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 16:12:46
 */
import baseConfiguration from '../../base-configuration'
const { data } = baseConfiguration

export default {
  type: 'emap',
  // 配置项值
  configureValue: {
    styleDisplay: 'block',
    emapZoom: 1,
    emapLabelShow: true,
    emapFontSize: 12,
    emapFontColor: 'rgba(255,255,255,.5)',
    emapHighFontColor: '#fff',
    emapBorderSize: 1,
    emapBorderColor: '#666',
    emapHighBorderColor: '#fff',
    emapAreaColor: '#333',
    emapHighAreaColor: '#000',
    emapTop: 0,
    emapVisualMapShow: false,
    emapVisualMapFontColor: '#fff',
    emapVisualMapLeft: 'right',
    emapVisualMapOrient: 'horizontal',
    emapVisualMapStartColor: '#fff',
    emapVisualMapEndColor: '#000'
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
    field: 'series',
    mock: {
      series: [
        {
          seriesName: '今日完成情况',
          data: [
            { name: '北京市', value: 39.93 },
            { name: '天津市', value: 39.13 },
            { name: '河北省', value: 147 },
            { name: '山西省', value: 39 },
            { name: '内蒙古自治区', value: 58 },
            { name: '辽宁省', value: 50 },
            { name: '吉林省', value: 51 },
            { name: '黑龙江省', value: 114 },
            { name: '上海市', value: 31.23 },
            { name: '江苏省', value: 67 },
            { name: '浙江省', value: 84 },
            { name: '安徽省', value: 117 },
            { name: '福建省', value: 29 },
            { name: '江西省', value: 96 },
            { name: '山东省', value: 92 },
            { name: '河南省', value: 113 },
            { name: '湖北省', value: 273 },
            { name: '湖南省', value: 175 },
            { name: '广东省', value: 38 },
            { name: '广西壮族自治区', value: 59 },
            { name: '海南省', value: 54 },
            { name: '重庆市', value: 66 },
            { name: '四川省', value: 58 },
            { name: '贵州省', value: 71 },
            { name: '云南省', value: 25 },
            { name: '西藏自治区', value: 24 },
            { name: '陕西省', value: 61 },
            { name: '甘肃省', value: 99 },
            { name: '青海省', value: 57 },
            { name: '宁夏回族自治区', value: 52 },
            { name: '新疆维吾尔自治区', value: 84 },
            { name: '台湾省', value: 88 },
            { name: '香港特别行政区', value: 66 },
            { name: '澳门特别行政区', value: 77 }
          ]
        }
      ]
    }
  }
}
