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
		durationInFrames: 70,
	});

	const titleDeblur = interpolate(frame - delay, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Title
			style={{
				fontFamily: 'Arial Black',
				textShadow: '0 0 10px #111e42',
				width: '90%',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '38px',
				lineHeight: '1.4',
				letterSpacing: '0.5px',
				textAlign: 'center',
				position: 'absolute',
				minHeight: 150,
				bottom: '150px',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				WebkitLineClamp: '3',
				textWrap: 'balance',
				color: '#ee7cad',
				fontWeight: 900,
				...style,
			}}
		>
			{title}
		</Title>
	);
};
