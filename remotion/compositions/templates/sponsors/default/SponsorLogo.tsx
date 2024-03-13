import React from 'react';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type SponsorLogoProps = {
	sponsorLogo?: string;
	style?: React.CSSProperties;
};

export const SponsorLogo = ({sponsorLogo, style}: SponsorLogoProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleUpLogo = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 30,
	});

	const opacityUp = spring({frame, from: 0, to: 1, fps, durationInFrames: 50});

	if (!sponsorLogo) return null;

	return (
		<Img
			style={{
				position: 'absolute',
				top: 300,
				maxHeight: '450px',
				maxWidth: '60%',
				opacity: opacityUp,
				filter: 'drop-shadow(0px 0px 15px #000000)',
				transform: `scale(${Math.abs(scaleUpLogo)})`,
				...style,
			}}
			src={sponsorLogo}
		/>
	);
};
