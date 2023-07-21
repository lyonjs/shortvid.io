import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

import {Title} from '../../../design/atoms/Title';

export const TalkTitle: React.FC<{
	title: string;
}> = ({title}) => {
	const frame = useCurrentFrame();

	const fromTop = interpolate(frame, [0, 20], [-100, 385], {
		easing: Easing.elastic(1.2),
		extrapolateRight: 'clamp',
	});

	const titleOpacity = interpolate(frame, [5, 15], [0, 1]);

	return (
		<Title
			style={{
				fontSize: '2.6rem',
				color: 'white',
				position: 'absolute',
				top: fromTop,
				padding: '0 95px',
				textAlign: 'center',
				textShadow: '`1px 1px 3px white`',
				opacity: titleOpacity,
			}}
		>
			{title}
		</Title>
	);
};
