import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Balloon2: React.FC = () => {
	const frame = useCurrentFrame();

	const moveUp = interpolate(frame, [0, 600], [300, 800], {
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			src={staticFile('images/conferences/devoxx/baloon2.png')}
			style={{
				position: 'absolute',
				left: 500,
				bottom: moveUp,
				width: '10%',
				filter: 'blur(1.5px)',
			}}
		/>
	);
};
