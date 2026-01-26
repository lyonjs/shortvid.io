import {AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const Spotlight: React.FC<{sponsorLogo: string}> = ({sponsorLogo}) => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const moveSpotlight = interpolate(frame, [50, 120], [150, width - 150], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				src={sponsorLogo}
				alt="Sponsor logo"
				style={{
					transform: `translateY(250px)`,
					width: 1000,
				}}
			/>
			<div
				style={{
					position: 'relative',
					width: '100%',
					height: 400,
					background: `radial-gradient(circle at ${moveSpotlight}px 50%, transparent, #0c0c0d 300px, #0c0c0d)`,
				}}
			/>
		</AbsoluteFill>
	);
};
