import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {ShowcaseSchema} from '../showcases.types';

import {BackgroundRhone} from './BackgroundRhone';
import {Details} from './Details';
import {IntroAnimation} from './IntroAnimation';
import {Logo} from './Logo';
import {ParticleBackground} from './ParticleBackground';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

export const DevfestLyon = ({
	title,
	speakers,
	date,
	time,
	location,
}: z.infer<typeof ShowcaseSchema>) => {
	return (
		<AbsoluteFill>
			<Sequence name="Background" from={0}>
				<BackgroundRhone />
			</Sequence>

			<Sequence name="Intro" from={0} durationInFrames={230}>
				<IntroAnimation />
			</Sequence>

			<Sequence name="Logo" from={150}>
				<div style={{zIndex: 1000}}>
					<Logo />
				</div>
			</Sequence>

			<Sequence name="Speakers" from={170}>
				<div style={{zIndex: 1000}}>
					<Speakers speakers={speakers} />
				</div>
			</Sequence>

			<Sequence name="TalkTitle" from={210}>
				<div style={{zIndex: 1000}}>
					<TalkTitle title={title} />
				</div>
			</Sequence>

			<Sequence name="ParticleBackground" from={160}>
				<ParticleBackground />
			</Sequence>

			<Sequence name="Details" from={260}>
				<div style={{zIndex: 1000}}>
					<Details date={date} time={time} location={location} />
				</div>
			</Sequence>
		</AbsoluteFill>
	);
};
