import {Composition, Folder, staticFile} from 'remotion';

import {SHORTVID_ASSET_PATHS} from '../../../theme';

import {Sponsor} from './default/Sponsor';
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
					companyName: 'Acme Corp',
					sponsorLocalisation: '1 rue de la République, 69001 Lyon',
					sponsorLogo: staticFile(SHORTVID_ASSET_PATHS.logoVertical),
					backgroundImg: staticFile(SHORTVID_ASSET_PATHS.backgroundImg),
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
					logo: staticFile(SHORTVID_ASSET_PATHS.logo),
					sponsorLogo: staticFile(SHORTVID_ASSET_PATHS.logoHorizontal),
				}}
			/>
		</Folder>
	);
};
