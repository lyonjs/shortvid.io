import LayerByMode from '../../../app/LayerByMode';
import {CompositionProps} from '../compositionsConfig';

export const LayersConfig: CompositionProps = {
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
};
