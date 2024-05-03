import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../showcases.types';

import {Details} from './Details';
import {Logo} from './Logo';
import {Snow} from './Snow';
import {Speakers} from './Speakers';
import {TalkBackground} from './TalkBackground';
import {TalkTitle} from './TalkTitle';

export const Snowcamp = ({
	title,
	speakers,
	date,
	time,
	location,
}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence>
				<TalkBackground />
			</Sequence>
			<Sequence from={20}>
				<Snow />
			</Sequence>
			<Sequence from={50}>
				<Logo />
				{speakers && <Speakers speakers={speakers} />}
				<TalkTitle title={title} />
			</Sequence>
			<Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
