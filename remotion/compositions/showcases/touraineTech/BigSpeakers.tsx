import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Text} from '../../../design/atoms/Text';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Speaker} from '../../../types/defaultProps.types';

export const BigSpeakers: React.FC<{speakers: Speaker[]; dropTop: number}> = ({
	speakers,
	dropTop,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const animationDelay = 20;
	const pictureDrop = spring({
		frame: frame - animationDelay,
		fps,
		from: -600,
		to: dropTop,
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
					gap: 150,
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
									position: 'relative',
									width: 350,
									height: 350,
									border: 'none',
									boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
									top: pictureDrop,
								}}
								style={{
									gap: 40,
								}}
							>
								<Text
									style={{
										position: 'absolute',
										bottom: dropTop,
										fontSize: '2.3rem',
										width: 350,
										height: 200,
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
