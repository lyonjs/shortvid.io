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
		to: 50,
		durationInFrames: 30,
	});

	return (
		<Img
			src={staticFile('images/showcases/alpescraft/alpescraftLogo.png')}
			width={300}
			height="auto"
			style={{
				position: 'absolute',
				top: pictureDrop,
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		/>
	);
};
