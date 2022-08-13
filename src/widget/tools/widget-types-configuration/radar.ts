/*
 * radar类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-13 22:50:35
 */
import baseConfiguration from '../base-configuration';
const { echarts, animate, data } = baseConfiguration;

const radar = {
	configure: [
		[
			{
				name: '雷达设置',
				list: [...echarts.radar]
			},
			{
				name: '标题',
				list: echarts.title
			},
			{
				name: '图例',
				list: echarts.legend
			}
		],
		echarts.echartColor[echarts.echartColor.length - 1],
		animate.configure
	],
	data: data.configure
};

export default radar;
