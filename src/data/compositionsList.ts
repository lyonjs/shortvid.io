import {
	Snowcamp,
	TouraineTechProps,
} from '../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {ReplayProps} from '../../app/templates/replay/page';
import {defaultTalkValues} from './defaultValues';
import {Devoxx2023} from '../../remotion/compositions/showcases/devoxx/Devoxx2023';
import {MixitIntroTalk} from '../../remotion/compositions/showcases/mixit/MixitIntroTalk';
import {TouraineTech2023} from '../../remotion/compositions/showcases/touraineTech/TouraineTech2023';
import {VeryTechTrip} from '../../remotion/compositions/showcases/veryTechTrip/VeryTechTrip';
import {AlpesCraft} from '../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {CampingDesSpeakers} from '../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import {Volcamp} from '../../remotion/compositions/showcases/volcamp/Volcamp';

import _ = require('lodash');
import {Talk} from '../../remotion/compositions/templates/talk/Talk';
import {
	TalkBranded,
	TalkBrandedProps,
} from '../../remotion/compositions/templates/talk/branded/TalkBranded';
import {Sponsor} from '../../remotion/compositions/templates/sponsor/Sponsor';
import {Event} from '../../remotion/compositions/templates/event/Event';
import {Meetup} from '../../remotion/compositions/templates/meetup/Meetup';
import {Silhouette} from '../../remotion/compositions/templates/silhouette/Silhouette';
import LayerByMode from '../app/LayerByMode';
import {staticFile} from 'remotion';

type CompositionProps = {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	frameForThumbnail?: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | undefined}
		| TouraineTechProps
		| ReplayProps
		| TalkBrandedProps;
};

type CompositionsListProps = {
	templates: Record<string, CompositionProps>;
	showcases: Record<string, CompositionProps>;
};

export const CompositionsList: CompositionsListProps = {
	templates: {
		Talk: {
			compositionName: 'Talk',
			component: Talk,
			width: 1200,
			height: 1200,
			durationInFrames: 120,
			defaultProps: {
				eventLogo: staticFile('/images/showcases/lyonjs/lyonjs-squared.png'),
				speakersNames: 'Julien Sulpis',
				talkTitle:
					'REX : Mise en place d’un Design System en web components chez Groupama',
				backgroundImg:
					'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
				speakerPicture: 'https://avatars2.githubusercontent.com/u/22420399?v=4',
				titleSize: '50',
			},
		},
		TalkBranded: {
			compositionName: 'TalkBranded',
			component: TalkBranded,
			width: 1280,
			height: 720,
			durationInFrames: 140,
			defaultProps: {
				backgroundColor: '#EA4335',
				title: 'Certification “Google Cloud Architect”',
				startingDate: new Date(2023, 3, 18, 13),
				endingDate: new Date(2023, 4, 23, 13, 45),
				recurringDay: 'mardi',
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
		},
		Layers: {
			compositionName: 'Layers',
			component: LayerByMode,
			width: 1920,
			height: 1080,
			durationInFrames: 1,
			fps: 0,
			defaultProps: {
				mode: 'one',
				title: 'Shortvid.io 🎬',
				sponsor:
					'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
				primaryColor: '#323330',
				secondaryColor: '#efdb4f',
				decoration:
					'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png',
			},
		},
		Sponsor: {
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
		},
		Event: {
			compositionName: 'Event',
			component: Event,
			width: 1200,
			height: 1200,
			durationInFrames: 270,
			frameForThumbnail: 90,
			defaultProps: {
				backgroundImg:
					'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
				title: 'Apéro JS 🍾',
				lottieAsset: 'lf20_UDstUT',
				paillettesAsset: 'lf20_tiviyc3p',
			},
		},
		Meetup: {
			compositionName: 'Meetup',
			component: Meetup,
			width: 1200,
			height: 1200,
			durationInFrames: 270,
			defaultProps: {
				title: 'LyonJS de la rentrée 🦁',
				date: '28 septembre 2022',
				backgroundImg:
					'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
				eventLogo: staticFile('/images/showcases/lyonjs/lyonjs-squared.png'),
			},
		},
		Silhouette: {
			compositionName: 'Silhouette',
			component: Silhouette,
			width: 1280,
			height: 720,
			durationInFrames: 120,
			defaultProps: {
				title: 'Example of big title',
				backgroundImg:
					'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
				side: 'left',
				silhouetteUrl:
					'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png',
				logoUrl: staticFile('/images/showcases/lyonjs/lyonjs-squared.png'),
			},
		},
	},
	showcases: {
		Devoxx: {
			compositionName: 'Devoxx2023',
			component: Devoxx2023,
			width: 1280,
			height: 720,
			durationInFrames: 300,
			defaultProps: defaultTalkValues,
		},
		Mixit: {
			compositionName: 'Mixit2023',
			component: MixitIntroTalk,
			width: 1280,
			height: 720,
			durationInFrames: 150,
			defaultProps: defaultTalkValues,
		},
		Snowcamp: {
			compositionName: 'Snowcamp',
			component: Snowcamp,
			width: 1280,
			height: 720,
			durationInFrames: 150,
			defaultProps: defaultTalkValues,
		},
		TouraineTech: {
			compositionName: 'TouraineTech2023',
			component: TouraineTech2023,
			width: 1280,
			height: 720,
			durationInFrames: 150,
			defaultProps: defaultTalkValues,
		},
		VeryTechTrip: {
			compositionName: 'VeryTechTrip',
			component: VeryTechTrip,
			width: 720,
			height: 720,
			durationInFrames: 150,
			defaultProps: defaultTalkValues,
		},
		AlpesCraft: {
			compositionName: 'AlpesCraft',
			component: AlpesCraft,
			width: 1280,
			height: 720,
			durationInFrames: 200,
			defaultProps: defaultTalkValues,
		},
		CampingDesSpeakers: {
			compositionName: 'CampingDesSpeakers',
			component: CampingDesSpeakers,
			width: 1280,
			height: 720,
			durationInFrames: 540,
			fps: 60,
			defaultProps: _.merge(
				{
					speakers: [{company: 'Zenika'}, {company: 'Bedrock'}],
				},
				defaultTalkValues
			),
		},
		Volcamp2023: {
			compositionName: 'Volcamp2023',
			component: Volcamp,
			width: 1280,
			height: 720,
			durationInFrames: 300,
			defaultProps: _.merge(
				{
					themeName: 'Web & Mobile',
					speakers: [
						{company: 'https://zenika.com/static/images/favicon-32x32.png'},
						{
							company:
								'https://bedrockstreaming.com/assets/favicon/apple-icon-57x57.png',
						},
					],
				},
				defaultTalkValues
			),
		},
	},
};
