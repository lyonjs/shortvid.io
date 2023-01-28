import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const BackgroundPicture: React.FC<{picture: string}> = ({picture}) => {
	const frame = useCurrentFrame();

	const blur = interpolate(frame, [0, 20], [5, 0], {extrapolateRight: 'clamp'});
	const fadeout = interpolate(frame, [40, 50], [1, 0], {
		extrapolateLeft: 'clamp',
	});

	return (
		<Img
			src={picture}
			style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				objectFit: 'cover',
				width: '100%',
				height: '100%',
				filter: `blur(${blur}px)`,
				opacity: fadeout,
			}}
		/>
	);
};
