import {
	AbsoluteFill,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Details} from './Details';
import {Speakers} from './Speakers';
import React from 'react';
import {Snow} from './Snow';
import {Logo} from './Logo';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

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
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [0, 20], [0, 5]);

	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence>
				<BackgroundFiller
					imageUrl={staticFile('/images/conferences/grenoble.jpg')}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						filter: `blur(${blur}px)`,
						transform: 'scale(1.2)',
					}}
				/>
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
