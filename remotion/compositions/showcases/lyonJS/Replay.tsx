import React from 'react';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';

import {BackgroundTriangle} from '../../../design/atoms/BackgroundTriangle';
import {Speaker} from '../../../types/defaultProps.types';

import {BigSpeakers} from './BigSpeakers';
import {Details} from './Details';
import {Logo} from './Logo';
import {LogoSponsor} from './LogoSponsor';
import {TalkTitle} from './TalkTitle';

export type LyonJSReplayType = {
	title: string;
	date: string;
	sponsor: string;
	speakers: Speaker[];
};

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
