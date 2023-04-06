import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
	title: string;
	style?: React.CSSProperties;
	delay?: number;
}> = ({title, style}) => {
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
				fontWeight: 800,
				fontSize: '32px',
				color: 'white',
				position: 'absolute',
				opacity: titleOpacity,
				textAlign: 'center',
				filter: `blur(${titleDeblur}px)`,
				textShadow: 'px 2px 2px #e95900',
				...style,
			}}
		>
			{title}
		</span>
	);
};
