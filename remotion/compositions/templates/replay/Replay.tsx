import React from 'react';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

import {BigSpeakers} from './BigSpeakers';
import {Details} from './Details';
import {Logo} from './Logo';
import {LogoSponsor} from './LogoSponsor';
import {TalkTitle} from './TalkTitle';

const SpeakerSchema = z.object({
	name: z.string(),
	picture: z.string(),
});

export const ReplaySchema = z.object({
	title: z.string(),
	date: z.string(),
	sponsor: z.string(),
	speakers: z.array(SpeakerSchema),
});

export const Replay: React.FC<z.infer<typeof ReplaySchema>> = ({
	title,
	speakers,
	date,
	sponsor,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Audio
				src={staticFile('sounds/tech-logo.mp3')}
				volume={(f) => interpolate(f, [0, 260, 320], [1, 1, 0], {extrapolateRight: 'clamp'})}
			/>
			<Logo />
			<LogoSponsor sponsor={sponsor} />
			<BackgroundTriangle />
			<BigSpeakers speakers={speakers} dropTop={220} />
			<Sequence from={165}>
				<TalkTitle
					title={title}
					style={{
						fontSize: '48px',
						bottom: '200px',
						padding: '0 60px',
					}}
				/>
			</Sequence>
			<Sequence from={140}>
				<Details date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
