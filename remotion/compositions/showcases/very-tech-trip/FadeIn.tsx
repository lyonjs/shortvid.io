import {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeIn: React.FC<{children: ReactNode}> = ({children}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				opacity,
			}}
		>
			{children}
		</div>
	);
};
