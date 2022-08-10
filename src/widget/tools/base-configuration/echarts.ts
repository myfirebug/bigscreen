/*
 * 图表配置
 * @Author: hejp
 * @Date: 2022-08-10 10:16:02
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-10 12:00:45
 */
const echarts = {
	// 标题配置项值
	titleValue: {
		titleTextShow: false,
		titleText: '',
		titleTextFontSize: 14,
		titleTextLineHeight: 1.2,
		titleTextFontFamily: 'Microsoft YaHei',
		titleTextFontWeight: 'bold',
		titleTextColor: '#fff'
	},
	// 标题配置项
	title: [
		{
			componentName: 'Switch',
			label: '是否显示',
			name: 'titleTextShow',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Input',
			label: '主标题',
			name: 'titleText',
			required: false,
			placeholder: '请输入主标题',
			relationFields: 'titleTextShow',
			relationValues: 'true'
		},
		{
			componentName: 'InputNumber',
			label: '字体大小',
			name: 'titleTextFontSize',
			required: false,
			min: 12,
			placeholder: '',
			relationFields: 'titleTextShow',
			relationValues: 'true'
		},
		{
			componentName: 'InputNumber',
			label: '行高',
			name: 'titleTextLineHeight',
			required: false,
			placeholder: '',
			relationFields: 'titleTextShow',
			relationValues: 'true'
		},
		{
			componentName: 'Select',
			label: '字体样式',
			name: 'titleTextFontFamily',
			required: false,
			placeholder: '',
			relationFields: 'titleTextShow',
			relationValues: 'true',
			options: [
				{ code: 'SimSun', name: '宋体' },
				{ code: 'KaiTi', name: '楷体' },
				{ code: 'Microsoft YaHei', name: '微软雅黑' },
				{ code: 'STHeiti', name: '华文黑体' },
				{ code: 'arial', name: '无衬线体' },
				{ code: 'serif', name: '有衬线体' },
				{ code: 'cursive', name: '草书' },
				{ code: 'monospace', name: '等宽字体' },
				{ code: 'courier', name: '打印字体' }
			]
		},
		{
			componentName: 'Select',
			label: '文字粗细',
			name: 'titleTextFontWeight',
			required: false,
			placeholder: '',
			relationFields: 'titleTextShow',
			relationValues: 'true',
			options: [
				{ code: 'normal', name: '正常' },
				{ code: 'bold', name: '粗体' },
				{ code: 'bolder', name: '特粗体' },
				{ code: 'lighter', name: '细体' }
			]
		},
		{
			componentName: 'SketchPicker',
			label: '字体颜色',
			name: 'titleTextColor',
			required: false,
			relationFields: 'titleTextShow',
			relationValues: 'true',
			placeholder: '请选择字体颜色'
		},
		{
			componentName: 'Select',
			label: '字体样式',
			name: 'titleTextFontFamily',
			required: false,
			placeholder: '',
			relationFields: 'titleTextShow',
			relationValues: 'true',
			options: [
				{ code: 'SimSun', name: '宋体' },
				{ code: 'KaiTi', name: '楷体' },
				{ code: 'Microsoft YaHei', name: '微软雅黑' },
				{ code: 'STHeiti', name: '华文黑体' },
				{ code: 'arial', name: '无衬线体' },
				{ code: 'serif', name: '有衬线体' },
				{ code: 'cursive', name: '草书' },
				{ code: 'monospace', name: '等宽字体' },
				{ code: 'courier', name: '打印字体' }
			]
		}
	],
	// 图例配置项值
	legendValue: {
		legendShow: true,
		legendType: 'plain',
		legendOrient: 'horizontal',
		legendFontSize: 12,
		legendIcon: 'rect',
		legendColor: '#fff',
		legendLeft: 'center',
		legendTop: 'top'
	},
	// 图例配置项
	legend: [
		{
			componentName: 'Switch',
			label: '是否显示',
			name: 'legendShow',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'SketchPicker',
			label: '字体颜色',
			name: 'legendColor',
			required: false,
			relationFields: 'legendShow',
			relationValues: 'true',
			placeholder: '请选择字体颜色'
		},
		{
			componentName: 'InputNumber',
			label: '字体大小',
			name: 'legendFontSize',
			required: false,
			min: 12,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true'
		},
		{
			componentName: 'Select',
			label: '图例类型',
			name: 'legendType',
			required: false,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true',
			options: [
				{ code: 'plain', name: '普通图例' },
				{ code: 'scroll', name: '可滚动翻页的图例' }
			]
		},
		{
			componentName: 'Select',
			label: '排列方式',
			name: 'legendOrient',
			required: false,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true',
			options: [
				{ code: 'horizontal', name: '水平' },
				{ code: 'vertical', name: '垂直' }
			]
		},
		{
			componentName: 'Select',
			label: '图标样式',
			name: 'legendIcon',
			required: false,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true',
			options: [
				{ code: 'circle', name: 'circle' },
				{ code: 'rect', name: 'rect' },
				{ code: 'roundRect', name: 'roundRect' },
				{ code: 'triangle', name: 'triangle' },
				{ code: 'diamond', name: 'diamond' },
				{ code: 'pin', name: 'pin' },
				{ code: 'arrow', name: 'arrow' },
				{ code: 'none', name: 'none' }
			]
		},
		{
			componentName: 'Select',
			label: '水平位置',
			name: 'legendLeft',
			required: false,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true',
			options: [
				{ code: 'left', name: '居左' },
				{ code: 'center', name: '居中' },
				{ code: 'right', name: '居右' }
			]
		},
		{
			componentName: 'Select',
			label: '垂直位置',
			name: 'legendTop',
			required: false,
			placeholder: '',
			relationFields: 'legendShow',
			relationValues: 'true',
			options: [
				{ code: 'top', name: '居上' },
				{ code: 'middle', name: '居中' },
				{ code: 'bottom', name: '居下' }
			]
		}
	],
	gridValue: {
		gridShow: false,
		gridLeft: 50,
		gridRight: 50,
		gridTop: 50,
		gridBottom: 50,
		gridBorderColor: '#ccc'
	},
	grid: [
		{
			componentName: 'Switch',
			label: '是否显示',
			name: 'gridShow',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '左边距',
			name: 'gridLeft',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '右边距',
			name: 'gridRight',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '上边距',
			name: 'gridTop',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '下边距',
			name: 'gridBottom',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'SketchPicker',
			label: '边框颜色',
			name: 'gridBorderColor',
			required: false,
			relationFields: 'gridShow',
			relationValues: 'true',
			placeholder: '请选择边框颜色'
		}
	]
};

export default echarts;
