import React from 'react';
import {noise3D} from '@remotion/noise';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const OVERSCAN_MARGIN = 100;
const ROWS = 10;
const COLS = 15;

export const BackgroundCircleNoise: React.FC<{
	speed: number;
	circleRadius: number;
	maxOffset: number;
}> = ({speed, circleRadius, maxOffset}) => {
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();

	return (
		<svg width={width} height={height}>
			{new Array(COLS).fill(0).map((_, i) =>
				new Array(ROWS).fill(0).map((__, j) => {
					const x = i * ((width + OVERSCAN_MARGIN) / COLS);
					const y = j * ((height + OVERSCAN_MARGIN) / ROWS);
					const px = i / COLS;
					const py = j / ROWS;
					const dx = noise3D('x', px, py, frame * speed) * maxOffset;
					const dy = noise3D('y', px, py, frame * speed) * maxOffset;
					const opacity = interpolate(
						noise3D('opacity', i, j, frame * speed),
						[-1, 1],
						[0, 1]
					);

					const key = `${i}-${j}`;

					return (
						<circle
							key={key}
							cx={x + dx}
							cy={y + dy}
							r={circleRadius}
							fill="#DEDEDE"
							opacity={opacity}
						/>
					);
				})
			)}
		</svg>
	);
};
