import React from 'react';
import {Img, staticFile} from 'remotion';

export const RobotRun: React.FC = () => {
	return (
		<Img
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
