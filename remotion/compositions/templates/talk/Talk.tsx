import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {EventLogo} from '../../../design/atoms/EventLogo';
import {SHORTVID_COLORS, SHORTVID_GRADIENTS} from '../../../theme';

import {SpeakerAndTitle} from './SpeakerAndTitle';
import {TalkBackground} from './TalkBackground';
import {TalkSchema} from './talks.types';

const {fontFamily} = loadFont();

export const Talk: React.FC<z.infer<typeof TalkSchema>> = ({
	eventLogo,
	speakersNames,
	talkTitle,
	speakerPicture,
	titleSize = 80,
	titleColor = SHORTVID_COLORS.secondary,
	backgroundImg,
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				background: SHORTVID_GRADIENTS.primary,
			}}
		>
			{backgroundImg && (
				<Sequence name="Background">
					<TalkBackground backgroundImg={backgroundImg} />
				</Sequence>
			)}
			<AbsoluteFill>
				<SpeakerAndTitle
					speakersNames={speakersNames}
					talkTitle={talkTitle}
					speakerPicture={speakerPicture}
					titleSize={titleSize}
					titleColor={titleColor}
				/>

				<EventLogo
					src={eventLogo}
					style={{
						position: 'absolute',
						bottom: 30,
						right: 30,
						height: 100,
					}}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
