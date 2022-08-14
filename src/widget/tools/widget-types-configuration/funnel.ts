/*
 * funnel类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-14 21:02:21
 */
import baseConfiguration from '../base-configuration';
const { echarts, animate, data } = baseConfiguration;

const funnel = {
	configure: [
		[
			{
				name: '漏斗图设置',
				list: [...echarts.funnel, echarts.seriesLabel]
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

export default funnel;
