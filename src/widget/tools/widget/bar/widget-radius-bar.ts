/*
 * widget-radius-bar组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 11:09:58
 */
import barConfig from './index';

export default {
	code: 'widgetRadiusBar',
	label: '圆角柱状图',
	...barConfig,
	configureValue: {
		...barConfig.configureValue,
		barWidth: 20,
		barBorderRadius: 20
	}
};
