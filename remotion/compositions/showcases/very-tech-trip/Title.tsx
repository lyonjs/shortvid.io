import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title as AtomTitle} from '../../../design/atoms/Title';

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
		<AtomTitle
			style={{
				fontSize: '32px',
				color: 'white',
				position: 'absolute',
				opacity: titleOpacity,
				textAlign: 'center',
				filter: `blur(${titleDeblur}px)`,
				textShadow: 'px 2px 2px #e95900',
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				'-webkit-line-clamp': '3',
				...style,
			}}
		>
			{title}
		</AtomTitle>
	);
};
