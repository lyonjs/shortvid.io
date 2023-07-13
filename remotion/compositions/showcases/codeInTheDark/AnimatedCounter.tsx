import React from 'react';

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const AnimatedCounter: React.FC<{
	count: number;
	maxCountValue: number;
}> = ({count, maxCountValue}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const grow = spring({frame, fps, from: 1, to: 1.5});

	return (
		<span
			style={{
				color: '#4EFFA1',
				fontSize: '7rem',
				transform: `scale(${count <= maxCountValue - 2 ? grow : 1})`,
				fontFamily: 'PressStart2P',
			}}
		>
			{count}
		</span>
	);
};
