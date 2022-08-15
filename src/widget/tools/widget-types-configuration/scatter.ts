/*
 * scatter类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-15 11:01:33
 */
import baseConfiguration from '../base-configuration';
const { echarts, animate, data } = baseConfiguration;

const scatter = {
	configure: [
		[
			{
				name: '散点图设置',
				list: [...echarts.scatter, echarts.symbol, echarts.seriesLabel]
			},
			{
				name: '标题',
				list: echarts.title
			},
			{
				name: '图例',
				list: echarts.legend
			},
			{
				name: '网格',
				list: echarts.grid
			},
			{
				name: 'X轴',
				list: echarts.xAxis
			},
			{
				name: 'y轴',
				list: echarts.yAxis
			},
			{
				name: '自定义颜色',
				list: echarts.echartColor
			},
			...animate.configure
		]
	],
	data: data.configure
};

export default scatter;
