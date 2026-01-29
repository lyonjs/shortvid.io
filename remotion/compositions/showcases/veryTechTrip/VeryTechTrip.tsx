import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {Background} from './Background';
import {Details} from './Details';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';

export const VeryTechTrip: React.FC<DefaultProps> = ({title, speakers, time}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		frame: frame - 70,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 30,
		config: {
			damping: 100,
		},
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'linear-gradient(149deg, rgba(0,7,77,1) 26%, rgba(37,57,120,1) 56%, rgba(51,75,136,1) 81%, rgba(63,91,150,1) 100%)',
				overflow: 'hidden',
				color: 'white',
				fontFamily: 'Helvetica,Arial,sans-serif',
			}}
		>
			<Audio src={staticFile('sounds/pop_funk.mp3')} volume={0.5} />
			<Background />
			<Sequence from={30}>
				<Logo />
			</Sequence>
			<Sequence from={50}>
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence from={50}>
				<TalkTitle title={title} />
			</Sequence>
			<Sequence from={70}>
				<Img
					src={staticFile('/images/common/underline.svg')}
					style={{
						position: 'absolute',
						bottom: '90px',
						width: '30%',
						margin: 'auto',
						transform: `translateX(-50%) scale(${scale})`,
						left: '50%',
					}}
				/>
			</Sequence>
			<Sequence from={80}>
				<Details
					time={time}
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
					}}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
