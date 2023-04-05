import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ImageBackground} from '../../../design/atoms/ImageBackground';
import {EventLogo} from '../../../design/atoms/EventLogo';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Title} from '../../../design/atoms/Title';
import React from 'react';
import {TalkSpeaker} from './TalkSpeaker';

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
	backgroundImg,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titlesAnimationDelay = 30;
	const titleOpacity = spring({
		frame: frame - titlesAnimationDelay,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});
	const titleDeblur = interpolate(
		frame,
		[0 + titlesAnimationDelay, 20 + titlesAnimationDelay],
		[5, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<Sequence name="Background">
				<ImageBackground animated animationDuration={30} src={backgroundImg} />
			</Sequence>
			<AbsoluteFill>
				<Sequence from={20} name="Speaker">
					<TalkSpeaker
						speakerPicture={speakerPicture}
						speakersNames={speakersNames}
						SpeakerNameStyle={{
							width: '100%',
							color: '#efdb50',
							position: 'absolute',
							fontSize: 70,
							top: '55%',
							opacity: titleOpacity,
							filter: `blur(${titleDeblur}px)`,
							textAlign: 'center',
							textShadow: '2px 2px 0px black',
						}}
					/>
				</Sequence>

				<Sequence from={titlesAnimationDelay} name="Title">
					<Title
						style={{
							width: '100%',
							color: 'white',
							position: 'absolute',
							fontSize: `${titleSize}px`,
							top: '70%',
							opacity: titleOpacity,
							filter: `blur(${titleDeblur}px)`,
							textAlign: 'center',
							paddingLeft: '50px',
							paddingRight: '50px',
						}}
					>
						{talkTitle}
					</Title>
				</Sequence>

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
