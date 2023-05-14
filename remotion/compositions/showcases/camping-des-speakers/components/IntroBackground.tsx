import React from 'react';
import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

export const IntroBackground = () => {
	return (
		<>
			<Sequence name="Sky" durationInFrames={250}>
				<AbsoluteFill
					style={{
						backgroundColor: '#82B6FA',
					}}
				></AbsoluteFill>
			</Sequence>
			<Sequence name="Logo" durationInFrames={50}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Img
						src={staticFile(
							'images/conferences/campingDesSpeakers/cds_logo.png'
						)}
					/>
				</AbsoluteFill>
			</Sequence>
		</>
	);
};
