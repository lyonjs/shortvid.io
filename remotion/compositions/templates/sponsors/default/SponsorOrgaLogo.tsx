import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {EventLogo} from '../../../../design/atoms/EventLogo';

export const SponsorOrgaLogo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const logoAppear = spring({
		frame,
		fps,
		from: -400,
		to: 50,
		durationInFrames: 30,
	});
	const logoDeblur = interpolate(frame, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<EventLogo
			style={{
				position: 'absolute',
				bottom: 60,
				right: logoAppear,
				height: 100,
				width: 'auto',
				filter: `blur(${logoDeblur}px)`,
			}}
		/>
	);
};
