import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame: frame,
		fps,
		from: 200,
		to: 10,
		durationInFrames: 30,
		config: {
			damping: 10,
		},
	});

	const opacity = spring({
		frame: frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 20,
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestLyon/logo-devfest-lyon.png')}
			style={{
				position: 'absolute',
				right: slideIn,
				top: 10,
				height: '100px',
				opacity,
				filter:
					'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 15px #223364)',
			}}
		/>
	);
};
