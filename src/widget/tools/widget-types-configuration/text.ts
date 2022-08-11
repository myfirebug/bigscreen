/*
 * text类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-11 16:08:45
 */
import baseConfiguration from '../base-configuration';
const { font, animate, data, box } = baseConfiguration;

const text = {
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
						name: 'textShadowX',
						required: false,
						placeholder: '请输入X轴偏移'
					},
					{
						componentName: 'InputNumber',
						label: 'Y轴偏移',
						name: 'textShadowY',
						required: false,
						placeholder: '请输入Y轴偏移'
					},
					{
						componentName: 'InputNumber',
						label: '模糊值',
						name: 'textShadowF',
						required: false,
						placeholder: '请输入模糊值'
					},
					{
						componentName: 'SketchPicker',
						label: '颜色',
						name: 'textShadowC',
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

export default text;
