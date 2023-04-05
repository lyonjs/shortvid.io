import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Title} from './Title';
import {Speaker} from './Replay';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';

export const BigSpeakers: React.FC<{speakers: Speaker[]; dropTop: number}> = ({
	speakers,
	dropTop,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const animationDelay = 60;
	const pictureDrop = spring({
		frame: frame - animationDelay,
		fps,
		from: -600,
		to: dropTop,
		durationInFrames: 30,
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
					const shadowColor = index % 2 === 0 ? '#efdb4f' : '#323330';

					return (
						<div
							key={speaker.name}
							style={{
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
							}}
						>
							<AvatarWithCaption
								avatarPictureUrl={speaker.picture}
								avatarStyle={{
									width: 350,
									height: 350,
									border: 'none',
									boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
									borderRadius: '50% 20% / 10% 40%',
									top: pictureDrop,
								}}
								caption={
									<Title
										title={speaker.name}
										style={{
											bottom: dropTop,
											fontSize: '45px',
											width: 350,
											height: 200,
											textShadow: `0px 0px 3px black`,
											left: '50%',
											transform: 'translateX(-50%)',
										}}
										delay={50}
									/>
								}
							/>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
