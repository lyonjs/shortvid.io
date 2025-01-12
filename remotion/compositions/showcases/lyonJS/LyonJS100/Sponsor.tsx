import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {z} from 'zod';

import {SponsorLabel} from './Sponsor/SponsorLabel';
import {SponsorLogo} from './Sponsor/SponsorLogo';
import {AnimatedScene} from './AnimatedScene';

export const LyonJS100Sponsor = z.object({
	label: z.string().optional(),
	labelFontSize: z.number().optional(),
	sponsorLogoUrl: z.string().optional(),
	sponsorLogoWidth: z.number().optional(),
});

export const Sponsor: React.FC<z.infer<typeof LyonJS100Sponsor>> = ({
	label,
	labelFontSize,
	sponsorLogoUrl,
	sponsorLogoWidth,
}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const startFrame = 170;

	const scaleUpAnimation = spring({
		frame: frame - startFrame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 80,
	});

	const opacityAnimation = spring({
		frame: frame - startFrame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	return (
		<AnimatedScene>
			<SponsorLogo
				sponsorLogoUrl={sponsorLogoUrl}
				opacityAnimation={opacityAnimation}
				scaleUpAnimation={scaleUpAnimation}
				sponsorLogoWidth={sponsorLogoWidth}
			/>
			<SponsorLabel
				label={label}
				opacityAnimation={opacityAnimation}
				scaleUpAnimation={scaleUpAnimation}
				labelFontSize={labelFontSize}
			/>
		</AnimatedScene>
	);
};
