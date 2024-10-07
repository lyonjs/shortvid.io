import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

import {ComponentDisplayMode} from '../types/types';

export const Screens = ({isTotemDisplayMode = false}: ComponentDisplayMode) => {
	const frame = useCurrentFrame();
	const logoWidth = 350;

	const up = interpolate(
		frame,
		[0, 10],
		[-230, isTotemDisplayMode ? 1300 : 0],
		{
			extrapolateRight: 'clamp',
		},
	);

	const upBack = interpolate(frame, [270, 290], [0, -240], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestNantes/2024/screens.png')}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				width: '90%',
				left: '50%',
				transform: 'translateX(-50%)',
				bottom: up + upBack,
				opacity: '0.8',
			}}
		/>
	);
};
