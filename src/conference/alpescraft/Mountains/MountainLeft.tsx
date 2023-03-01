import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const MountainLeft: React.FC = () => {
	const frame = useCurrentFrame();

	const moveRight = interpolate(frame, [0, 10], [-300, -20], {
		easing: Easing.elastic(1),
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/conferences/alpescraft/Mountain-left.svg')}
			style={{
				position: 'absolute',
				left: moveRight,
				bottom: 0,
				width: '20%',
			}}
		/>
	);
};
