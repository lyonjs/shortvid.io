import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const ParticleBackground = () => {
    const frame = useCurrentFrame();

    const particles = Array.from({ length: 200 }, (_, i) => {
        const x = ((i * 1279 + Math.sin(i * 1.618) * 500 + Math.cos(i * 2.414) * 300) % 1280);
        const y = ((i * 719 + Math.cos(i * 1.272) * 400 + Math.sin(i * 3.141) * 200) % 720);
        const size = 4 + (i % 6);
        const speed = 0.5 + (i % 3) * 0.3;
        const delay = i * 10;

        const moveX = interpolate(
            frame - delay,
            [0, 300],
            [x, x + 100 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const moveY = interpolate(
            frame - delay,
            [0, 300],
            [y, y + 50 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const opacity = interpolate(
            frame - delay,
            [0, 30, 270, 300],
            [0, 1, 1, 0],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const scale = interpolate(
            frame - delay,
            [0, 60, 240, 300],
            [0.5, 1, 1, 0.5],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        return (
            <div
                key={i}
                style={{
                    position: 'absolute',
                    left: moveX,
                    top: moveY,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: '#527cbe',
                    opacity,
                    transform: `scale(${scale}) translate(-50%, -50%)`,
                    filter: 'blur(1px)',
                }}
            />
        );
    });

    const floatingCircles = Array.from({ length: 100 }, (_, i) => {
        const x = ((i * 1283 + Math.sin(i * 2.718) * 600 + Math.cos(i * 1.732) * 350) % 1280);
        const y = ((i * 721 + Math.cos(i * 2.236) * 500 + Math.sin(i * 4.669) * 250) % 720);
        const size = 12 + (i % 3) * 6;
        const speed = 0.2 + (i % 2) * 0.1;
        const delay = i * 40;

        const moveX = interpolate(
            frame - delay,
            [0, 400],
            [x, x + 80 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const moveY = interpolate(
            frame - delay,
            [0, 400],
            [y, y + 40 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const opacity = interpolate(
            frame - delay,
            [0, 40, 360, 400],
            [0, 1, 1, 0],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const scale = interpolate(
            frame - delay,
            [0, 80, 320, 400],
            [0.3, 1, 1, 0.3],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        return (
            <div
                key={`circle-${i}`}
                style={{
                    position: 'absolute',
                    left: moveX,
                    top: moveY,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: '#f8ab09',
                    opacity,
                    transform: `scale(${scale}) translate(-50%, -50%)`,
                    filter: 'blur(0.5px)',
                }}
            />
        );
    });

    const sparkles = Array.from({ length: 150 }, (_, i) => {
        const x = ((i * 1289 + Math.sin(i * 3.141) * 700 + Math.cos(i * 2.828) * 400) % 1280);
        const y = ((i * 727 + Math.cos(i * 3.464) * 600 + Math.sin(i * 5.236) * 300) % 720);
        const size = 3 + (i % 3);
        const speed = 0.8 + (i % 2) * 0.4;
        const delay = i * 25;

        const moveX = interpolate(
            frame - delay,
            [0, 200],
            [x, x + 60 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const moveY = interpolate(
            frame - delay,
            [0, 200],
            [y, y + 30 * speed],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        const opacity = interpolate(
            frame - delay,
            [0, 20, 180, 200],
            [0, 1, 1, 0],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        return (
            <div
                key={`sparkle-${i}`}
                style={{
                    position: 'absolute',
                    left: moveX,
                    top: moveY,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: '#ee7cad',
                    opacity,
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(0.5px)',
                }}
            />
        );
    });

    const staticParticles = Array.from({ length: 200 }, (_, i) => {
        const x = ((i * 1291 + Math.sin(i * 4.669) * 800 + Math.cos(i * 3.464) * 450) % 1280);
        const y = ((i * 733 + Math.cos(i * 4.123) * 700 + Math.sin(i * 6.283) * 350) % 720);
        const size = 2 + (i % 3);
        const delay = i * 15;

        const opacity = interpolate(
            frame - delay,
            [0, 20, 280, 300],
            [0, 0.3 + (i % 3) * 0.1, 0.3 + (i % 3) * 0.1, 0],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
            }
        );

        return (
            <div
                key={`static-${i}`}
                style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: i % 3 === 0 ? '#527cbe' : i % 3 === 1 ? '#f8ab09' : '#ee7cad',
                    opacity,
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(0.5px)',
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
