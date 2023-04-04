import {
	AbsoluteFill,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {SponsorOrgaLogo} from './SponsorOrgaLogo';
import {SponsorPresentation} from './SponsorPresentation';
import {SponsorThanks} from './SponsorThanks';
import {SponsorMap} from './SponsorMap';
import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import React from 'react';

export const Sponsor: React.FC<{
	companyName?: string;
	backgroundImg?: string;
	sponsorLocalisation?: string;
	sponsorLogo?: string;
}> = ({
	companyName = 'Evilcorp',
	backgroundImg = staticFile('/defaultBackgroundImage.jpeg'),
	sponsorLocalisation,
	sponsorLogo,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const ANIMATION_DURATION = 30;
	const ANIMATION_DELAY = ANIMATION_DURATION / 2;

	const blur = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	const greyscale = spring({
		frame: frame - ANIMATION_DELAY,
		fps,
		from: 0,
		to: 5,
		durationInFrames: ANIMATION_DURATION,
	});
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence name="Background">
				<BackgroundFiller
					imageUrl={backgroundImg}
					style={{filter: `grayscale(${greyscale}) blur(${blur}px) `}}
				/>
			</Sequence>
			<Sequence name="Lottie Thanks">
				<SponsorThanks />
			</Sequence>
			<Sequence from={20} name="LyonJS">
				<SponsorOrgaLogo />
			</Sequence>
			<Sequence from={30} name="Titles">
				<SponsorPresentation
					companyName={companyName}
					sponsorLogo={sponsorLogo}
				/>
			</Sequence>
			<Sequence from={80} name="Localisation">
				<SponsorMap localisation={sponsorLocalisation} />
			</Sequence>
		</AbsoluteFill>
	);
};
