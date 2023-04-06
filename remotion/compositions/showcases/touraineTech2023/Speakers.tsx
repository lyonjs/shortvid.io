import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Speaker} from './TouraineTech2023';
import {TalkTitle} from './TalkTitle';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../design/atoms/Text';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const animationDelay = 20;
	const pictureDrop = spring({
		frame: frame - animationDelay,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

	const nameOpacity = spring({
		frame: frame - animationDelay * 2,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const nameUnblur = interpolate(frame - animationDelay * 2, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<Sequence from={animationDelay} name="Picture">
			<AbsoluteFill
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: 100,
				}}
			>
				{speakers.map((speaker, index) => {
					const shadowColor = index % 2 === 0 ? '#6abfad' : '#222333';

					return (
						<div
							key={speaker.name}
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<AvatarWithCaption
								avatarPictureUrl={speaker.picture}
								avatarStyle={{
									width: 250,
									height: 250,
									border: 'none',
									boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
									top: pictureDrop,
								}}
								style={{
									gap: 60,
								}}
							>
								<Text
									style={{
										position: 'relative',
										left: 'unset',
										bottom: '-20%',
										transform: 'translate(0)',
										width: 250,
										height: 100,
										fontSize: '1.9rem',
										fontWeight: 700,
										color: '#222333',
										textShadow: `1px 1px 1px white`,
										opacity: nameOpacity,
										filter: `blur(${nameUnblur}px)`,
									}}
								>
									{speaker.name}
								</Text>
							</AvatarWithCaption>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
