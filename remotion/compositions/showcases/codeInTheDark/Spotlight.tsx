import React from 'react';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {interpolate, useCurrentFrame} from 'remotion';

export const Spotlight = () => {
	const frame = useCurrentFrame();
	const spotlightAppear = interpolate(frame, [0, 50], [0, 600], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	return (
		<>
			<BackgroundFiller imageUrl="https://github.com/lyonjs/shortvid.io/assets/72607059/d984ca6d-2097-4964-a7fc-c90640601729" />
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '100%',
					background: `radial-gradient(circle at 50% 40%, transparent, #0c0c0d ${spotlightAppear}px, #0c0c0d)`,
				}}
			/>
		</>
	);
};
