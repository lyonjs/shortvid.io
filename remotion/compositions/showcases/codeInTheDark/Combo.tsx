import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import _ from 'lodash';
import './combo.css';
import {useState, useEffect, useRef} from 'react';

export const Combo: React.FC = () => {
	const frame = useCurrentFrame();
	const outputRange = _.range(0, 51, 1);
	const inputRange = _.range(0, 252, 5);

	const [count, setCount] = useState(0);
	const prevCountRef = useRef<number>(0);

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
		if (count !== prevCountRef.current) {
			const spanElement = document.getElementById('count-span');
			spanElement?.classList.remove('animate-grow');
			spanElement?.offsetWidth; // Trigger reflow to restart the animation
			spanElement?.classList.add('animate-grow');

			prevCountRef.current = count;
		}
	}, [count]);

	return (
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
					fontFamily: 'sans-serif',
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
				<span
					id="count-span"
					style={{
						color: '#4EFFA1',
						fontSize: '10rem',
					}}
				>
					{count}
				</span>
			</div>
		</AbsoluteFill>
	);
};
