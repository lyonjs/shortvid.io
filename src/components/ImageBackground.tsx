import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ImageBackground: React.FC<{
	src?: string;
	animated?: boolean;
	animationDuration?: number;
}> = ({
	src = staticFile('/defaultBackgroundImage.jpeg'),
	animated = false,
	animationDuration = 30,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DURATION = animationDuration;
	const ANIMATION_DELAY = ANIMATION_DURATION / 2;
	let blur = 0;
	let greyscale = 0;

	if (animated) {
		blur = spring({
			frame: frame - ANIMATION_DELAY,
			fps,
			from: 0,
			to: 5,
			durationInFrames: ANIMATION_DURATION,
		});
		greyscale = spring({
			frame: frame - ANIMATION_DELAY,
			fps,
			from: 0,
			to: 5,
			durationInFrames: ANIMATION_DURATION,
		});
	}

	return (
		<>
			<Img
				src={src}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transform: 'scale(1.1)',
					filter: `grayscale(${greyscale}) blur(${blur}px) `,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundImage:
						'linear-gradient(to top, rgba(12,12,12,1), rgba(255,0,0,0))',
				}}
			/>
		</>
	);
};
