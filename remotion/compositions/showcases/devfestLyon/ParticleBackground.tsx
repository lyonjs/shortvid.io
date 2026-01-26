import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const ParticleBackground = () => {
	const frame = useCurrentFrame();

	const particles = Array.from({length: 10}, (_, i) => {
		const x = (i * 1279 + Math.sin(i * 1.618) * 500 + Math.cos(i * 2.414) * 300) % 1280;
		const y = (i * 719 + Math.cos(i * 1.272) * 400 + Math.sin(i * 3.141) * 200) % 720;
		const size = 15 + (i % 12) + Math.sin(i * 0.5) * 8;
		const speed = 0.3 + (i % 4) * 0.2;
		const delay = i * 15;
		const directionX = Math.sin(i * 1.2) > 0 ? 1 : -1;
		const directionY = Math.cos(i * 0.8) > 0 ? 1 : -1;

		const moveX = interpolate(frame - delay, [0, 300], [x, x + directionX * 80 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const moveY = interpolate(frame - delay, [0, 300], [y, y + directionY * 60 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const baseOpacity = 0.3 + (i % 5) * 0.2 + Math.sin(i * 0.3) * 0.3;
		const opacity = interpolate(
			frame - delay,
			[0, 30, 270, 300],
			[0, baseOpacity, baseOpacity, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			},
		);

		const blurAmount = i % 3 === 0 ? 2 : i % 3 === 1 ? 0.5 : 1;

		const scale = interpolate(frame - delay, [0, 60, 240, 300], [0.5, 1, 1, 0.5], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		return (
			<Img
				key={i}
				src={staticFile('/images/showcases/devfestLyon/particule.png')}
				style={{
					position: 'absolute',
					left: moveX,
					top: moveY,
					width: size,
					height: 'auto',
					opacity,
					transform: `scale(${scale}) translate(-50%, -50%)`,
					filter: `blur(${blurAmount}px)`,
				}}
			/>
		);
	});

	const floatingCircles = Array.from({length: 4}, (_, i) => {
		const x = (i * 1283 + Math.sin(i * 2.718) * 600 + Math.cos(i * 1.732) * 350) % 1280;
		const y = (i * 721 + Math.cos(i * 2.236) * 500 + Math.sin(i * 4.669) * 250) % 720;
		const size = 30 + (i % 8) * 12 + Math.cos(i * 0.7) * 8;
		const speed = 0.15 + (i % 3) * 0.1;
		const delay = i * 50;
		const directionX = Math.sin(i * 0.9) > 0 ? 1 : -1;
		const directionY = Math.cos(i * 1.1) > 0 ? 1 : -1;

		const moveX = interpolate(frame - delay, [0, 400], [x, x + directionX * 60 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const moveY = interpolate(frame - delay, [0, 400], [y, y + directionY * 50 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const baseOpacity = 0.2 + (i % 4) * 0.25 + Math.cos(i * 0.4) * 0.2;
		const opacity = interpolate(
			frame - delay,
			[0, 40, 360, 400],
			[0, baseOpacity, baseOpacity, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			},
		);

		const blurAmount = i % 4 === 0 ? 3 : i % 4 === 1 ? 0.5 : i % 4 === 2 ? 1.5 : 1;

		const scale = interpolate(frame - delay, [0, 80, 320, 400], [0.3, 1, 1, 0.3], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		return (
			<Img
				key={`circle-${i}`}
				src={staticFile('/images/showcases/devfestLyon/particule.png')}
				style={{
					position: 'absolute',
					left: moveX,
					top: moveY,
					width: size,
					height: 'auto',
					opacity,
					transform: `scale(${scale}) translate(-50%, -50%)`,
					filter: `blur(${blurAmount}px)`,
				}}
			/>
		);
	});

	const sparkles = Array.from({length: 5}, (_, i) => {
		const x = (i * 1289 + Math.sin(i * 3.141) * 700 + Math.cos(i * 2.828) * 400) % 1280;
		const y = (i * 727 + Math.cos(i * 3.464) * 600 + Math.sin(i * 5.236) * 300) % 720;
		const size = 12 + (i % 8) + Math.sin(i * 0.6) * 6;
		const speed = 0.6 + (i % 3) * 0.3;
		const delay = i * 30;
		const directionX = Math.sin(i * 1.5) > 0 ? 1 : -1;
		const directionY = Math.cos(i * 1.3) > 0 ? 1 : -1;

		const moveX = interpolate(frame - delay, [0, 200], [x, x + directionX * 50 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const moveY = interpolate(frame - delay, [0, 200], [y, y + directionY * 40 * speed], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		const baseOpacity = 0.4 + (i % 5) * 0.15 + Math.sin(i * 0.2) * 0.2;
		const opacity = interpolate(
			frame - delay,
			[0, 20, 180, 200],
			[0, baseOpacity, baseOpacity, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			},
		);

		const blurAmount = i % 3 === 0 ? 1.5 : i % 3 === 1 ? 0.3 : 0.8;

		return (
			<Img
				key={`sparkle-${i}`}
				src={staticFile('/images/showcases/devfestLyon/particule.png')}
				style={{
					position: 'absolute',
					left: moveX,
					top: moveY,
					width: size,
					height: 'auto',
					opacity,
					transform: 'translate(-50%, -50%)',
					filter: `blur(${blurAmount}px)`,
				}}
			/>
		);
	});

	const staticParticles = Array.from({length: 5}, (_, i) => {
		const x = (i * 1291 + Math.sin(i * 4.669) * 800 + Math.cos(i * 3.464) * 450) % 1280;
		const y = (i * 733 + Math.cos(i * 4.123) * 700 + Math.sin(i * 6.283) * 350) % 720;
		const size = 10 + (i % 10) + Math.cos(i * 0.8) * 6;
		const delay = i * 20;

		const baseOpacity = 0.15 + (i % 6) * 0.12 + Math.sin(i * 0.4) * 0.15;
		const opacity = interpolate(
			frame - delay,
			[0, 20, 280, 300],
			[0, baseOpacity, baseOpacity, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			},
		);

		const blurAmount = i % 4 === 0 ? 2.5 : i % 4 === 1 ? 0.2 : i % 4 === 2 ? 1.2 : 0.6;

		return (
			<Img
				key={`static-${i}`}
				src={staticFile('/images/showcases/devfestLyon/particule.png')}
				style={{
					position: 'absolute',
					left: x,
					top: y,
					width: size,
					height: 'auto',
					opacity,
					transform: 'translate(-50%, -50%)',
					filter: `blur(${blurAmount}px)`,
				}}
			/>
		);
	});

	return (
		<AbsoluteFill
			style={{
				zIndex: 5,
				pointerEvents: 'none',
				backgroundColor: 'transparent',
			}}
		>
			{staticParticles}
			{particles}
			{floatingCircles}
			{sparkles}
		</AbsoluteFill>
	);
};
