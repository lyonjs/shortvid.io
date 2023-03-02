import React from 'react';
import {Easing, interpolate, spring, useCurrentFrame} from 'remotion';

export const SpeakersName: React.FC<{
	name: string;
}> = ({name}) => {
	const frame = useCurrentFrame();

	const nameAppear = interpolate(frame, [18, 38], [0, 50], {
		easing: Easing.elastic(1),
		extrapolateRight: 'clamp',
	});

	const nameOpacity = interpolate(frame, [20, 25], [0, 1]);

	const underlineGrow = interpolate(frame, [30, 45], [0, 200], {
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});

	return (
		<span
			style={{
				position: 'relative',
				color: 'white',
				padding: 10,
				fontSize: 30,
				fontWeight: 'bold',
				textAlign: 'center',
				textShadow: `0 0 20px #00000099`,
				top: nameAppear,
				opacity: nameOpacity,
			}}
		>
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
		</span>
	);
};
