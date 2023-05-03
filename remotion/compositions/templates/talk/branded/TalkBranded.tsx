import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {BrandedTitle} from './BrandedTitle';
import {BrandedDetails} from './BrandedDetails';
import {BackgroundCircleNoise} from '../../../../design/atoms/BackgroundCircleNoise';
import {BrandedLogo} from './BrandedLogo';
import {BrandedSpeaker} from './BrandedSpeaker';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import {BrandedLocation} from './BrandedLocation';

const {fontFamily} = loadFont();

export const TalkBranded: React.FC<{
	backgroundColor?: string;
	title: string;
	startingDate: Date;
	endingDate?: Date;
	reccuringDay?: string;
	location?: string;
	logoUrl: string;
	speaker: {pictureUrl: string; name: string; company?: string; job?: string};
}> = ({
	backgroundColor = '#EA4335',
	title,
	startingDate,
	endingDate,
	reccuringDay,
	location,
	logoUrl,
	speaker,
}) => {
	const startingDay = format(startingDate, 'dd MMMM', {locale: fr});
	const endingDay = endingDate && format(endingDate, 'dd MMMM', {locale: fr});
	const startingTime = format(startingDate, 'HH:mm');
	const endingTime = endingDate && format(endingDate, 'HH:mm');

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
					pictureUrl={speaker.pictureUrl}
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
					reccuringDay={reccuringDay}
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
