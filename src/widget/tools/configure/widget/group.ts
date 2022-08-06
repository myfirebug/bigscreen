const group = {
	code: 'widget-group',
	type: 'group',
	label: '组',
	widgets: [],
	configure: [
		{
			type: 'SketchPicker',
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
	}
};

export default group;
