/*
 * 图表配置
 * @Author: hejp
 * @Date: 2022-08-10 10:16:02
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-12 11:52:07
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
	// 风格配置项值
	gridValue: {
		gridShow: false,
		gridLeft: 50,
		gridRight: 30,
		gridTop: 30,
		gridBottom: 30,
		gridBorderColor: '#ccc'
	},
	// 网格配置
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
	],
	// xAxis配置项值
	xAxisValue: {
		xAxisShow: true,
		xAxisType: 'category',
		xAxisName: '',
		xAxisNameLocation: 'end',
		xAxisNameTextStyleFontSize: 12,
		xAxisNameTextStyleLineHeight: 12,
		xAxisNameTextStyleFontFamily: 'serif',
		xAxisNameTextStyleFontWeight: 'normal',
		xAxisBoundaryGap: false,
		xAxisNameRotate: 0,
		xAxisLineShow: true,
		xAxisLabelShow: true,
		xAxisLabelRotate: 0,
		xAxisSplitLineShow: true,
		xAxisSplitAreaShow: false,
		xAxisSplitAreaOpacity: 10,
		xAxisPointerShow: true,
		xAxisTickShow: true,
		xAxisAlignWithLabel: false
	},
	// xAsix配置
	xAxis: [
		{
			componentName: 'Switch',
			label: '是否显示',
			name: 'xAxisShow',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Select',
			label: '坐标轴类型',
			name: 'xAxisType',
			required: false,
			placeholder: '请选择',
			relationFields: 'xAxisShow',
			relationValues: 'true',
			options: [
				{ code: 'value', name: '数值轴' },
				{ code: 'category', name: '类目轴' },
				{ code: 'time', name: '时间轴' },
				{ code: 'log', name: '对数轴' }
			]
		},
		{
			componentName: 'Switch',
			label: '是否留白',
			name: 'xAxisBoundaryGap',
			required: false,
			relationFields: 'xAxisShow',
			relationValues: 'true',
			placeholder: '请输入'
		},
		[
			{
				name: '坐标轴名称',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Input',
						label: '名称',
						name: 'xAxisName',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Slider',
						label: '旋转',
						name: 'xAxisNameRotate',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Select',
						label: '显示位置',
						name: 'xAxisNameLocation',
						required: false,
						placeholder: '请选择',
						options: [
							{ code: 'start', name: 'start' },
							{ code: 'middle', name: 'middle' },
							{ code: 'end', name: 'end' }
						]
					},
					{
						componentName: 'InputNumber',
						label: '字体大小',
						name: 'xAxisNameTextStyleFontSize',
						required: false,
						min: 12,
						placeholder: ''
					},
					{
						componentName: 'InputNumber',
						label: '行高',
						name: 'xAxisNameTextStyleLineHeight',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Select',
						label: '字体样式',
						name: 'xAxisNameTextStyleFontFamily',
						required: false,
						placeholder: '',
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
						name: 'xAxisNameTextStyleFontWeight',
						required: false,
						placeholder: '',
						options: [
							{ code: 'normal', name: '正常' },
							{ code: 'bold', name: '粗体' },
							{ code: 'bolder', name: '特粗体' },
							{ code: 'lighter', name: '细体' }
						]
					}
				]
			}
		],
		[
			{
				name: '坐标轴轴线',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisLineShow',
						required: false,
						placeholder: '请输入'
					}
				]
			}
		],
		[
			{
				name: '坐标轴刻度',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisTickShow',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Switch',
						label: '对齐标签',
						name: 'xAxisAlignWithLabel',
						required: false,
						relationFields: 'xAxisTickShow',
						relationValues: 'true',
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴刻度标签',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisLabelShow',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Slider',
						label: '旋转',
						name: 'xAxisLabelRotate',
						required: false,
						relationFields: 'xAxisLabelShow',
						relationValues: 'true',
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴分隔线',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisSplitLineShow',
						required: false,
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴分隔区域',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisSplitAreaShow',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Slider',
						label: '透明度',
						name: 'xAxisSplitAreaOpacity',
						required: false,
						relationFields: 'xAxisSplitAreaShow',
						relationValues: 'true'
					}
				]
			}
		],
		[
			{
				name: '坐标轴指示器',
				relationFields: 'xAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'xAxisPointerShow',
						required: false,
						placeholder: ''
					}
				]
			}
		]
	],
	// yAxis配置项值
	yAxisValue: {
		yAxisShow: true,
		yAxisType: 'value',
		yAxisName: '',
		yAxisNameLocation: 'end',
		yAxisNameTextStyleFontSize: 12,
		yAxisNameTextStyleLineHeight: 12,
		yAxisNameTextStyleFontFamily: 'serif',
		yAxisNameTextStyleFontWeight: 'normal',
		yAxisBoundaryGap: false,
		yAxisNameRotate: 0,
		yAxisLineShow: true,
		yAxisLabelShow: true,
		yAxisLabelRotate: 0,
		yAxisSplitLineShow: true,
		yAxisSplitAreaShow: false,
		yAxisSplitAreaOpacity: 10,
		yAxisPointerShow: false,
		yAxisTickShow: true,
		yAxisAlignWithLabel: false
	},
	// yAxis配置项
	yAxis: [
		{
			componentName: 'Switch',
			label: '是否显示',
			name: 'yAxisShow',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Select',
			label: '坐标轴类型',
			name: 'yAxisType',
			required: false,
			placeholder: '请选择',
			relationFields: 'yAxisShow',
			relationValues: 'true',
			options: [
				{ code: 'value', name: '数值轴' },
				{ code: 'category', name: '类目轴' },
				{ code: 'time', name: '时间轴' },
				{ code: 'log', name: '对数轴' }
			]
		},
		{
			componentName: 'Switch',
			label: '是否留白',
			name: 'yAxisBoundaryGap',
			required: false,
			relationFields: 'yAxisShow',
			relationValues: 'true',
			placeholder: '请输入'
		},
		[
			{
				name: '坐标轴名称',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Input',
						label: '名称',
						name: 'yAxisName',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Slider',
						label: '旋转',
						name: 'yAxisNameRotate',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Select',
						label: '显示位置',
						name: 'yAxisNameLocation',
						required: false,
						placeholder: '请选择',
						options: [
							{ code: 'start', name: 'start' },
							{ code: 'middle', name: 'middle' },
							{ code: 'end', name: 'end' }
						]
					},
					{
						componentName: 'InputNumber',
						label: '字体大小',
						name: 'yAxisNameTextStyleFontSize',
						required: false,
						min: 12,
						placeholder: ''
					},
					{
						componentName: 'InputNumber',
						label: '行高',
						name: 'yAxisNameTextStyleLineHeight',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Select',
						label: '字体样式',
						name: 'yAxisNameTextStyleFontFamily',
						required: false,
						placeholder: '',
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
						name: 'yAxisNameTextStyleFontWeight',
						required: false,
						placeholder: '',
						options: [
							{ code: 'normal', name: '正常' },
							{ code: 'bold', name: '粗体' },
							{ code: 'bolder', name: '特粗体' },
							{ code: 'lighter', name: '细体' }
						]
					}
				]
			}
		],
		[
			{
				name: '坐标轴轴线',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisLineShow',
						required: false,
						placeholder: '请输入'
					}
				]
			}
		],
		[
			{
				name: '坐标轴刻度',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisTickShow',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Switch',
						label: '对齐标签',
						name: 'yAxisAlignWithLabel',
						required: false,
						relationFields: 'yAxisTickShow',
						relationValues: 'true',
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴刻度标签',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisLabelShow',
						required: false,
						placeholder: '请输入'
					},
					{
						componentName: 'Slider',
						label: '旋转',
						name: 'yAxisLabelRotate',
						required: false,
						relationFields: 'yAxisLabelShow',
						relationValues: 'true',
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴分隔线',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisSplitLineShow',
						required: false,
						placeholder: ''
					}
				]
			}
		],
		[
			{
				name: '坐标轴分隔区域',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisSplitAreaShow',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Slider',
						label: '透明度',
						name: 'yAxisSplitAreaOpacity',
						required: false,
						relationFields: 'yAxisSplitAreaShow',
						relationValues: 'true'
					}
				]
			}
		],
		[
			{
				name: '坐标轴指示器',
				relationFields: 'yAxisShow',
				relationValues: 'true',
				list: [
					{
						componentName: 'Switch',
						label: '是否显示',
						name: 'yAxisPointerShow',
						required: false,
						placeholder: ''
					}
				]
			}
		]
	],
	// 颜色值
	echartColorValue: {
		axisNameColor: 'rgba(255,255,255,.2)',
		axisLineColor: 'rgba(255,255,255,.2)',
		axisLabelColor: 'rgba(255,255,255,.8)',
		splitLineColor: 'rgba(255,255,255,.2)',
		axisPointerColor: 'red',
		themeColor1: '#fc97af',
		themeColor2: '#87f7cf',
		themeColor3: '#f7f494',
		themeColor4: '#72ccff',
		themeColor5: '#f7c5a0',
		themeColor6: '#d4a4eb',
		themeColor7: '#d2f5a6',
		themeColor8: '#76f2f2'
	},
	// 颜色配置
	echartColor: [
		{
			componentName: 'SketchPicker',
			label: '坐标名称颜色',
			name: 'axisNameColor',
			required: false,
			placeholder: '请选择颜色'
		},
		{
			componentName: 'SketchPicker',
			label: '轴线颜色',
			name: 'axisLineColor',
			required: false,
			placeholder: '请选择颜色'
		},
		{
			componentName: 'SketchPicker',
			label: '刻度标签颜色',
			name: 'axisLabelColor',
			required: false,
			placeholder: '请选择颜色'
		},
		{
			componentName: 'SketchPicker',
			label: '分隔线颜色',
			name: 'splitLineColor',
			required: false,
			placeholder: '请选择颜色'
		},
		{
			componentName: 'SketchPicker',
			label: '指示器颜色',
			name: 'axisPointerColor',
			required: false,
			placeholder: '请选择颜色'
		},
		[
			{
				name: '主题色',
				list: [
					{
						componentName: 'SketchPicker',
						label: '系列一',
						name: 'themeColor1',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列二',
						name: 'themeColor2',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列三',
						name: 'themeColor3',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列四',
						name: 'themeColor4',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列五',
						name: 'themeColor5',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列六',
						name: 'themeColor6',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列七',
						name: 'themeColor7',
						required: false,
						placeholder: '请选择颜色'
					},
					{
						componentName: 'SketchPicker',
						label: '系列八',
						name: 'themeColor8',
						required: false,
						placeholder: '请选择颜色'
					}
				]
			}
		]
	],
	// 折线配置项值
	lineValue: {
		lineShowSymbol: true,
		lineSymbol: 'circle',
		lineSymbolSize: 4,
		lineWidth: 2,
		lineSmooth: false,
		lineAreaStyle: false,
		lineAreaStyleOpacity: 70
	},
	// 折线配置项
	line: [
		{
			componentName: 'Switch',
			label: '平滑曲线',
			name: 'lineSmooth',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '线条宽度',
			name: 'lineWidth',
			required: false,
			placeholder: ''
		},
		[
			{
				name: '标记',
				list: [
					{
						componentName: 'Switch',
						label: '显示标记',
						name: 'lineShowSymbol',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Select',
						label: '标记图标',
						name: 'lineSymbol',
						required: false,
						placeholder: '请选择标记图标',
						relationFields: 'lineShowSymbol',
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
						componentName: 'Slider',
						label: '标记大小',
						name: 'lineSymbolSize',
						required: false,
						relationFields: 'lineShowSymbol',
						relationValues: 'true',
						placeholder: ''
					}
				]
			},
			{
				name: '区域面积图',
				list: [
					{
						componentName: 'Switch',
						label: '区域面积图',
						name: 'lineAreaStyle',
						required: false,
						placeholder: ''
					},
					{
						componentName: 'Slider',
						label: '透明度',
						name: 'lineAreaStyleOpacity',
						required: false,
						relationFields: 'lineAreaStyle',
						relationValues: 'true',
						placeholder: ''
					}
				]
			}
		]
	],
	// 柱状图配置项值
	barValue: {
		barWidth: 40,
		barShowBackground: false,
		barBorderRadius: 0
	},
	// 柱状图配置项
	bar: [
		{
			componentName: 'Slider',
			label: '柱状宽度',
			name: 'barWidth',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Switch',
			label: '显示柱条背景',
			name: 'barShowBackground',
			required: false,
			placeholder: ''
		},
		{
			componentName: 'Slider',
			label: '圆角大小',
			name: 'barBorderRadius',
			required: false,
			placeholder: ''
		}
	],
	// 数据标签配置项值
	seriesLabelValue: {
		seriesLabelShow: false,
		seriesLabelPosition: 'top',
		seriesLabelColor: '#fff'
	},
	// 数据标签配置项
	seriesLabel: [
		{
			name: '图形上的文本标签',
			list: [
				{
					componentName: 'Switch',
					label: '是否显示',
					name: 'seriesLabelShow',
					required: false,
					placeholder: ''
				},
				{
					componentName: 'Select',
					label: '标签的位置',
					name: 'seriesLabelPosition',
					required: false,
					placeholder: '请选择标签的位置',
					relationFields: 'seriesLabelShow',
					relationValues: 'true',
					options: [
						{ code: 'top', name: 'top' },
						{ code: 'left', name: 'left' },
						{ code: 'right', name: 'right' },
						{ code: 'bottom', name: 'bottom' },
						{ code: 'inside', name: 'inside' },
						{ code: 'insideLeft', name: 'insideLeft' },
						{ code: 'insideRight', name: 'insideRight' },
						{ code: 'insideTop', name: 'insideTop' },
						{ code: 'insideBottom', name: 'insideBottom' },
						{ code: 'insideTopLeft', name: 'insideTopLeft' },
						{ code: 'insideBottomLeft', name: 'insideBottomLeft' },
						{ code: 'insideTopRight', name: 'insideTopRight' },
						{ code: 'insideBottomRight', name: 'insideinsideBottomRightTop' }
					]
				},
				{
					componentName: 'SketchPicker',
					label: '文字颜色',
					name: 'seriesLabelColor',
					required: false,
					relationFields: 'seriesLabelShow',
					relationValues: 'true',
					placeholder: '请选择文字颜色'
				}
			]
		}
	],
	// 数据堆叠配置项
	seriesStackValue: {
		seriesStackValue: ''
	},
	seriesStack: [
		{
			componentName: 'Input',
			label: '数据堆积名称',
			name: 'seriesStackValue',
			required: false,
			placeholder: '请输入数据堆积名称'
		}
	]
};

export default echarts;
