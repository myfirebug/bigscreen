/*
 * widget-base-pie组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 17:35:25
 */
import picConfig from './index';

export default {
	code: 'widgetBasePie',
	label: '基础饼图',
	...picConfig,
	configureValue: {
		...picConfig.configureValue
	},
	dataValue: picConfig.dataValue
};
