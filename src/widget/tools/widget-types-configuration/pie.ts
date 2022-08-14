/*
 * bar类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-14 11:27:30
 */
import baseConfiguration from '../base-configuration';
const { echarts, animate, data } = baseConfiguration;

const pie = {
	configure: [
		[
			{
				name: '饼图设置',
				list: [
					...echarts.pie,
					echarts.seriesLabel.map((item) => {
						return {
							...item,
							list: item.list.map((subItem) => {
								if (subItem.name === 'seriesLabelPosition') {
									return {
										...subItem,
										options: [
											{ code: 'outside', name: 'outside' },
											{ code: 'inside', name: 'inside' },
											{ code: 'center', name: 'center' }
										]
									};
								}
								return subItem;
							})
						};
					})
				]
			},
			{
				name: '标题',
				list: [...echarts.title]
			},
			{
				name: '图例',
				list: [...echarts.title]
			},
			{
				name: '自定义颜色',
				list: [...echarts.echartColor]
			},
			...animate.configure
		]
	],
	data: [...data.configure]
};

export default pie;
