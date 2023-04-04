import {
	AbsoluteFill,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {MeetupPresentation} from './MeetupPresentation';
import {Register} from './Register';
import {MeetupDate} from './MeetupDate';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import React from 'react';

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
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DURATION = 30;
	const ANIMATION_DELAY = ANIMATION_DURATION / 2;

	const blur = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	const greyscale = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<BackgroundFiller
				imageUrl={backgroundImg}
				style={{filter: `grayscale(${greyscale}) blur(${blur}px) `}}
			/>
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
