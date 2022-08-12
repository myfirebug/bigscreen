/*
 * widget-lengthways-bar组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 11:15:18
 */
import barConfig from './index';

export default {
	code: 'widgetLengthwaysBar',
	label: '纵向柱状图',
	...barConfig,
	configureValue: {
		...barConfig.configureValue,
		barWidth: 15,
		barBorderRadius: 20,
		xAxisType: 'value',
		yAxisType: 'category'
	}
};
