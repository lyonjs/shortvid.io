import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame, Video} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../../design/atoms/BackgroundFiller';
import {ShowcaseDevfestNantes2024Schema} from '../types/types';

import {Details} from './Details';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const DevfestNantes2025 = ({
	title,
	speakers,
	date,
	time,
	location,
	titleFontSize,
}: z.infer<typeof ShowcaseDevfestNantes2024Schema>) => {
	const frame = useCurrentFrame();
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
		extrapolateLeft: 'clamp'
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
					imageUrl={staticFile('images/showcases/devfestNantes/2025/library.png')}
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
			<Sequence>
				<Logo />
			</Sequence>
		</AbsoluteFill>
	);
};
