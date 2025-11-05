import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Transition = ({children}: {children: React.ReactNode}) => {
	const frame = useCurrentFrame();

	// Transition de 30 frames (0.5 seconde à 60fps)
	const transitionDuration = 30;
	const transitionStart = 120; // Commence après l'intro

	const progress = interpolate(
		frame,
		[transitionStart, transitionStart + transitionDuration],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);

	// Effet de fondu croisé
	const mainOpacity = interpolate(progress, [0.3, 1], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Effet de zoom et rotation pour la transition
	const scale = interpolate(progress, [0, 1], [1, 1.1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const rotation = interpolate(progress, [0, 1], [0, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill>
			{/* Contenu principal avec transition */}
			<div
				style={{
					opacity: mainOpacity,
					transform: `scale(${scale}) rotate(${rotation}deg)`,
					width: '100%',
					height: '100%',
				}}
			>
				{children}
			</div>

			{/* Overlay de transition */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: `linear-gradient(45deg, 
						rgba(34, 51, 100, ${interpolate(progress, [0, 0.5], [0, 0.8])}) 0%, 
						rgba(66, 133, 244, ${interpolate(progress, [0, 0.5], [0, 0.6])}) 50%, 
						rgba(34, 51, 100, ${interpolate(progress, [0, 0.5], [0, 0.8])}) 100%)`,
					opacity: interpolate(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					}),
				}}
			/>
		</AbsoluteFill>
	);
};
