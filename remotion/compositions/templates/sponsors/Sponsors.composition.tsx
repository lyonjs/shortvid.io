import {Composition, Folder, staticFile} from 'remotion';

import {Sponsor} from './default/Sponsor';
import {SpotlightNewSponsor} from './spotlightNewSponsor/SpotlightNewSponsor';
import {SponsorSchema} from './sponsors.types';

export const SponsorsComposition = () => {
	return (
		<Folder name="Sponsors">
			<Composition
				component={Sponsor}
				width={1200}
				height={1200}
				id="Sponsor"
				fps={30}
				durationInFrames={200}
				schema={SponsorSchema}
				defaultProps={{
					companyName: 'Evilcorp',
					sponsorLocalisation: '94 Rue Robert - Lyon',
					sponsorLogo: staticFile('/branding/full-logo-with-mono-vertical.svg'),
					backgroundImg: staticFile(
						'/images/showcases/lyonjs/defaultBackgroundImage.jpeg',
					),
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
