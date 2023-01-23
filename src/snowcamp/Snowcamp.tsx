import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from './Title';
import {Details} from './Details';
import {Speakers} from './Speakers';
import {Background} from './Background';
import React from 'react';
import {Snow} from './Snow';

export interface Speaker {
	picture: string;
	name: string;
}

export interface TouraineTechProps {
	title: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
}

export const Snowcamp: React.FC<TouraineTechProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence>
				<Background />
			</Sequence>
			<Sequence from={20}>
				<Snow />
			</Sequence>
			<Sequence from={50}>
				<Speakers speakers={speakers} />
				<Title title={title} />
			</Sequence>
			<Sequence from={70}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
