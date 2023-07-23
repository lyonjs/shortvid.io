import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureDrop = spring({
		frame,
		fps,
		from: -200,
		to: 20,
		durationInFrames: 60,
	});

	return (
		<Img
			src={staticFile('/images/showcases/lyonjs/lyonjsSquaredLogo.png')}
			width={150}
			height="auto"
			style={{
				zIndex: 2,
				position: 'absolute',
				top: pictureDrop,
				left: 80,
			}}
		/>
	);
};
