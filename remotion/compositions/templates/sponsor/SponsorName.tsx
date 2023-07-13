import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Text} from '../../../design/atoms/Text';

export const SponsorName: React.FC<{
	companyName: string;
}> = ({companyName}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleOpacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const titleDeblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Text
			style={{
				color: 'white',
				position: 'absolute',
				top: 600,
				fontWeight: 'bold',
				fontSize: '6.25rem',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
			}}
		>
			{companyName}
		</Text>
	);
};
