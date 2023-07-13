import {Sponsor} from '../../../../remotion/compositions/templates/sponsor/Sponsor';
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
		sponsorLogo:
			'https://www.indy.fr/wp-content/themes/indy/img/logo-indy-new.svg',
	},
};
