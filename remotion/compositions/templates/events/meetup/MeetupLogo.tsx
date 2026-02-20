import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {EventLogo} from '../../../../design/atoms/EventLogo';

export type MeetupLogoProps = {
	eventLogo?: string;
	endAnimationShift: number;
};

export const MeetupLogo = ({eventLogo, endAnimationShift}: MeetupLogoProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleUpLogo = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});
	const scaleDownLogo = spring({
		frame: frame - endAnimationShift,
		from: 0,
		to: 1,
		fps,
		config: {
			mass: 0.6,
			damping: 5,
			stiffness: 50,
		},
		durationInFrames: 65,
	});

	const opacityUp = spring({frame, from: 0, to: 1, fps, durationInFrames: 50});
	const opacityDown = spring({
		frame: frame - endAnimationShift,
		from: 0,
		to: 0.5,
		fps,
		durationInFrames: 70,
	});

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<EventLogo
				src={eventLogo}
				style={{
					position: 'absolute',
					top: 150,
					height: 400,
					transform: `scale(${Math.abs(scaleUpLogo - scaleDownLogo)})`,
					filter: 'drop-shadow(0px 0px 15px #000000)',
					opacity: opacityUp - opacityDown,
				}}
			/>
		</AbsoluteFill>
	);
};
