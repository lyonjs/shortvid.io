import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';
import {ShowcaseDevfestNantes2024Schema} from '../types/types';

import {Fireflies} from './Fireflies';
import {Logo} from './Logo';
import {SweepFirefly} from './SweepFirefly';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const DevfestNantesPhrase2025 = ({
	title,
	titleFontSize,
}: z.infer<typeof ShowcaseDevfestNantes2024Schema>) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const videoOpacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Slow, centered zoom for BackgroundFiller appearing at frame 110
	const bgStart = 0;
	const bgLocalFrame = Math.max(0, frame - bgStart);
	const bgZoom = interpolate(bgLocalFrame, [0, 250], [1, 1.4], {
		extrapolateRight: 'clamp',
	});

	// Fireflies fade-in
	const firefliesStart = 10;
	const firefliesLocal = Math.max(0, frame - firefliesStart);
	const firefliesOpacity = interpolate(firefliesLocal, [10, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	// Fade out to base color for seamless loop
	const fadeOutOpacity = interpolate(
		frame,
		[durationInFrames - 50, durationInFrames - 15],
		[0, 1],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		},
	);

	const SlideDown = interpolate(frame, [200, 230], [0, 650], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
	});

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
				backgroundColor: '#22170D',
			}}
		>
			<Sequence from={0}>
				<BackgroundFiller
					imageUrl={staticFile(
						'images/showcases/devfestNantes/2025/library.png',
					)}
					style={{
						opacity: videoOpacity,
						transform: `scale(${bgZoom})`,
						transformOrigin: 'center center',
					}}
				/>
			</Sequence>
			<Sequence from={20}>
				<Fireflies count={50} opacity={firefliesOpacity} />
			</Sequence>
			<Sequence from={22}>
				<SweepFirefly
					y={180}
					size={70}
					durationInFrames={120}
					opacity={firefliesOpacity}
					direction="ltr"
					driftAmp={10}
					driftFreq={1.2}
					flickerAmp={0.18}
				/>
			</Sequence>
			<Sequence from={38}>
				<SweepFirefly
					y={420}
					size={60}
					durationInFrames={140}
					opacity={firefliesOpacity}
					direction="rtl"
					driftAmp={6}
					driftFreq={2.0}
					flickerAmp={0.12}
				/>
			</Sequence>
			<Sequence from={50}>
				<SweepFirefly
					y={300}
					size={52}
					durationInFrames={120}
					opacity={firefliesOpacity}
					direction="ltr"
					driftAmp={14}
					driftFreq={0.9}
					flickerAmp={0.2}
				/>
			</Sequence>
			<div
				style={{
					height: '100%',
					transform: `translateY(${SlideDown}px)`,
				}}
			>
				<Sequence name="Speakers" from={50}>
					<TalkTitle
						title={title}
						style={{
							fontSize: titleFontSize ?? 55,
							top: '40%',
						}}
					/>
				</Sequence>
			</div>
			<Sequence>
				<Logo />
			</Sequence>
			<Sequence>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#22170D',
						zIndex: 1000,
						opacity: fadeOutOpacity,
					}}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
