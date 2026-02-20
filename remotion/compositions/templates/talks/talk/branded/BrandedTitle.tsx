import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../../../design/atoms/Title';

type BrandedTitleProps = {
	title: string;
};

export const BrandedTitle = ({title}: BrandedTitleProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleOpacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});
	const titleUnblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{top: 380}}>
			<Title
				style={{
					fontFamily: 'inherit',
					fontSize: '3.25rem',
					width: '100%',
					opacity: titleOpacity,
					filter: `blur(${titleUnblur}px)`,
				}}
			>
				{title}
			</Title>
		</AbsoluteFill>
	);
};
