import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		frame: frame - 40,
		from: -20,
		to: 0,
		fps,
		durationInFrames: 30,
	});
	const opacity = spring({
		frame: frame - 40,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	return (
		<Sequence from={40} name="Details">
			<TalkDetails
				items={{
					date,
					time,
					location,
				}}
				style={{
					opacity,
					fontFamily: 'Noto Sans,sans-serif',
					fontSize: '32px',
					textShadow: '1px 1px 3px #222333',
				}}
				iconStyle={{
					opacity,
					bottom: drop,
					filter: 'drop-shadow(1px 1px 3px #222333)'
				}}
			/>
		</Sequence>
	);
};
