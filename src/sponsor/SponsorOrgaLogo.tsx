import React from 'react';
import {LyonJSLogo} from '../components/LyonJSLogo';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SponsorOrgaLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const lyonJSLogoAppear = spring({
		frame,
		fps,
		from: -400,
		to: 50,
		durationInFrames: 30,
	});
	const lyonJSLogoDeblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<LyonJSLogo
			style={{
				position: 'absolute',
				top: 60,
				right: lyonJSLogoAppear,
				width: 'auto',
				height: '300px',
				filter: `blur(${lyonJSLogoDeblur}px)`,
			}}
		/>
	);
};
