import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const Ground = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const GroundDetailsAppear = spring({
		frame: frame,
		from: 90,
		to: 50,
		fps,
		durationInFrames: 50,
		config: {
			stiffness: 10,
		},
	});

	const GroundDetailsOpacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/showcases/campingDesSpeakers/groundDetails.svg')}
			style={{
				position: 'absolute',
				objectFit: 'none',
				bottom: GroundDetailsAppear,
				opacity: GroundDetailsOpacity,
			}}
		/>
	);
};
