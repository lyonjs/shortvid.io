import React from 'react';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {ImageBackground} from '../../../design/atoms/ImageBackground';
import {Mountains} from './Mountains';
import {Logo} from './Logo';
import {Speakers} from './Speakers';

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
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
			}}
		>
			<Sequence name="Background">
				<ImageBackground
					animated
					src={staticFile(
						'/images/conferences/alpescraft/alpescraft-background.webp'
					)}
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
