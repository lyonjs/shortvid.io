import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {Speaker} from '../../../types/defaultProps.types';
import {ShowcaseSchema} from '../showcases.types';

import {Details} from './Details';
import {Logo} from './Logo';
import {Mountains} from './Mountains';
import {Speakers} from './Speakers';
import {TalkBackground} from './TalkBackground';
import {TalkTitle} from './TalkTitle';

export type AlpesCraftProps = {
	title: string;
	date: string;
	time?: string;
	location: string;
	speakers?: Speaker[];
};

export const AlpesCraft = ({
	title,
	date,
	time,
	location,
	speakers,
}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
			}}
		>
			<Sequence name="Background">
				<TalkBackground />
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
