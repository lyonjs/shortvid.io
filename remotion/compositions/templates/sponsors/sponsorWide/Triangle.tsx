import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

type TriangleProps = {
	color: string;
	position: 'top' | 'bottom';
	origin: 'left bottom' | 'right top';
};

export const Triangle = ({color, position, origin}: TriangleProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const angle = spring({
		frame,
		fps,
		from: 0,
		to: 20,
	});

	const isTop = position === 'top';

	return (
		<div
			style={{
				backgroundColor: color,
				width: '500%',
				height: '100%',
				position: 'absolute',
				[isTop ? 'top' : 'bottom']: '-100%',
				[isTop ? 'left' : 'right']: 0,
				transform: `rotate(${angle}deg)`,
				transformOrigin: origin,
			}}
		/>
	);
};
