import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
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
		<div
			style={{
				fontFamily,
				fontWeight: 900,
				fontSize: '38px',
				color: 'white',
				position: 'absolute',
				bottom: '180px',
				width: '100%',
				textAlign: 'center',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
				textShadow: `0px 0px 3px black`,
				...style,
			}}
		>
			{title}
		</div>
	);
};
