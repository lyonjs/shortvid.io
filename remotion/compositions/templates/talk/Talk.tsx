import React from 'react';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {EventLogo} from '../../../design/atoms/EventLogo';

import {SpeakerAndTitle} from './SpeakerAndTitle';
import {TalkBackground} from './TalkBackground';

export type TalkProps = {
	eventLogo?: string;
	speakersNames: string;
	talkTitle: string;
	backgroundImg?: string;
	speakerPicture?: string;
	titleSize?: number;
	titleColor?: string;
};

export const Talk: React.FC<TalkProps> = ({
	eventLogo,
	speakersNames,
	talkTitle,
	speakerPicture,
	titleSize = 80,
	titleColor = '#efdb50',
	backgroundImg = staticFile(
		'/images/showcases/lyonjs/defaultBackgroundImage.jpeg',
	),
}) => {
	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
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
