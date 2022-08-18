/*
 * table类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-18 10:06:24
 */
import baseConfiguration from '../base-configuration';
const { data } = baseConfiguration;

const table = {
	configure: [
		{
			componentName: 'InputNumber',
			label: '字体大小',
			name: 'tableFontSize',
			required: false,
			min: 12,
			placeholder: ''
		},
		{
			componentName: 'InputNumber',
			label: '行高',
			name: 'tableLineHeight',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'InputNumber',
			label: '最多显几行',
			name: 'tableRows',
			required: false,
			min: 12,
			placeholder: ''
		},
		{
			componentName: 'JsonEdit',
			label: 'Column数据',
			name: 'tableColumn',
			required: false,
			placeholder: '请输入Column数据'
		},
		[
			{
				name: '边框',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'tableShowBorder',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'SketchPicker',
						label: '颜色',
						name: 'tableBorderColor',
						required: false,
						placeholder: '请选择颜色',
						relationFields: 'tableShowBorder',
						relationValues: 'true'
					}
				]
			},
			{
				name: '表头',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'tableShowHeader',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'SketchPicker',
						label: '背景颜色',
						name: 'tableHeaderBackgroudColor',
						required: false,
						placeholder: '请选择背景颜色',
						relationFields: 'tableShowHeader',
						relationValues: 'true'
					},
					{
						componentName: 'SketchPicker',
						label: '字体颜色',
						name: 'tableHeaderColor',
						required: false,
						placeholder: '请选择字体颜色',
						relationFields: 'tableShowHeader',
						relationValues: 'true'
					}
				]
			},
			{
				name: '表体',
				list: [
					{
						componentName: 'SketchPicker',
						label: '字体颜色',
						name: 'tableTbodyColor',
						required: false,
						placeholder: '请选择字体颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '奇数行颜色',
						name: 'tableTbodyOddBackgroudColor',
						required: false,
						placeholder: '请选择奇数行颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '偶数行颜色',
						name: 'tableTbodyEvenBackgroudColor',
						required: false,
						placeholder: '请选择偶数行颜色'
					}
				]
			},
			{
				name: '滚动',
				list: [
					{
						componentName: 'Switch',
						label: '是否滚动',
						name: 'tableRolling',
						required: false,
						placeholder: ''
					}
				]
			}
		]
	],
	data: data.configure
};

export default table;
