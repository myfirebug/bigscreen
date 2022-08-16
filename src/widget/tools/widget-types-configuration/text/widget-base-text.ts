/*
 * widget-base-text类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:17:30
 */
import baseConfiguration from '../../base-configuration';
const { font, animate, data, box } = baseConfiguration;

const widgetBaseText = {
	// 基础配置项
	configure: [
		...font.configure,
		[
			...animate.configure,
			{
				name: '文字阴影',
				list: [
					{
						componentName: 'InputNumber',
						label: 'X轴偏移',
						name: 'styleTextShadowX',
						required: false,
						placeholder: '请输入X轴偏移'
					},
					{
						componentName: 'InputNumber',
						label: 'Y轴偏移',
						name: 'styleTextShadowY',
						required: false,
						placeholder: '请输入Y轴偏移'
					},
					{
						componentName: 'InputNumber',
						label: '模糊值',
						name: 'styleTextShadowF',
						required: false,
						placeholder: '请输入模糊值'
					},
					{
						componentName: 'SketchPicker',
						label: '颜色',
						name: 'styleTextShadowC',
						required: false,
						placeholder: '请选择颜色'
					}
				]
			},
			...box.configure
		]
	],
	data: data.configure
};

export default widgetBaseText;
