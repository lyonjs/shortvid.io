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
	Video,
} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';
import {ShowcaseDevfestNantes2024Schema} from '../types/types';

import {Details} from './Details';
import {Fireflies} from './Fireflies';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {SweepFirefly} from './SweepFirefly';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const DevfestNantesLoop2025 = ({
	title,
	speakers,
	date,
	time,
	location,
	titleFontSize,
}: z.infer<typeof ShowcaseDevfestNantes2024Schema>) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const videoOpacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Slow, centered zoom for BackgroundFiller appearing at frame 110
	const bgStart = 110;
	const bgLocalFrame = Math.max(0, frame - bgStart);
	const bgZoom = interpolate(bgLocalFrame, [0, 180], [1, 1.4], {
		extrapolateRight: 'clamp',
	});

	// White overlay that fades out to reveal the library image
	const whiteFlashStart = 118;
	const whiteFlashLocal = Math.max(0, frame - whiteFlashStart);
	const whiteOpacity = interpolate(whiteFlashLocal, [0, 5, 30], [1, 1, 0], {
		extrapolateRight: 'clamp',
	});

	// Darken the library image at the beginning to improve text readability
	const darkenStart = 110;
	const darkenLocal = Math.max(0, frame - darkenStart);
	const darkenOpacity = interpolate(darkenLocal, [30, 65], [0, 0.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Fireflies fade-in
	const firefliesStart = 120;
	const firefliesLocal = Math.max(0, frame - firefliesStart);
	const firefliesOpacity = interpolate(firefliesLocal, [0, 20], [0, 1], {
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

	const SlideDown = interpolate(frame, [300, 330], [0, 650], {
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
			<Sequence from={110}>
				<BackgroundFiller
					imageUrl={staticFile(
						'images/showcases/devfestNantes/2025/library.png',
					)}
					style={{
						transform: `scale(${bgZoom})`,
						transformOrigin: 'center center',
					}}
				/>
			</Sequence>
			<Sequence from={110}>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#000000',
						opacity: darkenOpacity,
					}}
				/>
			</Sequence>
			<Sequence from={0} durationInFrames={118}>
				<Video
					src={staticFile('images/showcases/devfestNantes/2025/background.mp4')}
					style={{opacity: videoOpacity}}
					playbackRate={1.6}
					endAt={188}
					muted
				/>
			</Sequence>
			<Sequence from={118}>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#FFFFFF',
						opacity: whiteOpacity,
					}}
				/>
			</Sequence>
			<Sequence from={120}>
				<Fireflies count={50} opacity={firefliesOpacity} />
			</Sequence>
			<Sequence from={122}>
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
			<Sequence from={138}>
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
			<Sequence from={150}>
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
				<Sequence name="Speakers" from={135}>
					<Speakers speakers={speakers} />
					<TalkTitle
						title={title}
						style={{
							fontSize: titleFontSize ?? 45,
						}}
					/>
				</Sequence>
				<Sequence from={175}>
					<Details date={date} time={time} location={location} />
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
