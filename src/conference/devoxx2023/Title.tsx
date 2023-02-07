import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import React from 'react';

const {fontFamily} = loadFont();

export const Title: React.FC<{
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
		<span
			style={{
				fontFamily,
				color: '#fff',
				fontSize: 40,
				fontWeight: 'bold',
				padding: 10,
				textAlign: 'center',
				textShadow: `0 0 5px #000`,
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				lineHeight: 1.4,
				...style,
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
		</span>
	);
};
