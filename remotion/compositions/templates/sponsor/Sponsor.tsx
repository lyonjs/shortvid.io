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
import {SponsorBackground} from './SponsorBackground';

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
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence name="Background">
				<SponsorBackground backgroundImg={backgroundImg} />
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
