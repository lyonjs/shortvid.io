import React from 'react';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {Img, staticFile} from 'remotion';

export const Background = () => {
	return (
		<div>
			<BackgroundFiller
				imageUrl={staticFile('/images/event/CITD-Background.png')}
			/>
			<Img
				src={staticFile('/images/event/CITD-Logo.png')}
				style={{
					position: 'absolute',
					width: '40%',
					left: '50%',
					bottom: 80,
					transform: 'translateX(-50%)',
					opacity: 0.6,
				}}
			/>
		</div>
	);
};
