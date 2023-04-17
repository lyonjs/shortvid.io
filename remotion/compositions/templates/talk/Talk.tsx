import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {EventLogo} from '../../../design/atoms/EventLogo';
import React from 'react';
import {SpeakerAndTitle} from './SpeakerAndTitle';
import {TalkBackground} from './TalkBackground';

export const Talk: React.FC<{
	eventLogo?: string;
	speakersNames: string;
	talkTitle: string;
	backgroundImg?: string;
	speakerPicture?: string;
	titleSize?: string;
}> = ({
	eventLogo,
	speakersNames,
	talkTitle,
	speakerPicture,
	titleSize = '80',
	backgroundImg = staticFile('/defaultBackgroundImage.jpeg'),
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
