import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {BackgroundCircleNoise} from '../../../../design/atoms/BackgroundCircleNoise';

import {BrandedDetails} from './BrandedDetails';
import {BrandedLocation} from './BrandedLocation';
import {BrandedLogo} from './BrandedLogo';
import {BrandedSpeaker} from './BrandedSpeaker';
import {BrandedTitle} from './BrandedTitle';

const {fontFamily} = loadFont();

export type TalkBrandedProps = {
	backgroundColor?: string;
	title: string;
	startingDate: Date;
	endingDate?: Date;
	recurringDay?: string;
	location?: string;
	logoUrl: string;
	speaker: {pictureUrl: string; name: string; company?: string; job?: string};
};

export const TalkBranded: React.FC<TalkBrandedProps> = ({
	backgroundColor = '#EA4335',
	title,
	startingDate,
	endingDate,
	recurringDay,
	location,
	logoUrl,
	speaker,
}) => {
	const formatedStartingDate = new Date(startingDate);
	const startingDay = format(formatedStartingDate, 'dd MMMM', {locale: fr});
	const startingTime = format(formatedStartingDate, 'HH:mm');

	const formatedEndingDate = endingDate && new Date(endingDate);
	const endingDay =
		formatedEndingDate && format(formatedEndingDate, 'dd MMMM', {locale: fr});
	const endingTime = formatedEndingDate && format(formatedEndingDate, 'HH:mm');

	return (
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
				<BrandedDetails
					startingDate={startingDay}
					endingDate={endingDay}
					reccuringDay={recurringDay}
					startingTime={startingTime}
					endingTime={endingTime}
					location={location}
				/>
			</Sequence>
			{location && (
				<Sequence name="Location" from={55}>
					<BrandedLocation location={location} />
				</Sequence>
			)}
		</AbsoluteFill>
	);
};
