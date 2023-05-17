import {
	AbsoluteFill,
	interpolate,
	Loop,
	Sequence,
	useCurrentFrame,
} from 'remotion';
import {AnimatedCounter} from './AnimatedCounter';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {loadLocalFont} from '../../../../src/app/utils/loadFont';

export const Combo: React.FC = () => {
	const frame = useCurrentFrame();
	const [count, setCount] = useState(0);
	const MaxCountValue = 50 + 1;
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

	useEffect(() => {
		loadLocalFont('PressStart2P', '/font/PressStart2P-Regular.ttf', 'truetype');
	}, []);

	return (
		<AbsoluteFill
			style={{
				alignItems: 'flex-end',
			}}
		>
			<div
				style={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: '20px 80px',
					width: 150,
				}}
			>
				<p
					style={{
						color: 'white',
						fontSize: '2.5rem',
						margin: 0,
						fontFamily: 'PressStart2P',
					}}
				>
					Combo
				</p>
				<Loop
					durationInFrames={loopTimeDuration}
					layout="absolute-fill"
					style={{
						paddingTop: 80,
						left: -70,
						width: 300,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<AnimatedCounter count={count} maxCountValue={MaxCountValue} />
				</Loop>
			</div>
		</AbsoluteFill>
	);
};
