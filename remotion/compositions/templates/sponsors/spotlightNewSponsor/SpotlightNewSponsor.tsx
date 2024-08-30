import {Lottie} from '@remotion/lottie';
import {
	AbsoluteFill,
	Audio,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

import {FadeIn} from '../../../../design/animations/FadeIn';
import {BackgroundCircleNoise} from '../../../../design/atoms/BackgroundCircleNoise';
import {useLottie} from '../../../../hooks/useLottie';
import {SpotlightNewSponsorSchema} from '../sponsors.types';

import {LogosSponsoring} from './LogosSponsoring';
import {NewSponsorTitle} from './NewSponsorTitle';
import {Spotlight} from './Spotlight';

export const SpotlightNewSponsor: React.FC<
	z.infer<typeof SpotlightNewSponsorSchema>
> = ({logo, sponsorLogo}) => {
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
			<Sequence from={295} durationInFrames={300} name="Whoosh">
				<Audio src={staticFile('sounds/whoosh.mp3')} volume={0.8} />
			</Sequence>
			<Sequence from={250} durationInFrames={300} name="Spotlight">
				<Spotlight sponsorLogo={sponsorLogo} />
			</Sequence>
			<div
				style={{
					opacity: fadeOut,
				}}
			>
				<Sequence from={420} name="Noise" durationInFrames={330}>
					<FadeIn duration={50}>
						<BackgroundCircleNoise
							speed={0.004}
							circleRadius={5}
							maxOffset={50}
						/>
					</FadeIn>
				</Sequence>
				<Sequence from={420} durationInFrames={300} name="Logos">
					<LogosSponsoring
						logo={logo}
						sponsorLogo={sponsorLogo}
						scaleUp={scaleUp}
					/>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
};
