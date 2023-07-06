import {AbsoluteFill, Sequence} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Speakers} from './Speakers';
import React from 'react';
import {Snow} from './Snow';
import {Logo} from './Logo';
import {TalkBackground} from './TalkBackground';
import {DefaultProps} from '../../../types/defaultProps.types';

export const Snowcamp: React.FC<DefaultProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
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
