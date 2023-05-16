import {staticFile, Video} from 'remotion';
import React from 'react';

export const Tent = () => {
	return (
		<Video
			src={staticFile('images/conferences/campingDesSpeakers/tent.webm')}
			style={{
				width: 700,
				position: 'absolute',
				bottom: 50,
				right: 50,
			}}
		/>
	);
};
