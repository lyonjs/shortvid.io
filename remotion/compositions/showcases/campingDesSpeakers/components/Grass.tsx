import React from 'react';
import {Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const Grass = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const GrassAppear = spring({
		frame: frame,
		from: -600,
		to: -200,
		fps,
		durationInFrames: 50,
	});

	return (
		<Img
			src={staticFile('images/showcases/campingDesSpeakers/grass.svg')}
			style={{
				position: 'absolute',
				objectFit: 'cover',
				bottom: GrassAppear,
				width: '100%',
			}}
		/>
	);
};
