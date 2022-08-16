/*
 * 盒子配置
 * @Author: hejp
 * @Date: 2022-08-10 10:16:14
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:14:23
 */
const box = {
	configureValue: {
		styleBoxInset: false,
		styleBoxShadowX: 0,
		styleBoxShadowY: 0,
		styleBoxShadowF: 0,
		styleBoxShadowC: '',
		styleBorderStyle: 'none',
		styleBorderWidth: 0,
		styleBorderColor: '',
		styleBorderTopLeftRadius: 0,
		styleBorderTopRightRadius: 0,
		styleBorderBottomLeftRadius: 0,
		styleBorderBottomRightRadius: 0
	},
	configure: [
		{
			name: '盒子阴影',
			list: [
				{
					componentName: 'Switch',
					label: '内阴影',
					name: 'styleBoxInset',
					required: false,
					placeholder: ''
				},
				{
					componentName: 'InputNumber',
					label: 'X轴偏移',
					name: 'styleBoxShadowX',
					required: false,
					placeholder: '请输入X轴偏移'
				},
				{
					componentName: 'InputNumber',
					label: 'Y轴偏移',
					name: 'styleBoxShadowY',
					required: false,
					placeholder: '请输入Y轴偏移'
				},
				{
					componentName: 'InputNumber',
					label: '模糊值',
					name: 'styleBoxShadowF',
					required: false,
					placeholder: '请输入模糊值'
				},
				{
					componentName: 'SketchPicker',
					label: '颜色',
					name: 'styleBoxShadowC',
					required: false,
					placeholder: '请选择颜色'
				}
			]
		},
		{
			name: '边框',
			list: [
				{
					componentName: 'Select',
					label: '边框样式',
					name: 'styleBorderStyle',
					required: false,
					placeholder: '请选择边框样式',
					options: [
						{ code: 'none', name: '无' },
						{ code: 'solid', name: '直线' },
						{ code: 'dashed', name: '破折线' },
						{ code: 'dotted', name: '点状线' },
						{ code: 'double', name: '双划线' },
						{ code: 'groove', name: '3D凹槽' },
						{ code: 'ridge', name: '3D垄状' },
						{ code: 'inset', name: '3D内嵌' },
						{ code: 'outset', name: '3D外嵌' }
					]
				},
				{
					componentName: 'InputNumber',
					label: '边框尺寸',
					name: 'styleBorderWidth',
					required: false,
					placeholder: '请输入尺寸'
				},
				{
					componentName: 'SketchPicker',
					label: '颜色',
					name: 'styleBorderColor',
					required: false,
					placeholder: '请选择边框颜色'
				}
			]
		},
		{
			name: '圆角',
			list: [
				{
					componentName: 'InputNumber',
					label: '左上',
					name: 'styleBorderTopLeftRadius',
					required: false,
					placeholder: '请输入尺寸'
				},
				{
					componentName: 'InputNumber',
					label: '右上',
					name: 'styleBorderTopRightRadius',
					required: false,
					placeholder: '请输入尺寸'
				},
				{
					componentName: 'InputNumber',
					label: '左下',
					name: 'styleBorderBottomLeftRadius',
					required: false,
					placeholder: '请输入尺寸'
				},
				{
					componentName: 'InputNumber',
					label: '右下',
					name: 'styleBorderBottomRightRadius',
					required: false,
					placeholder: '请输入尺寸'
				}
			]
		}
	]
};

export default box;
