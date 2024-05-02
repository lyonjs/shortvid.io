import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';

export const Background = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const curtainDrop = spring({
		frame: frame,
		fps,
		from: -600,
		to: 0,
		durationInFrames: 30,
		config: {
			mass: 1,
			damping: 18,
			stiffness: 100,
		},
	});

	return (
		<div>
			<Img
				src={staticFile('/images/showcases/devfestLille/curtain.svg')}
				style={{
					position: 'absolute',
					right: '0',
					top: curtainDrop,
					height: '100%',
				}}
			/>
			<Img
				src={staticFile('/images/showcases/devfestLille/curtain.svg')}
				style={{
					position: 'absolute',
					left: '0',
					top: curtainDrop,
					height: '100%',
					transform: 'scale(-1, 1)',
				}}
			/>
		</div>
	);
};
