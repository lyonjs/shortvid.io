import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Balloon3: React.FC = () => {
	const frame = useCurrentFrame();

	const moveUp = interpolate(frame, [0, 1000], [0, 800], {
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/showcases/devoxx/baloon3.png')}
			style={{
				position: 'absolute',
				left: 600,
				bottom: moveUp,
				width: '20%',
			}}
		/>
	);
};
