import React from 'react';
import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import {Title} from '../../../design/atoms/Title';

const {fontFamily} = loadFont();

export const TalkTitle: React.FC<{
	title: string;
	delay?: number;
}> = ({title, delay = 0}) => {
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
				color: '#fff',
				fontSize: 40,
				padding: '0 10px',
				textAlign: 'center',
				textShadow: `0 0 5px #000`,
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				lineHeight: 1.4,
				zIndex: 1,
				position: 'absolute',
				bottom: 130,
				maxWidth: '90%',
				left: 0,
				right: 0,
				margin: '0 auto',
			}}
		>
			{title}
			<Img
				src={staticFile('underline.svg')}
				style={{
					position: 'absolute',
					bottom: '-30px',
					width: '30%',
					margin: 'auto',
					transform: `translateX(-50%)`,
					opacity: 0.8,
					left: '50%',
				}}
			/>
		</Title>
	);
};
