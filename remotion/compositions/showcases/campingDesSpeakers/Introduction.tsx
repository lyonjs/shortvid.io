import {Audio, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';

import {BackTrees} from './components/BackTrees';
import {FireCamp} from './components/FireCamp';
import {FrontTrees} from './components/FrontTrees';
import {Grass} from './components/Grass';
import {Ground} from './components/Ground';
import {IntroBackground} from './components/IntroBackground';
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
				transformOrigin: '899.6px 550px',
			}}
		>
			<Audio
				src={staticFile('sounds/birds.mp3')}
				startFrom={140}
				volume={(f) =>
					interpolate(f, [0, 200, 250], [0.5, 0.5, 0], {
						extrapolateRight: 'clamp',
					})
				}
			/>
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
