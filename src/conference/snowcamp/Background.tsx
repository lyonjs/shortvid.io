import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const Background = () => {
	const frame = useCurrentFrame();

	const blur = interpolate(frame, [0, 20], [0, 5]);

	return (
		<Img
			src={staticFile('/images/conferences/grenoble.jpg')}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				filter: `blur(${blur}px)`,
				transform: 'scale(1.2)',
			}}
		/>
	);
};
