import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Trees = () => {
	const frame = useCurrentFrame();
	const treesWidth = 1000;
	const backgroundTreesWidth = 400;

	const pictureSlide = interpolate(frame, [0, 20], [-treesWidth, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	const pictureSlideRight = interpolate(frame, [0, 20], [-treesWidth, -60], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	const pictureSlideBack = interpolate(frame, [270, 290], [0, -treesWidth], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<>
			<Img
				src={staticFile(
					'/images/showcases/devfestNantes/2024/backgroundTrees.png',
				)}
				width={backgroundTreesWidth}
				height="70%"
				style={{
					position: 'absolute',
					right: pictureSlideRight + pictureSlideBack,
					transform: 'scaleX(-1)',
					rotate: '-30deg',
					bottom: -80,
				}}
			/>
			<Img
				src={staticFile('/images/showcases/devfestNantes/2024/trees.png')}
				width={treesWidth}
				height="100%"
				style={{
					position: 'absolute',
					left: pictureSlide + pictureSlideBack,
					bottom: 0,
				}}
			/>
		</>
	);
};
