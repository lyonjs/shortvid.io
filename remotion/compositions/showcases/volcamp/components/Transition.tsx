import {interpolate, useCurrentFrame} from 'remotion';

export const Transition = () => {
	const frame = useCurrentFrame();
	const transition = interpolate(frame, [0, 10, 30, 40], [-1100, 0, 0, 1100]);

	const commonBarStyle = {
		display: 'block',
		width: '100%',
	};

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				transform: `translateY(${transition}px)`,
				transition: 'transform 0.3 easeIn',
				zIndex: 20,
			}}
		>
			<span
				style={{
					height: 1000,
					background: '#FF6700',
					borderTop: '10px solid transparent',
					...commonBarStyle,
				}}
			/>
			<span
				style={{
					height: 790,
					background: '#FF4800',
					...commonBarStyle,
				}}
			/>
			<span
				style={{
					height: 980,
					background: '#E92700',
					...commonBarStyle,
				}}
			/>
			<span
				style={{
					height: 1300,
					background: '#FF6700',
					...commonBarStyle,
				}}
			/>
			<span
				style={{
					height: 720,
					background: '#FF4800',
					...commonBarStyle,
				}}
			/>
		</div>
	);
};
