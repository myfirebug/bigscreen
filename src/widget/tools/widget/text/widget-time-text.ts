/*
 * widget-time-text组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 11:19:18
 */
import baseConfiguration from '../../base-configuration';
const { font, data } = baseConfiguration;

export default {
	code: 'widgetTimeText',
	type: 'text',
	label: '基础文本',
	// 配置项值
	configureValue: {
		display: 'block',
		textShadowX: 0,
		textShadowY: 0,
		textShadowF: 0,
		textShadowC: '',
		...font.configureValue,
		fmtDate: 'yyyy-MM-dd hh:mm:ss',
		color: 'orange'
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 300,
		height: 40
	},
	// 数据值
	dataValue: data.configureValue
};
