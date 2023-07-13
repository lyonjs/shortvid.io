import React from 'react';

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {IconWithCaption} from '../../../../design/molecules/IconWithCaption';

export const BrandedLocation: React.FC<{
	location: string;
}> = ({location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame,
		fps,
		from: -100,
		to: 50,
		durationInFrames: 30,
	});

	return (
		<IconWithCaption
			iconifyId="material-symbols:location-on-rounded"
			caption={location}
			style={{
				position: 'absolute',
				height: 'max-content',
				width: '50%',
				right: 0,
				color: 'white',
				fontWeight: 'bold',
				bottom: slideIn,
			}}
			iconStyle={{
				fontSize: '4.5rem',
				color: 'white',
			}}
		/>
	);
};
