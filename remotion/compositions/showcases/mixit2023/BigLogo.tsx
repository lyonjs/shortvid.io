import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const BigLogo: React.FC = () => {
	const frame = useCurrentFrame();

	const deblur = interpolate(frame, [10, 30], [5, 0], {
		extrapolateRight: 'clamp',
	});
	const fadeOut = interpolate(frame, [40, 50], [1, 0], {
		extrapolateRight: 'clamp',
	});
	return (
		<Img
			src={staticFile('/images/conferences/mxt-icon--logo.svg')}
			width="80%"
			height="auto"
			style={{
				margin: '0 auto',
				filter: `blur(${deblur}px)`,
				opacity: fadeOut,
			}}
		/>
	);
};
