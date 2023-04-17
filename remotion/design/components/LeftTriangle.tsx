import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const LeftTriangle = ({
	color = '#323330',
	isAnimated = true,
}: {
	color?: string;
	isAnimated?: boolean;
}) => {
	const {height, width, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const rotate = interpolate(frame, [0, durationInFrames], [-150, -165], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: 150,
				height: 3 * height,
				width: 2 * width,
				backgroundColor: color,
				transform: `translateX(-${2 * height}px) rotate(${
					isAnimated ? rotate : null
				}deg)`,
				border: '10px solid white',
			}}
		/>
	);
};
