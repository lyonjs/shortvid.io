import React from 'react';
import {loadFont} from '@remotion/google-fonts/OpenSans';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {z} from 'zod';

import {EventLogo} from '../../../design/atoms/EventLogo';

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
	titleColor = '#efdb50',
	backgroundImg = staticFile('/images/showcases/lyonjs/defaultBackgroundImage.jpeg'),
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
			}}
		>
			<Sequence name="Background">
				<TalkBackground backgroundImg={backgroundImg} />
			</Sequence>
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
