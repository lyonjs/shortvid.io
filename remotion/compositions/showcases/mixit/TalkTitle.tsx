import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../design/atoms/Title';

export const TalkTitle: React.FC<{
	title: string;
	style?: React.CSSProperties;
	delay?: number;
}> = ({title, style, delay = 0}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleOpacity = spring({
		frame: frame - delay,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const titleUnblur = interpolate(frame - delay, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Title
			style={{
				fontFamily: 'Lato,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
				fontWeight: 500,
				fontSize: '2.5rem',
				color: 'white',
				position: 'absolute',
				bottom: '200px',
				textAlign: 'center',
				opacity: titleOpacity,
				filter: `blur(${titleUnblur}px)`,
				textShadow: '`1px 1px 3px white`',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
