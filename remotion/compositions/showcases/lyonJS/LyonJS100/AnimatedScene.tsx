import React, {PropsWithChildren} from 'react';
import Image from 'next/image';
import {
	AbsoluteFill,
	Audio,
	Easing,
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {z} from 'zod';

import {BackgroundTriangle} from '../../../../design/atoms/BackgroundTriangle';
import {SpeakerSchema} from '../../showcases.types';
import {BigSpeakers} from '../BigSpeakers';
import {Details} from '../Details';
import {Logo} from '../Logo';
import {LogoSponsor} from '../LogoSponsor';
import {TalkTitle} from '../TalkTitle';

import {Cinema} from './Scene/Cinema';

export const AnimatedScene: React.FC<PropsWithChildren> = ({children}) => {
	const frame = useCurrentFrame();

	const opacityDown = interpolate(frame, [120, 160], [0.05, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#00030a',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				top: 120,
			}}
		>
			<Cinema />
			<div
				style={{
					position: 'absolute',
					top: 115,
					left: 270,
					width: '1400px',
					height: '630px',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						height: '100%',
					}}
				>
					<Img
						src={staticFile('/images/showcases/lyonjs/LyonJS100.png')}
						style={{
							opacity: opacityDown,
							position: 'absolute',
							top: 60,
							margin: 'auto',
							width: '55%',
							filter: 'grayscale(100%)',
						}}
					/>
					{children}
				</div>
			</div>
		</AbsoluteFill>
	);
};
