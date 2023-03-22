import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {LeftBanner} from './banner/leftBanner';
import {RightBanner} from './banner/rightBanner';
import {NameBanner} from './banner/nameBanner';

export const ExpertName: React.FC<{expertName: string}> = ({expertName}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideIn = spring({
		frame: frame - 60,
		from: -150,
		to: 30,
		fps,
		durationInFrames: 60,
	});

	return (
		<>
			<LeftBanner slideInValue={slideIn} />
			<NameBanner name={expertName} />
			<RightBanner slideInValue={slideIn} />
		</>
	);
};
