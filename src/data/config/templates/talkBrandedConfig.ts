import {TalkBranded} from '../../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {CompositionProps} from '../compositionsConfig';

export const TalkBrandedConfig: CompositionProps = {
	compositionName: 'TalkBranded',
	component: TalkBranded,
	width: 1280,
	height: 720,
	durationInFrames: 140,
	defaultProps: {
		backgroundColor: '#086fda',
		title: 'Certification “Google Cloud Architect”',
		startingDate: new Date(2023, 3, 18, 13),
		location: '5 Place Jules Ferry, 69006.',
		logoUrl:
			'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg',
		speaker: {
			pictureUrl:
				'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/20200911_094649_MbC4W4N.jpg',
			name: 'Julien Landuré',
			company: 'Zenika Nantes',
			job: 'CTO / GDE',
		},
	},
};
