import {loadFont} from '@remotion/google-fonts/Creepster';
import {
	AbsoluteFill,
	interpolate,
	spring, staticFile,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

import {Text} from '../../../../design/atoms/Text';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';
import {Speaker} from '../../../../types/defaultProps.types';

const {fontFamily} = loadFont();

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureUp = spring({
		frame: frame,
		fps,
		from: -1000,
		to: -350,
		durationInFrames: 60,
	});

	const backgroundPictureUp = spring({
		frame: frame,
		fps,
		from: -480,
		to: 160,
		durationInFrames: 60,
	});

	const nameOpacity = spring({
		frame: frame - 40,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const nameUnblur = interpolate(frame - 40, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				gap: 100,
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							backgroundImage: `url(${staticFile(
								'/images/showcases/devfestNantes/2024/background-speaker.png',
							)})`,
							backgroundSize: '80%',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: `bottom ${backgroundPictureUp}px right 20px`,
						}}
					>
						<AvatarWithCaption
							avatarPictureUrl={speaker.picture}
							avatarStyle={{
								width: 160,
								height: 160,
								border: 'none',
								boxShadow: '0 0 0 5px white',
								bottom: pictureUp,
							}}
							style={{
								gap: 0,
							}}
						>
							<>
								<Text
									style={{
										fontFamily,
										textShadow:
											'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
										letterSpacing: '0.1rem',
										position: 'relative',
										bottom: '-130%',
										width: 320,
										height: 100,
										fontSize: 40,
										fontWeight: 700,
										opacity: nameOpacity,
										filter: `blur(${nameUnblur}px)`,
										color: 'black',
									}}
								>
									{speaker.name}
								</Text>
							</>
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
