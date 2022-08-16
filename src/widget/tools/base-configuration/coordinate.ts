/*
 * 坐标配置
 * @Author: hejp
 * @Date: 2022-08-10 10:15:52
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-16 14:31:08
 */
const coordinate = {
	type: 'page',
	label: '坐标',
	configure: [
		{
			componentName: 'InputNumber',
			label: '左边距',
			name: 'left',
			required: false,
			placeholder: '请输入左边距'
		},
		{
			componentName: 'InputNumber',
			label: '上边距',
			name: 'top',
			required: false,
			placeholder: '请输入上边距'
		},
		{
			componentName: 'InputNumber',
			label: '宽度',
			name: 'width',
			required: false,
			placeholder: '请输入宽度'
		},
		{
			componentName: 'InputNumber',
			label: '高度',
			name: 'height',
			required: false,
			placeholder: '请输入高度'
		}
	]
};

export default coordinate;
