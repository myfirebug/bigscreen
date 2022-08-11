/*
 * 基础配置项，包含坐标、动画、数据、字体、页面、图表
 * @Author: hejp
 * @Date: 2022-08-10 09:48:55
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-11 16:08:37
 */
// 页面
import page from './page';
// 坐标
import coordinate from './coordinate';
// 动画
import animate from './animate';
// 数据
import data from './data';
// 字体
import font from './font';
// 盒子
import box from './box';
// 图表
import echarts from './echarts';

const baseConfiguration = {
	page,
	coordinate,
	animate,
	data,
	font,
	echarts,
	box
};

export default baseConfiguration;
