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
	const logoWidth = 250;

	const pictureDrop = spring({
		frame,
		fps,
		from: -logoWidth,
		to: 30,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile(
				'/images/showcases/devfestNantes/logo-devfest-mgm_transparent.svg',
			)}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				right: pictureDrop,
				top: 20,
			}}
		/>
	);
};
