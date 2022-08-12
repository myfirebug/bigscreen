/*
 * widget-background-bar组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 11:00:46
 */
import barConfig from './index';

export default {
	code: 'widgetBackgroudBar',
	label: '带背景色的柱状图',
	...barConfig,
	configureValue: {
		...barConfig.configureValue,
		barShowBackground: true
	}
};
