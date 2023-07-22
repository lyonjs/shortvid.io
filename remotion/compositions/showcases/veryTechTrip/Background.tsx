import {CSSProperties} from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const Rect: React.FC<{style?: CSSProperties}> = ({style}) => {
	return (
		<div
			style={{
				borderRadius: '2rem',
				border: '1px solid white',
				filter: 'blur(3px)',
				...style,
			}}
		/>
	);
};

const Fill: React.FC<{style?: CSSProperties}> = ({style}) => {
	return (
		<div
			style={{
				backgroundColor: '#3f4494',
				borderRadius: '2rem',
				filter: 'blur(4px)',
				...style,
			}}
		/>
	);
};
export const Background = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const squareUp = interpolate(frame, [0, durationInFrames], [120, 20]);
	const rectangleToLeft = interpolate(
		frame,
		[0, durationInFrames],
		[-200, -20]
	);
	const rectangleToRight = interpolate(
		frame,
		[0, durationInFrames],
		[-100, -60]
	);
	const enlargingPill = interpolate(frame, [0, durationInFrames], [120, 320]);

	return (
		<AbsoluteFill>
			<Fill
				style={{
					position: 'absolute',
					top: 160,
					left: 24,
					width: enlargingPill,
					height: 48,
					filter: 'blur(3px)',
				}}
			/>
			<div
				style={{
					display: 'flex',
					position: 'absolute',
					right: 30,
					top: 200,
					gap: 20,
					filter: 'blur(3px)',
				}}
			>
				<Fill
					style={{
						width: 50,
						height: 160,
					}}
				/>
				<Fill
					style={{
						width: 50,
						height: 160,
					}}
				/>
				<Fill
					style={{
						width: 50,
						height: 160,
					}}
				/>
			</div>
			<Rect
				style={{
					position: 'absolute',
					right: rectangleToLeft,
					top: 30,
					width: 300,
					height: 150,
				}}
			/>
			<Rect
				style={{
					position: 'absolute',
					left: rectangleToRight,
					bottom: 240,
					width: 300,
					height: 200,
				}}
			/>
			<Rect
				style={{
					position: 'absolute',
					right: 120,
					top: squareUp,
					width: 200,
					height: 200,
				}}
			/>
		</AbsoluteFill>
	);
};
