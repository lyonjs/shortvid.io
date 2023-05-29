import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Speaker} from '../CampingDesSpeakers';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../../design/atoms/Text';
import {IconWithCaption} from '../../../../design/molecules/IconWithCaption';
import {loadFont} from '@remotion/google-fonts/YanoneKaffeesatz';

const {fontFamily} = loadFont();

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame: frame,
		fps,
		from: -600,
		to: 80,
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
						}}
					>
						<AvatarWithCaption
							avatarPictureUrl={
								speaker.picture ||
								staticFile(
									'images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png'
								)
							}
							avatarStyle={{
								width: 180,
								height: 180,
								border: 'none',
								boxShadow: '0 0 0 5px white, 0 0 0 8px black',
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
										bottom: '-40%',
										width: 320,
										height: 100,
										fontSize: 35,
										fontWeight: 700,
										opacity: nameOpacity,
										filter: `blur(${nameUnblur}px)`,
									}}
								>
									{speaker.name}
								</Text>
								{speaker.company && (
									<IconWithCaption
										iconifyId="mdi:company"
										caption={speaker.company}
										style={{
											fontFamily,
											textShadow:
												'-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
											position: 'relative',
											color: 'white',
											fontSize: '1.2rem',
											fontWeight: 700,
											opacity: nameOpacity,
											filter: `blur(${nameUnblur}px)`,
											bottom: '-25%',
										}}
										iconStyle={{
											fontSize: 20,
											filter: 'drop-shadow(0 0 0.2rem black)',
										}}
									/>
								)}
							</>
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
