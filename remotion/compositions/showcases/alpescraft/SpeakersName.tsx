import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const SpeakersName: React.FC<{
	name: string;
}> = ({name}) => {
	const frame = useCurrentFrame();

	const underlineGrow = interpolate(frame, [30, 45], [0, 200], {
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});

	return (
		<>
			{name}
			<span
				style={{
					position: 'absolute',
					width: underlineGrow,
					height: '5px',
					borderRadius: '50px',
					background: '#007bff',
					left: '50%',
					bottom: '-10px',
					transform: 'translateX(-50%)',
				}}
			/>
		</>
	);
};
