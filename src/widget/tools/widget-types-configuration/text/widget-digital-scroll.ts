/*
 * widget-digital-scroll类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 15:55:54
 */
import baseConfiguration from '../../base-configuration';
const { font, data, box } = baseConfiguration;

console.log(box.configure);

const widgetDigitalText = {
	// 基础配置项
	configure: [
		...font.configure,
		{
			componentName: 'InputNumber',
			label: '宽度',
			name: 'styleWidth',
			required: false,
			placeholder: '请输入宽度',
			min: 0,
			max: 100
		},
		{
			componentName: 'InputNumber',
			label: '高度',
			name: 'styleHeight',
			required: false,
			placeholder: '请输入高度',
			min: 0,
			max: 100
		},
		box.configure
	],
	data: data.configure
};

export default widgetDigitalText;
