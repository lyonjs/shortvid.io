import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Dino = () => {
	const frame = useCurrentFrame();
	const logoWidth = 400;

	const pictureDrop = interpolate(frame, [0, 20], [-logoWidth, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestNantes/dino.png')}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				left: pictureDrop,
				bottom: 0,
			}}
		/>
	);
};
