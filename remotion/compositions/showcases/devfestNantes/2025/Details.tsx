import {loadFont} from '@remotion/google-fonts/Cinzel';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {TalkDetails} from './TalkDetails';

const {fontFamily} = loadFont();

export const Details: React.FC<{
	date: string;
	time: string;
	location?: string;
	isTotemDisplayMode?: boolean;
}> = ({date, time, location, isTotemDisplayMode}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		frame: frame,
		from: -40,
		to: isTotemDisplayMode ? 180 : 20,
		fps,
		durationInFrames: 40,
	});
	const opacity = spring({
		frame: frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 40,
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
				fontFamily,
				opacity,
				paddingLeft: isTotemDisplayMode ? '10px' : 0,
				bottom: `${drop}px`,
				left: '50%',
				width: isTotemDisplayMode ? '96%' : '90%',
				fontSize: isTotemDisplayMode ? '15px' : '30px',
				color: '#FFF8F0',
				textShadow: '0 0 20px rgb(0,219,255)',
				transform: 'translateX(-50%)',
				filter: `blur(${textUnblur}px)`,
			}}
			iconStyle={{
				display: 'none',
			}}
		/>
	);
};
