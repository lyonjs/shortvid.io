import React from 'react';
import {Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

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
			src={staticFile('/images/showcases/devoxx/devoxxLogo.png')}
			width={300}
			height="auto"
			style={{
				position: 'absolute',
				left: '20px',
				top: pictureDrop,
			}}
		/>
	);
};
