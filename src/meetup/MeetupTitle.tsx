import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from '../components/Title';
import {LyonJSLogo} from '../components/LyonJSLogo';

export const MeetupTitle: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const scaleUpLogo = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});
	const scaleDownLogo = spring({
		frame: frame - 50,
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

	const fromBottom = spring({
		frame,
		from: 0,
		to: 300,
		fps,
		durationInFrames: 30,
	});
	const toBottom = spring({
		frame: frame - 50,
		from: 0,
		to: 500,
		fps,
		durationInFrames: 40,
	});

	const opacityUp = spring({frame, from: 0, to: 1, fps, durationInFrames: 50});
	const opacityDown = spring({
		frame: frame - 50,
		from: 0,
		to: 0.5,
		fps,
		durationInFrames: 70,
	});

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<LyonJSLogo
				style={{
					position: 'absolute',
					top: 150,
					height: 400,
					transform: `scale(${Math.abs(scaleUpLogo - scaleDownLogo)})`,
					filter: 'drop-shadow(0px 0px 15px #000000)',
					opacity: opacityUp - opacityDown,
				}}
			/>
			<Title
				style={{
					color: 'white',
					position: 'absolute',
					bottom: fromBottom - toBottom,
					fontSize: 70,
					width,
					textAlign: 'center',
				}}
			>
				{title}
			</Title>
		</AbsoluteFill>
	);
};
