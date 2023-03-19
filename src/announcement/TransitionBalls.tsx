import {
	Easing,
	interpolate,
	random,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {
	BALL_DISTANCE,
	BALL_LIFE_SPAN_IN_SECONDS,
	BALL_MAX_DIAMETER,
	BALL_MIN_DIAMETER,
	BALLS_PER_SECOND,
	COLOR,
	START_OFFSET,
} from './constants';

const randomRange = (
	seed: string | number | null,
	min: number,
	max: number
) => {
	return Math.round(random(seed) * (max - min) + min);
};

interface LargeBlobPoint {
	x: number;
	y: number;
}

interface BallProps {
	seed: number;
	frame: number;
	x: number;
	y: number;
}

const LargeBlob = ({x, y}: LargeBlobPoint) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const LARGE_BLOB_RADIUS = interpolate(frame, [0, durationInFrames], [0, 40], {
		easing: Easing.bezier(1, -0.2, 0.5, 1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	// Create a larger space to help Chrome not clip the effect
	const padding = BALL_DISTANCE * 10.1;
	return (
		<div
			style={{
				padding: `${padding}px`,
				position: 'absolute',
				top: `${y}px`,
				left: `${x}px`,
				transform: `translateX(-${padding}px) translateY(-${padding}px)`,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: `translateX(-${LARGE_BLOB_RADIUS}px) translateY(-${LARGE_BLOB_RADIUS}px)`,
					width: `${LARGE_BLOB_RADIUS * 2}px`,
					height: `${LARGE_BLOB_RADIUS * 2}px`,
					borderRadius: `${LARGE_BLOB_RADIUS}px`,
					background: COLOR,
				}}
			/>
		</div>
	);
};

const Ball = ({seed, frame, x, y}: BallProps) => {
	const {durationInFrames} = useVideoConfig();
	const diameter = randomRange(seed, BALL_MIN_DIAMETER, BALL_MAX_DIAMETER);
	const radius = diameter / 2;

	const midX = x - radius;
	const midY = y - radius;

	const curX = interpolate(
		frame,
		[0, BALL_LIFE_SPAN_IN_SECONDS * 30],
		[0, randomRange(seed * 1.1, -BALL_DISTANCE, BALL_DISTANCE)],
		{
			easing: Easing.bezier(0.8, 0.22, 0.4, 0.65),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const curY = interpolate(
		frame,
		[0, BALL_LIFE_SPAN_IN_SECONDS * 30],
		// Ensure the seed for x and y are different
		[0, randomRange(seed * 1.2, -BALL_DISTANCE, BALL_DISTANCE)],
		{
			easing: Easing.bezier(0.8, 0.22, 0.4, 0.65),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const scale = interpolate(
		frame,
		[durationInFrames / 2, durationInFrames],
		[1, 300],
		{
			easing: Easing.bezier(0.8, 0.22, 0.25, 0.45),
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				width: `${diameter}px`,
				height: `${diameter}px`,
				borderRadius: `${diameter}px`,
				background: COLOR,
				position: 'absolute',
				top: `${midY}px`,
				left: `${midX}px`,
				transform: `translate3d(${curX}px, ${curY}px, 0) scale(${scale})`,
			}}
		/>
	);
};

export const TransitionBalls = () => {
	const frame = useCurrentFrame();
	const {width, height, durationInFrames} = useVideoConfig();

	const centerX = width / 2;
	const centerY = height / 2;

	const rand = random(durationInFrames);

	const ballCount =
		Math.round((durationInFrames / 30) * BALLS_PER_SECOND) +
		Math.floor(rand * 5);

	const balls = [];
	for (let i = 0; i < ballCount; i++) {
		balls.push({
			start: randomRange(
				i + rand,
				-START_OFFSET,
				durationInFrames - START_OFFSET / 2
			),
		});
	}

	const opacity = interpolate(frame, [0, 20], [0, 1]);

	return (
		<div
			style={{
				flex: 1,
				position: 'relative',
				backgroundColor: 'transparent',
				opacity,
			}}
		>
			<div
				style={{
					// This is where the magic happens
					filter: "url('#goo')",
				}}
			>
				<LargeBlob x={centerX} y={centerY} />
				{balls.map(({start}, i) => (
					<Sequence
						key={i}
						name={`Ball ${i}`}
						from={start}
						durationInFrames={BALL_LIFE_SPAN_IN_SECONDS * 30}
					>
						<Ball
							key={i}
							seed={i * rand}
							frame={frame - start}
							x={centerX}
							y={centerY}
						/>
					</Sequence>
				))}
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="12"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};
