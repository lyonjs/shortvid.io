import React from 'react';
import {
	Easing,
	Img, interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

export const Background = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const curtainSlide = spring({
		frame: frame,
		fps,
		from: -600,
		to: -150,
		durationInFrames: 30,
		config: {
			mass: 1,
			damping: 18,
			stiffness: 100,
		},
	});

	const opacity = interpolate(frame, [10, 45], [1, 0.3], {
		easing: Easing.bezier(0.17, 0.67, 0.83, 1),
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Img
				src={staticFile('/images/showcases/devfestStrasbourg/2024/background.jpg')}
				style={{
					opacity,
					position: 'absolute',
					right: '0',
					bottom: curtainSlide,
					height: '100%',
				}}
			/>
		</div>
	);
};
