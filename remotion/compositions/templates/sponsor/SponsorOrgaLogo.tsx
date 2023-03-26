import React from 'react';
import {EventLogo} from '../../../design/atoms/EventLogo';
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
		<EventLogo
			style={{
				position: 'absolute',
				bottom: 60,
				right: lyonJSLogoAppear,
				height: 100,
				width: 'auto',
				filter: `blur(${lyonJSLogoDeblur}px)`,
			}}
		/>
	);
};
