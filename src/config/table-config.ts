const tableConfig = {
	bordered: true,
	pagination: {
		show: true,
		pageSize: 10,
		current: 1
	},
	showHeader: true,
	hasData: true,
	tableLayout: undefined,
	dateValueType: 'date',
	search: {
		span: 6,
		collapseRender: undefined,
		labelWidth: 100
	},
	options: {
		show: true,
		density: true,
		// fullScreen: true,
		setting: true
	},
	rowKey: 'id'
};

export default tableConfig;
