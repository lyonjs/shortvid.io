import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Android = () => {
	const frame = useCurrentFrame();
	const logoWidth = 200;

	const fall = interpolate(frame, [0, 200], [-100, 250], {
		extrapolateRight: 'clamp',
	});
	const rotate = interpolate(frame, [0, 50, 150, 200], [-45, 45, -45, 45], {
		extrapolateRight: 'clamp',
		easing: Easing.inOut(Easing.sin),
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestNantes/android.png')}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				right: 100,
				top: fall,
				transform: `rotate(${rotate}deg)`,
			}}
		/>
	);
};
