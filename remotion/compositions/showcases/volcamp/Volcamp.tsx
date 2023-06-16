import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import {Volcano} from './Volcano';

export const Volcamp = () => {
	const frame = useCurrentFrame();

	const shuffle = Math.sin(frame * 1) * 6;

	return (
		<AbsoluteFill>
			<Sequence name="eruption" style={{background: '#4F993F'}}>
				<div
					style={{
						width: '100%',
						height: '100%',
						transform: `translateX(${shuffle}px)`,
					}}
				>
					<Volcano />
				</div>
			</Sequence>
			<Sequence name="Transition">
				<div
					style={{
						width: '100%',
						height: '100%',
						transform: `translateX(${shuffle}px)`,
					}}
				></div>
			</Sequence>
		</AbsoluteFill>
	);
};
