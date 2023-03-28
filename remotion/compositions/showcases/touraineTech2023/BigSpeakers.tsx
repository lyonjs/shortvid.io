import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Speaker} from './TouraineTech2023';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {TalkTitle} from './TalkTitle';

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
								<TalkTitle
									title={speaker.name}
									style={{
										bottom: dropTop,
										fontSize: '38px',
										width: 350,
										height: 200,
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
