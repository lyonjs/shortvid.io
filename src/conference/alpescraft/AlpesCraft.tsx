import React from 'react';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {Title} from './Title';
import {Details} from './Details';
import {ImageBackground} from '../../components/ImageBackground';
import {Mountains} from './Mountains';
import {Logo} from './Logo';

export interface AlpesCraftProps {
	title: string;
	date: string;
	location: string;
}

export const AlpesCraft: React.FC<AlpesCraftProps> = ({
	title,
	date,
	location,
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
				<Title title={title} />
				<Logo />
			</Sequence>
			<Sequence name="Details" from={60}>
				<Details date={date} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
