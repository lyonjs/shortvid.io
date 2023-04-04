import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Mountains} from './Mountains';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

export interface Speaker {
	picture: string;
	name: string;
}

export interface AlpesCraftProps {
	title: string;
	date: string;
	time?: string;
	location: string;
	speakers?: Speaker[];
}

export const AlpesCraft: React.FC<AlpesCraftProps> = ({
	title,
	date,
	time,
	location,
	speakers,
}) => {
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
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
			}}
		>
			<Sequence name="Background">
				<BackgroundFiller
					imageUrl={staticFile(
						'/images/conferences/alpescraft/alpescraft-background.webp'
					)}
					style={{filter: `grayscale(${greyscale}) blur(${blur}px) `}}
				/>
			</Sequence>
			<Sequence name="Mountains-decorations" from={20}>
				<Mountains />
			</Sequence>
			<Sequence name="Logo-&-title" from={30}>
				<TalkTitle title={title} />
				{speakers ? <Speakers speakers={speakers} /> : <Logo />}
			</Sequence>
			<Sequence name="Details" from={60}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
