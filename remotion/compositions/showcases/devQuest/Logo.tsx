import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -100,
		to: 20,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile('/images/showcases/devQuest/logo.svg')}
			width={150}
			height="auto"
			style={{
				position: 'absolute',
				left: '50%',
				top: pictureDrop,
				transform: 'translate(-50%, 0)',
			}}
		/>
	);
};
