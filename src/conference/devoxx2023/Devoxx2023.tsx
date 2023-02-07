import {
	AbsoluteFill,
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Talk} from '../types';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {Title} from './Title';
import React from 'react';
import {Details} from './Details';
import Balloons from './Balloons';

export const Devoxx2023: React.FC<Talk> = ({
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
					fontFamily: 'Noto Sans,sans-serif',
					filter: `blur(${blur}px) brightness(${darkscale})`,
				}}
			>
				<Sequence name="Background">
					<Img
						src={staticFile('images/conferences/devoxx/devoxx-background.jpg')}
					/>
				</Sequence>
				<Sequence name="Balloons">
					<Balloons />
				</Sequence>
			</AbsoluteFill>
			<Sequence from={10}>
				<Logo />
			</Sequence>
			<Sequence from={15}>
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence from={25}>
				<Title
					title={title}
					delay={ANIMATION_DELAY}
					style={{
						zIndex: 1,
						position: 'absolute',
						bottom: 130,
						maxWidth: '90%',
						left: 0,
						right: 0,
						margin: '0 auto',
					}}
				/>
			</Sequence>
			<Sequence from={40}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</>
	);
};
