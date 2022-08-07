const data = {
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

export default data;
