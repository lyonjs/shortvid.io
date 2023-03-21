import {Audio, interpolate, Sequence, staticFile} from 'remotion';
import {Logo} from './Logo';
import {RightTriangle} from './RightTriangle';
import {LeftTriangle} from './LeftTriangle';
import {Title} from './Title';
import {AbsoluteFill} from 'remotion';
import {BigSpeakers} from './BigSpeakers';
import React from 'react';
import {Details} from './Details';
import {LogoSponsor} from './LogoSponsor';

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
			<RightTriangle />
			<LeftTriangle />
			<BigSpeakers speakers={speakers} dropTop={220} />
			<Sequence from={165}>
				<Title
					title={title}
					style={{
						fontSize: '48px',
						margin: '0 auto',
						bottom: '200px',
						padding: '0 60px',
						left: 0,
						right: 0,
					}}
				/>
			</Sequence>
			<Sequence from={140}>
				<Details date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
