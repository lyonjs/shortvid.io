import React, {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeIn: React.FC<{
	duration?: number;
	children: ReactNode;
	style?: CSSProperties;
}> = ({duration = 20, children, style}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, duration], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				opacity,
				...style,
			}}
		>
			{children}
		</div>
	);
};
