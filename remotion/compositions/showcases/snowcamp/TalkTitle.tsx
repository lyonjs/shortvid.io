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

	const titleDeblur = interpolate(frame - delay, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Title
			style={{
				fontFamily: 'Noto Sans,sans-serif',
				fontSize: '38px',
				color: 'white',
				position: 'absolute',
				bottom: '180px',
				textAlign: 'center',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				textShadow: '`1px 1px 3px white`',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
