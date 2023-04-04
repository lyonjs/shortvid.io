import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {EventLogo} from '../../../design/atoms/EventLogo';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import React from 'react';
import {Title} from '../../../design/atoms/Title';
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
	backgroundImg = staticFile('/defaultBackgroundImage.jpeg'),
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DURATION = 30;
	const ANIMATION_DELAY = ANIMATION_DURATION / 2;

	const blur = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	const greyscale = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});

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
				<BackgroundFiller
					imageUrl={backgroundImg}
					style={{filter: `grayscale(${greyscale}) blur(${blur}px) `}}
				/>
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
