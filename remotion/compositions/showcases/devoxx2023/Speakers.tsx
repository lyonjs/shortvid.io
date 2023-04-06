import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SpeakerName} from './SpeakerName';
import {Speaker} from '../../../types/conferences.types';
import {AvatarWithCaption} from '../../../design/molecules/AvatarWithCaption';
import {Text} from '../../../design/atoms/Text';

export const Speakers: React.FC<{speakers: Speaker[]}> = ({speakers}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: 30,
		durationInFrames: 30,
	});

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
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
								width: 200,
								height: 200,
								border: 'none',
								boxShadow: `0 0 0 10px white, 0 0 0 13px #f88224`,
								borderRadius: '50% 20% / 10% 40%',
								top: pictureDrop,
							}}
							style={{
								flexDirection: 'column-reverse',
								gap: 40,
							}}
						>
							<Text style={{fontSize: 30, width: 'auto'}}>
								<SpeakerName
									title={speaker.name}
									style={{
										position: 'relative',
									}}
								/>
							</Text>
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
