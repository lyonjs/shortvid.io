import {staticFile} from 'remotion';

import {Silhouette} from '../../../../remotion/compositions/templates/silhouette/Silhouette';
import {CompositionProps} from '../compositionsConfig';

export const SilhouetteConfig: CompositionProps = {
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
		logoUrl: staticFile('/images/showcases/lyonjs/lyonjsSquaredLogo.png'),
	},
};
