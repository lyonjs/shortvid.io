import React from 'react';
import {spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

export const TalkBackground = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DURATION = 30;
	const ANIMATION_DELAY = ANIMATION_DURATION / 2;

	const blur = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	const greyscale = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});

	return (
		<BackgroundFiller
			imageUrl={staticFile(
				'/images/conferences/alpescraft/alpescraft-background.webp'
			)}
			style={{filter: `grayscale(${greyscale}) blur(${blur}px) `}}
		/>
	);
};
