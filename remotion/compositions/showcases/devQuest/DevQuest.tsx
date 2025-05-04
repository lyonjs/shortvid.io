import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../showcases.types';

import {Background} from './Background';
import {Details} from './Details';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();
export const DevQuest = ({
	title,
	speakers,
	date,
	time,
	location,
}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#000',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Background />
			<Sequence name="Speakers" from={50}>
				<Logo />
				<Speakers speakers={speakers} />
				<TalkTitle title={title} />
			</Sequence>
			<Sequence from={80}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
