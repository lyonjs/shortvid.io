import React from 'react';
import {loadFont} from '@remotion/google-fonts/Arvo';
import {
	Easing,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

import {AnimatedScene} from './AnimatedScene';

const {fontFamily} = loadFont();

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

	const scaleUpLogo = spring({
		frame: frame - startFrame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 80,
	});

	const opacityUp = spring({
		frame: frame - startFrame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 50,
	});

	return (
		<AnimatedScene>
			{sponsorLogoUrl ? (
				<Img
					src={sponsorLogoUrl}
					alt="Sponsor Logo"
					style={{
						opacity: opacityUp,
						transform: `scale(${scaleUpLogo})`,
						margin: 'auto',
						width: sponsorLogoWidth ?? 900,
						zIndex: 100,
					}}
				/>
			) : null}
			{label ? (
				<p
					style={{
						fontFamily,
						opacity: opacityUp,
						transform: `scale(${scaleUpLogo})`,
						color: '#222425',
						marginTop: 20,
						marginBottom: 80,
						fontSize: labelFontSize ?? 40,
						fontWeight: 'bolder',
						textAlign: 'center',
						textWrap: 'balance',
					}}
				>
					{label}
				</p>
			) : null}
		</AnimatedScene>
	);
};
