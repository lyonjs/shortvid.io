import React from 'react';
import {IntroBackground} from './components/IntroBackground';
import {Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {FrontTrees} from './components/FrontTrees';
import {Grass} from './components/Grass';
import {BackTrees} from './components/BackTrees';
import {Ground} from './components/Ground';
import {FireCamp} from './components/FireCamp';
import {Tent} from './components/Tent';

export const Introduction = () => {
	const frame = useCurrentFrame();
	const startAnimationDelay = 20;

	const Zoom = interpolate(frame, [200, 330], [1, 500], {
		easing: Easing.bezier(0.7, 0.0, 0, 0.2),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				transform: `scale(${Zoom})`,
				transformOrigin: '819.5px 550px',
			}}
		>
			<Sequence durationInFrames={250}>
				<IntroBackground />
			</Sequence>
			<Sequence from={startAnimationDelay} durationInFrames={230}>
				<Grass />
			</Sequence>
			<Sequence from={startAnimationDelay} durationInFrames={230}>
				<BackTrees />
			</Sequence>
			<Sequence from={30} durationInFrames={220}>
				<FrontTrees />
			</Sequence>
			<Sequence from={50} durationInFrames={190}>
				<Ground />
			</Sequence>
			<Sequence from={50} durationInFrames={200}>
				<FireCamp />
			</Sequence>
			<Sequence from={30} durationInFrames={300}>
				<Tent />
			</Sequence>
		</div>
	);
};
