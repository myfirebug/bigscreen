/*
 * widget-digital-scroll组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 15:48:54
 */
import baseConfiguration from '../../base-configuration';
const { font, data, box } = baseConfiguration;

export default {
	code: 'widgetDigitalScroll',
	type: 'text',
	label: '数字滚动',
	// 配置项值
	configureValue: {
		styleDisplay: 'block',
		styleTextShadowX: 0,
		styleTextShadowY: 0,
		styleTextShadowF: 0,
		styleTextShadowC: '',
		...font.configureValue,
		...box.configureValue,
		styleColor: 'orange',
		styleWidth: 50,
		styleHeight: 50,
		styleBorderBottomLeftRadius: 5,
		styleBorderBottomRightRadius: 5,
		styleBorderColor: 'rgba(35,216,157,1)',
		styleBorderStyle: 'solid',
		styleBorderTopLeftRadius: 5,
		styleBorderTopRightRadius: 5,
		styleBorderWidth: 1,
		styleBoxInset: true,
		styleBoxShadowC: 'rgba(43,147,118,1)',
		styleBoxShadowF: 5,
		styleBoxShadowX: 0,
		styleBoxShadowY: 0
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 800,
		height: 50
	},
	// 数据值
	dataValue: {
		...data.configureValue,
		mock: {
			value: 18665997697
		}
	}
};
