import React from 'react';
import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {z} from 'zod';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {ShowcaseSchema} from '../showcases.types';

import {Android} from './Android';
import {Details} from './Details';
import {Dino} from './Dino';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

const {fontFamily} = loadFont();

export const DevfestNantesLoopTotem = ({
	title,
	speakers,
	date,
	time,
	location,
}: z.infer<typeof ShowcaseSchema>) => {
	const frame = useCurrentFrame();

	const SlideDown = interpolate(frame, [300, 330], [0, 1300], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
			}}
		>
			<Sequence>
				<BackgroundFiller
					imageUrl={staticFile(
						'/images/showcases/devfestNantes/2023/fond-visuel-etoiles.png',
					)}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
				/>
			</Sequence>
			<Sequence from={30}>
				<Dino />
			</Sequence>
			<Sequence from={110}>
				<Android isTotemDisplayMode />
			</Sequence>
			<Sequence>
				<Logo isTotemDisplayMode />
			</Sequence>
			<div
				style={{
					height: '100%',
					transform: `translateY(${SlideDown}px)`,
				}}
			>
				<Sequence name="Speakers" from={30}>
					<Speakers speakers={speakers} />
					<TalkTitle title={title} isTotemDisplayMode />
				</Sequence>
				<Sequence from={70}>
					<Details
						date={date}
						time={time}
						location={location}
						isTotemDisplayMode
					/>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
};
