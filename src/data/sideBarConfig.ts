import {
	Snowcamp,
	TouraineTechProps,
} from '../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {ReplayProps} from '../../app/templates/replay/page';
import {
	TalkBranded,
	TalkBrandedProps,
} from '../../remotion/compositions/templates/talk/branded/TalkBranded';
import {Talk} from '../../remotion/compositions/templates/talk/Talk';
import {Sponsor} from '../../remotion/compositions/templates/sponsor/Sponsor';
import {Event} from '../../remotion/compositions/templates/event/Event';
import {Meetup} from '../../remotion/compositions/templates/meetup/Meetup';

import {Devoxx2023} from '../../remotion/compositions/showcases/devoxx/Devoxx2023';
import {MixitIntroTalk} from '../../remotion/compositions/showcases/mixit/MixitIntroTalk';
import {TouraineTech2023} from '../../remotion/compositions/showcases/touraineTech/TouraineTech2023';
import {VeryTechTrip} from '../../remotion/compositions/showcases/veryTechTrip/VeryTechTrip';
import {AlpesCraft} from '../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {CampingDesSpeakers} from '../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';

import {defaultTalkValues} from './defaultValues';
import _ = require('lodash');
import {staticFile} from 'remotion';
import {Silhouette} from '../../remotion/compositions/templates/silhouette/Silhouette';
import {LayerFullScreen} from '../../remotion/compositions/templates/layers/LayerFullScreen';
import {LayerOneSpeaker} from '../../remotion/compositions/templates/layers/LayerOneSpeaker';
import {LayerTwoSpeaker} from '../../remotion/compositions/templates/layers/LayerTwoSpeaker';

type videoProps = {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames?: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | boolean | undefined}
		| TouraineTechProps
		| ReplayProps
		| TalkBrandedProps;
};

type sideBarProps = {
	templates: videoProps[];
	showcases: videoProps[];
	settings: {
		fontFamily: string;
	};
};

export const sideBarConfig: sideBarProps = {
	templates: [
		{
			compositionName: 'Talk',
			component: Talk,
			width: 1200,
			height: 1200,
			durationInFrames: 120,
			defaultProps: {
				talkTitle: 'Is JS an awesome programing language ?',
				speakersNames: 'John Doe',
				speakerPicture: undefined,
				titleSize: undefined,
				backgroundImg: undefined,
				eventLogo: undefined,
			},
		},
		{
			compositionName: 'TalkBranded',
			component: TalkBranded,
			width: 1280,
			height: 720,
			durationInFrames: 140,
			defaultProps: {
				title: 'Certification “Google Cloud Architect”',
				startingDate: new Date(2023, 3, 18, 13),
				endingDate: undefined,
				recurringDay: 'mardi',
				location: undefined,
				logoUrl:
					'https://user-images.githubusercontent.com/72607059/233019842-047a34a4-77c1-4200-adc8-c70a6daf8f10.svg',
				speaker: {
					pictureUrl:
						'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/events/20200911_094649_MbC4W4N.jpg',
					name: 'Julien Landuré',
					company: undefined,
					job: undefined,
				},
				backgroundColor: undefined,
			},
		},
		{
			compositionName: 'Sponsor',
			component: Sponsor,
			width: 1200,
			height: 1200,
			durationInFrames: 200,
			defaultProps: {
				companyName: 'EvilCorp',
				backgroundImg: staticFile(
					'/images/showcases/lyonjs/defaultBackgroundImage.jpeg'
				),
				sponsorLocalisation: undefined,
				sponsorLogo: undefined,
			},
		},
		{
			compositionName: 'Event',
			component: Event,
			width: 1200,
			height: 1200,
			durationInFrames: 270,
			defaultProps: {
				backgroundImg:
					'https://i.pinimg.com/originals/de/0d/19/de0d19d835dd1224c5208701d78bd6e7.jpg',
				title: 'Apéro JS de Noël 🎄',
				lottieAsset: undefined,
				paillettesAsset: undefined,
			},
		},
		{
			compositionName: 'Meetup',
			component: Meetup,
			width: 1200,
			height: 1200,
			durationInFrames: 270,
			defaultProps: {
				backgroundImg: staticFile(
					'/images/showcases/lyonjs/defaultBackgroundImage.jpeg'
				),
				title: '#76 - LyonJS de la rentrée 🦁',
				date: '28 septembre 2022',
				eventLogo: undefined,
			},
		},
		{
			compositionName: 'Silhouette',
			component: Silhouette,
			width: 1200,
			height: 1200,
			durationInFrames: 270,
			defaultProps: {
				backgroundImg:
					'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
				side: 'right',
				silhouetteUrl:
					'https://user-images.githubusercontent.com/6263857/230662773-4d7a534a-e01c-4ba8-9c3b-fa95586adf52.png',
				title: 'Example of title for the template 🚀',
				dropShadow: false,
				logoUrl:
					'https://www.meetup.com/mu_static/fr-FR/logo--script.004ada05.svg',
			},
		},
		{
			compositionName: 'LayerFullScreen',
			component: LayerFullScreen,
			width: 1920,
			height: 1080,
			defaultProps: {
				primaryColor: undefined,
				secondaryColor: undefined,
				decorationUrl:
					'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png',
			},
		},
		{
			compositionName: 'LayerOneSpeaker',
			component: LayerOneSpeaker,
			width: 1920,
			height: 1080,
			defaultProps: {
				title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
				sponsorLogoUrl:
					'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
				primaryColor: undefined,
				secondaryColor: undefined,
				decorationUrl:
					'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png',
			},
		},
		{
			compositionName: 'LayerTwoSpeaker',
			component: LayerTwoSpeaker,
			width: 1920,
			height: 1080,
			defaultProps: {
				title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
				sponsorLogoUrl:
					'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
				primaryColor: undefined,
				secondaryColor: undefined,
				decorationUrl:
					'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png',
			},
		},
	],
	showcases: [
		{
			compositionName: 'Devoxx2023',
			component: Devoxx2023,
			width: 1280,
			height: 720,
			durationInFrames: 300,
		},
		{
			compositionName: 'Mixit2023',
			component: MixitIntroTalk,
			width: 1280,
			height: 720,
			durationInFrames: 150,
		},
		{
			compositionName: 'Snowcamp',
			component: Snowcamp,
			width: 1280,
			height: 720,
			durationInFrames: 150,
		},
		{
			compositionName: 'TouraineTech2023',
			component: TouraineTech2023,
			width: 1280,
			height: 720,
			durationInFrames: 150,
		},
		{
			compositionName: 'VeryTechTrip',
			component: VeryTechTrip,
			width: 720,
			height: 720,
			durationInFrames: 150,
		},
		{
			compositionName: 'AlpesCraft',
			component: AlpesCraft,
			width: 1280,
			height: 720,
			durationInFrames: 200,
		},
		{
			compositionName: 'CampingDesSpeakers',
			component: CampingDesSpeakers,
			width: 1280,
			height: 720,
			durationInFrames: 450,
			fps: 60,
			defaultProps: _.merge(
				{
					speakers: [{company: 'Zenika'}, {company: 'Bedrock'}],
				},
				defaultTalkValues
			),
		},
	],
	settings: {
		fontFamily: 'noto sans',
	},
};
