import {AbsoluteFill, interpolate, Loop, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/VT323';
import {AnimatedCounter} from './AnimatedCounter';
import {useEffect, useState} from 'react';
import _ from 'lodash';

const {fontFamily} = loadFont();

export const Combo: React.FC = () => {
	const frame = useCurrentFrame();
	const [count, setCount] = useState(0);
	const MaxCountValue = 30 + 1;
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
		<Loop durationInFrames={loopTimeDuration}>
			<AbsoluteFill
				style={{
					alignItems: 'flex-end',
				}}
			>
				<div
					style={{
						color: 'red',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '20px 80px',
						width: 150,
						fontFamily: `${fontFamily}, sans-serif`,
					}}
				>
					<p
						style={{
							color: 'white',
							fontSize: '2rem',
							margin: 0,
						}}
					>
						Combo
					</p>

					<AnimatedCounter count={count} />
				</div>
			</AbsoluteFill>
		</Loop>
	);
};
