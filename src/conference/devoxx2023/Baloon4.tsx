import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Baloon4: React.FC = () => {
	const frame = useCurrentFrame();

	const moveUp = interpolate(frame, [0, 500], [0, 800], {
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/conferences/devoxx/baloon4.png')}
			style={{
				position: 'absolute',
				left: 750,
				bottom: moveUp,
				width: '10%',
				filter: 'blur(1.5px)',
			}}
		/>
	);
};
