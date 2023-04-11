import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React, {CSSProperties} from 'react';
import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{style?: CSSProperties; time: string}> = ({
	style,
	time,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({frame, from: -20, to: 10, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<TalkDetails
			time={time}
			style={{fontSize: '1.3rem', gridTemplateColumns: '1fr', ...style}}
			iconStyle={{opacity, bottom: drop}}
		/>
	);
};
