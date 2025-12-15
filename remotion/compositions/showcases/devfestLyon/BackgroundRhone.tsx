import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const BackgroundRhone = () => {
	const frame = useCurrentFrame();

	const waveAnimation = Math.sin((frame / 220) * Math.PI * 2) * 0.5 + 0.5;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#223364',
				overflow: 'hidden',
			}}
		>
			<Img
				src={staticFile('/images/showcases/devfestLyon/rhone.svg')}
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					width: '100%',
					height: '210px',
					objectFit: 'cover',
					transform: `translateY(calc(${interpolate(waveAnimation, [0, 1], [10, -10])}px + 30px))`,
					filter: 'drop-shadow(0 -4px 20px rgba(0, 0, 0, 0.3))',
					zIndex: 100,
				}}
			/>
		</AbsoluteFill>
	);
};
