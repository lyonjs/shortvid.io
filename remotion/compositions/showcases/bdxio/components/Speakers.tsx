import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';

import {SpeakerInfos} from './SpeakerInfos';

type SpeakersProps = {
	speakers: Array<{
		name: string;
		picture: string;
	}>;
};

export const Speakers = ({speakers}: SpeakersProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const speakersData = speakers;
	const baseOffsetY = speakersData.length > 1 ? -50 : 0;
	const avatarSize = speakersData.length > 1 ? 150 : 200;
	const speakerIconStyle: React.CSSProperties | undefined =
		speakersData.length > 1 ? {fontSize: '2rem'} : undefined;

	return (
		<>
			{speakersData.map((speaker, index) => {
				const slideIn = spring({
					frame,
					fps,
					from: -300 - index * 200 - baseOffsetY,
					to: index * 200 + baseOffsetY,
					durationInFrames: 60,
				});

				const blobRadiuses = [
					[40, 70],
					[60, 30],
					[70, 50],
					[30, 50],
					[40, 30],
					[50, 70],
				];

				const [blobRadius1, blobRadius2, blobRadius3, blobRadius4, blobRadius5, blobRadius6] =
					blobRadiuses.map((values) => {
						return interpolate(frame, [20, 260], values, {
							extrapolateRight: 'clamp',
						});
					});

				return (
					<AbsoluteFill key={index} style={{left: 500, top: 100}}>
						<AvatarWithCaption
							avatarPictureUrl={speaker.picture || staticFile('/images/common/defaultAvatar.svg')}
							avatarStyle={{
								width: avatarSize,
								height: avatarSize,
								border: 'none',
								borderRadius: `${blobRadius1}% ${blobRadius2}% ${blobRadius3}% ${blobRadius4}% / ${blobRadius5}% ${blobRadius5}% ${blobRadius2}% ${blobRadius6}%`,
								boxShadow: '20px 20px 0 white',
							}}
							style={{
								position: 'relative',
								flexDirection: 'row',
								gap: 60,
								top: slideIn,
							}}
						>
							<SpeakerInfos name={speaker.name} iconStyle={speakerIconStyle} />
						</AvatarWithCaption>
					</AbsoluteFill>
				);
			})}
		</>
	);
};
