import {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeIn: React.FC<{
	children: ReactNode;
	duration?: number;
	style?: CSSProperties;
}> = ({children, duration = 20, style}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, duration], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				...style,
				opacity,
			}}
		>
			{children}
		</div>
	);
};
