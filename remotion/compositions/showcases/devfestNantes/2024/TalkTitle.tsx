import {loadFont} from '@remotion/google-fonts/Creepster';
import {loadLocalFont} from '../../../../../src/app/utils/loadFont';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../../design/atoms/Title';

const {fontFamily} = loadFont();
loadLocalFont('HigherJump', 'font/HigherJump.ttf', 'truetype');

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
				fontFamily: 'HigherJump',
				width: '95%',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '35px',
				lineHeight: '2.2',
				letterSpacing: '0.2rem',
				textAlign: 'center',
				color: '#FFF8F0',//'#1B2C2C',
				textShadow: '-2px 0 #1B2C2C, 0 2px #1B2C2C, 2px 0 #1B2C2C, 0 -2px #1B2C2C',
				textWrap: 'balance',
				position: 'absolute',
				minHeight: 150,
				bottom: isTotemDisplayMode ? '600px' : '450px',
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
