import React from 'react';
import {Logo} from './Logo';
import {
	Img,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {useLottie} from '../../../hooks/useLottie';

export const Intro = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const delay = 20;

	const BackTreeAppear = spring({
		frame: frame - delay,
		from: 700,
		to: -240,
		fps,
		durationInFrames: 20,
	});

	const FrontTreeAppear = spring({
		frame: frame - 30,
		from: -660,
		to: -90,
		fps,
		durationInFrames: 20,
	});

	const GroundDetailsAppear = spring({
		frame: frame - 40,
		from: -140,
		to: 50,
		fps,
		durationInFrames: 20,
	});

	return (
		<div>
			<Sequence name="LogoAndBackground">
				<Logo />
			</Sequence>
			<Sequence name="BackTrees" from={delay}>
				<Img
					src={staticFile(
						'images/conferences/campingDesSpeakers/backTrees.svg'
					)}
					style={{
						position: 'absolute',
						objectFit: 'none',
						top: BackTreeAppear,
					}}
				/>
			</Sequence>
			<Sequence name="FrontTrees" from={30}>
				<Img
					src={staticFile(
						'images/conferences/campingDesSpeakers/frontTrees.svg'
					)}
					style={{
						position: 'absolute',
						objectFit: 'none',
						top: FrontTreeAppear,
					}}
				/>
			</Sequence>
			<Sequence name="GroundDetails" from={40}>
				<Img
					src={staticFile(
						'images/conferences/campingDesSpeakers/groundDetails.svg'
					)}
					style={{
						position: 'absolute',
						objectFit: 'none',
						bottom: GroundDetailsAppear,
					}}
				/>
			</Sequence>
			<Sequence name="Firecamp" from={50}>
				{/* <Video */}
				{/* 	src={staticFile('images/conferences/campingDesSpeakers/tent.mp4')} */}
				{/* 	width={1200} */}
				{/* 	height={700} */}
				{/* /> */}
			</Sequence>
		</div>
	);
};
