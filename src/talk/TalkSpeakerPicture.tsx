import {Speaker} from '../components/Speaker';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const TalkSpeakerPicture: React.FC<{speakerPicture?: string}> = ({
	speakerPicture,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	if (!speakerPicture) {
		return null;
	}

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: 100,
		durationInFrames: 30,
	});

	return (
		<Speaker
			style={{
				position: 'absolute',
				top: pictureDrop,
				left: 330,
			}}
			src={speakerPicture}
		/>
	);
};
