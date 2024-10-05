import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {loadLocalFont} from '../../../../../src/app/utils/loadFont';
import {TalkDetails} from '../../../../design/molecules/TalkDetails';

loadLocalFont('HigherJump', 'font/HigherJump.ttf', 'truetype');

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
				fontFamily: 'HigherJump',
				opacity,
				paddingLeft: isTotemDisplayMode ? '10px' : 0,
				bottom: `${drop}px`,
				left: '50%',
				width: isTotemDisplayMode ? '96%' : '90%',
				fontSize: isTotemDisplayMode ? '15px' : '20px',
				letterSpacing: '0.3rem',
				color: '#FFF8F0',
				textShadow:
					'-2px 0 #1B2C2C, 0 2px #1B2C2C, 2px 0 #1B2C2C, 0 -2px #1B2C2C',
				transform: 'translateX(-50%)',
				filter: `blur(${textUnblur}px)`,
			}}
			iconStyle={{
				display: 'none',
			}}
		/>
	);
};
