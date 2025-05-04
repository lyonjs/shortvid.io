import React from 'react';
import {
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const Background = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 50, 180], [1, 1, 0.4], {
		easing: Easing.bezier(0.17, 0.67, 0.83, 1),
		extrapolateRight: 'clamp',
	});

	const zoom = interpolate(frame, [10, 400], [1, 1.1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Img
				src={staticFile(
					'/images/showcases/devQuest/background.png',
				)}
				style={{
					opacity,
					width: '100%',
					position: 'absolute',
					left: 0,
					bottom: 0,
					transform: `scale(${zoom})`,
					height: '100%',
				}}
			/>
		</div>
	);
};
