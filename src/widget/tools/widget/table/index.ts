/*
 * widget-base-line组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-18 10:07:26
 */
import baseConfiguration from '../../base-configuration';
const { data } = baseConfiguration;

export default {
	type: 'table',
	// 配置项值
	configureValue: {
		styleDisplay: 'block',
		tableBorderColor: 'rgba(255,255,255,0.2)',
		tableFontSize: 14,
		tableHeaderBackgroudColor: 'rgba(80,18,215,1)',
		tableHeaderColor: 'rgba(255,255,255,0.5)',
		tableLineHeight: 35,
		tableShowBorder: true,
		tableShowBorderColor: 'rgba(230,30,30,1)',
		tableShowHeader: true,
		tableTbodyColor: 'rgba(153,144,197,1)',
		tableTbodyEvenBackgroudColor: 'rgba(40,34,89,1)',
		tableTbodyOddBackgroudColor: 'rgba(98,68,244,1)',
		tableRows: 5,
		tableRolling: false,
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
				},
				{
					name: 'zhangsan',
					age: 20,
					job: '后台开发'
				},
				{
					name: 'lisi',
					age: 20,
					job: '产品经理'
				}
			]
		}
	}
};
