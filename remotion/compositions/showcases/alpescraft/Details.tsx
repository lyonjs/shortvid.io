import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time?: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const drop = spring({frame, from: -30, to: -10, fps, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	return (
		<TalkDetails
			date={date}
			time={time}
			location={location}
			flex={true}
			style={{
				fontSize: '25px',
				flexWrap: 'wrap',
				gap: 60,
			}}
			iconStyle={{
				opacity,
				bottom: drop,
			}}
		/>
	);
};
