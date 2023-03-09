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
				fontSize: 100,
				fontWeight: '800',
				color: '#fff',
				textAlign: 'center',
				textTransform: 'uppercase',
				letterSpacing: 10,
			}}
		>
			{text.split('').map((letter, index) => {
				const dropFromTop = spring({
					frame: frame - index * 7 - (delay || 0),
					from: -600,
					to: 0,
					fps,
					durationInFrames: 30,
				});

				const dropDown = spring({
					frame: frame - index * 6 - (delay || 0) - 200,
					from: 0,
					to: 1000,
					fps,
				});

				return (
					<span
						key={`${letter}-${index}`}
						style={{
							display: 'inline-block',
							transform: `translateY(${dropFromTop + dropDown}px)`,
						}}
					>
						{letter}
					</span>
				);
			})}
		</span>
	);
};
