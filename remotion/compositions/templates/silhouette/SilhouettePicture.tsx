import React from 'react';
import {Easing, Img, interpolate, useCurrentFrame} from 'remotion';

const DURATION = 20;
export const SilhouettePicture: React.FC<{
	side?: 'left' | 'right';
	silhouetteUrl: string;
	dropShadow: boolean;
}> = ({side, silhouetteUrl, dropShadow}) => {
	const frame = useCurrentFrame();

	const slideIn = interpolate(frame, [0, DURATION], [100, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});
	const opacity = interpolate(frame, [0, DURATION], [0, 1], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	const transform = `${side === 'left' ? '' : 'scaleX(-1)'} translateX(-${slideIn}%)`;

	return (
		<div
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
				top: '20%',
			}}
		>
			<Img
				src={silhouetteUrl}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transform,
					opacity,
					filter: dropShadow ? 'drop-shadow(0 0 0.75rem white)' : '',
				}}
			/>
		</div>
	);
};
