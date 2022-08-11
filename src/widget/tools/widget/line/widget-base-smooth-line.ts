/*
 * widget-base-line组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-11 14:45:55
 */
import lineConfig from './index';

export default {
	code: 'widgetBaseSmoothLine',
	label: '基础平滑折线图',
	...lineConfig,
	configureValue: {
		...lineConfig.configureValue,
		lineSmooth: true
	}
};
