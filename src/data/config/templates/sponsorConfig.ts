import {staticFile} from 'remotion';

import {Sponsor} from '../../../../remotion/compositions/templates/sponsors/default/Sponsor';
import {SpotlightNewSponsor} from '../../../../remotion/compositions/templates/sponsors/spotlightNewSponsor/SpotlightNewSponsor';
import {CompositionProps} from '../compositionsConfig';

export const SponsorConfig: CompositionProps = {
	compositionName: 'Sponsor',
	component: Sponsor,
	width: 1200,
	height: 1200,
	durationInFrames: 200,
	defaultProps: {
		companyName: 'Indy',
		sponsorLocalisation: '94 Rue Robert',
		backgroundImg:
			'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
		sponsorLogo: staticFile('/images/showcases/lyonjs/lyonjsSquaredLogo.png'),
	},
};

export const SpotlightNewSponsorConfig: CompositionProps = {
	compositionName: 'SpotlightNewSponsor',
	component: SpotlightNewSponsor,
	width: 1920,
	height: 1080,
	fps: 60,
	durationInFrames: 750,
	frameForThumbnail: 100,
	defaultProps: {
		logo: 'https://github.com/lyonjs/shortvid.io/assets/60877626/59faee28-9d56-4168-a58d-96342cc58d44',
		sponsorLogo:
			'https://github.com/lyonjs/shortvid.io/assets/60877626/a4155bda-d6b1-4e2b-8631-6450ef3bf768',
	},
};
