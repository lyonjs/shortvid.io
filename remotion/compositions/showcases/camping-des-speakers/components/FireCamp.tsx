import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';

export const FireCamp = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const LogoAppear = spring({
		frame: frame - 20,
		from: 90,
		to: 50,
		fps,
		durationInFrames: 60,
	});

	const LogoOpacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile(
				'images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png'
			)}
			style={{
				width: 200,
				position: 'absolute',
				bottom: 20,
				left: 330,
				transform: `translateY(-${LogoAppear}px)`,
				opacity: LogoOpacity,
			}}
		/>
	);
};
