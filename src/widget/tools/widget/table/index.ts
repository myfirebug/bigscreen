/*
 * widget-base-line组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-17 11:59:50
 */
import baseConfiguration from '../../base-configuration';
const { data } = baseConfiguration;

export default {
	type: 'table',
	// 配置项值
	configureValue: {
		styleDisplay: 'block',
		tableFontSize: 14,
		tableLineHeight: 30,
		tableColumn: [
			{
				title: '姓名',
				dataIndex: 'name',
				align: 'left',
				width: 100
			},
			{
				title: '年龄',
				dataIndex: 'age',
				align: 'left',
				width: 100
			},
			{
				title: '工作',
				dataIndex: 'job',
				align: 'left'
			}
		]
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 467,
		height: 346
	},
	// 数据值
	dataValue: {
		...data.configureValue,
		field: 'table',
		mock: {
			table: [
				{
					name: 'hejp',
					age: 20,
					job: '前端开发工程师'
				}
			]
		}
	}
};
