import React from 'react';
import {Speaker} from '../../../types/conferences.types';
import {SpeakersName} from './SpeakersName';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const nameAppear = interpolate(frame, [18, 38], [0, 80], {
		easing: Easing.elastic(1),
		extrapolateRight: 'clamp',
	});
	const nameOpacity = interpolate(frame, [20, 25], [0, 1]);

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: 60,
		durationInFrames: 30,
	});

	return (
		<div
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
				padding: '0 70px',
			}}
		>
			{speakers.map((speaker) => {
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
								display: 'block',
								position: 'relative',
								left: 'unset',
								transform: 'translate(0)',
								width: 200,
								height: 200,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 13px #007bff`,
								borderRadius: '50% 20% / 10% 40%',
								top: pictureDrop,
							}}
							caption={<SpeakersName name={speaker.name} />}
							captionStyle={{
								position: 'relative',
								color: 'white',
								marginTop: 0,
								fontSize: 30,
								fontWeight: 'bold',
								textAlign: 'center',
								textShadow: `0 0 20px #00000099`,
								top: nameAppear,
								opacity: nameOpacity,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};
