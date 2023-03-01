import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const MountainRight: React.FC = () => {
	const frame = useCurrentFrame();

	const moveRight = interpolate(frame, [0, 10], [-300, -20], {
		easing: Easing.elastic(1),
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/conferences/alpescraft/Mountain-right.svg')}
			style={{
				position: 'absolute',
				right: moveRight,
				bottom: 0,
				width: '20%',
			}}
		/>
	);
};
