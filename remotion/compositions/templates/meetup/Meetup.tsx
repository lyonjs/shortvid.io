import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';
import {MeetupDate} from './MeetupDate';
import React from 'react';
import {MeetupBackground} from './MeetupBackground';

export interface MeetupProps {
	eventLogo?: string;
	backgroundImg?: string;
	title: string;
	date?: string;
}

export const Meetup = ({
	backgroundImg = staticFile('/defaultBackgroundImage.jpeg'),
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
