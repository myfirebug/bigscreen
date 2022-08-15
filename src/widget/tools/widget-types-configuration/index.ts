/*
 * @Author: hejp
 * @Date: 2022-08-10 10:01:56
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-15 10:38:06
 */
// 组配置
import group from './group';
// text配置
import text from './text';
// line配置
import line from './line';
// bar配置
import bar from './bar';
// pie配置
import pie from './pie';
// radar配置
import radar from './radar';
// funnel配置
import funnel from './funnel';
// scatter配置
import scatter from './scatter';

const widgetTypesConfiguration: any = {
	group,
	text,
	line,
	bar,
	pie,
	radar,
	funnel,
	scatter
};

export default widgetTypesConfiguration;
