import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Spotlight = () => {
	const frame = useCurrentFrame();
	const spotlightAppear = interpolate(frame, [40, 70], [0, 1000], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const fadeOut = interpolate(frame, [60, 90], [1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '100%',
					background: `radial-gradient(circle at 50% 40%, transparent, #0c0c0d ${spotlightAppear}px, #0c0c0d)`,
					opacity: fadeOut,
				}}
			/>
		</>
	);
};
