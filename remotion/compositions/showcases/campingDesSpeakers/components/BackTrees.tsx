import React from 'react';

import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const BackTrees = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const BackTreeAppear = spring({
		frame: frame,
		from: -700,
		to: -250,
		fps,
		durationInFrames: 50,
		config: {
			stiffness: 50,
		},
	});

	return (
		<Img
			src={staticFile('images/showcases/campingDesSpeakers/backTrees.svg')}
			style={{
				position: 'absolute',
				top: BackTreeAppear,
				width: '100%',
			}}
		/>
	);
};
