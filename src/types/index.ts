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

// 字典返回data
export interface IDictionary {
	createTime?: number;
	deleted?: number;
	dicCode?: string;
	dicDes?: string;
	dicOrder?: number;
	dicParent?: number;
	dicValue?: string;
	level?: number;
	status?: number;
	updateTime?: number;
	xdid?: string;
	[propNames: string]: any;
}
//学段配置表
export interface ISchStage {
	createTime?: string;
	grade?: string;
	gradeStatus?: number;
	gradeTitle?: string;
	isDeleted?: number;
	stage?: string;
	updateTime?: number;
	xdid?: string;
}
//年级配置表
export interface ISchStuGrade {
	grade?: number;
	name?: string;
	stage?: number;
}
//班级配置表
export interface ISchClass {
	assSchoolSn?: string;
	claAlias?: string;
	claBranch?: number;
	claCourse?: string;
	claEnrol?: string;
	claName?: string;
	claOrder?: number;
	claPeriod?: number;
	claSn?: string;
	claType?: number;
	createTime?: number;
	deleted?: number;
	status?: number;
	updateTime?: number;
	xdid?: string;
}

// 抽屉接口
export interface IDrawer {
	title: string;
	visible: boolean;
	type: 'add' | 'edit';
	data: IAnyObject;
}
