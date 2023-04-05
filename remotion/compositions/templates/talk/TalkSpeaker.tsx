import React from 'react';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Title} from '../../../design/atoms/Title';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const TalkSpeaker: React.FC<{
	speakerPicture?: string;
	speakersNames: string;
	SpeakerNameStyle?: React.CSSProperties;
}> = ({speakerPicture, speakersNames, SpeakerNameStyle}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

	return (
		<>
			{speakerPicture ? (
				<AvatarWithCaption
					avatarPictureUrl={speakerPicture}
					caption={speakersNames}
					avatarStyle={{
						position: 'absolute',
						left: '50%',
						transform: 'translate(-50%, 0)',
						top: pictureDrop,
					}}
					captionStyle={{...SpeakerNameStyle}}
				/>
			) : (
				<Title style={{...SpeakerNameStyle}}>{speakersNames}</Title>
			)}
		</>
	);
};
