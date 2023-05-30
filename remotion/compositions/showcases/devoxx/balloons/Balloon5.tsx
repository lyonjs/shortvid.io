import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Balloon5: React.FC = () => {
	const frame = useCurrentFrame();

	const moveRightFirst = interpolate(frame, [0, 200], [200, -300], {
		extrapolateRight: 'clamp',
	});

	const moveRightSecond = interpolate(frame, [0, 200], [400, -300], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<Img
				src={staticFile('images/showcases/devoxx/baloon5.png')}
				style={{
					position: 'absolute',
					right: moveRightFirst,
					bottom: 100,
					width: '20%',
					filter: 'blur(1px)',
				}}
			/>
			<Img
				src={staticFile('images/showcases/devoxx/baloon5.png')}
				style={{
					position: 'absolute',
					right: moveRightSecond,
					bottom: 250,
					width: '10%',
					filter: 'blur(1.5px)',
				}}
			/>
		</>
	);
};
