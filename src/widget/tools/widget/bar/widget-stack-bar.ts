/*
 * widget-stack-bar组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 12:13:04
 */
import barConfig from './index';

export default {
	code: 'widgetStackBar',
	label: '堆积柱状图',
	...barConfig,
	configureValue: {
		...barConfig.configureValue,
		seriesStackValue: 'total',
		seriesLabelShow: true,
		seriesLabelPosition: 'inside',
		seriesLabelColor: '#fff'
	},
	dataValue: {
		...barConfig.dataValue,
		mock: {
			series: [
				{
					seriesName: 'Email',
					data: [
						{
							name: 'Mon',
							value: 120
						},
						{
							name: 'Tue',
							value: 132
						},
						{
							name: 'Wed',
							value: 101
						},
						{
							name: 'Thu',
							value: 134
						},
						{
							name: 'Fri',
							value: 90
						},
						{
							name: 'Sat',
							value: 230
						},
						{
							name: 'Sun',
							value: 210
						}
					]
				},
				{
					seriesName: 'Direct',
					data: [
						{
							name: 'Mon',
							value: 220
						},
						{
							name: 'Tue',
							value: 182
						},
						{
							name: 'Wed',
							value: 191
						},
						{
							name: 'Thu',
							value: 234
						},
						{
							name: 'Fri',
							value: 290
						},
						{
							name: 'Sat',
							value: 330
						},
						{
							name: 'Sun',
							value: 310
						}
					]
				}
			]
		}
	}
};
