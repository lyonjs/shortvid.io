import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Rubik';

const {fontFamily} = loadFont();

export const TextDrop: React.FC<{
	text: string;
	delay?: number;
}> = ({text, delay}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<span
			style={{
				fontFamily,
				fontSize: 90,
				fontWeight: 800,
				color: 'white',
				textAlign: 'center',
				textTransform: 'uppercase',
				letterSpacing: 10,
				textShadow: '15px 15px 0px #003272, -15px -15px 0px #67AAFF',
			}}
		>
			{text.split('').map((letter, index) => {
				const dropDown = spring({
					frame: frame - index * 7 - (delay || 0),
					from: -600,
					to: 0,
					fps,
					durationInFrames: 30,
				});

				return (
					<span
						key={`${letter}-${index}`}
						style={{
							display: 'inline-block',
							transform: `translateY(${dropDown}px)`,
						}}
					>
						{letter}
					</span>
				);
			})}
		</span>
	);
};
