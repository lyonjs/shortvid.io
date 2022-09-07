import {Title} from '../components/Title';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const TalkTitles: React.FC<{
	speakersNames: string;
	titleSize: string;
	talkTitle: string;
}> = ({speakersNames, titleSize, talkTitle}) => {
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
		<>
			<Title
				style={{
					color: 'white',
					position: 'absolute',
					fontSize: 70,
					left: '10%',
					right: '10%',
					top: '50%',
					opacity: titleOpacity,
					filter: `blur(${titleDeblur}px)`,
				}}
			>
				{speakersNames}
			</Title>

			<Title
				style={{
					color: 'white',
					position: 'absolute',
					fontSize: titleSize,
					left: '10%',
					right: '10%',
					top: '60%',
					opacity: titleOpacity,
					filter: `blur(${titleDeblur}px)`,
				}}
			>
				{talkTitle}
			</Title>
		</>
	);
};
