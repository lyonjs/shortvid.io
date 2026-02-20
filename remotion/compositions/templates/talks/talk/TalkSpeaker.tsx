import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {Title} from '../../../../design/atoms/Title';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';

export const TalkSpeaker: React.FC<{
	speakerPicture?: string;
	speakersNames: string;
	speakerNameStyle?: React.CSSProperties;
}> = ({speakerPicture, speakersNames, speakerNameStyle}) => {
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
					captionStyle={{...speakerNameStyle}}
				/>
			) : (
				<Title style={{...speakerNameStyle}}>{speakersNames}</Title>
			)}
		</>
	);
};
