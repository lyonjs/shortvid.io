import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

import {ComponentDisplayMode} from './types/types';

export const Android = ({isTotemDisplayMode = false}: ComponentDisplayMode) => {
	const frame = useCurrentFrame();
	const logoWidth = 200;

	const fall = interpolate(
		frame,
		[0, 200],
		[-180, isTotemDisplayMode ? 1300 : 760],
		{
			extrapolateRight: 'clamp',
		},
	);
	const rotate = interpolate(frame, [0, 50, 150, 200], [-45, 45, -45, 45], {
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.sin),
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestNantes/2023/android.png')}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				right: 100,
				top: fall,
				transform: `rotate(${rotate}deg)`,
			}}
		/>
	);
};
