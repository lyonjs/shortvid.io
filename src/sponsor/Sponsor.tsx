import {AbsoluteFill, Sequence} from 'remotion';
import {ImageBackground} from '../components/ImageBackground';
import {SponsorOrgaLogo} from './SponsorOrgaLogo';
import {SponsorTitle} from './SponsorTitle';
import {SponsorLogo} from './SponsorLogo';

export const Sponsor: React.FC<{
	companyName?: string;
	backgroundImg?: string;
	sponsorLogo?: string;
}> = ({companyName = 'Evilcorp', backgroundImg, sponsorLogo}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Sequence from={0} name="Background">
				<ImageBackground animated src={backgroundImg} />
			</Sequence>
			<Sequence from={20} name="LyonJS">
				<SponsorOrgaLogo />
			</Sequence>

			<Sequence
				from={30}
				name="Titles"
				layout="absolute-fill"
				style={{
					justifyContent: 'flex-end',
					flexDirection: 'column',
				}}
			>
				<SponsorTitle companyName={companyName} sponsorLogo={sponsorLogo} />
				<SponsorLogo sponsorLogo={sponsorLogo} />
			</Sequence>
		</AbsoluteFill>
	);
};
