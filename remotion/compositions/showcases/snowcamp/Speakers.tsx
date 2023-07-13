import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {Text} from '../../../design/atoms/Text';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Speaker} from '../../../types/defaultProps.types';

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
								width: 250,
								height: 250,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
								top: pictureDrop,
							}}
							style={{
								gap: 60,
							}}
						>
							<Text
								style={{
									position: 'relative',
									bottom: '-20%',
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
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
