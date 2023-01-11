import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const titleOpacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const titleDeblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<span
			style={{
				fontFamily: 'Noto Sans,sans-serif',
				fontWeight: 900,
				fontSize: '38px',
				color: 'white',
				position: 'absolute',
				bottom: '180px',
				width: '100%',
				textAlign: 'center',
				opacity: titleOpacity,
				filter: `blur(${titleDeblur}px)`,
			}}
		>
			{title}
		</span>
	);
};
