/*
 * 数据项配置
 * @Author: hejp
 * @Date: 2022-08-10 10:10:09
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-10 10:45:59
 */
const data = {
	// 数据项默认值
	configureValue: {
		useInterface: false,
		dataType: 'mock',
		mock: {
			value: '文本框'
		},
		url: '',
		method: 'get',
		field: 'value'
	},
	// 数据项配置
	configure: [
		{
			componentName: 'Switch',
			label: '使用组数据',
			name: 'useInterface',
			required: false,
			disabled: true,
			placeholder: '',
			tooltip: '该组件使用组的接口数据'
		},
		{
			componentName: 'Select',
			label: '请求类型',
			name: 'dataType',
			required: false,
			placeholder: '',
			relationFields: 'useInterface',
			relationValues: 'false',
			options: [
				{ code: 'mock', name: 'mock数据' },
				{ code: 'dynamic', name: '接口数据' }
			]
		},
		{
			componentName: 'JsonEdit',
			label: 'mock数据',
			name: 'mock',
			required: false,
			placeholder: '请输入mock数据',
			relationFields: 'dataType,useInterface',
			relationValues: 'mock,false'
		},
		{
			componentName: 'TextArea',
			label: '接口地址',
			name: 'url',
			required: false,
			placeholder: '请输入接口地址',
			relationFields: 'dataType,useInterface',
			relationValues: 'dynamic,false'
		},
		{
			componentName: 'Select',
			label: '请求方式',
			name: 'method',
			required: false,
			placeholder: '',
			relationFields: 'dataType,useInterface',
			relationValues: 'dynamic,false',
			options: [
				{ code: 'get', name: 'GET' },
				{ code: 'post', name: 'post' }
			]
		},
		{
			componentName: 'Input',
			label: '对应字段',
			name: 'field',
			required: false,
			placeholder: ''
		}
	]
};

export default data;
