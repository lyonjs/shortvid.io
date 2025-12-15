import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Text} from '../../../../design/atoms/Text';

type SpeakerInfosProps = {
	name: string;
	iconStyle?: React.CSSProperties;
};

export const SpeakerInfos = ({name}: SpeakerInfosProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const opacity = spring({
		frame: frame - 20,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});
	const unblur = interpolate(frame, [20, 60], [5, 0], {
		extrapolateRight: 'clamp',
	});

	const textStyles = {
		opacity,
		fontFamily: 'inherit',
		filter: `blur(${unblur}px)`,
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Text
				style={{
					...textStyles,
					width: 'auto',
					fontSize: '2.25rem',
					fontWeight: 'bold',
				}}
			>
				{name}
			</Text>
			<hr
				style={{
					...textStyles,
					background: 'white',
					width: 50,
					height: 4,
					marginLeft: 20,
					marginTop: 20,
					border: 'none',
				}}
			/>
		</div>
	);
};
