import {loadFont} from '@remotion/google-fonts/Teko';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../design/atoms/Title';

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
				fontWeight: 700,
				fontSize: '4rem',
				color: '#F1DDB6',
				position: 'absolute',
				bottom: '230px',
				textAlign: 'center',
				opacity: titleOpacity,
				filter: `blur(${titleUnblur}px)`,
				textWrap: 'balance',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
