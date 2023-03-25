import {Title} from '../../../design/atoms/Title';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const TalkTitles: React.FC<{
	speakersNames: string;
	titleSize: string;
	talkTitle: string;
}> = ({speakersNames, titleSize = '50', talkTitle}) => {
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
					width: '100%',
					color: '#efdb50',
					position: 'absolute',
					fontSize: 70,
					top: '55%',
					opacity: titleOpacity,
					filter: `blur(${titleDeblur}px)`,
					textAlign: 'center',
					textShadow: '2px 2px 0px black',
				}}
			>
				{speakersNames}
			</Title>

			<Title
				style={{
					width: '100%',
					color: 'white',
					position: 'absolute',
					fontSize: `${titleSize}px`,
					top: '70%',
					opacity: titleOpacity,
					filter: `blur(${titleDeblur}px)`,
					textAlign: 'center',
					paddingLeft: '50px',
					paddingRight: '50px',
				}}
			>
				{talkTitle}
			</Title>
		</>
	);
};
