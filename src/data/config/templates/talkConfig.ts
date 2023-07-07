import {Talk} from '../../../../remotion/compositions/templates/talk/Talk';
import {staticFile} from 'remotion';
import {CompositionProps} from '../compositionsConfig';

export const TalkConfig: CompositionProps = {
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
};
