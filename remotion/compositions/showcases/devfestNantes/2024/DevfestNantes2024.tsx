import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {ShowcaseDevfestNantes2024Schema} from '../types/types';

import {Details} from './Details';
import {GhostBackground} from './GhostBackground';
import {Logo} from './Logo';
import {Moon} from './Moon';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {Trees} from './Trees';

const {fontFamily} = loadFont();
export const DevfestNantes2024 = ({
	title,
	speakers,
	date,
	time,
	location,
	titleFontSize,
}: z.infer<typeof ShowcaseDevfestNantes2024Schema>) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#e4595c',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
				boxShadow:
					'inset 0 0px 200px rgba(0, 0, 0, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
			}}
		>
			<Sequence from={30}>
				<GhostBackground />
			</Sequence>
			<Sequence from={110}>
				<Moon />
			</Sequence>
			<Sequence from={30}>
				<Trees />
			</Sequence>
			<Sequence name="Speakers" from={30}>
				<Speakers speakers={speakers} />
				<TalkTitle
					title={title}
					style={{
						fontSize: titleFontSize ?? 35,
					}}
				/>
			</Sequence>
			<Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence>
			<Sequence>
				<Logo />
			</Sequence>
		</AbsoluteFill>
	);
};
