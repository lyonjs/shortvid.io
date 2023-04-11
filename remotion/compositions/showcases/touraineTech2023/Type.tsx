import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TalkDetails} from '../../../design/molecules/TalkDetails';
import React from 'react';

export const Type: React.FC<{type: string}> = ({type}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<TalkDetails
			time={type}
			style={{
				fontSize: '32px',
				gridTemplateColumns: '1fr',
				fontFamily: 'Noto Sans,sans-serif',
			}}
			iconStyle={{opacity, bottom: drop}}
		/>
	);
};
