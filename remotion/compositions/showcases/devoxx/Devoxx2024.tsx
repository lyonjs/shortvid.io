import React from 'react';
import {
	AbsoluteFill,
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';

import {Details} from './2024/Details';
import {Logo} from './2024/Logo';
import {Speakers} from './2024/Speakers';
import {TalkTitle} from './2024/TalkTitle';

export const Devoxx2024: React.FC<DefaultProps> = ({
	title,
	speakers,
	date,
	time,
	location,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DELAY = 50;
	const ANIMATION_DURATION = 50;

	const blur = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});

	const darkscale = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 1,
		to: 0.4,
		durationInFrames: ANIMATION_DURATION,
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: '#302122',
					overflow: 'hidden',
					fontFamily: '"plus jakarta sans",sans-serif',
					filter: `blur(${blur}px) brightness(${darkscale})`,
				}}
			>
				<Sequence name="Background">
					<Img
						src={staticFile('images/showcases/devoxx/robots_run_hd.png')}
						style={{width: '100%', height: '100%'}}
					/>
				</Sequence>
			</AbsoluteFill>
			<Sequence from={10}>
				<Logo />
			</Sequence>
			<Sequence from={15}>
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence from={25}>
				<TalkTitle title={title} delay={ANIMATION_DELAY} />
			</Sequence>
			<Sequence from={40}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</>
	);
};
