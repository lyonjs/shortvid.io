import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Speaker} from './CampingDesSpeakers';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../design/atoms/Text';
import {IconWithCaption} from '../../../design/molecules/IconWithCaption';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame: frame,
		fps,
		from: -600,
		to: 70,
		durationInFrames: 30,
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
							avatarPictureUrl={speaker.picture}
							avatarStyle={{
								width: 180,
								height: 180,
								border: 'none',
								top: pictureDrop,
							}}
							style={{
								gap: 0,
							}}
						>
							<>
								<Text
									style={{
										position: 'relative',
										bottom: '-30%',
										width: 250,
										height: 100,
										fontSize: 30,
										fontWeight: 700,
										opacity: nameOpacity,
										filter: `blur(${nameUnblur}px)`,
									}}
								>
									{speaker.name}
								</Text>
								<IconWithCaption
									iconifyId="mdi:company"
									caption={speaker.company}
									style={{
										position: 'relative',
										color: 'white',
										bottom: '-15%',
									}}
									iconStyle={{fontSize: 40}}
								/>
							</>
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
