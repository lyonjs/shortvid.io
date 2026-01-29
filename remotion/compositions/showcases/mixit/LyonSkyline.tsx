import {Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const LyonSkyline = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const slide = interpolate(frame, [0, durationInFrames - 40], [-10, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<Img
			src={staticFile('/images/showcases/mixit/skyline.svg')}
			width="150%"
			height="auto"
			style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				transform: `translateX(${slide}%)`,
			}}
		/>
	);
};
