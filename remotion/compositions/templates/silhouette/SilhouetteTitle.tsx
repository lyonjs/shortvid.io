import React from 'react';

import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Title} from '../../../design/atoms/Title';

export const SilhouetteTitle: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		frame,
		fps,
		from: 30,
		to: 50,
	});

	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Title
			style={{
				position: 'absolute',
				top: `${drop}%`,
				opacity,
			}}
		>
			{title}
		</Title>
	);
};
