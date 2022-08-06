// 动画
import animate from '../animate';

const text = {
	code: 'widget-text',
	type: 'text',
	label: '文本',
	isGroup: false,
	// 配置项值
	configureValue: {
		elementValue: '文本框',
		fontSize: 26,
		letterSpacing: 0,
		fontWeight: 'normal',
		textAlign: 'center',
		backgroundColor: '',
		lineHeight: 1,
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
		...animate.configureValue
	},
	// 基础配置项
	configure: [
		{
			type: 'Input',
			label: '文本内容',
			name: 'elementValue',
			required: false,
			placeholder: ''
		},
		{
			type: 'InputNumber',
			label: '字体大小',
			name: 'fontSize',
			required: false,
			min: 12,
			placeholder: ''
		},
		{
			type: 'InputNumber',
			label: '字体间距',
			name: 'letterSpacing',
			required: false,
			placeholder: ''
		},
		{
			type: 'InputNumber',
			label: '行高',
			name: 'lineHeight',
			required: false,
			placeholder: ''
		},
		{
			type: 'Select',
			label: '文字粗细',
			name: 'fontWeight',
			required: false,
			placeholder: '',
			options: [
				{ code: 'normal', name: '正常' },
				{ code: 'bold', name: '粗体' },
				{ code: 'bolder', name: '特粗体' },
				{ code: 'lighter', name: '细体' }
			]
		},
		{
			type: 'Select',
			label: '对齐方式',
			name: 'textAlign',
			required: false,
			placeholder: '',
			options: [
				{ code: 'center', name: '居中' },
				{ code: 'left', name: '左对齐' },
				{ code: 'right', name: '右对齐' }
			]
		},
		{
			type: 'SketchPicker',
			label: '字体颜色',
			name: 'color',
			required: false,
			placeholder: '请选择字体颜色'
		},
		{
			type: 'SketchPicker',
			label: '背景颜色',
			name: 'backgroundColor',
			required: false,
			placeholder: '请选择背景颜色'
		},
		[
			...animate.configure,
			{
				name: '文字阴影',
				list: [
					{
						type: 'InputNumber',
						label: 'X轴偏移',
						name: 'textShadowX',
						required: false,
						placeholder: '请输入X轴偏移'
					},
					{
						type: 'InputNumber',
						label: 'Y轴偏移',
						name: 'textShadowY',
						required: false,
						placeholder: '请输入Y轴偏移'
					},
					{
						type: 'InputNumber',
						label: '模糊值',
						name: 'textShadowF',
						required: false,
						placeholder: '请输入模糊值'
					},
					{
						type: 'SketchPicker',
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
						type: 'Select',
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
						type: 'InputNumber',
						label: '边框尺寸',
						name: 'borderWidth',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						type: 'SketchPicker',
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
						type: 'InputNumber',
						label: '左上',
						name: 'borderTopLeftRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						type: 'InputNumber',
						label: '右上',
						name: 'borderTopRightRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						type: 'InputNumber',
						label: '左下',
						name: 'borderBottomLeftRadius',
						required: false,
						placeholder: '请输入尺寸'
					},
					{
						type: 'InputNumber',
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
		dataType: 'mock',
		mock: {
			value: '文本框'
		},
		url: '',
		method: 'get',
		field: 'value'
	},
	data: [
		{
			type: 'Select',
			label: '数据类型',
			name: 'dataType',
			required: false,
			placeholder: '',
			options: [
				{ code: 'mock', name: 'mock数据' },
				{ code: 'dynamic', name: '动态数据' }
			]
		},
		{
			type: 'JsonEdit',
			label: '模拟数据',
			name: 'mock',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'mock'
		},
		{
			type: 'TextArea',
			label: '接口地址',
			name: 'url',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		},
		{
			type: 'JsonEdit',
			label: '真实数据',
			name: 'data',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		},
		{
			type: 'Select',
			label: '接口方式',
			name: 'method',
			required: false,
			placeholder: '请选择接口方式',
			relationField: 'dataType',
			relationValue: 'dynamic',
			options: [
				{ code: 'get', name: 'GET' },
				{ code: 'post', name: 'POST' }
			]
		},
		{
			type: 'JsonEdit',
			label: '接口参数',
			name: 'params',
			required: false,
			placeholder: '',
			relationField: 'dataType',
			relationValue: 'dynamic'
		},
		{
			type: 'Input',
			label: '字段',
			name: 'field',
			required: false,
			placeholder: '请输入接口对应字段'
		}
	]
};

export default text;
