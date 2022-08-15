import { number } from 'echarts';

/*
 * echarts图表相关处理
 * @Author: hejp
 * @Date: 2022-08-11 11:53:54
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-15 11:04:23
 */
interface result {
	legendData: any[];
	xAxisData: any[];
	yAxisData: any[];
	series: any[];
}
/**
 * 根据传入的配置，返回适合echarts的配置项
 * @param style 配置项
 * @returns 返回echarts的配置项
 */
export function handleEchartsOption(style: any): any {
	return {
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		color: [
			style?.themeColor1,
			style?.themeColor2,
			style?.themeColor3,
			style?.themeColor4,
			style?.themeColor5,
			style?.themeColor6,
			style?.themeColor7,
			style?.themeColor8
		],
		title: {
			show: style?.titleTextShow,
			text: style?.titleText,
			textStyle: {
				color: style?.titleTextColor,
				fontWeight: style?.titleTextFontWeight,
				fontSize: style?.titleTextFontSize,
				fontFamily: style?.titleTextFontFamily,
				lineHeight: style?.titleTextLineHeight
			}
		},
		legend: {
			show: style?.legendShow,
			orient: style?.legendOrient,
			type: style?.legendType,
			icon: style?.legendIcon,
			left: style?.legendLeft,
			top: style?.legendTop,
			textStyle: {
				fontSize: style?.legendFontSize,
				color: style?.legendColor
			}
		},
		grid: {
			show: style?.gridShow,
			left: style?.gridLeft,
			right: style?.gridRight,
			top: style?.gridTop,
			bottom: style?.gridBottom,
			borderColor: style?.gridBorderColor
		},
		xAxis: {
			show: style?.xAxisShow,
			type: style?.xAxisType,
			name: style?.xAxisName,
			nameLocation: style?.xAxisNameLocation,
			nameTextStyle: {
				color: style?.axisNameColor,
				fontWeight: style?.xAxisNameTextStyleFontWeight,
				lineHeight: style?.xAxisNameTextStyleLineHeight,
				fontFamily: style?.xAxisNameTextStyleFontFamily,
				fontSize: style?.xAxisNameTextStyleFontSize
			},
			nameRotate: style?.xAxisNameRotate,
			boundaryGap: style?.xAxisBoundaryGap,
			axisTick: {
				show: style?.xAxisTickShow,
				alignWithLabel: style?.xAxisAlignWithLabel,
				lineStyle: {
					color: style?.axisLineColor
				}
			},
			axisLine: {
				show: style?.xAxisLineShow,
				lineStyle: {
					color: style?.axisLineColor
				}
			},
			axisLabel: {
				show: style?.xAxisLabelShow,
				color: style?.axisLabelColor,
				rotate: style?.xAxisLabelRotate
			},
			splitLine: {
				show: style?.xAxisSplitLineShow,
				lineStyle: {
					color: style?.splitLineColor
				}
			},
			splitArea: {
				show: style?.xAxisSplitAreaShow,
				areaStyle: {
					color: ['#fff', '#000'],
					opacity: style?.xAxisSplitAreaOpacity
						? style?.xAxisSplitAreaOpacity / 100
						: 0.1
				}
			},
			axisPointer: {
				show: style?.xAxisPointerShow,
				lineStyle: {
					color: style?.axisPointerColor
				}
			}
		},
		yAxis: {
			show: style?.yAxisShow,
			type: style?.yAxisType,
			name: style?.yAxisName,
			nameLocation: style?.yAxisNameLocation,
			nameTextStyle: {
				color: style?.axisNameColor,
				fontWeight: style?.yAxisNameTextStyleFontWeight,
				lineHeight: style?.yAxisNameTextStyleLineHeight,
				fontFamily: style?.yAxisNameTextStyleFontFamily,
				fontSize: style?.yAxisNameTextStyleFontSize
			},
			nameRotate: style?.yAxisNameRotate,
			boundaryGap: style?.yAxisBoundaryGap,
			axisTick: {
				show: style?.yAxisTickShow,
				alignWithLabel: style?.yAxisAlignWithLabel
			},
			axisLine: {
				show: style?.yAxisLineShow,
				lineStyle: {
					color: style?.axisLineColor
				}
			},
			axisLabel: {
				show: style?.yAxisLabelShow,
				color: style?.axisLabelColor,
				rotate: style?.yAxisLabelRotate
			},
			splitLine: {
				show: style?.yAxisSplitLineShow,
				lineStyle: {
					color: style?.splitLineColor
				}
			},
			splitArea: {
				show: style?.yAxisSplitAreaShow,
				areaStyle: {
					color: ['#fff', '#000'],
					opacity: style?.yAxisSplitAreaOpacity
						? style?.yAxisSplitAreaOpacity / 100
						: 0.1
				}
			},
			axisPointer: {
				show: style?.yAxisPointerShow,
				lineStyle: {
					color: style?.axisPointerColor
				}
			}
		},
		line: {
			series: {
				type: 'line',
				showSymbol: style?.showSymbol,
				symbol: style?.symbol,
				symbolSize: style?.symbolSize,
				smooth: style?.lineSmooth,
				lineStyle: {
					width: style?.lineWidth
				},
				label: {
					show: style?.seriesLabelShow,
					position: style?.seriesLabelPosition,
					color: style?.seriesLabelColor
				},
				stack: style?.seriesStackValue,
				areaStyle: style?.lineAreaStyle
					? {
							opacity: style?.lineAreaStyleOpacity
								? style?.lineAreaStyleOpacity / 100
								: 0.7
					  }
					: null
			}
		},
		bar: {
			series: {
				type: 'bar',
				barWidth: style?.barWidth,
				showBackground: style?.barShowBackground,
				itemStyle: {
					borderRadius: style?.barBorderRadius || 0
				},
				label: {
					show: style?.seriesLabelShow,
					position: style?.seriesLabelPosition,
					color: style?.seriesLabelColor
				},
				stack: style?.seriesStackValue
			}
		},
		pie: {
			series: {
				type: 'pie',
				label: {
					show: style?.seriesLabelShow,
					position: style?.seriesLabelPosition,
					color: style?.seriesLabelColor
				},
				roseType: style?.seriesRoseType,
				itemStyle: {
					borderRadius: style?.seriesRoseType ? 4 : 0
				},
				radius: [
					`${style?.seriesInsideRadius || 0}%`,
					`${style?.seriesAutsideRadius || 0}%`
				]
			}
		},
		radar: {
			config: {
				shape: style?.radarShape,
				radius: (style?.radarRadius || 75) + '%',
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: style?.radarAxisLinelColor
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: style?.radarSplitLineColor
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: [
							style?.radarSplitAreaOddColor,
							style?.radarSplitAreaEvenColor
						]
					}
				}
			},
			series: {
				type: 'radar',
				showSymbol: style?.showSymbol,
				symbol: style?.symbol,
				symbolSize: style?.symbolSize
			}
		},
		funnel: {
			series: {
				type: 'funnel',
				label: {
					show: style?.seriesLabelShow,
					position: style?.seriesLabelPosition,
					color: style?.seriesLabelColor
				},
				orient: style?.funnelOrient,
				sort: style?.funnelSort,
				gap: style?.funnelGap
			}
		},
		scatter: {
			series: {
				type: 'scatter',
				colorBy: style?.scatterColorBy,
				showSymbol: style?.showSymbol,
				symbol: style?.symbol,
				symbolSize: style?.symbolSize,
				label: {
					show: style?.seriesLabelShow,
					position: style?.seriesLabelPosition,
					color: style?.seriesLabelColor
				}
			}
		},
		series: []
	};
}

/**
 * 处理数据
 * @param data 数据
 * @returns
 */
export function handleData(data: any[]): result {
	let legendData: any[] = [];
	let xAxisData: any[] = [];
	let yAxisData: any[] = [];
	let series: any[] = [];

	data.forEach((item: any, index: number) => {
		legendData.push(item.seriesName);
		if (item.data && item.data.length) {
			let datas: any[] = [];
			item.data.forEach((subItem: any) => {
				if (index === 0) {
					xAxisData.push(subItem.name);
					yAxisData.push(subItem.name);
				}
				datas.push(subItem.value);
			});
			series.push({
				name: item.seriesName,
				data: datas
			});
		}
	});
	return {
		legendData,
		xAxisData,
		yAxisData,
		series
	};
}
