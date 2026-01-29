import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

type FirefliesProps = {
	count?: number;
	seed?: number;
	/** 0..1 - overall opacity multiplier */
	opacity?: number;
};

const pseudoRandom = (n: number) => {
	const x = Math.sin(n) * 10000;
	return x - Math.floor(x);
};

export const Fireflies: React.FC<FirefliesProps> = ({count = 14, seed = 42, opacity = 0.9}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();

	const elements = new Array(count).fill(null).map((_, i) => {
		const id = i + seed * 97;
		const baseX = pseudoRandom(id) * width;
		const baseY = pseudoRandom(id + 1) * height;
		const ampX = 40 + pseudoRandom(id + 2) * 120;
		const ampY = 30 + pseudoRandom(id + 3) * 90;

		// Independent randomness for depth-like feel
		const size = 2 + pseudoRandom(id + 6) * 6; // 2..8px
		const speed = 0.15 + pseudoRandom(id + 4) * 1.1; // 0.15..1.25
		const baseOpacity = 0.4 + pseudoRandom(id + 8) * 0.6; // 0.4..1.0
		const blur = pseudoRandom(id + 9) * 1.8; // 0..1.8px

		const phase = pseudoRandom(id + 5) * Math.PI * 2;
		const t = (frame / fps) * speed;
		const x = baseX + Math.sin(t + phase) * ampX;
		const y = baseY + Math.cos(t * 1.2 + phase) * ampY;

		// Randomized flicker amplitude per particle
		const flickerAmp = 0.15 + pseudoRandom(id + 10) * 0.25; // 0.15..0.4
		const flicker = 0.7 + flickerAmp * Math.sin(t * 2 + phase * 1.3);

		return (
			<div
				key={i}
				style={{
					position: 'absolute',
					left: x,
					top: y,
					width: size,
					height: size,
					borderRadius: '50%',
					backgroundColor: '#FFFFFF', // brighter white core
					boxShadow: `0 0 ${size * 6}px ${size * 2}px rgba(0,219,255,0.95)`, // stronger cyan aura
					opacity: flicker * baseOpacity * opacity,
					filter: blur > 0 ? `blur(${blur}px)` : undefined,
				}}
			/>
		);
	});

	return <AbsoluteFill style={{pointerEvents: 'none'}}>{elements}</AbsoluteFill>;
};
