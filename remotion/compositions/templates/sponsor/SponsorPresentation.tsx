import {AbsoluteFill} from 'remotion';

import {SponsorLogo} from './SponsorLogo';
import {SponsorName} from './SponsorName';

export const SponsorPresentation: React.FC<{
	companyName?: string;
	backgroundImg?: string;
	sponsorLogo?: string;
}> = ({companyName = 'Evilcorp', sponsorLogo}) => {
	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			{sponsorLogo ? (
				<SponsorLogo sponsorLogo={sponsorLogo} />
			) : (
				<SponsorName companyName={companyName} />
			)}
		</AbsoluteFill>
	);
};
