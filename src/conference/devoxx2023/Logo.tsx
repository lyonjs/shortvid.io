import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';

export const Logo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -200,
		to: 20,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile('/images/conferences/devoxx/devoxx.png')}
			width={100}
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
