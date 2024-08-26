import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Dino = () => {
	const frame = useCurrentFrame();
	const logoWidth = 400;

	const pictureSlide = interpolate(frame, [0, 20], [-logoWidth, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	const pictureSlideBack = interpolate(frame, [270, 290], [0, -logoWidth], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Img
			src={staticFile('/images/showcases/devfestNantes/2023/dino.png')}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				left: pictureSlide + pictureSlideBack,
				bottom: 0,
			}}
		/>
	);
};
