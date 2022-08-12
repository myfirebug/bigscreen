/*
 * widget-annulus-pie组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 17:43:10
 */
import picConfig from './index';

export default {
	code: 'widgetAnnulusPie',
	label: '圆环饼图',
	...picConfig,
	configureValue: {
		...picConfig.configureValue,
		seriesInsideRadius: 40,
		seriesAutsideRadius: 80
	},
	dataValue: picConfig.dataValue
};
