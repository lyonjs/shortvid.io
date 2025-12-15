import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time: string;
	location?: string;
}> = ({date, time, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		frame: frame,
		from: -40,
		to: 20,
		fps,
		durationInFrames: 50,
	});

	const opacity = spring({
		frame: frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	const textUnblur = interpolate(frame, [0, 18], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<TalkDetails
			items={{
				date,
				time,
				location,
			}}
			style={{
				fontFamily: 'Arial Black',
				opacity,
				bottom: `${drop}px`,
				left: '50%',
				width: '90%',
				fontSize: '30px',
				textShadow:
					'-2px 0 #111e42, 0 2px #111e42, 2px 0 #111e42, 0 -2px #111e42',
				transform: 'translateX(-50%)',
				filter: `blur(${textUnblur}px)`,
				color: '#FFFFFF',
				textTransform: 'uppercase',
			}}
			iconStyle={{
				display: 'none',
			}}
		/>
	);
};
