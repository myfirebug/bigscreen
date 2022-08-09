// 任意类型的object
export interface IAnyObject {
	[propName: string]: any;
}
// 默认接口请求
export interface IDefaultConfig {
	url: string;
	params?: {
		[propName: string]: any;
	};
	loading?: boolean;
	servicePrefix?: string;
	responseType?: string;
	data?: {
		[propName: string]: any;
	};
}

// echarts所有主题，这里需要与themes里的THEMES的key保持一致
export type IThemeNames = 'white' | 'dark';

// echarts里的events
export interface IEchartOnEventItem {
	name:
		| 'click'
		| 'dblclick'
		| 'mousedown'
		| 'mousemove'
		| 'mouseup'
		| 'mouseover'
		| 'mouseout'
		| 'globalout'
		| 'contextmenu';
	fn: (params?: any) => void;
}

// echarts配置
export interface IEchartConfig {
	style?: IAnyObject;
	options: IAnyObject;
	theme?: IThemeNames;
	/**
	 * notMerge 可选。
	 * 是否不跟之前设置的 option 进行合并。默认为 false。
	 * 即表示合并。合并的规则，详见 组件合并模式。
	 * 如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
	 */
	notMerge?: boolean;
	/**
	 * lazyUpdate 可选。
	 * 在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。
	 * 如果为 true，则会在下一个 animation frame 中，才更新图表。
	 */
	lazyUpdate?: boolean;
	getEchart?: (instance?: any) => void;
	autoplay?: {
		interval: number;
	};
	onEvents?: IEchartOnEventItem[];
}

// 抽屉接口
export interface IDrawer {
	title: string;
	visible: boolean;
	type: 'add' | 'edit';
	data: IAnyObject;
}
