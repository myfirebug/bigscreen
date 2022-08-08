const group = {
	code: 'widget-group',
	type: 'group',
	label: '组',
	widgets: [],
	configure: [
		{
			componentName: 'SketchPicker',
			label: '背景颜色',
			name: 'backgroundColor',
			required: false,
			placeholder: '请选择背景颜色'
		}
	],
	configureValue: {
		backgroundColor: ''
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 500,
		height: 500
	},
	dataValue: {
		useInterface: false,
		dataType: 'dynamic',
		mock: {
			value: '123'
		},
		url: '',
		method: 'get'
	},
	data: [
		{
			componentName: 'Switch',
			label: '使用接口',
			name: 'useInterface',
			required: false,
			type: 'hidden',
			placeholder: ''
		},
		{
			componentName: 'JsonEdit',
			label: 'mock数据',
			name: 'mock',
			required: false,
			placeholder: '请输入mock数据',
			relationFields: 'useInterface',
			relationValues: 'false'
		},
		{
			componentName: 'Select',
			label: '请求类型',
			name: 'dataType',
			required: false,
			placeholder: '',
			disabled: true,
			relationFields: 'useInterface',
			relationValues: 'true',
			options: [
				{ code: 'mock', name: 'mock数据' },
				{ code: 'dynamic', name: '接口数据' }
			]
		},
		{
			componentName: 'TextArea',
			label: '接口地址',
			name: 'url',
			required: false,
			placeholder: '请输入接口地址',
			relationFields: 'dataType,useInterface',
			relationValues: 'dynamic,true'
		},
		{
			componentName: 'Select',
			label: '请求方式',
			name: 'method',
			required: false,
			placeholder: '',
			relationFields: 'dataType,useInterface',
			relationValues: 'dynamic,true',
			options: [
				{ code: 'get', name: 'GET' },
				{ code: 'post', name: 'post' }
			]
		}
	]
};

export default group;
