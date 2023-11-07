import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {BackgroundCircleNoise} from '../../../../design/atoms/BackgroundCircleNoise';
import {TalkBrandedSchema} from '../talks.types';

import {BrandedDetails} from './BrandedDetails';
import {BrandedLocation} from './BrandedLocation';
import {BrandedLogo} from './BrandedLogo';
import {BrandedSpeaker} from './BrandedSpeaker';
import {BrandedTitle} from './BrandedTitle';

const {fontFamily} = loadFont();

export const TalkBranded = ({
	backgroundColor,
	title,
	startingDate,
	location,
	logoUrl,
	speaker,
}: z.infer<typeof TalkBrandedSchema>) => (
	<AbsoluteFill
		style={{
			backgroundColor,
			fontFamily,
		}}
	>
		<Sequence name="Noise Background">
			<BackgroundCircleNoise speed={0.01} circleRadius={5} maxOffset={20} />
		</Sequence>
		<Sequence name="Logo">
			<BrandedLogo logoUrl={logoUrl} borderColor={backgroundColor} />
		</Sequence>
		<Sequence name="Speaker" from={10}>
			<BrandedSpeaker
				pictureUrl={
					speaker.pictureUrl || staticFile('/images/common/defaultAvatar.svg')
				}
				name={speaker.name}
				company={speaker.company}
				job={speaker.job}
			/>
		</Sequence>
		<Sequence name="Title" from={40}>
			<BrandedTitle title={title} />
		</Sequence>
		<Sequence name="Details" from={50}>
			<BrandedDetails startingDateTime={startingDate} location={location} />
		</Sequence>
		{location && (
			<Sequence name="Location" from={55}>
				<BrandedLocation location={location} />
			</Sequence>
		)}
	</AbsoluteFill>
);
