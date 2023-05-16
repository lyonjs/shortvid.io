import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../../../../design/atoms/Title';
import {loadFont} from '@remotion/google-fonts/YanoneKaffeesatz';

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

	const titleDeblur = interpolate(frame - delay, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Title
			style={{
				fontFamily,
				width: '75%',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '50px',
				lineHeight: '1.5',
				letterSpacing: '0.1rem',
				textAlign: 'center',
				textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
				position: 'absolute',
				minHeight: 150,
				bottom: '130px',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				...style,
			}}
		>
			{title}
		</Title>
	);
};
