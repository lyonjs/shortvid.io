import {loadFont} from '@remotion/google-fonts/Creepster';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {TalkDetails} from '../../../../design/molecules/TalkDetails';

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
		to: isTotemDisplayMode ? 200 : 20,
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
				bottom: `${drop}px`,
				left: '50%',
				width: isTotemDisplayMode ? '96%' : '80%',
				fontSize: '45px',
				letterSpacing: '0.3rem',
				textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
				transform: 'translateX(-50%)',
				filter: `blur(${textUnblur}px)`,
			}}
			iconStyle={{
				display: 'none'
			}}
		/>
	);
};
