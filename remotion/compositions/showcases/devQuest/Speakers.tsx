import {loadFont} from '@remotion/google-fonts/Teko';
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

const {fontFamily} = loadFont();

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const animationDelay = 20;
	const pictureDrop = spring({
		frame: frame - animationDelay,
		fps,
		from: -600,
		to: 250,
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
					gap: 500,
				}}
			>
				{speakers.map((speaker) => {
					return (
						<div
							key={speaker.name}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<AvatarWithCaption
								avatarPictureUrl={speaker.picture}
								avatarStyle={{
									width: 250,
									height: 250,
									border: 'none',
									boxShadow: `0 0 0 15px #F1DDB6, 0 0 0 30px #290056, 0 0 0 32px #F1DDB6`,
									top: pictureDrop,
									borderRadius: '20%',
								}}
								style={{
									gap: 60,
								}}
							>
								<Text
									style={{
										fontFamily,
										position: 'relative',
										bottom: '-60%',
										height: 100,
										fontSize: '3rem',
										fontWeight: 900,
										color: '#F1DDB6',
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
