import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const SweepFirefly: React.FC<{
	/** vertical position in px */
	y: number;
	/** circle size in px */
	size?: number;
	/** total sweep duration in frames */
	durationInFrames?: number;
	/** start x (can be negative) */
	startX?: number;
	/** end x (can be width + extra) */
	endX?: number;
	/** additional opacity multiplier 0..1 */
	opacity?: number;
    /** 'ltr' left-to-right or 'rtl' right-to-left */
    direction?: 'ltr' | 'rtl';
    /** vertical drift amplitude in px */
    driftAmp?: number;
    /** vertical drift frequency multiplier */
    driftFreq?: number;
    /** flicker amplitude 0..1 */
    flickerAmp?: number;
}> = ({
	y,
	size = 22,
	durationInFrames = 220,
	startX,
	endX,
	opacity = 0.8,
    direction = 'ltr',
    driftAmp = 8,
    driftFreq = 1.5,
    flickerAmp = 0.15,
}) => {
	const frame = useCurrentFrame();
	const {width, fps} = useVideoConfig();

	const defaultStart = -size * 2;
	const defaultEnd = width + size * 2;
	const start = startX ?? (direction === 'ltr' ? defaultStart : defaultEnd);
	const end = endX ?? (direction === 'ltr' ? defaultEnd : defaultStart);

	const progressRaw = Math.min(1, Math.max(0, frame / durationInFrames));
	// smoothstep ease
	const p = progressRaw * progressRaw * (3 - 2 * progressRaw);
	const x = start + (end - start) * p;

	// subtle vertical drift and flicker
	const t = frame / fps;
	const drift = Math.sin(t * driftFreq) * driftAmp;
	const flicker = 0.85 + flickerAmp * Math.sin(t * 3.2);

	const blurPx = Math.max(2, Math.floor(size * 0.15));

	return (
		<AbsoluteFill style={{pointerEvents: 'none'}}>
			<div
				style={{
					position: 'absolute',
					left: x,
					top: y + drift,
					width: size,
					height: size,
					borderRadius: '50%',
					filter: `blur(${blurPx}px)`,
					opacity: flicker * opacity,
				}}
			>
				{/* Aura layer */}
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						borderRadius: '50%',
						boxShadow: `0 0 ${size * 9}px ${size * 2.5}px rgba(0,219,255,0.22)`,
					}}
				/>
				{/* Core with cyan border */}
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						borderRadius: '50%',
						backgroundColor: 'rgba(228,244,246,1)',
						border: `${Math.max(1, Math.floor(size * 0.1))}px solid rgba(0,219,255,0.6)`,
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};


