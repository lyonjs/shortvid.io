import React from 'react';
import {Easing, Img, interpolate, useCurrentFrame} from 'remotion';

export const SilhouetteLogo: React.FC<{
	logoUrl: string;
	side: 'left' | 'right';
}> = ({logoUrl, side}) => {
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
