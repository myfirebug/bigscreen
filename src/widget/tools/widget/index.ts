/*
 * 所有组件默认配置的集合
 * @Author: hejp
 * @Date: 2022-08-10 10:21:13
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-13 21:23:00
 */
import widgetText from './widget-text';
import widgetGroup from './widget-group';
// 折线图
import line from './line/main';
// 柱状图
import bar from './bar/main';
// 饼图
import pie from './pie/main';
// 雷达图
import radar from './radar/main';

console.log(line, 'line');

const widgetConfiguration: any = {
	widgetText,
	widgetGroup,
	...line,
	...bar,
	...pie,
	...radar
};

export default widgetConfiguration;
