import {loadFont} from '@remotion/google-fonts/Cinzel';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../../design/atoms/Title';

const {fontFamily} = loadFont();

export const TalkTitle: React.FC<{
	title: string;
	style?: React.CSSProperties;
	delay?: number;
	isTotemDisplayMode?: boolean;
}> = ({title, style, delay = 0, isTotemDisplayMode}) => {
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
				width: '95%',
				fontSize: '35px',
				fontWeight: 'bold',
				textAlign: 'center',
				textShadow: '0 0 20px rgb(0,219,255)',
				color: '#FFF8F0',
				textWrap: 'balance',
				position: 'absolute',
				top: isTotemDisplayMode ? '50%' : '10%',
				left: '50%',
				transform: isTotemDisplayMode ? 'translate(-50%, -50%)' : 'translateX(-50%)',
				minHeight: 150,
				bottom: isTotemDisplayMode ? '500px' : '450px',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				WebkitLineClamp: isTotemDisplayMode ? '10' : '2',
				...style,
			}}
		>
			{title}
		</Title>
	);
};
