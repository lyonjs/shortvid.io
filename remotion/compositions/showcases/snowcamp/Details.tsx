import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../../hooks/useLottie';
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
			date={date}
			time={time}
			location={location}
			style={{
				fontFamily: 'Noto Sans,sans-serif',
				fontSize: '32px',
			}}
			iconStyle={{
				opacity,
				bottom: drop,
			}}
		/>
	);
};
