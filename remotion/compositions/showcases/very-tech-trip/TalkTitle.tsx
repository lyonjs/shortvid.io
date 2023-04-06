import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../../../design/atoms/Title';

export const TalkTitle: React.FC<{
	title: string;
	delay?: number;
}> = ({title}) => {
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
				WebkitLineClamp: '3',
				bottom: '130px',
				color: 'white',
				filter: `blur(${titleDeblur}px)`,
				fontSize: '2rem',
				opacity: titleOpacity,
				padding: '0 25px',
				position: 'absolute',
				textAlign: 'center',
				textShadow: 'px 2px 2px #e95900',
				width: '100%',
			}}
		>
			{title}
		</Title>
	);
};
