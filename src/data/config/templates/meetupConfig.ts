import {staticFile} from 'remotion';

import {Meetup} from '../../../../remotion/compositions/templates/meetup/Meetup';
import {CompositionProps} from '../compositionsConfig';

export const MeetupConfig: CompositionProps = {
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
		eventLogo: staticFile('/images/showcases/lyonjs/lyonjsSquaredLogo.png'),
	},
};
