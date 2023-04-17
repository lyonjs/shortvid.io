import {Audio, interpolate, Sequence, staticFile} from 'remotion';
import {Logo} from './Logo';
import {TalkTitle} from './TalkTitle';
import {AbsoluteFill} from 'remotion';
import {BigSpeakers} from './BigSpeakers';
import React from 'react';
import {Details} from './Details';
import {LogoSponsor} from './LogoSponsor';
import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';

export interface Speaker {
	picture: string;
	name: string;
}

interface LyonJSReplayType {
	title: string;
	date: string;
	sponsor: string;
	speakers: Speaker[];
}

export const ReplayLyonJS: React.FC<LyonJSReplayType> = ({
	title,
	speakers,
	date,
	sponsor,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Audio
				src={staticFile('sounds/tech-logo.mp3')}
				volume={(f) =>
					interpolate(f, [0, 260, 320], [1, 1, 0], {extrapolateRight: 'clamp'})
				}
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
