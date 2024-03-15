import React from 'react';
import {staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const RobotRun: React.FC = () => {
	return (
		<img
			src={staticFile('/images/showcases/devoxx/robotRun.png')}
			alt={'Robot Run'}
			style={{
				position: 'absolute',
				right: '1rem',
				bottom: '-2rem',
			}}
		/>
	);
};
