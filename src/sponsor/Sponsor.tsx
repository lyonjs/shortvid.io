import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {SponsorOrgaLogo} from './SponsorOrgaLogo';
import {SponsorPresentation} from './SponsorPresentation';
import {SponsorThanks} from './SponsorThanks';
import {SponsorMap} from './SponsorMap';

export const Sponsor: React.FC<{
	companyName?: string;
	backgroundImg?: string;
	sponsorLocalisation?: string;
	sponsorLogo?: string;
}> = ({
	companyName = 'Evilcorp',
	backgroundImg,
	sponsorLocalisation,
	sponsorLogo,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white', overflow: 'hidden'}}>
			<Sequence from={0} name="Background">
				<ImageBackground animated src={backgroundImg} />
			</Sequence>
			<Sequence from={0} name="Lottie Thanks">
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
