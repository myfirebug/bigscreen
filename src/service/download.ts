import axios from 'axios';
import session from '@src/utils/session-storage';
import { getUrl } from '@src/utils/tools';

interface IParamsProps {
	// url地址
	url: string;
	params?: any;
}

// 下载文件时使用
export function download(config: IParamsProps) {
	const TOKEN = session.getItem('access_token');
	return axios({
		method: 'GET',
		headers: { Authorization: 'Bearer ' + TOKEN },
		url: config.url,
		params: {
			...config.params,
			stage: getUrl('stage')
		},
		responseType: 'blob'
	});
}

// 上传文件时使用
export function uploadFile(config: IParamsProps) {
	const TOKEN = session.getItem('access_token');
	return axios({
		method: 'post',
		headers: {
			Authorization: 'Bearer ' + TOKEN,
			ContentType: 'multipart/form-data;charset=UTF-8'
		},
		data: config.params,
		url: config.url
	});
}
