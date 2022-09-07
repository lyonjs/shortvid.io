import {Img, interpolate, useCurrentFrame} from 'remotion';

export const SponsorLogo: React.FC<{sponsorLogo?: string}> = ({
	sponsorLogo,
}) => {
	const frame = useCurrentFrame();

	if (!sponsorLogo) {
		return null;
	}

	const sponsorOpacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<Img
			style={{
				opacity: sponsorOpacity,
				height: '400px',
				marginBottom: '100px',
			}}
			src={sponsorLogo}
		/>
	);
};
