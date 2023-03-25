import {Title} from '../../../design/atoms/Title';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

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
		<Title
			style={{
				color: 'white',
				position: 'absolute',
				top: 500,
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
			}}
		>
			{companyName}
		</Title>
	);
};
