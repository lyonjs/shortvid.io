import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Aldrich';

const {fontFamily} = loadFont();

export const SpeakerName: React.FC<{
	title: string;
	style?: React.CSSProperties;
	delay?: number;
	top?: number;
}> = ({title, style, delay = 0, top = 100}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame: frame - delay,
		fps,
		from: -600,
		to: top,
		durationInFrames: 30,
	});

	return (
		<span
			style={{
				fontFamily,
				top: pictureDrop,
				color: 'white',
				fontSize: 30,
				fontWeight: 'bold',
				padding: 10,
				textAlign: 'center',
				textShadow: `0 0 20px black`,
				...style,
			}}
		>
			<Img
				style={{
					paddingBottom: 10,
					filter: 'drop-shadow(0 0 3px #f88224)',
				}}
				src={staticFile('underline-white.svg')}
			/>
			{title}
			<Img
				style={{
					filter: 'drop-shadow(0 0 5px #f88224)',
				}}
				src={staticFile('underline-white.svg')}
			/>
		</span>
	);
};
