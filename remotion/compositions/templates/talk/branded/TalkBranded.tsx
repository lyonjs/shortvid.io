import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {BrandedTitle} from './BrandedTitle';
import {BrandedDetails} from './BrandedDetails';
import {BackgroundCircleNoise} from '../../../../design/atoms/BackgroundCircleNoise';
import {BrandedLogo} from './BrandedLogo';
import {BrandedSpeaker} from './BrandedSpeaker';

const {fontFamily} = loadFont();

export const TalkBranded: React.FC<{
	backgroundColor?: string;
	title: string;
	startingDate: string;
	endingDate?: string;
	day?: string;
	startingTime: string;
	endingTime?: string;
	logoUrl: string;
	speaker: {pictureUrl: string; name: string; company?: string; job?: string};
}> = ({
	backgroundColor = '#EA4335',
	title,
	startingDate,
	endingDate,
	day,
	startingTime,
	endingTime,
	logoUrl,
	speaker,
}) => {
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
					startingDate={startingDate}
					endingDate={endingDate}
					day={day}
					startingTime={startingTime}
					endingTime={endingTime}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
