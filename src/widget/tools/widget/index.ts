/*
 * 所有组件默认配置的集合
 * @Author: hejp
 * @Date: 2022-08-10 10:21:13
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-11 14:42:18
 */
import widgetText from './widget-text';
import widgetGroup from './widget-group';
import line from './line/main';

console.log(line, 'line');

const widgetConfiguration: any = {
	widgetText,
	widgetGroup,
	...line
};

export default widgetConfiguration;
