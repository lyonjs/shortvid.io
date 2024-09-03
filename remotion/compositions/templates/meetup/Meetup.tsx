import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {MeetupBackground} from './MeetupBackground';
import {MeetupDate} from './MeetupDate';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';

const {fontFamily} = loadFont();

export const MeetupSchema = z.object({
	backgroundImg: z.string().optional(),
	title: z.string(),
	date: z.string().optional(),
	eventLogo: z.string().optional(),
});

export const Meetup: React.FC<z.infer<typeof MeetupSchema>> = ({
	backgroundImg = staticFile(
		'/images/showcases/lyonjs/defaultBackgroundImage.jpeg',
	),
	title,
	date,
	eventLogo,
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
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
