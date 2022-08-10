/*
 * 动画配置
 * @Author: hejp
 * @Date: 2022-08-10 10:15:40
 * @Last Modified by:   hejp
 * @Last Modified time: 2022-08-10 10:15:40
 */
const animate = {
	configureValue: {
		animateInfinite: false,
		animateDelay: 0,
		animateName: '',
		animateTime: 1,
		animateTiming: 'linear'
	},
	configure: [
		{
			name: '动画',
			list: [
				{
					componentName: 'Select',
					label: '动画名称',
					name: 'animateName',
					required: false,
					placeholder: '请选择动画',
					options: [
						{ code: 'bounce', name: 'bounce' },
						{ code: 'flash', name: 'flash' },
						{ code: 'pulse', name: 'pulse' },
						{ code: 'rubberBand', name: 'rubberBand' },
						{ code: 'shake', name: 'shake' },
						{ code: 'swing', name: 'swing' },
						{ code: 'tada', name: 'tada' },
						{ code: 'wobble', name: 'wobble' },
						{ code: 'bounceIn', name: 'bounceIn' },
						{ code: 'bounceInDown', name: 'bounceInDown' },
						{ code: 'bounceInLeft', name: 'bounceInLeft' },
						{ code: 'bounceInRight', name: 'bounceInRight' },
						{ code: 'bounceInUp', name: 'bounceInUp' },
						{ code: 'bounceOut', name: 'bounceOut' },
						{ code: 'bounceOutDown', name: 'bounceOutDown' },
						{ code: 'bounceOutLeft', name: 'bounceOutLeft' },
						{ code: 'bounceOutRight', name: 'bounceOutRight' },
						{ code: 'bounceOutUp', name: 'bounceOutUp' },
						{ code: 'fadeIn', name: 'fadeIn' },
						{ code: 'fadeInDown', name: 'fadeInDown' },
						{ code: 'fadeInDownBig', name: 'fadeInDownBig' },
						{ code: 'fadeInLeft', name: 'fadeInLeft' },
						{ code: 'fadeInLeftBig', name: 'fadeInLeftBig' },
						{ code: 'fadeInRight', name: 'fadeInRight' },
						{ code: 'fadeInRightBig', name: 'fadeInRightBig' },
						{ code: 'fadeInUp', name: 'fadeInUp' },
						{ code: 'fadeInUpBig', name: 'fadeInUpBig' },
						{ code: 'fadeOut', name: 'fadeOut' },
						{ code: 'fadeOutDown', name: 'fadeOutDown' },
						{ code: 'fadeOutDownBig', name: 'fadeOutDownBig' },
						{ code: 'fadeOutLeft', name: 'fadeOutLeft' },
						{ code: 'fadeOutLeftBig', name: 'fadeOutLeftBig' },
						{ code: 'fadeOutRight', name: 'fadeOutRight' },
						{ code: 'fadeOutRightBig', name: 'fadeOutRightBig' },
						{ code: 'fadeOutUp', name: 'fadeOutUp' },
						{ code: 'fadeOutUpBig', name: 'fadeOutUpBig' },
						{ code: 'flip', name: 'flip' },
						{ code: 'flipInX', name: 'flipInX' },
						{ code: 'flipInY', name: 'flipInY' },
						{ code: 'flipOutX', name: 'flipOutX' },
						{ code: 'flipOutY', name: 'flipOutY' },
						{ code: 'lightSpeedIn', name: 'lightSpeedIn' },
						{ code: 'lightSpeedOut', name: 'lightSpeedOut' },
						{ code: 'rotateIn', name: 'rotateIn' },
						{ code: 'rotateInDownLeft', name: 'rotateInDownLeft' },
						{ code: 'rotateInDownRight', name: 'rotateInDownRight' },
						{ code: 'rotateInUpLeft', name: 'rotateInUpLeft' },
						{ code: 'rotateInUpRight', name: 'rotateInUpRight' },
						{ code: 'rotateOut', name: 'rotateOut' },
						{ code: 'rotateOutDownLeft', name: 'rotateOutDownLeft' },
						{ code: 'rotateOutDownRight', name: 'rotateOutDownRight' },
						{ code: 'rotateOutUpLeft', name: 'rotateOutUpLeft' },
						{ code: 'rotateOutUpRight', name: 'rotateOutUpRight' },
						{ code: 'slideInDown', name: 'slideInDown' },
						{ code: 'slideInLeft', name: 'slideInLeft' },
						{ code: 'slideInRight', name: 'slideInRight' },
						{ code: 'slideOutLeft', name: 'slideOutLeft' },
						{ code: 'slideOutRight', name: 'slideOutRight' },
						{ code: 'slideOutUp', name: 'slideOutUp' },
						{ code: 'hinge', name: 'hinge' },
						{ code: 'rollIn', name: 'rollIn' },
						{ code: 'rollOut', name: 'rollOut' }
					]
				},
				{
					componentName: 'Select',
					label: '动画属性',
					name: 'animateTiming',
					required: false,
					placeholder: '请选择时间',
					options: [
						{ code: 'linear', name: 'linear' },
						{ code: 'ease', name: 'ease' },
						{ code: 'ease-in', name: 'ease-in' },
						{ code: 'ease-out', name: 'ease-out' },
						{ code: 'ease-in-out', name: 'ease-in-out' }
					]
				},
				{
					componentName: 'InputNumber',
					label: '时间',
					name: 'animateTime',
					required: false,
					placeholder: '请选择时间',
					min: 0,
					max: 100
				},
				{
					componentName: 'InputNumber',
					label: '延迟',
					name: 'animateDelay',
					required: false,
					placeholder: '请选择延迟时间',
					min: 0,
					max: 100
				},
				{
					componentName: 'Switch',
					label: '循环播放',
					name: 'animateInfinite',
					required: false,
					placeholder: '请选择是否循环播放'
				}
			]
		}
	]
};

export default animate;
