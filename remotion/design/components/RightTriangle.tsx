import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

import {SHORTVID_COLORS} from '../../theme';

export const RightTriangle = ({
	color = SHORTVID_COLORS.secondary,
	isAnimated = true,
}: {
	color?: string;
	isAnimated?: boolean;
}) => {
	const {height, width, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const top = interpolate(frame, [0, durationInFrames], [100, 200], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: isAnimated ? top : 100,
				height: 3 * height,
				width: 2 * width,
				backgroundColor: color,
				transform: `translateX(${height / 2}px) rotate(150deg)`,
			}}
		/>
	);
};
