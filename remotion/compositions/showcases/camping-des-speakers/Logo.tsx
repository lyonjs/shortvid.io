import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const Logo = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#82B6FA',
			}}
		>
			<Img
				src={staticFile('images/conferences/campingDesSpeakers/cds_logo.png')}
			/>
		</AbsoluteFill>
	);
};
