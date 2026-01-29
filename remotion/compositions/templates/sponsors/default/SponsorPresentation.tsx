import {AbsoluteFill} from 'remotion';

import {SponsorLogo} from './SponsorLogo';
import {SponsorName} from './SponsorName';

type SponsorPresentationProps = {
	companyName?: string;
	backgroundImg?: string;
	sponsorLogo?: string;
};

const SponsorLogoOrName = ({companyName, sponsorLogo}: SponsorPresentationProps) => {
	if (sponsorLogo) {
		return <SponsorLogo sponsorLogo={sponsorLogo} />;
	} else if (companyName !== undefined) {
		return <SponsorName companyName={companyName} />;
	}
};

export const SponsorPresentation = ({companyName, sponsorLogo}: SponsorPresentationProps) => {
	const hasSponsorInfo = sponsorLogo || companyName;

	if (!hasSponsorInfo) return null;

	return (
		<AbsoluteFill style={{display: 'flex', alignItems: 'center'}}>
			<SponsorLogoOrName companyName={companyName} sponsorLogo={sponsorLogo} />
		</AbsoluteFill>
	);
};
