import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from './Title';
import {Speaker} from './Snowcamp';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame: frame,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
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
				const shadowColor = '#e3b81c';

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
								width: 250,
								height: 250,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
								top: pictureDrop,
							}}
							caption={
								<Title
									title={speaker.name}
									style={{
										position: 'relative',
										bottom: '-20%',
										width: 250,
										height: 100,
										fontSize: '30px',
										fontWeight: 700,
										color: 'white',
									}}
									delay={40}
								/>
							}
							style={{
								gap: 40,
							}}
						/>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
