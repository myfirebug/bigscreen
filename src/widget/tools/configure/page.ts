const page = {
	type: 'page',
	label: '页面配置',
	configure: [
		{
			componentName: 'InputNumber',
			label: '屏幕宽度',
			name: 'width',
			required: false,
			placeholder: '请输入屏幕宽度',
			min: 1920,
			max: 5000
		},
		{
			componentName: 'InputNumber',
			label: '屏幕高度',
			name: 'height',
			required: false,
			placeholder: '请输入屏幕高度',
			min: 1080,
			max: 3000
		},
		{
			componentName: 'SketchPicker',
			label: '背景颜色',
			name: 'backgroundColor',
			required: false,
			placeholder: '请选择背景颜色'
		},
		{
			componentName: 'Input',
			label: '背景图片',
			name: 'backgroundImage',
			required: false,
			placeholder: '请输入背景图片地址'
		},
		{
			componentName: 'Input',
			label: '标题',
			name: 'title',
			require: false,
			placeholder: '请输入标题'
		},
		{
			componentName: 'TextArea',
			label: '大屏简介',
			name: 'description',
			required: false,
			placeholder: '请输入大屏简介'
		},
		[
			{
				name: '网格',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'gridFlag',
						required: false,
						placeholder: '请选择是否显示'
					},
					{
						componentName: 'InputNumber',
						label: '网格大小',
						name: 'gridSize',
						required: false,
						placeholder: '请输入网格大小',
						min: 10,
						max: 200
					},
					{
						componentName: 'SketchPicker',
						label: '线颜色',
						name: 'gridBorderColor',
						required: false,
						placeholder: '请选择网络线颜色'
					}
				]
			}
		]
	]
};

export default page;
