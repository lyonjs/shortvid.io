import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {SponsorSchema} from '../sponsors.types';

import {SponsorBackground} from './SponsorBackground';
import {SponsorMap} from './SponsorMap';
import {SponsorOrgaLogo} from './SponsorOrgaLogo';
import {SponsorPresentation} from './SponsorPresentation';
import {SponsorThanks} from './SponsorThanks';

export const Sponsor = ({
	companyName,
	backgroundImg,
	sponsorLocalisation,
	sponsorLogo,
}: z.infer<typeof SponsorSchema>) => {
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
		</AbsoluteFill>
	);
};
