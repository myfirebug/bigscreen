/*
 * widget-base-line组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-10 12:15:38
 */
import baseConfiguration from '../../base-configuration';
const { echarts, animate, data } = baseConfiguration;

export default {
	code: 'widgetBaseLine',
	type: 'line',
	label: '基础折线图',
	// 配置项值
	configureValue: {
		display: 'block',
		...animate.configureValue,
		...echarts.titleValue,
		...echarts.legendValue,
		...echarts.gridValue,
		...echarts.xAxisValue
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 500,
		height: 500
	},
	// 数据值
	dataValue: data.configureValue
};
