import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Background = () => {
	const frame = useCurrentFrame();

	// Create animated gradient background
	const gradientRotation = interpolate(frame, [0, 300], [0, 360], {
		extrapolateRight: 'wrap',
	});

	const scale = interpolate(frame, [0, 150, 300], [1, 1.2, 1], {
		extrapolateRight: 'wrap',
	});

	return (
		<AbsoluteFill>
			<div
				style={{
					width: '100%',
					height: '100%',
					background: `linear-gradient(${gradientRotation}deg, #223364 0%, #1a2850 50%, #223364 100%)`,
					transform: `scale(${scale})`,
				}}
			/>
			{/* Decorative circles */}
			<div
				style={{
					position: 'absolute',
					width: 400,
					height: 400,
					borderRadius: '50%',
					background: 'rgba(255, 255, 255, 0.05)',
					top: -100,
					right: -100,
					opacity: interpolate(frame, [0, 30], [0, 1]),
				}}
			/>
			<div
				style={{
					position: 'absolute',
					width: 300,
					height: 300,
					borderRadius: '50%',
					background: 'rgba(255, 255, 255, 0.03)',
					bottom: -50,
					left: -50,
					opacity: interpolate(frame, [0, 30], [0, 1]),
				}}
			/>
		</AbsoluteFill>
	);
};
