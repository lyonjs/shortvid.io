import React from 'react';
import {
	Audio,
	AbsoluteFill,
	Img,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Noise} from './Noise';
import {FadeIn} from '../../conference/very-tech-trip/FadeIn';
import {NewSponsorTitle} from './NewSponsorTitle';
import {Lottie} from '@remotion/lottie';
import {useLottie} from '../../components/hooks/useLottie';
import {Spotlight} from './Spotlight';
import {LogoWithText} from '../../components/LogoWithText';
import {loadFont} from '@remotion/google-fonts/Rubik';

const {fontFamily} = loadFont();

export const Vercel: React.FC = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();

	const illustrationHour = useLottie('lf20_tkeaajkc');

	if (!illustrationHour) {
		return null;
	}

	const scaleUp = spring({
		frame: frame - 460,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});

	const fadeOut = interpolate(frame, [650, 740], [1, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#0c0c0d',
				overflow: 'hidden',
			}}
		>
			<Audio
				src={staticFile('sounds/tip_stevens_miracle.mp3')}
				startFrom={1900}
				volume={(frame) =>
					interpolate(frame, [0, 80], [0, 0.4], {extrapolateLeft: 'clamp'})
				}
			/>
			<Sequence from={10} durationInFrames={300} name="Texte">
				<NewSponsorTitle />
			</Sequence>
			<Sequence from={80} durationInFrames={250} name="Confettis">
				<Lottie
					style={{
						width,
						zIndex: 1,
						position: 'absolute',
						bottom: -400,
						filter: 'none',
						objectFit: 'cover',
					}}
					animationData={illustrationHour}
				/>
			</Sequence>
			<Sequence from={250} durationInFrames={300} name="Whoosh">
				<Audio
					src={staticFile('sounds/whoosh.mp3')}
					startFrom={10}
					volume={0.8}
				/>
			</Sequence>
			<Sequence from={250} durationInFrames={300} name="Spotlight">
				<Spotlight />
			</Sequence>
			<div
				style={{
					opacity: fadeOut,
				}}
			>
				<Sequence from={420} name="Noise" durationInFrames={330}>
					<FadeIn duration={50}>
						<Noise speed={0.004} circleRadius={5} maxOffset={50} />
					</FadeIn>
				</Sequence>
				<Sequence from={420} durationInFrames={300} name="Logos">
					<FadeIn
						duration={50}
						style={{
							width: '100%',
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								display: 'flex',
								gap: 100,
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<LogoWithText
								color="white"
								width="600px"
								height="300px"
								backgroundColor="#0c0c0d"
							/>
							<span
								style={{
									fontFamily,
									fontSize: 100,
									fontWeight: 700,
									color: 'white',
								}}
							>
								x
							</span>
							<Img
								src={staticFile('images/sponsors/vercel-logotype-light.svg')}
								alt="Vercel logo"
								style={{
									width: 800,
									paddingBottom: 100,
									transform: `scale(${scaleUp})`,
								}}
							/>
						</div>
					</FadeIn>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
};
