import React from 'react';
import {Composition, Folder, staticFile} from 'remotion';

import {SpotlightNewSponsor} from './spotlightNewSponsor/SpotlightNewSponsor';
import {Sponsor} from './Sponsor';

export const SponsorsComposition: React.FC = () => {
	return (
		<Folder name="Sponsors">
			<Composition
				component={Sponsor}
				width={1200}
				height={1200}
				id="Sponsor"
				fps={30}
				durationInFrames={200}
				defaultProps={{
					sponsorLocalisation: '94 Rue Robert - Lyon',
				}}
			/>
			<Composition
				component={Sponsor}
				width={1200}
				height={1200}
				id="SponsorWithoutLogo"
				fps={30}
				durationInFrames={200}
				defaultProps={{
					companyName: 'EvilCorp',
				}}
			/>
			<Composition
				component={SpotlightNewSponsor}
				width={1920}
				height={1080}
				id="SpotlightNewSponsor"
				fps={60}
				durationInFrames={750}
				defaultProps={{
					logo: staticFile('images/showcases/lyonjs/lyonjsLogo.svg'),
					sponsorLogo:
						'https://github.com/lyonjs/shortvid.io/assets/60877626/a4155bda-d6b1-4e2b-8631-6450ef3bf768',
				}}
			/>
		</Folder>
	);
};
