import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Speaker} from './TouraineTech2023';
import {Title} from './Title';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';

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
									gap: 80,
								}}
							>
								<Title
									title={speaker.name}
									style={{
										position: 'relative',
										bottom: '-20%',
										width: 250,
										height: 100,
										fontSize: '30px',
										fontWeight: 700,
										color: '#222333',
										textShadow: `1px 1px 1px white`,
									}}
									delay={40}
								/>
							</AvatarWithCaption>
						</div>
					);
				})}
			</AbsoluteFill>
		</Sequence>
	);
};
