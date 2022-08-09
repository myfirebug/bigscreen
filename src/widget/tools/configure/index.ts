/*
 * 所有组件配置文件集合在这里
 * @Author: hejp
 * @Date: 2022-07-26 10:29:48
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-02 17:37:55
 */

// 文本框配置
import text from './widget/text';
// 文本框配置
import group from './widget/group';
// 折线图
import lines from './widget/line';
console.log(lines, 'lineslineslineslineslineslineslineslines');

export const widgetConfigure: any = [text, group, ...lines];
