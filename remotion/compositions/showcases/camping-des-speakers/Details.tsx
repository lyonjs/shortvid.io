import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames: 30});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<TalkDetails
			items={{
				date,
				time,
				location,
			}}
			style={{
				fontFamily: 'Noto Sans,sans-serif',
			}}
			iconStyle={{
				opacity,
				bottom: drop,
				fontSize: '24px',
			}}
		/>
	);
};
