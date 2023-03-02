import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const Title: React.FC<{
	title: string;
	style?: React.CSSProperties;
	delay?: number;
}> = ({title, style, delay = 0}) => {
	const frame = useCurrentFrame();

	const fromTop = interpolate(frame, [0, 20], [-100, 370], {
		easing: Easing.elastic(1.2),
		extrapolateRight: 'clamp',
	});

	const titleOpacity = interpolate(frame, [5, 15], [0, 1]);

	return (
		<span
			style={{
				fontWeight: 900,
				fontSize: '3rem',
				color: 'white',
				position: 'absolute',
				top: fromTop,
				width: '100%',
				padding: '0 95px',
				textAlign: 'center',
				textShadow: '`1px 1px 3px white`',
				opacity: titleOpacity,
				...style,
			}}
		>
			{title}
		</span>
	);
};
