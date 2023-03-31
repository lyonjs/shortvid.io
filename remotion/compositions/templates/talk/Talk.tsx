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

	const pictureAnimationDelay = 20;
	const titlesAnimationDelay = 30;

	const pictureDrop = spring({
		frame: frame - pictureAnimationDelay,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

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

	const titleStyle = {
		width: '100%',
		color: '#efdb50',
		position: 'absolute',
		fontSize: 70,
		top: '55%',
		opacity: titleOpacity,
		filter: `blur(${titleDeblur}px)`,
		textAlign: 'center',
		textShadow: '2px 2px 0px black',
	} as React.CSSProperties;

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
				<Sequence from={pictureAnimationDelay} name="Speaker">
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
							captionStyle={titleStyle}
						/>
					) : (
						<Title style={titleStyle}>{speakersNames}</Title>
					)}
				</Sequence>

				<Sequence from={30} name="Title">
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
