import {CompositionProps} from '../compositionsConfig';
import {Event} from '../../../../remotion/compositions/templates/event/Event';

export const EventConfig: CompositionProps = {
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
};
