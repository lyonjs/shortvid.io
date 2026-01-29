import React from 'react';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

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

	const titleUnblur = interpolate(frame - delay, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Title
				style={{
					fontFamily,
					color: '#fff',
					fontSize: '2.5rem',
					padding: '0 10px',
					textAlign: 'center',
					textShadow: `0 0 5px #000`,
					opacity: titleOpacity,
					filter: `blur(${titleUnblur}px)`,
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
			</Title>
			<Img
				src={staticFile('/images/common/underline.svg')}
				style={{
					position: 'absolute',
					bottom: '100px',
					width: '28%',
					margin: 'auto',
					transform: `translateX(-50%)`,
					left: '50%',
					opacity: `calc(${titleOpacity} - 0.2)`,
					filter: `blur(${titleUnblur}px)`,
				}}
			/>
		</>
	);
};
