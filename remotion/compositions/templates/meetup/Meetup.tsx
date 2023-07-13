import React from 'react';

import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {MeetupBackground} from './MeetupBackground';
import {MeetupDate} from './MeetupDate';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';

export type MeetupProps = {
	eventLogo?: string;
	backgroundImg?: string;
	title: string;
	date?: string;
};

export const Meetup = ({
	backgroundImg = staticFile(
		'/images/showcases/lyonjs/defaultBackgroundImage.jpeg'
	),
	title,
	date,
	eventLogo,
}: MeetupProps) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<MeetupBackground backgroundImg={backgroundImg} />
			<Sequence from={40} durationInFrames={130}>
				<MeetupPresentation title={title} eventLogo={eventLogo} />
			</Sequence>
			{date && (
				<Sequence from={120}>
					<MeetupDate date={date} />
				</Sequence>
			)}
			<Sequence from={150}>
				<Register />
			</Sequence>
		</AbsoluteFill>
	);
};
