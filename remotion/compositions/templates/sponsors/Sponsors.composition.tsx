import {Composition, Folder, staticFile} from 'remotion';

import {Sponsor} from './default/Sponsor';
import {SponsorWide} from './sponsorWide/SponsorWide';
import {SponsorWideSchema} from './sponsorWide/SponsorWide.type';
import {SpotlightNewSponsor} from './spotlightNewSponsor/SpotlightNewSponsor';
import {SponsorSchema, SpotlightNewSponsorSchema} from './sponsors.types';

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
				schema={SpotlightNewSponsorSchema}
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
			<Composition
				id="SponsorWide"
				schema={SponsorWideSchema}
				width={1200}
				height={628}
				fps={30}
				durationInFrames={120}
				component={SponsorWide}
				defaultProps={{
					type: 'gold',
					backgroundImg:
						'https://github.com/user-attachments/assets/7c724813-fff1-4e4c-83ce-bac307c8332a',
					sponsorLogo:
						'https://www.lyonjs.org/_next/image?url=%2Fpartners%2Fdotjs.png&w=256&q=75',
					color: '#efdb4f',
					logoBackground: '#18181b',
					eventLogo:
						'https://github.com/user-attachments/assets/0fa91bc2-1858-4e56-b205-2585a929f61e',
				}}
			/>
		</Folder>
	);
};
