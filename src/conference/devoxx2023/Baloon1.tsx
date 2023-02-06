import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Baloon1: React.FC = () => {
	const frame = useCurrentFrame();

	const moveDown = interpolate(frame, [0, 600], [100, -300], {
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/conferences/devoxx/baloon1.png')}
			style={{
				position: 'absolute',
				left: 200,
				bottom: moveDown,
				width: '20%',
				filter: 'blur(1px)',
			}}
		/>
	);
};
