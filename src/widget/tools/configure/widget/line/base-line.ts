// 动画
import animate from '../../animate';
// 数据
import data from '../../data';
// echarts
import echarts from '../../echarts';

const baseLine = {
	code: 'widget-base-line',
	type: 'line',
	label: '基础折线图',
	widgets: [],
	configure: [
		animate.configure,
		[
			{
				name: '图表标题',
				list: echarts.title
			}
		],
		[
			{
				name: '图表图例',
				list: echarts.legend
			}
		]
	],
	configureValue: {
		display: 'block',
		...animate.configureValue,
		...echarts.titleValue,
		...echarts.legendValue
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

export default baseLine;
