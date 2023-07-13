import React, {useEffect, useState} from 'react';

import _ from 'lodash';
import {interpolate, Loop, useCurrentFrame} from 'remotion';

import {AnimatedCounter} from './AnimatedCounter';

export const Combo: React.FC = () => {
	const frame = useCurrentFrame();
	const [count, setCount] = useState(0);
	const MaxCountValue = 51;
	const loopTimeDuration = 5;

	const inputRange = _.range(
		0,
		MaxCountValue * loopTimeDuration,
		loopTimeDuration
	);
	const outputRange = _.range(0, MaxCountValue, 1);

	useEffect(() => {
		setCount(
			Math.floor(
				interpolate(frame, inputRange, outputRange, {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
				})
			)
		);
	}, [frame, inputRange, outputRange]);

	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				top: 50,
				right: 80,
			}}
		>
			<span
				style={{
					color: 'white',
					fontSize: '2rem',
					margin: 0,
					fontFamily: 'PressStart2P',
				}}
			>
				Combo
			</span>
			<Loop
				durationInFrames={loopTimeDuration}
				style={{
					marginTop: 80,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<AnimatedCounter count={count} maxCountValue={MaxCountValue} />
			</Loop>
		</div>
	);
};
