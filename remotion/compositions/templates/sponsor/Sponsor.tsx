import {AbsoluteFill, Sequence, staticFile} from 'remotion';

import {SponsorBackground} from './SponsorBackground';
import {SponsorMap} from './SponsorMap';
import {SponsorOrgaLogo} from './SponsorOrgaLogo';
import {SponsorPresentation} from './SponsorPresentation';
import {SponsorThanks} from './SponsorThanks';

export type SponsorProps = {
	companyName?: string;
	backgroundImg?: string;
	sponsorLocalisation?: string;
	sponsorLogo?: string;
};

export const Sponsor: React.FC<SponsorProps> = ({
	companyName = 'Evilcorp',
	backgroundImg = staticFile(
		'/images/showcases/lyonjs/defaultBackgroundImage.jpeg',
	),
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
