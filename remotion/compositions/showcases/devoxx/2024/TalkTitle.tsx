import {loadFont} from '@remotion/google-fonts/JetBrainsMono';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../../design/atoms/Title';

const {fontFamily} = loadFont();

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
				fontFamily,
				letterSpacing: 'normal',
				fontWeight: 500,
				fontSize: '2.15rem',
				color: 'white',
				position: 'absolute',
				bottom: '160px',
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
