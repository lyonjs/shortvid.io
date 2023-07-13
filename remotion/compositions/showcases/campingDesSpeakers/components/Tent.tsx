import React from 'react';

import {staticFile, Video} from 'remotion';

export const Tent = () => {
	return (
		<Video
			src={staticFile('images/showcases/campingDesSpeakers/tent.webm')}
			style={{
				width: 700,
				position: 'absolute',
				bottom: 50,
				right: 50,
			}}
		/>
	);
};
