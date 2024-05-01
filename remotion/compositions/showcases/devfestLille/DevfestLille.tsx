import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {Details} from './Details';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import {Background} from './Background';
import {Logo} from './Logo';

const {fontFamily} = loadFont();
export const DevfestLille = ({
	title,
	speakers,
	date,
	time,
	location,
}: DefaultProps) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#191919',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence name="Decorations" from={10}>
				<Background />
				<Logo />
			</Sequence>
			<Sequence name="Speakers" from={30}>
				<Speakers speakers={speakers} />
				<TalkTitle title={title} />
			</Sequence>
			<Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
