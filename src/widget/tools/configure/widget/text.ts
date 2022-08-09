// 动画
import animate from '../animate';
// 字体
import font from '../font';
// 请求
import data from '../data';

const text = {
	code: 'widget-text',
	type: 'text',
	label: '文本',
	isGroup: false,
	// 配置项值
	configureValue: {
		display: 'block',
		textShadowX: 0,
		textShadowY: 0,
		textShadowF: 0,
		textShadowC: '',
		borderStyle: 'none',
		borderWidth: 0,
		borderColor: '',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		...animate.configureValue,
		...font.configureValue
	},
	// 基础配置项
	configure: [
		[
			...font.configure,
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
			}
		],
		[
			{
				name: '边框',
				list: [
					{
						componentName: 'Select',
						label: '边框样式',
						name: 'borderStyle',
						required: false,
						placeholder: '请选择边框样式',
						options: [
							{ code: 'none', name: '无' },
							{ code: 'solid', name: '直线' },
							{ code: 'dashed', name: '破折线' },
							{ code: 'dotted', name: '点状线' },
							{ code: 'double', name: '双划线' },
							{ code: 'groove', name: '3D凹槽' },
							{ code: 'ridge', name: '3D垄状' },
							{ code: 'inset', name: '3D内嵌' },
							{ code: 'outset', name: '3D外嵌' }
						]
					},
					{
						componentName: 'InputNumber',
						label: '边框尺寸',
						name: 'borderWidth',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						componentName: 'SketchPicker',
						label: '颜色',
						name: 'borderColor',
						required: false,
						placeholder: '请选择边框颜色'
					}
				]
			}
		],
		[
			{
				name: '圆角',
				list: [
					{
						componentName: 'InputNumber',
						label: '左上',
						name: 'borderTopLeftRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						componentName: 'InputNumber',
						label: '右上',
						name: 'borderTopRightRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						componentName: 'InputNumber',
						label: '左下',
						name: 'borderBottomLeftRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						componentName: 'InputNumber',
						label: '右下',
						name: 'borderBottomRightRadius',
						required: false,
						placeholder: '请输入尺寸'
					}
				]
			}
		]
	],
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 100,
		height: 40
	},
	dataValue: {
		useInterface: false,
		dataType: 'mock',
		mock: {
			value: '文本框'
		},
		url: '',
		method: 'get',
		field: 'value'
	},
	data: data
};

export default text;
