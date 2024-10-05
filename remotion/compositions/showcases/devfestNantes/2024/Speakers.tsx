import {loadFont} from '@remotion/google-fonts/Creepster';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Text} from '../../../../design/atoms/Text';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';
import {Speaker} from '../../../../types/defaultProps.types';

const {fontFamily} = loadFont();

export const Speakers: React.FC<{
	speakers: Speaker[];
	isTotemDisplayMode?: boolean;
}> = ({speakers, isTotemDisplayMode}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureUp = spring({
		frame: frame,
		fps,
		from: -1000,
		to: isTotemDisplayMode ? -100 : -320,
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
				gap: isTotemDisplayMode ? 0 : 100,
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
							avatarPictureUrl={speaker.picture}
							avatarStyle={{
								width: 180,
								height: 180,
								border: 'none',
								boxShadow: '0 0 0 5px #1B2C2C',
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
										color: '#1B2C2C',
										textShadow:
											'-2px 0 #FFF8F0, 0 2px #FFF8F0, 2px 0 #FFF8F0, 0 -2px #FFF8F0',
										letterSpacing: '0.1rem',
										position: 'relative',
										bottom: isTotemDisplayMode ? '-50%' : '-118%',
										width: 350,
										height: 100,
										fontSize: 40,
										fontWeight: 700,
										opacity: nameOpacity,
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
