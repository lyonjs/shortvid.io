import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TalkTitle} from './TalkTitle';
import {Speaker} from '../../../types/conferences.types';
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
					const shadowColor = index % 2 === 0 ? '#ff8d4e' : '#aecbd6';

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
										position: 'relative',
										left: 'unset',
										bottom: '-20%',
										transform: 'translate(0)',
										height: 100,
										fontSize: '30px',
										fontWeight: 700,
										color: shadowColor,
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
