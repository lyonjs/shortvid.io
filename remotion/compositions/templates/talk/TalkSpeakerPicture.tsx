import {Avatar} from '../../../design/atoms/Avatar';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CSSProperties} from 'react';

export const TalkSpeakerPicture: React.FC<{
	style?: CSSProperties;
	speakerPicture?: string;
	top?: number;
}> = ({style, speakerPicture, top = 100}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	if (!speakerPicture) {
		return null;
	}

	const pictureDrop = spring({
		frame,
		fps,
		from: -600,
		to: top,
		durationInFrames: 30,
	});

	return (
		<Avatar
			style={{
				position: 'absolute',
				top: pictureDrop,
				left: '50%',
				transform: 'translate(-50%, 0)',
				...style,
			}}
			src={speakerPicture}
		/>
	);
};
