import {Easing, Img, interpolate, useCurrentFrame} from 'remotion';
import React from 'react';
import {Side} from './Silhouette.type';

export const SilhouetteLogo: React.FC<{logoUrl: string; side: Side}> = ({
	logoUrl,
	side,
}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Img
			src={logoUrl}
			style={{
				position: 'absolute',
				top: `2rem`,
				[side === 'left' ? 'right' : 'left']: '50px',
				height: '100px',
				opacity,
			}}
		/>
	);
};
