import {loadFont} from '@remotion/google-fonts/Archivo';
import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
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

	const pictureDrop = spring({
		frame: frame,
		fps,
		from: -600,
		to: 80,
		durationInFrames: 80,
	});

	const nameOpacity = spring({
		frame: frame - 40,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 80,
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
				gap: 150,
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<AvatarWithCaption
							avatarPictureUrl={
								speaker.picture ||
								staticFile(
									'images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png',
								)
							}
							avatarStyle={{
								width: 180,
								height: 180,
								border: 'none',
								boxShadow: '0 0 0 3px white, 0 0 0 13px #ef7918',
								top: pictureDrop,
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
											'-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
										letterSpacing: '0.1rem',
										position: 'relative',
										bottom: '-45%',
										width: 320,
										height: 100,
										fontSize: 28,
										fontWeight: 700,
										opacity: nameOpacity,
										color: '#03b7d5',
										filter: `blur(${nameUnblur}px)`,
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
