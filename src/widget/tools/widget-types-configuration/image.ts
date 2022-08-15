/*
 * text类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-15 11:40:13
 */
import baseConfiguration from '../base-configuration';
const { font, animate, data, box } = baseConfiguration;

const text = {
	// 基础配置项
	configure: [[...animate.configure]],
	data: data.configure
};

export default text;
