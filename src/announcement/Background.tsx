import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Background: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#4290f5',
			}}
		>
			<span
				style={{
					opacity,
					display: 'block',
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					background: `linear-gradient(0.55turn, rgba(0, 50, 114,0.5) 10%, rgba(0, 50, 114,0) 50%`,
				}}
			/>
		</AbsoluteFill>
	);
};
